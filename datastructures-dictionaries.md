## Dictionaries

```python
# Defining
point = {"x":1, "y":2}
point = dict(x=1,y=2)
```

```python
# Accessing the value using the key
point["x"]

# Adding a new key:value
point["z"] = 20
```

```python
# check if a key is present. If no, return zero
result = point.get("x", 0)

# check if a key is present. If no, return None
result = point.get("x")
```

```python
# delete an item
del point["x"]
```

### Loop over dictionaries

```python
for key in point:
  print(key, key[point])
  
for key,value in point.items():
  print(key, value)
```

### Dictionary Comprehensions

Works exactly like list comprehensions

```python
dict_values = {x:x*2 for x in range(5)}
```

