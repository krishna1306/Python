```python
from timeit import timeit

code1 = """
All the python code that you want to execute
"""

# "number" indicates the number of repetitions
timeit(code1, number=10000)
```

