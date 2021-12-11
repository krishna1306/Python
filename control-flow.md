```python
10 > 3
# True

10 == 20
# False

10 == "10"
# False

10 != "10"
# True
```

```python
"bag" > "apple"
# True

"bag" == "BAG"
# False
```

Strings are compared according to their `ord` values (almost like dictionary)

Capital letters come before small letters

```python
ord("b") # 98
ord("B") # 66
```

---

### Conditional Statements

```python
if temperature > 20:
  print("Temp is higher than 20")
```

Indentation is two white spaces by default.

Auto PEP8 uses four white spaces.

```python
if temperature > 20:
  print("Temp is higher than 20")
 elif temperature < 20:
  print("Its nice")
 else:
  print("Nothing works")
```

### Ternary Operator

Assigning a variable based on a simple condition --> ternary operators

```python
age = 22
message = "Eligible" if age >=18 else "Not eligible"
print(message)
```

### Logical Operators

```python
# and
# or
# not

if high_income and good_credit:
  print("Eligible")
else:
  print("Not Eligible")
```

#### Short Circuit evaluation

When evaluating a logical statement, python interpreter stops evaluation as soon as it parses enough logic to determine the outcome

Example

```python
True and False and True and True and False
```

After parsing the second boolean, python knows the whole expression is going to be `FALSE`. So it stops parsing.

### Comparison operators

Chaining comparison operators

```python
if 18 <= age < 65:
  print("Eligible")
```

### For Loops

```python
for number in range(3):
  print("Attempt", number + 1)
  
for number in range(1,3):
  print("Attempt", number)
  
# From 1 to 9 (10 not inclusive) in steps of 2
for number in range(1, 10, 2):
  print("Attempt", number) # 1 3 5 7 9
```

Using break statement

```python
success = True

for number in range(3):
  print("Attempt")
  if success:
    print("Successful")
    break
```

#### For-Else Statement

If the `for` loop never breaks, then `else` will be run

```python
for number in range(3):
  print("Attempt")
  if success:
    print("Successful")
    break
else:
  print("Attempted thrice and failed")
```

### Nested Loops

```python
for x in range(5):
  for y in range(3):
    print(f"({x},{y})")
```

### Iterables

```python
print(type(range(5)))
# <class 'range'>
```

`range` is a class

It is iterable. Strings are also iterable.

Lists are also iterable.

### While Loops

```python
number = 100

while number > 0:
  print(number)
  number //= 2
```

### Infinite Loops

```python
while True:
  print("Still True")
  command = input(">")
  if command.lower() == "quit":
    break
```

#### Sorting

```python
# Sort in-place
numbers.sort()
numbers.sort(reverse=True)

# returns a new list
new_list = sorted(numbers)
new_list_reverse = sorted(numbers, reverse=True)
```

```python
# Sorting complex lists
# when sorting complex lists, python needs to know the basis on which to sort lists

items = [
  ("Product1", 10),
  ("Product2", 20),
  ("Product3", 30)
]

# This function just returns the value on which python will do the sorting
def sort_item(item):
  return item[1]

# Just pass the reference (called as 'key') of the sort_item function
items.sort(key=sort_item)
print(items)
```

