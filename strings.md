```python
len(some_string)

# grab last element
some_string[-1]

# some_string[start:end]
# end is not inclusive
some_string[0:3]

# start from 0 till end
some_string[0:]

# start from beginning and till 3
some_string[:3]
```

Escape character `\` 

```python
course = "Python \" Programming"

# \"
# \'
# \\
# \n
# \t
```

Format strings

```python
first = "Krishna"
last = "Bandi"

full = f"{first} {last}"
full = f"{len(first)} {last}"
```

Some string methods

_Method is something that is run on a method_

```python
# Returns a new string
new_upper = course.upper()
new_lower = course.lower()

# capitalise first letter of each word
new_title = course.title()

# remove white spaces at either ends
removed_whites = course.strip()
removed_whites_left = course.lstrip()
removed_whites_right = course.rstrip()

# returns the index of the substring beginning
# -1 means - substring not found
found_index = course.find("substring")

# find and replace
replaced_string = course.replace("find_this", "replace_with_this")
```

```python
# returns TRUE if "pro" is found in course variable
print("pro" in course)

# opposite of the above
print("swift" not in course)
```

### Join strings

```python
# Join an array of strings using "" (null string)
"".join(str_array)

# Join an array of strings using "," (comma)
",".join(str_array)
```

