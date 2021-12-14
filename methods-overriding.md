# Methods (Classes) - Overriding

```python
class Animal:
  def __init__(self):
    self.age = 1
  def eat(self):
    print("eat")
    
class Mammal(Animal):
  def __init__(self):
    self.weight = 2
  def walk(self):
    print("walk")
```

When we have a constructor in both CHILD and PARENT class, the CHILD class constructor overrides PARENT class constructor

This is called **Methods Overriding**

---

### Call parent's constructor in the child

```python
class Animal:
  def __init__(self):
    self.age = 1
  def eat(self):
    print("eat")
    
class Mammal(Animal):
  def __init__(self):
    self.weight = 2
    # super() is used to access the parent's attributes and methods
    super().__init__()
  
  def walk(self):
    print("walk")
```



