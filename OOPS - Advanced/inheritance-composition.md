# Inheritance and Composition

https://realpython.com/inheritance-composition-python/

**Inheritance** --> **Is a** relationship

Example: **Waitress** is an **Employee**

**Composition** --> **Has a** relationship. One class has other class objects as instance attributes

Example: **Car** has an **Engine** 

## Inheritance

All classes in python derive from **object** class

```python
>>> o = object()
>>> dir(o)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
```

### Example - Inheritance 

Below example also illustrates the ideas of

- Interfaces
- Abstract Class (and Abstract Method)

```python
from abc import ABC, abstractmethod


class PayrollSystem:
    def calculate_payroll(self, employees):
        print("Calculating Payroll")
        print("-------------------")
        for employee in employees:
            print(f"Payroll for: {employee.id} - {employee.name}")
            print(f"- Check Amount: {employee.calculate_payroll()}")
            print('')


class Employee(ABC):
    def __init__(self, id, name):
        self.id = id
        self.name = name

    @abstractmethod
    def calculate_payroll(self):
        pass


class SalaryEmployee(Employee):
    def __init__(self, id, name, weekly_salary):
        super().__init__(id, name)
        self.weekly_salary = weekly_salary

    def calculate_payroll(self):
        return self.weekly_salary


class HourlyEmployee(Employee):
    def __init__(self, id, name, hours_worked, hour_rate):
        super().__init__(id, name)
        self.hours_worked = hours_worked
        self.hour_rate = hour_rate

    def calculate_payroll(self):
        return self.hours_worked * self.hour_rate


class CommissionEmployee(SalaryEmployee):
    def __init__(self, id, name, weekly_salary, commission):
        super().__init__(id, name, weekly_salary)
        self.commission = commission

    def calculate_payroll(self):
        fixed = super().calculate_payroll()
        return fixed + self.commission

```

#### Interface

An interface just tells you which attributes and which methods are expected from a class.

In above example, `PayrollSystem` has a method called `calculate_payroll` which accepts objects that confirm to the interface of

- The object must have `id` and `name` attributes
- The object's class must have implemented `calculate_payroll` method

#### Abstract Class

If there is a class whose whole purpose is to be inhertied by children - then that class can be called as **Abstract Class**

We are not supposed to instantiate any abstract class. To enforce this paradigm, we can inherit such a class from **ABC**.

##### Abstract Method

An abstract method can be present in an abstract class. When an abstract method is present, it must be implemented in the chldren (if the child class is going to get instantiated).

In the above example, `calculate_payroll` method in `Employee` class is an **Abstract Method** as we decorated it with `@abstractmethod`

### About `__init__` method (Constructor)

When a child class is created from a parent that has `__init__` method, child will inherit it by default. For example

```python
# Parent Class
class ParentClass:
  def __init__(self, name, age):
    self.name = name
    self.age = age
    
# Child Class
class ChildClass(ParentClass):
  pass
```

Here, even though `ChildClass` did not implement `__init__`, we can still instantiate it like

```python
child_object = ChildClass("Krishna", 30)
```

 #### What about `__init__` in the child too?

If you define an `__init__` method in the child too, then that method should call the parent's `__init__` method to get access to the parent's attributes setting

```python
class ChildClass(ParentClass):
  def __init__(self, name, age):
    super().__init__(name, age)
```

**Both these approaches produce exact same result.**

### Multiple Inheritance

Inheriting attributes and methods from two classes (usually) is called multiple inheritance.

The child class in this instance, will use **MRO** to find out the appropriate `__init__` method to use (Assuming that the child did not implement it)

---

#### Method Resoultion Order (MRO)

- A set of rules that defines the search path that python uses when searching for a method in cases of inheritance
- Looks like an ordered list of classes
- Each class has its own MRO
- Used by the `super()` function

To see the **MRO** for any class

```python
# Here, TemporarySecretary is the name of the class
TemporarySecretary.__mro__
```

---

#### Defining `__init__` for multiple inheritance

```python
class TemporarySecretary(Secretary, HourlyEmployee):
    def __init__(self, id, name, hours_worked, hour_rate):
        HourlyEmployee.__init__(self, id, name, hours_worked, hour_rate)
```

Here, there is an `__init__` method for the child class. You can specifically mention which parent's constructor has to be called and with which values. **If you miss out initialising any value explicitly, it won't be set**

## Composition

Composition is a **has a** relationship. Simply put, this means one class has another class's object(s) as one/more of its attributes.

##### Example

```python
class Address:
    def __init__(self, street, city, state, zipcode, street2=""):
        self.street = street
        self.city = city
        self.state = state
        self.zipcode = zipcode
        self.street2 = street2

class Employee:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.address = None
        
class Manager(Employee):
  	def __init__(self, id, name, salary):
      super().__init__(id, name)
      self.salary = salary

manager = Manager(1, "Mary Poppins", 3000)
manager.address = Address(
	'121 Admin Road',
  'Concord',
  'NH',
  '03301'
)
```

Here, `Employee` class is a **Composition**. But it's not a good example, as its loosely coupled (meaning, `address` can be anything, not necessarily an object of `Address` class that we created)

> Note that you don't need to initialise all the attributes of a class in the `__init__()` method itself

### Hidden Attributes

```python
class ProductivitySystem:
  def __init__(self):
    self._roles = {
      'manager': ManagerRole,
      'secretary': SecretaryRole,
      'sales': SalesRole,
      'factory': FactoryRole
    }
   
  def get_role(self, role_id):
    role_type = self._roles.get(role_id)
    if not role_type:
      raise ValueError('invalid role_id')
    # We add "()" here to instantiate an appropriate object of the class contained in "role_type"
    return role_type()
```

Any attribute that starts with an `_` is considered a hidden attribute. This is not enforced by the compiler though. It serves as an instruction to the engineers.
