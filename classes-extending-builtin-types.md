# Extending Built-In Types

By extending built-in classes in python like `str` `int` etc., you can enhance or extend their functionalities.

It works using simple inheritance

### Example of adding new functionality

````
class Text(str):
  def duplicate(self):
    return self + self
```

```python
text = Text("Python") # This calls the constructor in "str" class - which is the parent class
print(text.duplicate())
```

### Example of extending existing functionality

```python
class TrackableList(list):
  def append(self, object):
    print("Append called")
    # super() is a reference to the parent class "list"
    super().append(object)
```

```python
list = TrackableList()
list.append("1")
```

