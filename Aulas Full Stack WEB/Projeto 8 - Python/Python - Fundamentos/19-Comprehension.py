""""
List Comprehension (compreensão de lista) ->
É uma construção sintática para
criação de uma lista baseada em listas existentes.
"""

#lista = [10, 20, 30]

# Usada como Map
# nova_lista = [ item * 2   for item in lista] # aqui no primeiro "item" da esquerda é onde criam-se os cálculos
# print(nova_lista)

#nova_lista = map(lambda n: n * 2, lista)
#print(list(nova_lista))


#usada como filter
#nova_lista = [item for item in lista if item >= 20 if item < 30]
# nova_lista = [i if i >= 20 and i < 30 else 0 for i in lista]
# print(nova_lista)

lista = [10, 20, 30]

dicionario = {f'chave{i}': i for i in lista}
print(dicionario)
