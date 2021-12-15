# Browser Automation - Using SELENIUM

```bash
pipenv install selenium
```

Selenium relies on a driver to work with a browser

Each popular browser has its own driver - Firefox / Chrome / Edge / Safari

**Download the appropriate driver**

> Put the driver executable in the PATH

```bash
cp chromedriver /usr/local/bin
```

```python
from selenium import webdriver

# Create a browser object based on the Webdriver
browser = webdriver.Chrome()

# Go to a website
browser.get("https://github.com")
```

To click on elements on a page, we need to identify them. We can identify them using

- `id`
- `class`
- `name`
- `tag`

```python
# Find an element using the text in that element
# This is a browser element
signin_link = browser.find_element_by_link_text("Sign in")

# Click the link
signin_link.click()
```

### Find and fill login and password fields

```python
# Get "user login" browser element
username_box = browser.find_element_by_id("login_field")

# Type in the box
username_box.send_keys("some_username")

# Get "password" browser element
password_box = browser.find_element_by_id("password")

# Type in the box
password_box.send_keys("some_password")

# Press "RETURN" after entering username and password
password_box.submit()
```

### Run tests - Check stuff on HTML page

Similar to `requests.get("http://google.com").text` (which contains the full HTML page text), `browser.page_source` will have the full HTML page text.

```python
# "assert" ensures that the result is TRUE
# If not, it raises an exception
assert "Ninjacoder22" in browser.page_source
```

