from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'clientes/index.html') # Aqui vai o arquivo HTML. Não precisa escrever templates/, é  padrão.

def email(request):
    return render(request, 'clientes/email.html')