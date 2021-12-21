# Basics - Simple Web App

## Installing `django` and basic setup

```bash
pipenv install django==2.1

# pylint that understands Django
pipenv install pylint-django

# Activate the environment
pipenv shell
```

**Create a directory for this project - For example `stc`**

```bash
# Create Django project inside the root directory
django-admin startproject stc .
```

After `startproject` is executed, another directory called `stc` will be created that contains

- `__init__.py`
- `urls.py`
- `settings.py`
- `wsgi.py`

Also in the root directory, 

- `manage.py` --> contains tools we use while developing the Django app

**Create a `.pylintrc` file inside the project**

```
load-plugins=pyling-django
```

#### Start the development web server

```bash
# Start the server on default port - 8000
python3 manage.py runserver

# For a custom port - 8080
python3 manage.py runserver 8080
```

## Creating an App

Django consists of Apps

Each app can be reused wherever required

It's a collection of related functions

```bash
# Start an App - "movies"
python3 manage.py startapp movies
```

After you create an app, a new folder called `movies` (or your app name) will be created under root directory with a bunch of files in it

- `__init__.py`
- `admin.py` 
- `apps.py` -- store config settings for this app
- `models.py` -- classes that represent the app (genre, movie etc.,)
- `tests.py` -- automated tests for the app
- `views.py` -- define view functions (its like the **controller** in MVC architecture)

## Views - `views.py`

```python
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here
# "Index" is the traditional name given to the Home Page
# "request" -- HTTP Request object
def index(request):
  # Always return a "HttpResponse" object
  return HttpResponse("Hello World")
```

## URLs - `urls.py` - Inside the App

```python
from django.urls import path
from . import views

# Django expects a list for "urlpatterns"
# Each element is a mapping of URL to "view" function reference
# Third argument is the name we give to the URL
urlpatterns = [
  path("", views.index, name="index")
]
```

> Every app should have `urls.py` that takes care of the URLs

> Don't forget to also update `urls.py` of the main django project

## URLs - `urls.py` - Inside the project

```python
from django.contrib import admin

# "include" is a function that can include an App's urls.py module
from django.urls import path, include

urlpatterns = [
  path("admin/", admin.site.urls),
  # Below element maps all the URLs that start with "movies" to the app's urls.py module
  path("movies/", include("movies.urls"))
]
```

## Models - `models.py` - Inside the App

`models.py` is the main python file that has logic (manipulating or consuming data)

```python
# "models" module has functionality for storing, retreiving, filtering of "Model" objects
from django.db import models

from django.utils import timezone

# Create classes for different requirements
class Genre(models.Model):
  # "models" have several methods to set variables to different database field types
  name = models.charField(max_length=255)
  
class Movie(models.Model):
  title = models.CharField(max_length=255)
  release_year = models.IntegerField()
  number_in_stock = models.IntegerField()
  daily_rate = models.FloatField()
  # To make another class a Foreign Key
  # "on_delete" refers to the action to take when the foreign key is deleted
  # CASCADE --> When associated Foreign Key is deleted, all corresponding movies should be deleted too
  genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
  
  # Use the Django's built-in "timezone" module and pass the REFERENCE using "default" argument
  date_created = models.DateTimeField(default=timezone.now)
```

## Register the App with Django project

Whenever an app is created, **Django** should be informed about it through `settings.py` file in the root directory

```python
# Contains the list of apps that Django knows about
INSTALLED_APPS =[
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'movies.apps.MoviesConfig' # Get the class name from "apps.py" file in the app directory
]
```

## Migrations

A "migration" refers to **django** making sure that the **models** in `models.py` is in sync with the database of Django (by default it will be **sqlite3**)

```bash
# To migrate "models" to Database
python3 manage.py makemigrations
```

This command creates **operations** (a python file) that lists all the operations that need to be performed to sync **models** with **database**

```python
# Execute the migration
python3 manage.py migrate
```

## Check the exact SQL statements sent to the database

When we do `python3 manage.py migrate` python will use the files created in the `migrations` directory (a bunch of python code that shows which operations will be performed on the database), and **generate corresponding SQL code**

To see the SQL code, you need to specify which migration file you are targeting

```bash
# "movies" refer to the app
# "0001" refers to the migration identifier
python3 manage.py sqlmigrate movies 0001
```

## Admin Panel

Admin panel is managed by Django's built-in app `auth` -- `django.contrib.auth`

```bash
# Create Super User first
python3 manage.py createsuperuser
```

> By default, admin panel can only manage `users` and `groups` 

### Add custom models (`admin.py` in the app) - to adminster them through ADMIN panel

```python
from django.contrib import admin
from .models import Genre, Movie

admin.site.register(Genre)
admin.site.register(Movie)
```

## Customising Admin Panel

By default, a class defined in a model (inside the App) will be represented as string

To change that, you need to overwrite a method in the class inside `models.py`

```python
# models.py in the App
class Genre(models.Model):
  name = models.CharField(max_length=255)
  
  def __str__(self):
    return self.name
```

### Even more customisation of admin panel - `admin.py` in the App

```python
from django.contrib import admin
from .models import Genre, Movie

# Pick any name
class GenreAdmin(admin.ModelAdmin):
  # "list_display" controls which attributes are displayed on the admin panel
  list_display = ('id', 'name')
  
class MovieAdmin(admin.ModelAdmin):
  # To show only the attributes mentioned below of "Movie" class
  fields = ('title', 'genre')
  # OR - You can exclude the attributes mentioned below of "Movie" class
  exclude = ('date_created', )
  list_display = ('title', 'number_in_stock', 'daily_rate')

admin.site.register(Genre, GenreAdmin)
admin.site.register(Movie, MovieAdmin)
```

## Database Abstraction API

Until now, we worked on setting up Django project, defining the model and the URL and customising admin panel

Now, we look at public facing part of an app through Django

### `views.py` in the app

```python
from django.http import HttpResponse
from django.shortcuts import render

# Import the custom models you created in "models.py"
from .models import Movie

def index(request):
  # Retrieve all movie objects
  Movie.objects.all()
  # Filter the objects based on criteria around its attributes
  Movie.objects.filter(release_year=1984)
  # Get a single object
  Movie.objects.get(id=1)
```

These methods `.objects.get` `objects.all` etc., represent the **Database API**

#### Another Example

```python
def index(request):
  # Retrieve all the movie objects
  movies = Movie.objects.all()
  # Join the titles in a single string
  output = ", ".join([m.title for m in movies])
  return HttpResponse(output)
```

## Templates

To render `html` pages as a HTTP response, we need to use templates in the `views.py` of the app

```python
from django.http import HttpResponse
from django.shortcuts import render
from .models import Movie

def index(request):
  movies = Movie.objects.all()
  # render takes three arguments
  # (1) - HTTP Request object
  # (2) - Template file name
  # (3) - Context - A dictionary which we want to use to populate the template
  return render(request, 'index.html', {'movies': movies})
```

Create a new directory `templates` in the app's directory

Inside, create HTML files

```html
<!-- Just the template part is shown here -->
{% for movie in movies %}
	<tr>
    <td>{{ movie.title }}</td>
    <td>{{ movie.genre }}</td>
    <td>{{ movie.number_in_stock }}</td>
    <td>{{ movie.daily_rate }}</td>
	</tr>
{% endfor %}
```

#### A better way to handle templates - using namespaces

When we just specify the template name `index.html` in the `render` function, Django searches for the templates in all the apps as per the order in `settings.py` of the root project

This might be confusing when there are too many apps

Hence, better to create a namespace for each app

Create a directory with the name of the app inside the `templates` directory of the app

```bash
# BEFORE
movies
| - templates
	| - index.html

# AFTER
movies
| - templates
	| - movies
		| - index.html
```

## Adding Bootstrap

Bootstrap provides **CSS** and **JS** files to create a good-looking responsive web-page.

Get the requisite files from https://getbootstrap.com/docs/5.1/getting-started/introduction/

Use the **Starter Template** in the above link to get a basic HTML page

Below is the starter template from Bootstrap 5 (as of 17 Dec 2021)

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

This starter template acts as a background / skeleton for all other pages

### Using Blocks

Define a block inside `body` of the `base.html`

```html
<body>
  {% block content %}
  {% endblock %}
</body>
```

Now, for any HTML file that you want to make part of the `base.html` 

```html
<!-- index.html - for example -->
{% extends 'base.html' %}

{% block content %}
	<!-- All HTML code of 'index.html' goes here -->
{% endblock %}
```

If you are using the **namespaces**

```html
<!-- index.html - for example -->
{% extends 'movies/base.html' %}

{% block content %}
	<!-- All HTML code of 'index.html' goes here -->
{% endblock %}
```

### Containing the width of the page

To contain the width of a page - to make sure it doesn't occupy all the place from left to right, use **container** classes

In the `base.html` 

```html
<!-- index.html - for example -->
{% extends 'base.html' %}

<main class="container">
  {% block content %}
		<!-- All HTML code of 'index.html' goes here -->
	{% endblock %}
</main>
```

## Sharing BASE template across multiple apps

Create a new folder in the root - `templates`

Move the `base.html` into the newly created `templates` directory in the root

> By default, **DJANGO** only searches for templates inside the "Apps"

Tell **Django** to also look for templates in the `templates` directory in the root

This happens in `settings.py` in the root

```python
# Look for "TEMPLATES" list (which is a list of dictionaries)
TEMPLATES = [
  {
    # This is the engine Django uses to process templates (alternative to Jinja2)
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    # Directories inside with Django looks for templates
    'DIRS' : [],
    'APP_DIRS' : True,
    'OPTIONS' : {
      # Context processors pass info from view into the templates
      'context_processors' : [
        # Passes debug info
        'django.template.context_processors.debug',
        # Passes the HTTP request object
        'django.template.context_processors.request',
        # Passes the authentication object - to identify the current user
        'django.contrib.auth.context_processors.auth',
        # passes messages to be displayed in the template (ex. Movie created successfully)
        'django.contrib.messages.context_processors.messages',
      ]
    }
  }
]
```

To make **Django** look for templates in `templates` directory in the root, we need to edit `DIRS` key

```python
# Look for "TEMPLATES" list (which is a list of dictionaries)
TEMPLATES = [
  {
    # This is the engine Django uses to process templates (alternative to Jinja2)
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    # Directories inside with Django looks for templates
    'DIRS' : [os.path.join(BASE_DIR, 'templates')],
    'APP_DIRS' : True,
    'OPTIONS' : {
      # Context processors pass info from view into the templates
      'context_processors' : [
        # Passes debug info
        'django.template.context_processors.debug',
        # Passes the HTTP request object
        'django.template.context_processors.request',
        # Passes the authentication object - to identify the current user
        'django.contrib.auth.context_processors.auth',
        # passes messages to be displayed in the template (ex. Movie created successfully)
        'django.contrib.messages.context_processors.messages',
      ]
    }
  }
]
```

`BASE_DIR` is a well-defined variable in Django that identifies the root directory of the project

After this, you can just specify the base in any template belonging to the app

```html
<!-- index.html - for example -->
{% extends 'base.html' %}

{% block content %}
	<!-- All HTML code of 'index.html' goes here -->
{% endblock %}
```

## Create new URL patterns inside the App - `urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
  # Better to give the "name" a namespace
  path("", views.index, name="movies_index"),
  # "int:" prefix enforces type conversion to integer. Throws an error if not possible
  path("<int:movie_id>", views.detail, name="movies_detail")
]
```

Now, edit `views.py` in the corresponding App

### Edit `views.py` with the function referenced in `urls.py`

```python
from django.http import HttpResponse
from django.shortcuts import render

from .models import Movie

def index(request):
  movies = Movie.objects.all()
  render(request, "movies/index.html", {"movie": movie})
  
# Define the new function
# Django automatically passes the "movie_id" based on the urls.py reference to <movie_id>
def detail(request, movie_id):
  movie = Movie.objects.get(id=movie_id)
  # movie = Movie.objects.get(pk=movie_id) # pk --> primary key. Can be used instead of id
  render(request, "movies/detail.html", {"movie": movie})
```

### Create the corresponding `detail.html` in the App's templates directory

```html
<!-- detail.html - for example -->
{% extends 'base.html' %}

{% block content %}
	<!-- All HTML code of 'detail.html' goes here -->
<dl>
  <dt> Title </dt>
  <dd>{{ movie.title }}</dd>
  <dt> Genre </dt>
  <dd>{{ movie.genre }}</dd>
</dl>
{% endblock %}
```

## Raising HTTP 404 Errors

404 errors need to be raised inside the functions corresponding to the views

In the `views.py` inside the app, wrap a database `get` in a `try` block

```python
from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import Movie

def index(request):
  movies = Movie.objects.all()
  render(request, "movies/index.html", {"movie": movie})
  
def detail(request, movie_id):
  try:
    movie = Movie.objects.get(id=movie_id)
    render(request, "movies/detail.html", {"movie": movie})
  except Movie.DoesNotExist:
    raise Http404()
```

### A shortcut for raising 404 errors

```python
from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404

from .models import Movie

def index(request):
  movies = Movie.objects.all()
  render(request, "movies/index.html", {"movie": movie})
  
def detail(request, movie_id):
  # Below method either gets the data or raises 404
  movie = get_object_or_404(Movie, id=movie_id)
  render(request, "movies/detail.html", {"movie": movie})
```

## Referncing URLs in the rendered pages

Go to any template that is used for rendering - in the below example, it is `index.html` inside the App

```html
<tbody>
  {% for movie in movies %}
  	<tr>
      <td>
        <a href="/movies/{{ movie.id }}"> {{ movie.title }}</a>
      </td>
  	</tr>
</tbody>
```

It's better to use **URL Names** while we reference them (as defined in the `urls.py`)

```html
<tbody>
  {% for movie in movies %}
  	<tr>
      <td>
        <!-- Use the syntax {% url 'url_name' <optional-parameters> %} -->
        <a href="{% url 'movies_detail' movie.id %}"> {{ movie.title }}</a>
      </td>
  	</tr>
</tbody>
```

### Alternate way to use URL names

#### Use `app_name` variable in the `urls.py`

```python
from django.urls import path
from . import views

# Django recognises this variable
app_name = "movies"

urlpatterns = [
  path("", views.index, name="index"),
  path("<int:movie_id>", views.detail, name="detail")
]
```

#### Refer this URL in any template or HTML file

```html
<tbody>
  {% for movie in movies %}
  	<tr>
      <td>
        <!-- Use the syntax {% url 'app_name:url_name' <optional-parameters> %} -->
        <a href="{% url 'movies:detail' movie.id %}"> {{ movie.title }}</a>
      </td>
  	</tr>
</tbody>
```

## Adding the Homepage

Django doesn't create a homepage by default.

The default homepage that you see initially will be removed as soon as a new URL is registered with `urls.py` in the main project

### Create `views.py` at the project level

```python
from django.shortcults import render

def home(request):
  return render(request, 'home.html')
```

### Register the new VIEW function with the `urls.py` at the project level

```python
from django.contrib import admin
from django.urls import path, include
from api.models import MovieResource
from . import views.py

movie_resource = MovieResource()

urlpatterns = [
  path('', views.home),
  path('admin/', admin.site.urls),
  path('movies/', include("movies.urls")),
  path('api/', include(movie_resource.urls))
]
```

### Create `home.html` in the templtes directory of the root project

```bash
.
| - templates
	| - home.html
	| - base.html
| - vidly
	| - urls.py
	| - views.py
```

#### `home.html`

```html
{% extends base.html %}

{% block content %}
	<a href="{% url 'movies:index' %}">Movies</a>
{% endblock %}
```

