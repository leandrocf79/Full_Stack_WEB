# Map -> Mapear os dados, percorrer e alterá-los
#lista_numero = [10, 20, 30]

#nova_lista = map(lambda n: n * 2, lista_numero)  # n * 2  vai multiplicar cada valor por 2
# for item in nova_lista:
#     print(item)
# l = list(nova_lista)
# print(type(l))
#    print(list(nova_lista))


lista = [
    {'produto': 'Fone de Ouvido', 'preco': 500},
    {'produto': 'Controle Xbox', 'preco': 400},
    {'produto': 'Celular', 'preco': 800},
]

def calcular_desconto(produto):
    produto['preco'] = produto['preco'] - 10
    return produto

nova_lista = map(calcular_desconto, lista)
print(list(nova_lista))

