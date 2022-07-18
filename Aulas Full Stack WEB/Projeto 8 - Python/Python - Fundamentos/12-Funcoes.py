""""
Funções
"""
#calcula média Jamilton
# totalNotas = 5 + 7 + 5
# media = totalNotas / 3
# #print(f'Média do Jamilton é {media}')
#
#
# def calcular_media(nota1, nota2, nota3):
#     totalNotas = nota1 + nota2 + nota3
#     media = totalNotas / 3
#     return media
#     #print(f'Média do {nome} é {media}')
#
#
# #calcula média Jamilton
# retorno = calcular_media(8, 9, 10)
# print(f'Média do Jamilton é {media}')
#
# #calcula média Ana
# retorno = calcular_media(10, 9, 10)
# print(f'Média do Ana é {media}')


alunos = [
    {'nome': 'Jamilton', 'notas': [8, 8]},
    {'nome': 'Ana', 'notas': [10, 9, 10]},
    {'nome': 'Maria', 'notas': [10, 10, 10, 8]},
]


def calcular_media(notas):
    totalNotas = 0          # independentemente da quantidade de notas que sempre vai fazer a média
    for nota in notas:
        totalNotas += nota # totalNotas vai ter a somatória das notas que foram passadas
    media = totalNotas / len(notas)
    return media
    print(f'Média do(a) {nome} é {media}')


for aluno in alunos:
    nome = aluno['nome']
    notas = aluno['notas']
    media = calcular_media(notas)
    print(f'Média do(a) {nome} é {media}')

   # print(notas)


