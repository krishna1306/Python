# `pathlib` + `zipfile`

```python
from pathlib import Path
from zipfile import ZipFile

# To create a new zip file - "files.zip"
with ZipFile("files.zip", "w") as zip:
  for path in Path("ecommerce").rglob(*.*):
    zip.write(path)
```

```python
with ZipFile("files.zip") as zip:
  # prints all the file paths in the zip file 
  print(zip.namelist())
  for item in zip.namelist():
    info = zip.getinfo(item)
    print(info.file_size)
    print(info.compress_size)
    
  # To create a directory called "extract" in the current directory and extract everything to there
  zip.extractall("extract")
```

