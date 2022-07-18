"""
Lista e Tuplas: indexadas
lista = ["Jamilton", "Ana"]
lista: 0->"Jamilton", 1-> "Ana"     é possivel definir a chave, o indice
"""
# dicionario = {             #Aqui está sendo utilizado um INDICE string
#     'correr': 'Deslocar-se ou mover-se rapidamente',
#     'ligar': 'Estabelecer uma comunicação',
# }
# print(dicionario['ligar'])   # Veja isso com atenção, parece muito uma função BD

carro = {
    'modelo': 'Fusca',
    'marca': 'volkswagem',
    'ano': 1970,
    'donos': ['Marcos', 'Maria']
}

#print(type(carro))
#print(dir(carro))
#print(carro['modelo'])
carro['donos'].append("Pedro") # vai add um novo dono do veículo
print(carro['donos'][0])
carro['km'] = 8500
carro['ano'] = 1980
#carro.update({'ano': 1980, 'km': 8500}) # Alem de atualizar valores ainda cria novos indices

#del carro['ano']
# valor = carro.pop('ano')
# print(valor)
#print(carro.keys())
#print(carro.values())
#print(carro.items())
"""
GET -> Conjunto
"""
#print(carro.get('Km', 'Não encontrado')) # GET - Se não encontrar Km exibe a 'Não encontrado'
#print(len(carro))
# carro.clear()
# print(carro)

"""
SET -> Conjunto (Só permite 1  valor igual)
"""
#lista = ["Jamilton", "José", "Ana", "Ana"] #lista
itens = {"Jamilton", "José", "Ana", "Ana", "Ana"}     # set {}
#print(type(itens))
#print(itens)

carros = {"fusca", "gol", "fiat 147"}
carros2 = {"BMW", "fusca", "passat"}
novo = carros.union(carros2)
#novo = carros.intersection(carros2)
carros.add("BMW")
#carros.remove("fusca")
print(carros)

carros.  #exibe o que pode ser utilizado