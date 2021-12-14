Tuple Comprehensions always return generator objects 

```python
# this generates a 1000 items in the tuple. But they all wont be in memory
# that's the beauty of a generator object
values = (x*2 for x in range(1000))
```

Let's check its size

```python
from sys import getsizeof

# returns in "bytes"
getsizeof(values)
```

Objects of type `generator` won't have length.

```python
# this results in error
len(values)
```

You won't know how many objects a generator can return ahead of time