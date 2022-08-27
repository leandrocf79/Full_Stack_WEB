from django.urls import path

#from .views import IndexView,      TesteViews, Teste404, Teste500   # <-- apagar imports !!!
from .views import IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
]



"""  Deixar esse conteúdo fora para não dar erro

path ('teste/', TesteViews.as_view(), name='teste'), # Se alguem digitar teste/ no navegador abre página teste.
path ('404/', Teste404.as_view(), name='404'),
path ('500/', Teste500.as_view(), name='500'),
"""