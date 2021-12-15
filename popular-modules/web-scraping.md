# Web Scraping

It's about scraping a HTML page and extracting data

```bash
pipenv install beautifulsoup4
pipenv install requests
```

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://stackoverflow.com/questions")

# HTML content is present in "response.text"
# Set the parser to "html.parser"
soup = BeautifulSoup(response.text, "html.parser")
```

### Parse the `soup` object

We always get objects of the class `Tag` as a result

```python
# Look for the "class" named "question-summary"
questions = soup.select(".question-summary")

# Check the type
# It will be "<bs4.element.Tag>"
print(type(questions[0]))
```

In that `Tag` object, there are a few attributes that reflect the attributes in the `div` of the HTML from which the `class` is captured

For example, it may have

- `class`
- `id`

..as attributes

To get the attribute, its safer to use `.get` method

```python
print(questions[0].get("id"))
```

### Dig through - by parsing again

```python
hyperlink = questions[0].select(".question-hyperlink")

# Or you can select only one
hyperlink = questions[0].select_one(".question-hyperlink")
```

To get the text from a html tag

```python
main_question_text = hyperlink.getText()
```

### Look for username inside an anchor tag

```python
profile_link = browser.find_element_by_class_name("user-profile-link")

# Get all the HTML stuff inside a given ELEMENT
link_label = profile_link.get_attribute("innerHTML")

assert "ninjacode22" in link_label
```

### Quit the browser once done

```python
browser.quit()
```

