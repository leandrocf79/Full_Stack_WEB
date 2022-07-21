CREATE DATABASE empresa02;
USE empresa02;

-- Apenas para aula, não fazer assim no trabalho

CREATE TABLE IF NOT EXISTS clientes 
(
	id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    sobrenome VARCHAR(100)
);
INSERT INTO clientes VALUES(null, 'Maria', 'Almeida');
INSERT INTO clientes VALUES(null, 'João', 'Silva');
INSERT INTO clientes VALUES(null, 'Carla', 'Carvalho');

/*
Compras da Maria
	- Notebook Samsung Book qtd: 1 preco: 3000
    - Smart TV LED 32” HD   qtd: 1 preco: 2000
    
*/

-- Um cliente e muitos pedidos

CREATE TABLE IF NOT EXISTS pedidos        -- CURRENT_TIMESTAMP é a hora do SERVIDOR !!!
(
	id_pedido INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT UNSIGNED NOT NULL,
    data_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Valor DEFAULT é a data atual --> CURRENT_TIMESTAMP - define data atual 
    produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(15,2) NOT NULL,
    CONSTRAINT clientes_id_cliente_fk 
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos VALUES(NULL, 1, DEFAULT, 'Notebook Samsung Book', 1, 3000); -- DEFAULT - data atual como programado acima
INSERT INTO pedidos VALUES(NULL, 1, DEFAULT, 'Smart TV LED 32” HD', 1, 2000);

INSERT INTO pedidos VALUES(NULL, 2, DEFAULT, 'Smart TV LED 32” HD', 1, 2000);

SELECT * from pedidos;


/* Limpar e remover tabelas */
DROP TABLE IF EXISTS produtos;
TRUNCATE TABLE vendas;