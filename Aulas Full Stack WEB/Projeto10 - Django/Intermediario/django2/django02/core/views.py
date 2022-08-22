from django.shortcuts import render
from django.contrib import messages
from django.shortcuts import redirect

from .forms import ContatoForm, ProdutoModelForm
from .models import Produto


def index(request):
    context = {
        'produtos': Produto.objects.all()
    }
    return render(request, 'index.html', context)

# Forms
def contato(request):
    form = ContatoForm(request.POST or None)

    if str(request.method) == 'POST':
        if form.is_valid():
            form.send_mail()

            messages.success(request, 'E-mail enviado com sucesso!')
            form = ContatoForm()
        else:
            messages.error(request, 'Erro ao enviar e-mail')
    context = {
        'form': form
    }
    return render(request, 'contato.html', context)


def produto(request):
    # print(f'Usuário logado: {request.user}') <--Após logoff de admin na pagina web vai aparecer 'AnonymousUser' no terminal
    if str(request.user) != 'AnonymousUser': # <---AnonymousUser. Se o usuário NÃO for anônimo entra no próximo if e faz tudo como antes. Esse é o bloqueio.
        if str(request.method) == 'POST':
            form = ProdutoModelForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()  # Significa: O formulario está vago?? Salvar.

                # Para testar apagar o form.save() acima para imprimir no terminal como teste usando o conteúdo abaixo:
                """
                prod = form.save(commit=False)
                print(f:'Nome: (prod.nome))
                print(f:'Preço: (prod.preco))
                print(f:'Estoque: (prod.estoque))
                print(f:'Imagem: (prod.imagem))
                
                # Ver agora produto.html
                """

                messages.success(request, 'Produto salvo com sucesso.')
                form = ProdutoModelForm()   # <--- Esse é o destroier, vai limpar o formulário
            else:
                messages.error(request, 'Erro ao salvar produto.')
        else:
            form = ProdutoModelForm()
        context = {
            'form': form
        }
        return render(request, 'produto.html', context)
    else:      # Com a configuração de 'AnonymousUser' deve importar:  from django.shortcuts import redirect
        return redirect('index')
