```bash
pipenv install requests
```

Two parts of HTTP requests:

- Headers (Key Value pairs)
  - Authorisation
  - 
- Payload

```python
import requests

api_key = "apikey"
url = "api.sample.com/business/search"
headers = {
  "Authorization" : "Bearer " + api_key
}
params = {
  "term" : "barber",
  "location" : "NYC"
}
response = requests.get(url, headers=headers, params=params)

# if the response code is 4XX, you can see more details by doing "response.text"
print(response.text)
```

Params object is the additional data that the API end-point expects to work properly

```python
# Get the result in a JSON format
result = response.json()
```

> Do not store API key in the source code

### Managing API Key

Keep the API key and other sensitive information in a different file, such as `config.py` and access the parameters in the module through `import config` statement

Also, make sure that `config.py` is added to `.gitignore` file