from django.contrib import admin
from django.urls import path
from . import views   # O ponto para mostrar que está dentro da mesma pasta "produtos"

urlpatterns = [
    path('', views.index),  # Assim vai chamar produtos em "nome do projeto"/urls.py
    # para acrescentar páginas:
    path('celulares/', views.celulares),
    path('moveis/', views.moveis),
    path('eletrodomesticos/', views.eletrodomesticos),
]

