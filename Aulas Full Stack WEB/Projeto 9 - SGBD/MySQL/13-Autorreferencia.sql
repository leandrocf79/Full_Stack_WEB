-- Usuário se cadastrou por indicação de outro

CREATE DATABASE empresa04;
USE empresa04;

CREATE TABLE IF NOT EXISTS clientes 
(
	id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    sobrenome VARCHAR(100)
);
INSERT INTO clientes VALUES(null, 'Maria', 'Almeida');
INSERT INTO clientes VALUES(null, 'João', 'Silva');
INSERT INTO clientes VALUES(null, 'Carla', 'Carvalho');



ALTER TABLE clientes ADD COLUMN id_cliente_indicacao INT UNSIGNED;
INSERT INTO clientes VALUES(null, 'Leandro', 'Fernandes', 1);  -- Leandro foi indicação de 1 (Maria Almeida)

/*
UPDATE clientes SET id_cliente_indicacao = 1 WHERE id_cliente = 3;
UPDATE clientes SET id_cliente_indicacao = 4 WHERE id_cliente = 2;
*/

SELECT c.nome, c.sobrenome, c2.nome nome_indicacao
FROM clientes c LEFT JOIN clientes c2 
ON c.id_cliente_indicacao = c2.id_cliente;