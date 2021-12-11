```python
f = open('test.txt', 'r')
# or 'w' or 'a'
```

```python
print(f.name)
print(f.mode)
```

```python
f.close()
```

```python
with open('test.txt','r') as f:
  print(f.name)
  
  # Returns the whole file
  f_contents = f.read()
  
  # Returns an array
  f_contents_line_wise = f.readlines()
  
  # Read one line at a time
	print(f.readline(), end='')
  
  # Read one line at a time through for loop
  for line in f:
    print(line, end='')
   
  # Read X number of chars at a time
  # 'f' remembers where the cursor is - and continues from there
  f_contents = f.read(100)
f.closed
```

`f` is still accessible after we exit the `contex manager` area, although we cannot access the contents

#### Example for reading file - one chunk at a time

```python
while open('test.txt', 'r') as f:
  size_to_read = 100
  
  f_contents = f.read(size_to_read)
  
  print(f.tell())
  
  while len(f_contents) > 0:
    print(f_contents, end='')
    f_contents = f.read(size_to_read)
```

`f.tell()` tells us the current cursor position

`f.seek(0)` -> put the cursor at `0` position (start of the file)

#### Writing to a file

```python
with open('test.txt','w') as f:
  f.write('Test')
```

#### For non-text files

Use `rb` `wb` `ab` for read, write and append respectively (`b` -> binary)