"""
Pilar1 - Abstração 

(Venda de peças e Uber)
Modelo, Entidade, Identidade
Características e ações
"""


class Carro:
    def __init__(self, modelo, cor, placa): # Entidade
        self.modelo = modelo   # Atributos
        self.cor = cor
        self.placa = placa

    def exibir_local_atual(self):  # Metodos
        print('Carro está na rua tal número 10') # poderia ser um mapa

carro = Carro("gol", "prata", "JHM-6854") # isso é uma identidade

#carro_ana = Carro("golf", "preto", "ABC-2345")



# Loja Virtual
class Produto:

# roupas
    """def __init__(self, tamanho, cor, preco):
        self.tamanho = tamanho
        self.cor = cor
        self.preco = preco
"""

# eletrônicos
    def __init__(self, largura, altura, cor, preco):
        self.largura = largura
        self.altura = altura
        self.cor = cor
        self.preco = preco

#produto = Produto("G", "preto", 25.60)
produto = Produto("50cm", "80cm", "preto", 25.60)




