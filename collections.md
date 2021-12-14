# Collections

"Collections" is a powerful library in python

## `namedtuples`

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])

# A namedtuple will always be initialised using key word arguments
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)

# below works as expected even if we haven't implemented any "__eq__" as its handled by "namedtuple"
print(p1 == p2)
```

 This is clearly recommended than using "data classes"

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y
    
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)

# Doesn't work as expected as we haven't implemented "__eq__" in the class "Point"
print(p1 == p2)
```

