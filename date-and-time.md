```python
import datetime
```

### Naive `datetime`

Doesn't contain info on **timezones** or **day light savings**

```python
d = datetime.date(2020, 7, 24)
print(d)
```

Pass `day` and `month` without any preceeding zero

```python
tday = datetime.date.today()
# 2020-07-24

# grab just the day
tday.day

# grab just the year
tday.year

# get the day of the week
# Monday 0 - Sunday 6
tday.weekday()
# Monday 1 - Sunday 7
tday.isoweekday()
```

#### Time Deltas

```python
tdelta = datetime.timedelta(days=7)

# Just add or substract the delta
print(tday + tdelta)
```

```python
# Add or substract two dates - you get a time delta
tiemdelta = date1 - date2

# Get days delta
timedelta.days

# Get total seconds delta
timedelta.total_seconds()
```

#### Work with Hours, Mins, Seconds

```python
# (Hours, Mins, Seconds, Microseconds)
t = datetime.time(9, 30, 45, 100000)

# Get hours
t.hour
```

#### Work with Date and Time - BOTH

Get both `datetime.date` and `datetime.time` benefits in one place

```python
dt = datetime.datetime(2016, 7, 26, 12, 30, 45, 10000)

dt.date()
dt.time()

dt.year
```

Work with deltas

```python
tdelta = datetime.timedelta(days=7)
# tdelta = datetime.timedelta(hours=12)

print(dt + tdelta)
```

#### Current Date and Time with `datetime.datetime`

```python
# today and now - similar
# .today() has no timezone
# .now() allows you to pass a timezone
dt_today = datetime.datetime.today()
dt_now = datetime.datetime.now()

# current UTC time IF TZ is PROVIDED. Else, same as now and today
dt_utcnow = datetime.datetime.utcnow()
```

### Managing timezones using `pytz`

```bash
pip install pytz
```

When dealing with `pytz` , its recommended to use `.utcnow()` in `datetime.datetime`

```python
import pytz
import datetime

# use pytz with datetime
dt = datetime.datetime(2017, 7, 26, 12, 30, 45, 10000, tzinfo=pytz.UTC)

# current UTC time using .now()
dt_now = datetime.datetime.now(tz=pytz.UTC)

# timezone time using .now()
dt_mtn = datetime.datetime.now(tz=pytz.timezone('US/Mountain'))

# current UTC time using .utcnow()
dt_utcnow = datetime.datetime.utcnow().replace(tzinfo=pytz.UTC)
```

```python
# use the dt_now object to add known time zone offset
dt_mtn = dt_now.astimezone(pytz.timezone('US/Mountain'))
```

```python
# See all timezones in pytz
for tz in pytz.all_timezones:
  print(tz)
```

#### Use naive datetime (without TZ) and `pytz` to work with time zones

```python
import pytz
import datetime

# naive datetime. TZ info is null
dt_mtn = datetime.datetime.now()

# create a timezone object
mtn_tz = pytz.timezone('US/Mountain')

# get a timezone aware datetime object
dt_mtn = mtn_tz.localize(dt_mtn)

# now this can be used to further adjust timezone
dt_east = dt_mtn.astimezone(pytz.timezone('US/Eastern'))
```

#### Display in ISO format

```python
# dt_mtn is a timezone aware datetime object
print(dt_mtn.isoformat())
```

**Custom Formatting**

```python
# Converts datetime to a string
print(dt_mtn.strftime('%B %d, %Y'))
```

The codes `%B %d %Y` are taken from documentation - format codes for formatting date and time

#### Convert a string to `datetime` object

```python
dt_str = 'July 26, 2021'

# Arguments: string, format of the string as per format codes
dt = datetime.datetime.strptime(dt_str, '%B %d, %Y')
```

`strftime` -- Converts `datetime` to string

`strptime` -- Converts string to `datetime`

---

**Arrow module** -- new way to work with date and time in Python

---

