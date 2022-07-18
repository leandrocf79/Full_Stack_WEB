"""
Operações com textos
"""
texto = "carro"
#print(texto[4])
#print(texto[-5])
#print(texto[2:5]) # a partir de 2 ate 5  rro
#print(texto[:2]) #retona as letras "ca".
#print(texto[::2])
#print(texto[::-1])

#frase = 'Meu nome é \'leandro\''
#frase = 'Meu nome é \n\tleandro'
#frase = """
#leandro
#    teste
#    ...
#"""
#print(frase)

#frase = 'meu nome é \' leandro\''  #vai colocar aspas na string
#frase = 'meu nome é "leandro" '
#frase = "meu nome é 'leandro' "

#frase = """meu \nnome é\n leandro """ Anotação de comentários

dados = "leandro;42anos;1,70"

frase = "meu nome é 'leandro' "
print("leandro" in frase)
print("leandro" not in frase)
print( "joão" not in frase )

#print( len(frase) ) #conta
#print( frase.lower() )
#print( frase.upper() )
#print( frase )
#print( frase.capitalize() )#Deixa a primeira letra de frase em maiuscula
                #print( dir(str) )

#print( frase.__len__() )
print( len(frase) )

#print( frase.split() )
print( dados.split(";") ) #quebra a frase nos espaços em brancos substituindo, neste caso, por ";"

fraseMaiusculo = frase.upper()
print(frase.fraseMaiusculo)
#ou direto
#print( frase.upper() )
