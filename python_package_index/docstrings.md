# Docstrings

Every class, function, method and module needs to be documented properly.

## Docstrings vs Comments

**Docstrings** focus on providing the following

- A brief description of the module / class / method / function
- Parameters (if applicable)
- Returns (if applicable)

**Comments** focus on the following

- Reasons behind code logic
- Information on the variables defined etc.,

```python
""" 
	One line description of the module.
	A more detailed explanation if necessary.
"""

class Converter:
  """
  A simple converter for converting PDF to Text
  """

  def convert(self, path):
    """ 
    Convert the given PDF to Text.

    ... More details go here

    Parameters:
    path (str): The path to a PDF file

    Returns:
    str: The content of the PDF file as text
    """
```

