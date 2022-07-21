-- Pode criar chave primaria com 1 ou mais id (exemplo: CPF e email)

-- Vale a pena lembrar que valor em PRODUTO vai ser atualizado ao longo do tempo e
-- valor de PEDIDOS fica registrado no histórico de compras do usuário.

CREATE TABLE IF NOT EXISTS produtos 
(
	produto_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,  /*  UNSIGNED - sem sinal. Para não utilizar números negativos*/
	titulo VARCHAR(100),
    descricao TEXT,
     preco DECIMAL(15,2),  -- Valor atualizado constantemente
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70),
    UNIQUE KEY(titulo)  /* UNIQUE KEY - cria chave única, mas não é um id. 
                           Neste caso, no Mercado Livre, pode ter 2 títulos iguais, 
                           mas com vendedores diferentes, não é interessante usar.  */
);

CREATE TABLE IF NOT EXISTS pedidos 
(
	pedido_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    produto_id INT UNSIGNED NOT NULL,
     preco DECIMAL(15,2),  -- Valor histórico para o usuário
    quantidade SMALLINT,
    usuario VARCHAR(40),
    CONSTRAINT produtos_id_fk -- CONSTRAINT gera uma conexão forte, mantém a consistência do dados. Não consegue comprar um produto por id que não existe.
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);


/* DADOS ATÔMICOS 
Colocar todos os dados de um endereço agrupados, sempre que 
precisar dos dados serão exibidos completamente*/

INSERT INTO produtos VALUES(
null, 'Headphone Philips Wireless BT Preto TAH1205BK/000', 'descricao longa...', 94.34,
'eletronicos', 'philips', 'foto1, foto2, foto3');

INSERT INTO produtos VALUES(
null, 'Console Nintendo Switch - Azul Neon e Vermelho Neon (Nacional)', 'descricao longa...', 2199.90,
'games', 'nintendo', 'foto1, foto2, foto3'
);


-- Simulando um pedido:
--                      produto_id,  preco, quantidade, usuario
INSERT INTO pedidos VALUES(null, 2, 2199.90, 1, 'maria.silva');
DELETE FROM produtos WHERE id = 2;
DELETE FROM pedidos WHERE id = 1;

SELECT * FROM pedidos JOIN produtos USING(produto_id);



/* Limpar e remover tabelas */
DROP TABLE IF EXISTS produtos;
TRUNCATE TABLE vendas;