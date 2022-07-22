
lista = ['Rogério', 'Ana']
dicionario = {'nome': 'Rogério'}

#print(lista[3]) # vai dar erro por estar fora a chamada[3]. Para isso usar try:

try:#tentar
   # print(lista[1])
     print(lista[3])
    #print(dicionario['teste'])

#except Error  -> Digitando isso já vai aparecer uma lista de erros 

#except IndexError as erro: 

except (IndexError, KeyError) as erro: # Exceto
    #erro = "- Erro: 304B" # inventei valor de erro, apanas para identificar local do erro em um utilização real.
    print(f'Item selecionado fora lista: {erro}')

except Exception as erro: # Exceto.   Exception - erro GENÉRICO, é um erro padrão, pode ser usado outros quando se sabe o erro que vai acontecer.
    print(f'Exception: {erro}')
else:
    print('Executou com sucesso!')
finally:          # Sempre executa independentemente de rro ou não.
    print('Sempre executada, independente de erro ou não')

print('Continua executando')