# Getter - Setter | @property - Python

https://www.programiz.com/python-programming/property

`property()` is a built-in method in python.

Let's say you have a private attribute in a class and you are implementing methods to **set** its value and **get** its value.

```python
# using property class
class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    # getter
    def get_temperature(self):
        print("Getting value...")
        return self._temperature

    # setter
    def set_temperature(self, value):
        print("Setting value...")
        if value < -273.15:
            raise ValueError("Temperature below -273.15 is not possible")
        self._temperature = value

    # creating a property object
    temperature = property(get_temperature, set_temperature)


human = Celsius(37)

print(human.temperature)

print(human.to_fahrenheit())

human.temperature = -300
```

> In the above example, `temperature` is not really a private attribute (if we make it `_temperature` then its private)

When you do

```python
temperature = property(get_temperature, set_temperature)
```

You are making the temperature attribute accessible through the methods `get_temperature` and `set_temperature` even though your code doesn't call them directly.

### `property()` syntax

```python
property(fget=None, fset=None, fdel=None, doc=None)
```

## Using `@property` decorator

The same output seen above can also be achieved through `@property` decorator

```python
# Using @property decorator
class Celsius:
    def __init__(self, temperature=0):
        self._temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property
    def temperature(self):
        print("Getting value...")
        return self._temperature

    @temperature.setter
    def temperature(self, value):
        print("Setting value...")
        if value < -273.15:
            raise ValueError("Temperature below -273 is not possible")
        self._temperature = value


# create an object
human = Celsius(37)

print(human.temperature)

print(human.to_fahrenheit())

coldest_thing = Celsius(-300)
```

> This way, we don't have to create functions like `get_temperature()` or `set_temperature` and keep it pythonic.