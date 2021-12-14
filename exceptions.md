## Exceptions

```python
try:
  age = int(input("Age: "))
except ValueError:
  print("You didn't enter a valid age.")
```

It's always recommended to use the exact exception you would expect.

### Else block

`else` block is executed when no exception is thrown from the `try` block

```python
try:
  age = int(input("Age: "))
except ValueError:
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown")
```

### Capture the exception - `except <SomeError> as ex`

```python
try:
  age = int(input("Age: "))
except ValueError as ex:
  print("You didn't enter a valid age.")
  print(ex)
else:
  print("No exceptions were thrown")
```

Here, `ex` is an object of the class `ValueError`

### Handling Different Exceptions

Just add another except block (not recommended)

Add the other exception to the same except block

```python
try:
  age = int(input("Age: "))
  xfactor = 10 / age
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown")
```

### Cleaning Up

```python
try:
  file = open("app.py")
  age = int(input("Age: "))
  xfactor = 10 / age
  # below line may not execute in case of an exception
  file.close()
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown")
```

#### `finally` Clause

Always executed in a `try.. except` block

```python
try:
  file = open("app.py")
  age = int(input("Age: "))
  xfactor = 10 / age
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown")
# "finally" is always executed irrespective of whether there is an exception or not
finally:
  file.close()
```

---

## Raise Exceptions

You can also raise an exception according to a custom requirement using `raise` 

### `raise` 

```python
def calculate(age)
	if age <= 0:
    # Inside the ValueError() --> add the error statement yourself
  	raise ValueError("Age cannot be Zero or less")
  return 10 / age
```

When you call this function `calculate(0)` --> it raises a `ValueError` exception

Python supports multiple dozen types of exceptions. Google for it.