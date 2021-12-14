```python
values = [1, 2, 3]

# if you want to extract individual elements, then use unpacking
print(*values)
# 1 2 3
```

`*` unpacks any iterable

- Lists
- Tuples
- Strings

```python
# create a list from a iterable
# range(5) --> returns an iterable
# *range(5) --> unpacks into individual elements
# [*range(5)] --> puts all those individual elements into a list
values = [*range(5)]
```

### Combine multiple lists

```python
first = [1, 2, 3]
second = [4, 5]

third = [*first, *second]
```

### Combine multiple dictionaries

**Here we use `**` operator for unpacking**

```python
first = {"x": 1}
second = {"x": 5, "y": 5}

third = {**first, **second, "z":1}
```

_When there is a duplicate key in dictionaries when combined, the last value will be used_