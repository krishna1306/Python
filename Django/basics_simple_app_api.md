## Create APIs

Two popular packages to create APIs with Django

1. **django-tastypie**
2. **djangorestframework** (a bit more complex)

## Tasty Pie

```bash
pipenv install django-tastypie
```

### Create a new App

```bash
python3 manage.py startapp api
```

### Register API in the list of installed apps - in `settings.py` of the root

```python
# Find the list "INSTALLED_APPS"
INSTALLED_APPS = [
  'django.contrib.admin',
  # ....
  'api.apps.ApiConfig' # Get the class name from "apps.py" file in the app directory
]
```

`ApiConfig` class will be created by default when the app **API** is created inside **`apps.py`** app

### Create a "Model" representing an existing "class" in any App

```python
# In "models.py" inside "API" app

from django.db import models
# "ModelResource" class will provide a way to map a class to an API
from tastypie.resources import ModelResource
from movies.models import Movie

class MovieResource(ModelResource):
  class Meta:
    # Represents the data set which will be used for API
    queryset = Movie.objects.all()
    # "resource_name" determines the URL
    # "movies" --> "/api/movies"
    resource_name = "movies"
    # To exclude any attributes of "Movie" class
    # Here, we are excluding "date_created"
    excludes = ["date_created"]
```

### Register the URLs related to `/api` with the main project

Go to `urls.py` in the root project and then

```python
from django.contrib import admin
from django.urls import path, include
from api.models import MovieResource

# This object has a property called "urls" that expose all the URLs created in models.py
movie_resource = MovieResource()

urlpatterns = [
  path('admin/', admin.site.urls),
  path('movies/', include("movies.urls")),
  # Send all requests beginning with "api" to the movie_resource.urls
  path('api/', include(movie_resource.urls))
]
```

