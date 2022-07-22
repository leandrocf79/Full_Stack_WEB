"""
Pilar 4 - Polimorfismo 
"""


"""
Polimorfismo -> Qualidade ou estado de ser capaz de
assumir diferentes formas
Poli -> muitas
morfo -> formas

CORRER para um cão é diferente para pássaro
"""
class Animal:#superclasse, classe pai
    def __init__(self, cor, tamanho, peso):
        self.cor = cor
        self.tamanho = tamanho
        self.peso = peso

    def correr(self):
        print('correr ')
        print('como ')
        print('um ')

    def dormir(self):
        print('dormir')

    def __str__(self):
        return f'cor: {self.cor}, tamanho: {self.tamanho}, peso: {self.peso}'



class Cao(Animal):#subclasse, classe filha
    #def __init__(self, cor, tamanho, peso, raca):
    def __init__(self, cor, tamanho, peso): # se fizer assim fica opcional o preenchimento dos dados: def __init__(self, cor"", tamanho"", peso""):
        super().__init__(cor, tamanho, peso) #super() está chamando os atributos e metodos da classe pai (Animal)
        self.peso = f'{peso} Kg'
        #self.raca = raca

    def latir(self):
        print('latir')

    # Sobrescrita de método -> override
    def correr(self):
        super().correr()
        print('cão')

    def __str__(self):
        return super().__str__() + f', raça: {self.raca}'

class Passaro(Animal):#subclasse, classe filha
    def __init__(self, cor, tamanho, peso):
        super().__init__(cor, tamanho, peso)

    def voar(self):
        print('voar')

    # def correr(self):
    #     super().correr()
    #     print('passaro')

# Herança MULTIPLA (papagaio herda de passaro que herda de animal).Isso não é possivel em javascript
class Papagaio(Passaro, Cao):
    def __init__(self, cor, tamanho, peso):
        super().__init__(cor, tamanho, peso)

    def correr(self):
        print('Correr')

    def falar(self):
        print('falar')


cao = Cao('Marrom', '40cm', '1')
#print(cao)
#cao.correr()

passaro = Passaro('Amarelo', '30cm', '500g')
#print(passaro)
#passaro.correr()

papagaio = Papagaio('Verde', '20cm', '800g')
papagaio.correr()#Animal
papagaio.voar()#Passaro
papagaio.falar()#papagaio
papagaio.latir()#cao
