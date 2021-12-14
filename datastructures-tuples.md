## Tuples

A read-only list

```python
# Defining a tuple
point = (1,2)
point = 1, 2
point = 1,
point = ()
```

```python
# Operations on tuple
# Almost all operations on lists, also work on tuples
point = (1,2) + (3,4)
point = (1,2) * 3

point = tuple([1,2])
point = tuple("Hello World")
```

Tuple unpacking

```python
x, y, z = 1, 2, 3
```

**Tuples are immutable** - _unlike the lists_

### Swapping variables using tuples

```python
x = 10
y = 11

# old way
z = x
x = y
y = z

# better way
x, y = y, x
```

### Tuple comprehensions

Works exactly like list comprehensions. But returns a `generator` object

```python
# Syntax = (expression for item in items)
values = (x*2 for x in range(5))
```

