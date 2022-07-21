# Métodos
#cadastro email: lcf@gmail.com senha: 1234

class Usuario:
    def __init__(self, email, senha):
        self.email = email
        self.senha = senha
        self.enderecos = []

    def __str__(self): # esse método mágico str é a string chamada automaticamente
        return f'email: {self.email}, senha: {self.senha}'

    def __iter__(self):
        return self.enderecos.__iter__() # __iter__() serve para que a lista possa ser percorrida


    def _validar(self):    # simulando um BD pelo metodo LOGIN. _validar é privado, deve ser acessado dentro da prórpia classe. Não estanciar diretamente!
        email_c = 'lcf@gmail.com'
        senha_c = '1234'

        if email_c == self.email and senha_c == self.senha: # Validando acesso
            print('Usuario validado')
        else:
            print('Email ou senha incorretos')


    def login(self):      # LOGIN
        self._validar()
        print('enviar para a tela principal')


    def senha_forte(self): # testando parâmetros de segurança. Aqui tem somente o tamanho.
        if len(self.senha) >= 5:
            return True
        else:
            return False

    # def cadastrar_endereco(self, endereco1, endereco2):
    #     print(f'Endereços: {endereco1}, {endereco2}')

    def cadastrar_endereco(self, *enderecos): # O " * " vai distribuir na lista. Unpacked
        for endereco in enderecos:
            print(f"endereço: {endereco}")


usuario = Usuario('lcf@gmail.com', '12345') # caixa de texto
usuario.enderecos = ['Rua 1', 'Rua 2', 'Rua 3']

for endereco in usuario:   # in - vai percorrer todos os endereços do usuário
    print(f"endereço: {endereco}")

print(usuario)

#print(usuario)
#usuario.logar()
# if usuario.senha_forte():
#     print('Senha Forte')
# else:
#     print('senha fraca')
#lista = ['Rua 1', 'Rua 2']
#usuario.cadastrar_endereco(*lista)
#usuario.cadastrar_endereco('Rua 1', 'Rua 2')

