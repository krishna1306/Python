```python
# global variables
# these stay in memory for the longest time
# use as little as required
message = "c"

# message is in the scope of the function - local variables
def greet():
  message = "a"

def send_email():
  message = "b"
```

### `global` keyword

```python
message = "a"

def greet(name):
  global message
  message = "b"
  
greet("Krishna")
print(message) # "Krishna" will be printed
```

When you reference a global variable using the `global` keyword, python will not create a local variable for it - instead uses the global variable

_**Not recommended to do it this way**_

