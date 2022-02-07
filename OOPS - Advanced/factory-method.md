# Factory Method

If you are using composition (meaning, your class is a composite of objects of other classes), initialising the attribute objects can get complex.

This is where **Factory Method** comes in handy.

### What does a Factory Method do?

A factory method manufactures objects. It is usually a function (not a method, its outside of a class) with one or more parameters. Based on the parameters, it instantiates the correct class and returns an object to you.

```python
def factory_method_example(vehicle):
  if vehicle == "car":
    return Car(4)
  elif vehilce == "bike":
    return Bike(2)
  else:
    return Generic(2)
```

Now, whenever we want to create an object of `Car` or `Bike` or `Generic` class, we don't do it directly (like `Car(4)`), but we do

```python
our_vehicle = factory_method_example("car")
```

### Singleton Classes

A class is called a singleton class if its allowed to be instantiated only once. The simplest way to highlight this (not sure if it is enforced at run-time) to developers is - append a `_` before the class name

```python
# This class is a private class. Can only be instantiated in the module its defined
class _SingletonClassExample:
  pass
```



