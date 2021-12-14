# Classes - Properties

Regular way of setting an attribute value is using a plain constructor. Like this

```python
class TagCloud:
  def __init__(self):
    self.tags = {}
```

We can also have a **getter** and **setter** for managing the `tags` property

```python
class Price:
  def __init__(self, value):
    set_value(self, value)
    # the below statement is same as the above statement
    self.set_value(value)
    
  def get_value(self):
    return self.value
  
  def set_value(self, value):
    if value < 0:
      raise ValueError("Value less than zero")
    self.value = value
```

---

A **Property** is an object that sits in front of an attribute that allows us to get and set its value

---

```python
class Price:
  def __init__(self, value):
    set_value(self, value)
    # the below statement is same as the above statement
    self.set_value(value)
    
  def get_value(self):
    return self.value
  
  def set_value(self, value):
    if value < 0:
      raise ValueError("Value less than zero")
    self.value = value
  
  # syntax for property : property(getter_function, setter_function, delete_function, doc)
  price = property(get_value, set_value)
```

Even now, this looks complex as the previous version of the code is also achieving a similar result.

There is a more pythonic way to do this - using decorators

```python
class Price:
  def __init__(self, value):
    # python is smart enough to call getter and setter when such methods are avaliable
    # when property decorators are used
    self.value = value
  
  # name of the function decorated by "property" should be the name of the attribute itself
  @property
  def value(self):
    return self.value
  
  # name of decorator should be "<attribute>.setter"
  # name of the method should be the name of the attribute itself
  @value.setter
  def value(self, value):
    if value < 0:
      raise ValueError("Value less than zero")
    self.value = value
```

