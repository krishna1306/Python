# JSON Files

```python
import json

movies = [
  {
    "id" : 1, "title" : "Terminator", "year" : 1989
  },
  {
    "id" : 2, "title" : "Superman", "year" : 1993
  }
]

# Create a JSON representation
movies_json = json.dumps(movies)
```

### Write the JSON string to file

```python
from pathlib import Path

Path("movies.json").write_text(movies_json)
```

### Reading a JSON file

```python
from pathlib import Path

data = Path("movies.json").read_text()

# Extract the python native data structure 
movies = json.loads(data)
```

