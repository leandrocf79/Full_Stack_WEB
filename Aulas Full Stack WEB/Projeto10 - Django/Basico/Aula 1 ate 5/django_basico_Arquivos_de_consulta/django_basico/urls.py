"""django_basico URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from home.views import index
# from produtos.views import index # uma outra forma de adicionar: não fazer assim.

urlpatterns = [
    # path('', admin.site.urls), # assim é que está acessando rota inicial
    path('', index), # aqui não terá outras rotas, por isso pode usar assim
    path('admin/', admin.site.urls),
    path('produtos/', include('produtos.urls')),
    path('clientes/', include('clientes.urls')),

    # uma outra forma de adicionar: não fazer assim.
    # path('produtos', index)
]
