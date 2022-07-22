# Vai confirurar o valor para Real e será chamado no "main" assim:
#               from estoque.utilidades.moeda import formatar_real

def formatar_real(preco):
    return f'R$ {preco:.2f}'.replace('.', ',') # replace- substituir


# .replace('.', ',')  - Converte ponto em vírgula