## Sets

Its a collection with no duplicates

Its un-ordered. Hence, cannot be accessed by an index

```python
numbers = [1, 1, 2, 3, 4]
uniques = set(numbers)

second = {1, 4}

second.add(5)
second.remove(5)

len(second)
```

### Set Operations

```python
first = {1, 2, 3, 4}
second = {1, 5}

# Union - {1, 2, 3, 4, 5}
# items in first and second
union_set = first | second

# Intersection - {1}
# items in both first and second
intersection_set = first & second

# Difference - {2, 3, 4}
# items in first that are not in second
diff_set = first - second

# symmetric difference - {2, 3, 4, 5}
# items in first or second - but not both
symmetric_diff_set = first ^ second
```

### Set Comprehensions

Works exactly like list comprehensions

```python
# Syntax = {expression for item in items}
values = {x*2 for x in range(5)}
```

