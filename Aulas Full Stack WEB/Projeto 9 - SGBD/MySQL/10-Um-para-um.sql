CREATE DATABASE empresa01;
USE empresa01;

CREATE TABLE IF NOT EXISTS funcionarios 
(
	id_funcionario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    sobrenome VARCHAR(100)
);
INSERT INTO funcionarios VALUES(null, 'Maria', 'Almeida');
INSERT INTO funcionarios VALUES(null, 'João', 'Silva');
INSERT INTO funcionarios VALUES(null, 'Carla', 'Carvalho');
INSERT INTO funcionarios VALUES(null, 'Pedro', 'Silvério');
INSERT INTO funcionarios VALUES(null, 'Ana', 'Carla');

CREATE TABLE IF NOT EXISTS cargos 
(
	id_cargo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50),
    salario DECIMAL(15,2)
);
INSERT INTO cargos VALUES(null, 'CEO', 30000.00);
INSERT INTO cargos VALUES(null, 'Diretor', 20000.00);
INSERT INTO cargos VALUES(null, 'Gerente', 15000.00);
INSERT INTO cargos VALUES(null, 'Programador', 10000.00);
INSERT INTO cargos VALUES(null, 'Auxiliar Administrativo', 5000.00);

CREATE TABLE IF NOT EXISTS salarios 
(
	id_salario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_funcionario INT UNSIGNED NOT NULL UNIQUE KEY, -- UNIQUE KEY vai definir apenas 1 salario
    id_cargo INT UNSIGNED NOT NULL,
    CONSTRAINT funcionarios_id_funcionario_fk
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario),
    CONSTRAINT cargos_id_cargo_fk
    FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo)
);
-- DROP TABLE salarios;
INSERT INTO salarios VALUES(null, 5, 2);
INSERT INTO salarios VALUES(null, 2, 4);
INSERT INTO salarios VALUES(null, 3, 4);


SELECT * FROM empresa01.salarios ;



CREATE TABLE IF NOT EXISTS cargos 
(
	id_cargo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50),
    salario DECIMAL(15,2)
);
INSERT INTO cargos VALUES(null, 'CEO', 30000.00);
INSERT INTO cargos VALUES(null, 'Diretor', 20000.00);
INSERT INTO cargos VALUES(null, 'Gerente', 15000.00);
INSERT INTO cargos VALUES(null, 'Programador', 10000.00);
INSERT INTO cargos VALUES(null, 'Auxiliar Administrativo', 5000.00);


/*
Outro exemplo
*/
CREATE TABLE IF NOT EXISTS produtos 
(
	id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(100),
    preco DECIMAL(15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70)
);
INSERT INTO produtos VALUES(
null, 'Notebook Dell Inspiron 15 3000', 3200.90,
'Eletrônicos', 'Dell', 'foto1...'
);

CREATE TABLE IF NOT EXISTS produtos_detalhes 
(
	id_produto_detalhe INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_produto INT UNSIGNED NOT NULL UNIQUE KEY,
    descricao TEXT,
    informacoes_adicionais TEXT,
    cor VARCHAR(15),
    memoria_interna VARCHAR(8),
    tipo_tela VARCHAR(8),
    conectividade VARCHAR(8),
    CONSTRAINT produtos_id_produto_fk 
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
INSERT INTO produtos_detalhes VALUES(
null, 1, 'descrição de teste...', 'informações de teste...', 'prata',
'500GB', 'Retina', 'wifi'
);


SELECT * FROM produtos_detalhes;


/* Limpar e remover tabelas */
DROP TABLE IF EXISTS produtos;
TRUNCATE TABLE vendas;