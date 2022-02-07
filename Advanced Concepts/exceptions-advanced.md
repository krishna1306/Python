# Exceptions

All custom exception classes in python should inherit from **Exception** class

This **Exception** class is inturn inherted from **BaseException** class

```python
class MyError(Exception):
  def __init__(self, message):
    super().__init__(message)
```

Now, to raise this custom `MyError` exception

```python
raise MyError("Something went wrong")
```

**_Why does this work_**?

When you raise a custom exception, python expects it to conform to the **interface** of **BaseException** class (an interface is nothing but a combination of attributes and methods that must be implemented for the program to work a certain way)

Our custom exception inherits from **Exception**. This means, our custom exception class conforms to **Exception** class which in turn conforms to **BaseException** class when it inherited from it.