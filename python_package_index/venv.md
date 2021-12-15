# Virtual Environments

## Traditional Method

```python
# "env" is just the name of the virtual environment. You can use any name
python3 -m venv env
```

```bash
# Activate virtual environment
source env/bin/activate
```

After activating virtual environment, you can continue to use `pip3` the way you do it normally.

```bash
# De-Activate virtual environment
deactivate
```

## Modern Method - `pipenv` 

`pipenv` = `venv` + `pip3`

```bash
# Install pipenv
pip3 install pipenv
```

```bash
# Install a package (and create a virtual environment)
pipenv install requests
```

`pipenv` doesn't create the virtual environment in the same directory 

```bash
# See the virtual environment active now
pipenv --env
```

Activate the virtual environment

```python
# Activate the VENV
pipenv shell
```

Exit from the virtual environment

```python
# Exit 
exit
```

## Files in `pipenv` model

There are two important files in the `pipenv` model

- `pipfile`
- `pipfile.lock`

### `pipfile`

Contains four main sections

- ``[[source]]` - Where the packages come from (pypi etc.,)
- `[dev-packages]` - Development packages that are used only to develop/test application (not required for running the app)
- `[packages]` - Packages required for running the application
- `[requires]` - Dependencies or pre-requisites

### `pipfile.lock`

Contains a huge JSON that lists all the modules (along with their dependencies) and their exact versions

## Install dependencies

```bash
# No arguments required. Just pipenv is required
pipenv install

# To ignore pipfile and use pipenv.lock
pipenv install --ignore-pipfile
```

## Dependency management using `pipenv`

```bash
# To see the graph of dependencies
pipenv graph

# Uninstall
pipenv uninstall requests

# Install a specific package
pipenv install requests==2.9.*

# Update all packages in pipenv - IT WILL NOT INSTALL
# doesn't install if there is a conflict with pipenv itself
pipenv update --outdated

# Update a specific package (it will update only if pipfile permits)
pipenv update requests
```

