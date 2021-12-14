# Modules

Each file in python is a module

Let's say there is a file called `sales.py`

```python
### SALES.PY

def calc_shipping():
  pass

def calc_tax():
  pass
```

You can import the functions in this module into another python file 

```python
from sales import calc_shipping, calc_tax

calc_shipping()
calc_tax()
```

Or, you can also do it this way

```python
import sales

sales.calc_shipping()
sales.calc_tax()
```

**This method of importing the module itself is highly recommended**

**Why??** - Because its clear that you are using functions from this method as you always use the prefix `sales.` when calling a function in the `sales` module

## Module Search Path

To see all the places python searches for a module

```python
import sys

print(sys.path)
```

## Package

A package is a simple directory with `__init__.py` file in it

A package acts like a container of one or more modules

Now, to use a function in a module in a package

```python
# "ecommerce" is the directory in which "sales" module is present
import ecommerce.sales

ecommerce.sales.calc_tax()
```

Another better approach would be

```python
from ecommerce import sales

sales.calc_tax()
sales.calc_shipping()
```

## Sub-Packages

Even sub-packages need `__init__.py`

Now, to access the function

```python
# "ecommerce" is the parent package
# "customer" is the sub package
# "sales" is the module name
from ecommerce.customer import sales

sales.calc_tax()
sales.calc_shipping()
```

### Importing in between packages

Sometimes one module may want to import another module from another package

ecommerce

|-`__init__.py`

|- customer

​	|- `__init__.py`

​	|- `contact.py`

|- sales

​	|-`__init__.py`

​	|-`sales.py`

Two ways to do this

- Absolute path (top level package --> sub-package --> directory)

```python
from ecommerce.customer import contact

contact.contact_customer()
```

- Relative import (not recommended)

```python
from ..customer import contact
```

`.` - represents current package

`..` - represents parent package

## `dir` function

When we import a module in python, it is treated as an object

So, a module would also have attributes and methods (even though they are just functions inside that module)

```python
from ecommerce.shopping import sales

# prints all attributes and methods
print(dir(sales))
```

Some interesting built-in methods on every module

```python
sales.__name__ # prints the name of the module
sales.__package__ # prints the package name of the module
sales.__file__ # prints the address of the file - filesystem path
```

## Execute modules as scripts

Whenever a module is imported, everything in that module is run.

That is also applicable to the `__init__.py` files in a package or a sub-package

If a module is to be used as a script, all the script related function calls should be put under

```python
if __name__ == "__main__":
```

This is because, `__name__` is always set to `__main__` when the module is run directly.

If the module is imported, the `__name__` is set to the fully qualified name of the module (including packages and sub-packages)  