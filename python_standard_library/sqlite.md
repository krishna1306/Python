# SQLITE - `sqlite3`

```python
import sqlite3
import json
from pathlib import Path

movies = json.loads(Path("movies.json").read_text())

# Connect to a DB file. It will be created if it doesn't exist
sqlite3.connect("db.sqlite3")

with sqlite3.connect("db.sqlite3") as conn:
  # Movies table has 3 columns - ID : Movie : Year
  command = "INSERT INTO Movies VALUES(?, ?, ?)"
  for movie in movies:
    # "execute" method syntax - execute(<SQL-Command-with-placeholders>, <data-in-tuple>)
    conn.execute(command, tuple(movie.values())
  conn.commit()
```

---

Download **DB Browser** app for Windows/Mac/Linux to visually see `sqlite3` database, create tables etc.,

---

### Reading from the database

```python
with sqlite3.connect("db.sqlite3") as conn:
  
  command = "SELECT * FROM Movies"
  # When we read data, it returns a cursor - that holds returned data
  cursor = conn.execute(command)
  # cursor is an iterable
  for row in cursor:
    # each item is a tuple
    print(row)
```

### To fetch all the values at once (instead of iterating through an iterable)

```python
with sqlite3.connect("db.sqlite3") as conn:
  
  command = "SELECT * FROM Movies"
  # When we read data, it returns a cursor - that holds returned data
  cursor = conn.execute(command)
  # fetchall() method gets all results in a list
  movies = cursor.fetchall()
  print(movies)
```

