### Lists

```python
sample_list = ["a", 1, ["k", "g"]]

# List of 100 zeroes
zeroes = [0] * 100

# combine two lists
combines = zeroes + letters

# list takes an iterable and returns a list
numbers = list(range(10))
chars = list("Hello World")
```

```python
len(chars)
```

```python
# Change one of the elements
letters[0] = "A"

print(letters[0:3])

# Print the elements in the list with a step of 2 (print alternate elements)
print(letters[::2])

# reverse a list
reversed_list = original_list(::-1)
```

#### Lists Unpacking

```python
# number of items on the left and right must match
first, second, third = [1, 2, 3]

# here "other" will hold an array starting from the third element : other = [3, 4, 5]
first, second, *other = [1, 2, 3, 4, 5]

# or
first, *other, last = [1, 2, 3, 4, 5]
```

#### Looping over lists

```python
for letter in letters:
  print(letter)
  
for letter in enumerate(letters):
  print(letter) # returns a tuple each time
  
for index, letter in enumerate(letters):
  print(index, letter)
```

#### Adding and removing items

```python
letters = ['a', 'b', 'c']

# Add
letters.append("d")

# Insert
letters.insert(0, "-")

# pop
letters.pop() # returns "d"

# pop with index
letters.pop(0)

# remove the first occurance of an element
letters.remove("b")

# using delete statement to remove one or more elements
del letters[0:3]
```

Remove all objects in a list

```python
letters.clear()
```

#### Finding Objects in a list

```python
# Get the index of an element - returns the index of the first occurance
index = letters.index("a")
```

```python
# Count the number of occurances of a given item in a list
count = letters.count("d")
```

### List Comprehensions

```python
# Syntax = [expression for item in items]
values = [x*2 for x in range(5)]
```

