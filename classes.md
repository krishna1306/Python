# Classes

A class is a blue print to create new objects

An object is an instance of a class

### Creating a class

```python
# First letter must be capital for each word in a class name
class Point:
  def draw(self):
    print("draw")
    
point = Point()
point.draw()
```

#### Check if an object is an instance of a class

```python
# Returns a boolean
isinstance(point, Point)
```

#### Constructor

```python
class Point:
  # constructor is executed whenever a new object is created
  # "self" is the reference to current object
  def __init__(self, x, y):
    self.x = x
    self.y = y
    
  def draw(self):
    print(f"Point ({self.x}, {self.y})")
```

When creating methods in a class, we always need to have `self` as a parameter

This `self` refers to the current object that python is working with

For example,

```python
# Here, actually python parses it like -- point = Point(point, 1, 2)
# which is same as -- point = Point(self, 1, 2)
# we don't need to explicitly pass "self". Python does that for us
point = Point(1,2)
```

### Dynamically create attributes

Objects in python are dynamic

We don't have to define all the attributes through a constructor. We can define at run time

```python
point.z = 10
```

### Class level attributes

We can also define class level attributes that stay constant for all the objects

```python
class Point:
  default_color = "red"
  
point = Point()

# You can acccess class level attributes directly through class or via its objects
print(point.default_color)
print(Point.default_color)
```

### Class Methods vs Instance Methods

Class methods are invoked through class 

Instance methods are most common and invoked through objects

```python
class Point:
  
  @classmethod
  def zero(cls):
    # below is same as Point(0,0)
    # as "cls" is a reference to the class.
    # any variable can be used here. "cls" is just a convention
		return cls(0, 0)

# Any class method that returns an object is called a "Factory Method"
point = Point.zero()
```

## Creating a custom container

A custom container is nothing but a custom `class` that acts like a container

Lists, dictionaries etc., are python's built-in containers

In the below example, `TagCloud` is a custom-built dictionary

**Why do we need to do this?**

To make the custom container a bit more smarter than the basic containers of python

```python
class TagCloud:
  def __init__(self):
    self.tags = {}
  
  def add(self, tag):
    self.tags[tag.lower()] = self.tags.get(tag.lower(, 0) + 1
    
cloud = TagCloud()
cloud.add("python")
cloud.add("Python")
cloud.add("php")

print(cloud.tags)
```

Here, both `python` and `Python` are treated the same way as we are handling the logic in the container implementation itself

### Private Members

When `__getitem__` magic method is implemented in a class, you can do `cloud["python"]` to fetch the data. Underneath, the `__getitem__` method will fetch the data from a real dictionary attribute of the class.

In that case

```python
# Both the below statements fetch the same output
cloud["python"]
cloud.tag["python"]
```

_Go through the magic methods -> `__getitem__` and `__setitem__` to understand how a container class can implement dictionary like behavior_

```python
class TagCloud:
  def __init__(self):
    self.__tags={}
```

A `__` (double underscore) before the attribute name makes it private (not really inaccessible though)

After doing this

```python
# Below statement throws an error that "tags" is an undefined attribute
cloud.tags["python"]
```

#### How to access private members?

All the attributes of a class can be seen through

```python
TagCloud.__dict__
```

And here, you will noice that python added a prefix of classname like

```python
_TagCloud__tags
```

To access the attribute, just use this name

```python
print(cloud._TagCloud__tags)
```

