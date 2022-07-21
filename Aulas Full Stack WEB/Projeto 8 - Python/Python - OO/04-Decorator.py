# Decorator adiciona recursos a uma função. Adiciona uma função dentro de outra

# SEM DECORATOR
def passo1(p1):
    p1 = f'--{p1}--'

    def passo2(p2):
        print(f'{p1} e {p2}') #  assim consegue executar uma ação antes de outra

    return passo2

#funcao_p2 = passo1('Abrir a porta')
#print(funcao_p2('Entrar no quarto'))

# ou:

passo1('Abrir a porta')('Entrar no quarto') # funciona perfeitamente



# USANDO DECORATOR:


def verifica_usuario_logado(p_funcao):

    def verifica():
        print('[Antes vamos verificar se o usuário está logado... - 30 linhas de cod -]')
        retorno = p_funcao()
        print('[FIM]')
        return retorno

    return verifica

@verifica_usuario_logado
def salvar_postagem():      # POSTAGEM
    print('....[executando]')
    print('Postagem criada')

@verifica_usuario_logado
def salvar_comentario():    # COMENTÁRIO
    print('....[executando]')
    print('Comentário criado')


salvar_comentario()



