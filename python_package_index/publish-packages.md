# Publish a Package to PyPi

Create an account on PyPi (and activate it)

```bash
pip3 install setuptools wheel twine
```

Create a directory that contains all the module related files - this is the `root` of the package

Inside, 

- `tests` **directory** -- _Optional_

- `data` **directory** -- _Optional_

- `<package-name>` **directory** - the directory that contains `__init__.py` file (so that python3 treats it as a package)

- `setup.py` -- _**Mandatory**_

  ```python
  import setuptools
  from pathlib import Path
  
  setuptools.setup(
  	name="some-module",
    version="1.1",
    long_description=Path("README.md").read_text(),
    # in the "find_packages" function, mention the directories that must be excluded
    # "find_packages" function is smart enough to find package directores in the root
    packages = setuptools.find_packages(exclude=["tests", "data"])
  )
  ```

- `README.md` (name should be in ALL CAPS) - Its a MarkDown file -- _**Mandatory**_

- `LICENSE` - www.choosealicense.com to find boilerplate text for licensing -- _**Mandatory**_

### Generate distribution packages

Once all the files are generated as required, generate two distribution files

1. Source Distribution
2. Build Distribution

(These two files will be created in a directory called **dist**)

```bash
python3 setup.py sdist bdist_wheel
```

### Upload to `pypi`

Upload both "Source" and "Build" distribution files to `pypi`

```bash
twine upload dist/*
```

