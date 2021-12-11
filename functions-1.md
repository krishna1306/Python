```python
def greet():
  print("Hi There")
  
  
greet()
```

### Arguments

```python
def greet(first_name, last_name):
  print(f"Hi There {first_name} {last_name}")
  

greet("Krishna", "Bandi")
```

#### Parameters vs Arguments

Parameters --> inputs for your function. Part of function definition itself

Arguments --> this is what you supply when calling the function

### Returning a Value

```python
def get_greeting(first_name, last_name):
  return f"Hi There {first_name} {last_name}"


message = get_greeting("Krishna", "Bandi")
```

_Having return values is always **recommended** than simply printing on the console_

All functions return `None` by default

### Keyword Arguments

```python
def increment(number, by):
  return number + by

# use keyword arguments for better readability
print(increment(2, by=1))
```

### Default Arguments

```python
def increment(number, by = 1):
  return number + by

# default value for "by = 1" is used
print(increment(2))
```

All the optional parameters should come after the required parameters.

### ARGS vs KWARGS

```python
def multiply(*numbers):
  result = 1
  for number in numbers:
    result *= number
  return result
  
```

`*numbers` --> will be a tuple inside the function

```python
def save_user(**user):
  print(user)
  
save_user(id=1, name="John", age=23)
```

`**user` --> will be a dictionary inside the function