"""
Atributo de classe
Atributo de instância
"""
# class Pessoa:
#     planeta = 'terra' #Atributo de classe. Fica disponível para todos os atributos

#     def __init__(self):
#         self.nome = 'sem nome'   # .nome é um atributo de instância. Para cada instância criada 'sem nome' é substiruido.
#         #self.planeta = 'marte'
#
# #Pessoa.planeta = 'Marte'
# print(Pessoa.planeta)
# jamilton = Pessoa()
# jamilton.nome = 'Jamilton'
# print(jamilton.planeta)
#
# ana = Pessoa()
# ana.nome = 'Ana'
# print(ana.planeta)

"""
Método de classe
Método de instância
"""
class Pessoa:
    planeta = 'terra'

    def __init__(self, nome):
        self.nome = nome

    # Vê apenas a instância
    def exibir_nome(self):
        print(f'Nome: {self.nome}')

    # @classmethod vê apenas a classe e não instância
    @classmethod
    def exibir_planeta(cls):
        print(f'Planeta: {cls.planeta}')

    # Não sabe nada sobre a classe ou instância
    @staticmethod
    def recuperar_planetas_habitaveis():
        print(f'Terra e Marte')


#Pessoa.exibir_planeta()
#Pessoa.recuperar_planetas_habitaveis('Jamilton')
jamilton = Pessoa('Jamilton')
jamilton.exibir_planeta()
jamilton.recuperar_planetas_habitaveis()
#jamilton.exibir_nome()
print("\n")

ana = Pessoa('Ana')
ana.exibir_planeta()
ana.recuperar_planetas_habitaveis()
ana.exibir_nome()