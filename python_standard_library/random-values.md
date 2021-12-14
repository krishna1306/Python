# `random` module

```python
import random

# Generates a floating point number between 0 and 1
print(random.random())

# Generates a random integer between two integers
print(random.randint(1,10))

# Generate a random choice from within an array
print(random.choice([1,2,3,4]))

# Select multiple choices from within an array
# Value of "k" determines the number of choices
print(random.choices([1,2,3,4], k=2)
```

**`random.choices` can be used to generate passwords too**

```python
print("".join(random.choices("abcdefghi", k=4))
```

```python
import string

# Print all ASCII letters
string.ascii_letters

# Print all digits
string.digits

print("".join(random.choices(string.ascii_letters + string.digits, k=4))
```

### `shuffle`

```python
sample = [1,2,3,4]
shuffled = random.shuffle(sample)
```

