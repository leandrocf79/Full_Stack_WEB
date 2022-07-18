# múltiplos parâmetros (Packing   usa um * )
def somar(*numeros):
    #print(type(numeros))
    total = 0
    for numero in numeros:
        total += numero
    print(f'total: {total}')
somar(1, 10, 9)

# múltiplos parâmetros (unpacking usa uma lista)
def calcular_media(nota1, nota2):
    media = (nota1 + nota2) / 2
    print(f'Média: {media}')

#notas = [10, 8]
notas = (10, 8)
#notas = {10, 8}
calcular_media(*notas) #S(vai fazer o Packing aqui)


# parâmetros opcionais & nomeados
def calcular_media2(nota1, nota2, ponto_extra=0, nota_extra=0):
    media = (nota1 + nota2) / 2 + ponto_extra
    print(f'Média: {media} extra: {nota_extra}')

calcular_media2(9, 9, nota_extra=5)