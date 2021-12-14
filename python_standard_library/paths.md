# Paths - `pathlib`

A `Path` object just represents the path on a file system

A corresponding file or directory may or may not exist. That is not related. 

To see if a path exists or not, use `path.exists()` method

```python
from pathlib import Path

# For windows - creating an absolute path
Path(r"C:\Program Files\Microsoft")

# For unix and linux
Path("/usr/local/bin")

# Current working directory
Path()

# Path from current working directory
Path("ecommerce/__init__.py")

# Create path from strings
Path() / "ecommerce" / "__init__.py"

# Home directory of the current user
Path.home()
```

```python
path = Path("/ecommerce/__init__.py")

# To check if path exists
path.exists()

# To check if its a file
path.is_file()

# To check if its a directory
path.is_dir()

# Get the absolute path
path.absolute()

# To get the name of the file
path.name # prints "__init__.py"

# To get the stem (without the extension)
path.stem # prints "__init__"

# To get the suffix (just the extension)
path.suffix # prints ".py"

# To get the parent
path.parent # prints "ecommerce"
```

You can create another path with just the filename changed (from a given path)

```python
path = path.with_name("file.txt")
```

Or to create a path with just the suffix changed

```python
path = path.with_suffix(".txt")
```

## Working with directories

```python
from pathlib import Path

path = Path("ecommerce")

# check if path exists
path.exists()

# create a new directory with the path (if the path doesn't exist)
path.mkdir()

# remove the current directory represented by path
path.rmdir()

# rename the directory in the current path
path.rename("ecommerce2")
```

### Iterating over directories

`.iterdir()` will only work correctly if the path represents a directory

```python
for p in path.iterdir():
  print(p)
```

Get all the directories in a given path (representing a directory), just use list comprehension

```python
paths = [p for p in path.iterdir()]
```

Two types of `Path` objects (these are sub-classes of `Path`)

1. `PosixPath` -- Used in Mac and Linux
2. `WindowsPath` -- Used in Windows

To filter for just the directories

```python
paths = [p for p in path.iterdir() if p.is_dir()]
```

#### Globbing

`.iterdir()` can only traverse one level deep.

To get all the files and directory under a given directory

```python
# To get all
path.glob(*)

# To get those which have some extension
path.glob(*.*)

# To get only ".py" files
path.glob(*.py)

# recursively look for all files and directories
path.glob(**/*)

# recursively look for all the files with extension ".txt"
path.glob(**/*.txt)
```

To get them in a list

```python
py_files = [p for p in path.glob(*.py)]
```

#### Recursive Globbing

```python
# Returns all ".py" files in a given directory (recursively)
path.rglob(*.py)

# return all files recursively
path.rglob(*)
```

## Working with Files

```python
path = Path("/ecommerce/__init__.py")

# To check if the file exists
path.exists()

# To rename the file (same as renaming the directory)
path.rename("NewName")

# Deleting the file
path.unlink()

# Print the stats (file size, creation time, last modified time etc.,)
path.stat()

# To see the stats in human readable format
from time import ctime
ctime(path.stat().st_ctime)

# read data from the file
path.read_bytes() # To read as bytes
path.read_text() # To read as text

# write data to the file
path.write_bytes("...")
path.write_text("something")
```

