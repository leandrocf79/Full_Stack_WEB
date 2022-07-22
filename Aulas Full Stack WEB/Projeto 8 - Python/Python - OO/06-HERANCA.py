"""
Pilar 3 - Herança 
"""

# Reutilização e manutenção de códigos

# Classe: Cao Passaro
class Animal:#superclasse, classe pai
    def __init__(self):
        self.cor = ''
        self.tamanho = ''
        self.peso = ''

    def correr(self):
        print('correr')

    def dormir(self):
        print('dormir')

class Cao(Animal):#subclasse, classe filha

    def latir(self):
        print('latir')

class Passaro(Animal):#subclasse, classe filha

    def voar(self):
        print('voar')


cao = Cao()
cao.cor = 'Marrom'
cao.correr()
cao.dormir()
cao.latir()
print(cao.cor)

passaro = Passaro()
passaro.cor = 'Amarelo'
passaro.correr()
passaro.dormir()
passaro.voar()

