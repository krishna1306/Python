### How to run `gunicorn` with `flask`

```
gunicorn main:app -w 2
```

`main` is the name of the python file -> `main.py`

`app` is the flask app inside it

```
app = Flask(__name__)
```

---

Default port is 8000

