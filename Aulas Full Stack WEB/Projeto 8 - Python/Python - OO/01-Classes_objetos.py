"""
notação Pascal Case ex: ContaBancaria    - para Classes
notação camel Case ex:  contaBancaria    - 
notação snake_case ex:  conta_bancaria   - para variaveis, nomes de arquivos ...
"""

"""sintaxe para criar classe:
 class ContaBancaria:
    pass

sintaxe para instanciar:
conta = ContaBancaria()    
"""

#   def __init__ é um construtor.
#   self referencia o próprio objeto. Muito paracido com o "this" em outras linguagens
   

class Conta:
    def __init__(self, nome, saldo): # Construtor
        self.nome = nome           
        self.saldo = saldo  # Atributos


    def depositar(self, valor): # Metodo
        self.saldo += valor

    def sacar(self, valor): # Metodo
        self.saldo -= valor


conta_marcela = Conta("Marcela", 1000)
#conta.depositar(100)
conta_marcela.sacar(100)
print(f'nome: {conta_marcela.nome} - saldo: R$ {conta_marcela.saldo}')


conta_maria = Conta("Maria", 800)
conta.depositar(500)
conta_maria.sacar(200)
print(f'nome: {conta_maria.nome} - saldo: R$ {conta_maria.saldo}')














