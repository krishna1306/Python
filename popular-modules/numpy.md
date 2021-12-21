# NumPy

```bash
pipenv install numpy
```

Best suited for multi-dimensional arrays

```python
import numpy as np

# Create a NumPy array
array = np.array([1,2,3])

# <class 'numpy.ndarray'>
type(array)

# Multi-dimensional array - Array of arrays
matrix = np.array([[1,2,3],[4,5,6]])

# Get the shape of the array
array.shape

# Get a 3x4 matrix of ZEROS
# "dtype" refers to the data type of the matrix 
array = np.zeros((3,4), dtype=int)

# Get a 3x4 matrix of ONES
# "dtype" refers to the data type of the matrix 
array = np.ones((3,4), dtype=int)

# Get a 3x4 matrix of any number/digit (2nd argument)
# "dtype" refers to the data type of the matrix 
array = np.full((3,4), 5, dtype=int)

# Create a random number array (each number between 0 and 1)
random_array = np.random.random((3,4))
```

Access items in a `numpy` array

```python
# Access an element using [row, column] index
array[0,0]
```

#### To compare each element in an array

Each element in the array will be compared with `0.2` and a matrix of the same size with boolean values `True` or `False` will be the result

```python
print(array > 0.2)
```

#### Compare and filter

```python
# Filter the array for all values that are greater than 0.2 and return the new array
print(array[array > 0.2])
```

#### Mathematical operations on array elements

```python
# Sum of all elements
np.sum(array)

# Computes the floor of each element
np.floor(array)

# Other methods
np.ceil(array)
np.round(array)
```

#### Arithmetic Operations between arrays

```python
first = np.array([1,2,3])
second = np.array([1,2,3])

print(first + second)
print(first + 2)
print(first * 2.54)
```

