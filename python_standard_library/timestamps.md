# Working with Time and Date

## Time - `time`

```python
import time

# Returns the number of seconds since Jan 1st 1970 (on Unix and Linux)
print(time.time())
```

### Calculate function execution time

```python
import time

def send_emails():
  for i in range(10000):
    pass
  
start = time.time()
send_emails()
end = time.time()

execution_time = end - start
```

We can also use `timeit` module to calcuate the time it took to run a piece of code

## Datetime - `datetime`

```python
import datetime

dt = datetime.datetime(2018,1,1)
```

```python
from datetime import datetime

dt = datetime(2018,1,1)

# Current datetime
dt = datetime.now()

# Parsing datetime string to datetime
dt = datetime.strptime("2018/01/01", "%Y/%m/%d")
```

`%Y` 4 digit year

`%m` 2 digit month

`%d` 2 digit date

Google for "python3 strptime directives"

```python
import time

# convert a time object to datetime object
dt = datetime.fromtimestamp(time.time())
```

### `datetime` object attributes

```python
print(f"{dt.year}/{dt.month}")
```

### Formatting `datetime` object as a string

Use `strftime` method (`strptime` converts string to `datetime`)

```python
# Returns the datetime as a string - as per the directive passed
dt.strftime("%Y/%m")
```

### Comparison of dates

You can compare two `datetime` objects using `>` `<` or `==` operators

```python
print(dt2 > dt1)
```

## Datetime - `timedelta`

`timedelta` is also part of `datetime`

Its like a child class of `datetime` - hence it almost behaves like `datetime` object too

```python
from datetime import datetime, timedelta

# you can add two datetime objects 
# you can also add timedelta objects to datetime objects
dt1 = datetime(2018, 1, 1) + timedelta(days=1, seconds=1600)

dt2 = datetime.now()

# This delta is now a "timedelta" object
delta = dt2 - dt1

# see the number of days in the delta
print("days", delta.days)

# see the number of seconds in the delta
print("days", delta.seconds)

# see the number of total seconds (also converting years to seconds)
# total_seconds() is a method
print("total_seconds", delta.total_seconds())
```

There are only `days` and `seconds` attributes to `timedelta` object

This is because months and years have variable number of days in them