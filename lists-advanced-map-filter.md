## Map

```python
items = [
  ("Product1", 10),
  ("Product2", 20),
  ("Product3", 30)
]

prices = []

for item in items:
  prices.append(items[1])
  
print(prices)
```

Here, we are mapping a part of the tuple in the list to a list of numbers.

We can do this better using `map`

```python
# map definition
# the "function" is called on each item in the "iterable"
map(function, *iterable)

# example
# x is an iterable here. So use a for loop to print it
x = map(lambda item:item[1], items)

for item in x:
  print(item)

# or
x_list = list(map(lambda item:item[1], items))
```

## Filter

```python
items = [
  ("Product1", 10),
  ("Product2", 20),
  ("Product3", 30)
]

# syntax
# filter(function or None, *iterable)
# the function must return a boolean value (True or False) and those parameters that return true will be added to the iterable
x = filter(lambda item: item[1] >= 10, items)

x_list = list(filter(lambda item: item[1] >= 10, items))
```

## List Comprehensions

```python
# syntax for list comprehensions
[expression for item in items]

# MAP <-> LIST COMPREHENSION
# both approaches below produce the same list
prices = [item[1] for item in items]
prices = list(map(lambda item:item[1], items))

# FILTER <-> LIST COMPREHENSION
# both approaches below produce the same list
prices_filtered = [item for item in items if item[1] >= 10]
prices_filtered = list(filter(lambda item: item[1] >= 10, items))
```

## Zip

```python
list1 = [1, 2, 3]
list2 = [10, 20, 30]

# Our desired end state
[(1, 10), (2, 20), (3, 30)]

# Use Zip - its iterable
zip(list1, list2)
list(zip(list1, list2))
```

