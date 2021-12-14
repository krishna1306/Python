```python
# Syntax of lambda function
# You pass the parameter and expression will manipulate it and the maninpulated value is returned
lambda parameter:expression

items = [
  ("Product1", 10),
  ("Product2", 20),
  ("Product3", 30)
]

# sorting a list of tuples
items.sort(key=lambda item:item[1])
print(items)
```

