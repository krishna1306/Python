# Magic Methods

Magic methods begin and end with `__` (double underscores)

These methods are automatically called by python based on their type

Google for "Python 3 Magic Methods" -> you will find a guide on github by Rafe Kettler which is better than python's own documentation

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y
  def __str__(self):
    return f"({Self.x}, {self.y})"
  
point = Point(1,2)
print(point)
```

All these magic methods are automatically inherited from the base class

`__str__` is also automatically inherited - and it prints the class name and the memory address of the object when you do `print(point)`

All we need to do is to re-implement `__str__` method

### Compare Objects

```python
class Point:
  def __eq__(self, other):
    return self.x == other.x and self.y == other.y

# Here, "point" object is passed as "self" and "other" is passed as "other"
print(point == other)
```

Similarly, there are other magic methods for greater than and less than

- `__gt__`
- `__lt__`

_**Note** : You don't need to implement both `__gt__` and `__lt__`. When you implement one of them, python can smartly figure out what to do with the other_

### Performing Arithmetic Operations between objects

```python
def Point:
  def __add__(self, other):
    return Point(self.x + other.x, self.y + other.y)
  
point = Point(10, 20)
other = Point(1,2)
print(point + other)
```

 ### Acting like dictionary

Refer to "Class containers in classes lesson" to understand this better

```python
class TagCloud:
  
  def __init__(self):
    self.tags = {}
  
  def add(self, tag):
    self.tags[tag.lower()] = self.tags.get(tag.lower(, 0) + 1
                                           
  def __getitem__(self, tag):
    # return "0" when the "tag" is not found
    return self.tags.get(tag, 0)
```

Now

```python
cloud = TagCloud()

# now you can use the cloud as a container
count = cloud["python"]
```

#### Adding new `key:value` to the custom dict container

```python
class TagCloud:
  def __setitem__(self, tag, count):
    self.tags[tag.lower()] = count
```

#### Getting the length of the custom dict container

```python
class TagCloud:
  def __len__(self):
    return len(self.tags)
  
cloud = TagCloud()

# this works as we implemented "__len__" magic method
len(cloud)
```

#### Making "iterations" work

```python
class TagCloud:
  
  # should return an iterator object
  def __iter__(self):
    return iter(self.tags)
```

