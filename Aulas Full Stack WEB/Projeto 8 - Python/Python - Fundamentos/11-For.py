# postagens = [
#     "Hoje passeado pela avenida paulista",#0
#     "Fazendo trilha na pedra do Gavião",#1
#     "Hoje fiz um curso de criação de Sistemas",#2
#     "Na casa da mãe, almoçando todos juntos",#3
# ]
# totalPostagens = len(postagens)# 4
#
# contador = 0
# while contador < totalPostagens:
#     print(f'{contador} - {postagens[contador]}')
#     contador += 1
#     print("+++++++")

postagens = [
    "Hoje passeado pela avenida paulista",#0
    "Fazendo trilha na pedra do Gavião",#1
    "Hoje fiz um curso de criação de Sistemas",#2
    "Na casa da mãe, almoçando todos juntos",#3
]

# for postagem in postagens:      # Mais simples que while
#     print(postagem)
#     print("+++++++")


# nome, nome2 = "jamilton", "jamilton2"
# print(nome)
# print(nome2)

# for indice, postagem in enumerate(postagens):     # colocar indice. USAR ESSE
#     print(f'{indice} - {postagem}')
#     print("+++++++")


# for indice in range(3, 11):    # exibir intervalos, exibe 3 até 10 e para até 10 usar:  in range(11)
#     print(postagens[indice])


# totalPostagens = len(postagens)
# for indice in range(totalPostagens):
#     print(postagens[indice])

"""
Percorrendo textos, tuplas, set
"""
# palavra = "jamilton"
# for letra in palavra:
#     print(f'- {letra} - ')

# meses = ('Janeiro', 'Fevereiro', 'Março')
# for mes in meses:
#     print(f'- {mes} - ')

frutas = {'banana', 'maça', 'abacaxi', 'melancia'}  # usando {} é o mesmo que usar SET
for fruta in frutas:
    print(f'- {fruta} - ')

