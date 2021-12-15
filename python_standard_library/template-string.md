# Template - `string` class

### Create a Template

```html
<html>
  <body>
    Hi $name, this is our test email
  </body>
</html>
```

### Python Code

```python
from string import Template

# Create a "Template" object. We need to pass the template as a string
template = Template(Path("template.html").read_text())

# Substitute the variables in the template with corresponding values
# You can pass a dictionary containing key:value pairs
body = template.substitute({"name" : "John"})
```

To the `substitute` method, you can also pass keyword arguments directly

```python
body = template.substitute(name="John")
```

