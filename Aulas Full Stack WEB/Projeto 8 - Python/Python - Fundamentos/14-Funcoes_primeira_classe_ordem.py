"""
Funções como objeto de primeira classe, são funções que se
comportam como qualquer tipo nativo de uma determinada linguagem
"""
def somar(a, b):
    return a + b


def subtrair(a, b):
    return a - b

# lista = [somar, subtrair]
# for funcao in lista:
#     print(funcao(1, 2))
a = somar
print(a(1, 2))

"""
Funções de ordem superior são funções que recebem funções como 
parâmetro(s) e/ou retornam funções como resposta
"""
carrinho_compras = [
    {'produto': 'Fone de Ouvido', 'preco': 500},
    {'produto': 'Controle Xbox', 'preco': 400},
    {'produto': 'Celular', 'preco': 800},
]

#print(carrinho_compras)

def calcular_desconto(lista, funcao): # "funcao" aqui vai remeter ao "subtrair na linha 40
    total = 0
    for produto in lista:
        #print(produto['preco'])
        item_desconto = funcao(produto['preco'], 10)
        total += item_desconto
        print(item_desconto)
    print(f'total: {total}')


calcular_desconto(carrinho_compras, subtrair) # "funcao" vai remeter ao "subtrair" devido ao nome da DEF(calcular_desconto) que está chamando

#uma outra forma é:
#funcao = calcular_desconto(carrinho_compras, subtrair)
#funcao(1, 2)