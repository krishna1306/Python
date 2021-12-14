# Abstract Base Class

ABC --> Abstract Base Class

This is used when we want to implement a consistent interface for a set of classes that are derived from another class (parent)

```python
from abc import ABC, abstractmethod
```

```python
class Stream(ABC):
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
  
  # This just acts as a placeholder - abstract method
  @abstractmethod
  def read(self):
    pass
    
class FileStream(Stream):
  def read(self):
    print("Reading data from a file")

class NetworkStream(Stream):
  def read(self):
    print("Reading data from Network")
```

```python
# Any class with an abstract method cannot be instantiate
stream = Stream()
```

When an abstract method is defined in a parent class, any child class **must** implement it

```python
class MemoryStream(Stream):
  def read(self):
    print("Reading data from Memory")
```

## Polymorphism (with classes and inheritance)

Imagine two classes implementing the same method. 

When an object invokes the method, it only invokes the method corresponding to its own class.

(Using abstract classes and inheritance - these are optional. Polymorphism also works with completely disconnected classes)

```python
class UIControl(ABC):
  @abstractmethod
  def draw(self):
    pass

class TextBox:
  def draw(self):
    print("Drawing Text Box")

class DropDownList:
  def draw(self):
    print("Drawing Drop Down List")
    
def draw(control):
  control.draw()
```

```python
ddl = DropDownList()
print(isinstance(ddl, DropDownList))
draw(dd1) # Prints "Drawing Drop Down List"

tb = TextBox()
print(isinstance(tb, TextBox))
draw(tb) # Prints "Drawing Text Box"
```

Here, we see that `draw` function doesn't know what kind of object `control` is. 

This ability of python to determine the exact function at run-time is **polymorphism**

