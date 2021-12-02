```bash
pip -V
pip2 -V
pip3 -V

pip install flask
```

By default, packages are always installed in the local user's home directory.

To make it a system install do `sudo -H pip install flask`

`-H` means system's home directory - which is `root` 

Then, packages are put under `usr/lib/python<2/3>/site-packages`

Or `usr/lib64/python<2/3>/site-packages`

Find where a package is stored

```bash
pip show flask
```

To see the paths in which python is looking for packages

```
python2 -c "import sys; print(sys.path)"
```

---

### requirements.txt

```
Flask
Jinja2
MarkupSafe
```

You can also specify the versions. Else, python finds the latest version.

```
Flask==0.10.1
```

```
pip install -r requirements.txt
```

---

### Upgrade / Uninstall	

```
pip install Flask --upgrade
```

```
pip uninstall Flask
```

