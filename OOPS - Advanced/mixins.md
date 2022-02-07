# Mixins

Mixin is a way of doing multiple inheritence. 

You do a **Mixin** with a class **only to get access to its methods**. This way, you cannot consider this as a base class. 

```python
class AsDictionaryMixin:
  def to_dict(self):
    return {
      prop: self._represent(value)
      for prop, value in self.__dict__.items()
      if not self._is_internal(prop)
    }
  
  def _represent(self, value):
    # check if the value is an object (inherited from object or not)
    if isinstance(value, object):
      # check if this object has an attribute (or method) called "to_dict"
      if hasattr(value, 'to_dict'):
        return value.to_dict()
      else:
        return str(value)
    else:
      return value
    
  def _is_internal(self, prop):
    # if the "prop" starts with "_" then return TRUE (meaning, its private attribute)
    return prop.startswith("_")
```

In any class, the `__dict__` attribute contains all the class attributes as a dictionary.