# `pathlib` + `shutil`

`shutil` works beautifully with `pathlib` for operations such as copying, moving files etc.,

```python
from pathlib import Path
import shutil

source = Path("ecommerce/__init__.py")
target = Path() / "__init__.py"

shutil.copy(source, target)
```

