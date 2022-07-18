from functools import reduce
# Reduce (reduzir) -> acumula e reduz uma lista em um único
# valor
# não vem dentro do bultins

lista = [10, 2, 2]

# acumula = 0
# for item in lista:
#     #acumula = acumula + item    # aqui é o acumulador
#     acumula += item          # ou assim.


# o reduce funciona assim:
# 0 - 10 = -10 (acumulador)
# -10 - 2 = -12
# -12 - 2 = -14


# print(acumula)
# funcao = lambda acumulador, item: acumulador - item
# resultado = reduce(funcao, lista, 0)
# print(resultado)

lista = [
    {'produto': 'Fone de Ouvido', 'preco': 500},
    {'produto': 'Controle Xbox', 'preco': 400},
    {'produto': 'Celular', 'preco': 800},
]

funcao = lambda acumulador, produto: acumulador + produto['preco']
resultado = reduce(funcao, lista, 0)
print(resultado)


