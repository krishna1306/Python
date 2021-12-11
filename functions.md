### Functions

```python
from my_module import find_module as fi, test
import my_module as mm
```

Here `test` is a variable in the module `my_module` 

`find_module` is a function

##### Import Everythin

```python
from my_module import *
```

*Not recommended*

#### Where does python check for modules?

From all locations in `sys.path`

```python
import sys
print(sys.path)

sys.path.append('/Users/krishna/Desktop/new_dir')
```

It looks for the module in the same order as printed in `sys.path`

**Typical Order**

Local directory -> python path variable -> python standard library -> `site-packages` for third party packages

 ##### How to change python path variable

Modifying the `sys.path` variable is **not recommended**.

Edit `~/.bash_profile`

```bash
export PYTHONPATH="/Users/krishna/Desktop/new_dir"
```

*Above code is for `mac` or `linux` based systems*

**Note** Find out what is the way to set `PYTHONPATH` on the editor that you prefer - **Atom** or **Sublime** or **VS Code**