## `with` statement

```python
try:
  with open("app.py") as file:
    print("File Opened")
  age = int(input("Age: "))
  xfactor = 10 / age
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown")
```

When an object has `__enter__` and `__exit__` methods, that object supports **Context Management**

`file` object supports `__enter__` and `__exit__` --> hence it supports context management

Any object that supports context management can be used with `with` statement

When the `with` statement is used, python will automatically call the `__exit__` method

---

### Manage multiple objects with `with` statement

```python
with open("app.py") as file1, open("another.txt") as file2:
    print("Files 1 and 2 are Opened")
    
# both file1 and file2 will be closed by python at the time of leaving "with" block
```

