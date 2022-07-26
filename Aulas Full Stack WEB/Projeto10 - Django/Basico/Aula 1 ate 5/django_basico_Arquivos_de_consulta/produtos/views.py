

""" MELHOR USAR A OUTRA MANEIRA DE FAZER ISSO USANDO render()


from django.http import HttpResponse
# Create your views here.
def index(request):
    return HttpResponse('Página de produtos')


def celulares(request):
    return HttpResponse('Página de celulares')
"""


from django.shortcuts import render
# Create your views here.
tipo = ''
idade = 2

if idade < 12:
    tipo = 'Criança'
elif idade >= 12 and idade < 18:
    tipo = 'Adolescente'
else:
    tipo = 'Adulto'



def index(request):
    context = {

        'nome': 'Leandro CF',  # vá em index para observar
        'ultimo_acesso': '26/07/2022',
        'idade': 15,
        'tipo1': tipo,
        'produtos_loja': [
            {'nome': 'Notebook Acer', 'preco': '1200.00'},
            {'nome': 'Notebook Samsung', 'preco': '1750.00'},
            {'nome': 'Notebook Dell', 'preco': '2330.00'}
        ]
    }
    return render(request, 'index.html', context)


def celulares(request):
    return render(request, 'celulares.html')

def moveis(request):
    return render(request, 'moveis.html')


def eletrodomesticos(request):
    return render(request, 'eletrodomesticos.html')