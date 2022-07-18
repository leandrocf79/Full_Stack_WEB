
# função lambda é anônima

def subtrair(a, b):
    return a - b

# variavel = subtrair
#print(variavel(1, 3))

# sub = lambda a, b: print(f'resultado: {a - b}')
#print(sub(1, 3))
# sub(1, 3)

lista = [
    {'produto': 'Fone de Ouvido', 'preco': 500},
    {'produto': 'Controle Xbox', 'preco': 400},
    {'produto': 'Celular', 'preco': 800},
]

def calcular_desconto(lista, funcao):
    total = 0
    for produto in lista:
        item_desconto = funcao(produto['preco'], 10)
        total += item_desconto
        print(item_desconto)
    print(f'total: {total}')


calcular_desconto(lista, lambda a, b: a - b) # aqui o "a" é o "produto['preco']" e o "b" é o 10
