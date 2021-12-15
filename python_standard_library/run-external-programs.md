# Running External Programs

## Using `subprocess`

```python
import subprocess

# "run" method expects a list 
# 1st element in the list must be the main COMMAND
# 2nd element onwards - OPTIONS to the command
result = subprocess.run(["ls", "-l"])

# Result is an object of type "subprocess.CompletedProcess"
print(type(result))
```

### Attributes in the `subprocess.CompletedProcess` class

- `args` -- `result.args` -- Captures whatever we passed to `run` method
- `returncode` -- `result.returncode` -- Captures the return code 
- `stderr` -- `result.stderr` -- Captures the data sent to standard error
- `stdout` -- `result.stdout` -- Captures the data sent to standard output

### Capture the output in `stdout`

By default, when you do `run` method - the output is printed on the terminal by default

If you want to capture it, then it will be captured in the resulting `subprocess.CompletedProcess` object's `stdout` attribute

```python
result = subprocess.run(["ls", "-l"],
                       capture_output=True,
                       text=True)
```

If you don't pass `text=True` --> then the captured output is a binary string (a string with `b''` prefix - shows all newlines and tabs literally - as `/n`  `\t` etc.,)

### Raise an exception if the return code is non-zero

```python
result = subprocess.run(["ls", "-l"],
                       capture_output=True,
                       text=True,
                       check=True)
```

Specifically, it raises `subprocess.CalledProcessError` exception