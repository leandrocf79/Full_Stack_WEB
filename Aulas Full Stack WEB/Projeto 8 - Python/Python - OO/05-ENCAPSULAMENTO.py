"""
Pilar2 - Encapsulamento
"""


class Filtro:
    def __init__(self, imagem):
        self.imagem = imagem

    def preto_e_branco(self):
        print(f'{self.imagem} com filtro preto e branco')

    def foto_envelhecida(self):
        print(f'{self.imagem} com filtro envelhecido')
        print(f'Também com efeito amarelado')


# filtro = Filtro('foto_estilosa.jpg')  # apenas uma simulação. Aqui seria a utilização pelo usuário, enquanto que, se tiver que fazer algum ajuste no código será na classe Filtro.
# filtro.foto_envelhecida()


# Controle de acesso e Getter e Setters:

class Conta:
    def __init__(self, saldo):
        self._numero = 0  # número da conta
        self._saldo = saldo

    @property  # decorator para recuperar algo de outra função
    def numero(self):
        return self._numero

    @numero.setter # decorator para adicionar recursos - set
    def numero(self, valor):
        if valor > 0:
            self._numero = valor
        else:
            print('Número inválido')

    def depositar(self, valor):
        self._saldo += valor

    def sacar(self, valor):
        self._saldo -= valor


    @property  # decorator para recuperar algo de outra função
    def saldo_atual(self):
        return (f"Saldo: R$ {self._saldo}")
        


conta = Conta(800.47) # Saldo de 800,00
conta.numero = 10.589 # Número da conta
print("Número da conta: ", conta.numero)

conta.sacar(100)
conta.depositar(500)
print(conta.saldo_atual)

# print(conta._saldo) # nunca chamar diretamente quando tiver underline. Private.
