# Classes - Inheritance

### Before Inheritance

```python
class Mammal:
  def eat(self):
    print("eat")
  def walk(self):
    print("walk")
    
class Fish:
  def eat(self):
    print("eat")
  def swim(self):
    print("swim")
```

Both `Mammal` and `Fish` here implement the same method `eat` 

Better way would be to define a parent class `Animal` and move the `eat` to `Animal` class

And then inherit `Mammal` and `Fish` from it

```python
class Animal:
  def __init__(self):
    self.age = 1
  def eat(self):
    print("eat")
    
class Mammal(Animal):
  def walk(self):
    print("walk")
    
class Fish(Mammal):
  def swim(self):
    print("swim")
```

```python
m = Mammal()
m.eat()
print(m.age)
```

## Object Class

An object of the child class is also considered as an object of the parent class

Here,

```python
# Check if an object belongs to a particular class
isinstance(m, Mammal) # TRUE
isinstance(m, Animal) # TRUE

# Check if a class is a sub-class of another class
issubclass(Mammal, Animal) # TRUE
issubclass(Animal, Object) # TRUE
```

**All classes in python are inherited from a base class called "object"**

```python
isinstance(m, Object) # TRUE
issubclass(Mammal, Object) # TRUE
issubclass(Animal, Object) # TRUE
```

## Multi-Level Inheritance

Avoid it as much as possible, as it can make the code complex

```python
class Person:
  pass
class Employee(Person):
  pass
class Manager(Employee)
  pass
```

## Multiple Inheritance

Avoid it as much as possible, as it can make the code complex

```python
class Flying:
  def fly(self):
    pass

class Swimming:
  def swim(self):
    pass
  
class FlyingFish(Flying, Swimming):
  pass
```

When there is a common method in both the parent classes, then the method in the first parent class (as per the child class definition) will be chosen

### A better example for Multiple Inheritance

```python
class InvalidOperationError(Exception):
  pass

class Stream:
  def __init__(self):
    self.opened = False
  def open(self):
    if self.opened:
      raise InvalidOperationError("Stream is already Open")
    self.opened = True
  def close(self):
    if not self.opened:
      raise InvalidOperationError("Stream is already closed")
    self.opened = False
    
class FileStream(Stream):
  def read(self):
    print("Reading data from a file")

class NetworkStream(Stream):
  def read(self):
    print("Reading data from Network")
```

