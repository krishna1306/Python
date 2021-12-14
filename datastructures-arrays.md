Arrays are a different data type in python

Array is a high-performing list

```python
from array import array

# Array syntax -- array(typecode, list)
numbers = array('i', [1,2,3,4,5])
```

`typecode` defines the datatype in the list that follows. Google for a list of supported typecodes.

```python
numbers.append(4)
numbers.remove(5)
numbers[0] = 9
```

**Do not put any other datatypes than that was indicated by `typecode` at the time of defining the array**

