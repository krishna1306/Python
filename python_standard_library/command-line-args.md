# Command Line Arguments

```python
import sys

# Prints all the arguments passed with the "python3 command"
print(sys.argv)
```

For example, 

```bash
$ python3 app.py -a -b -c
['app.py','-a','-b','-c']
```

### Example

```python
import sys

if len(sys.argv) == 1:
  print("USAGE: python3 app.py <password>")
else:
  password = sys.argv[1]
  print("Password", password)
```

