/*      ATENÇAÕ ESPECIAL:
DROP TABLE pais; Apaga a tabela.
TRUNCATE TABLE pais; Apaga o todo o conteúdo da tabela
DELETE FROM cidade WHERE id = 1;  Apaga um item específico
*/

CREATE DATABASE IF NOT EXISTS SuperGames DEFAULT CHARACTER SET utf8 ;
USE SuperGames ;

-- -----------------------------------------------------
-- Table `SuperGames`.`localizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS localizacao (
  loc_pk INT (3)  PRIMARY KEY AUTO_INCREMENT,
  secao VARCHAR(50) NOT NULL,
  prateleira INT(3) ZEROFILL NOT NULL
  );
-- DROP TABLE localizacao; -- não tem comando reverso (Ctrl+z), apagou perdeu mesmo!

-- -----------------------------------------------------
-- Table `SuperGames`.`jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS jogos (
jogo_pk INT(3) PRIMARY KEY AUTO_INCREMENT,
nome_do_jogo VARCHAR(50) NOT NULL,
valor_R$ DECIMAL(6,2) NOT NULL,
prateleira_fk INT(3) NOT NULL,
FOREIGN KEY (prateleira_fk)
	REFERENCES localizacao(loc_pk)
);


    
INSERT localizacao VALUES
(0, "Guerra", "001"),
(0, "Guerra", "002"),
(0, "Aventura", "100"),
(0, "Aventura", "101"),
(0, "RPG", "150"),
(0, "RPG", "151"),
(0, "RPG", "152"),
(0, "Plataforma 2D ", "200"),
(0, "Plataforma 2D ", "201 ");

INSERT jogos VALUES
(0, "COD 3", 125.23, 1),
(0, "BTF 1", 173.92, 2),
(0, "Zelda B", 105.20, 3),
(0, "Zelda C", 400.03, 4),
(0, "Crhono T", 244.56, 5);

-- outra forma de inserir valores
INSERT INTO jogos (nome_do_jogo, valor_R$, prateleira_fk) VALUES
("Medal of Honor", 334.47, 1),
("Medal of Honor 2", 234.56, 2),
('Call of Duty', 333.99, 2),
('Call of Duty', 333.99, 1);


SHOW TABLES;
SHOW COLUMNS FROM jogos;

SELECT * FROM localizacao;
SELECT * FROM jogos;

-- identificar nome do jogo e prateleira
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_pk = jogos.prateleira_fk;


-- identificar nome do jogo de aventura
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_pk = jogos.prateleira_fk
WHERE secao = 'Aventura';

-- identificar e ordedar crescente as secoes    (LEFT, ASC) 
SELECT  jogos.nome_do_jogo, localizacao.prateleira, localizacao.secao
FROM jogos LEFT JOIN localizacao  
ON localizacao.loc_pk = jogos.prateleira_fk
ORDER BY jogos.nome_do_jogo ASC;

-- Inserir novos jogos
INSERT jogos VALUES 
(0, "Sur Meoid", 174.97, 7),
(0, "Donkey Kong", 374.00, 8),
(0, "FF XV", 144.54, 5),
(0, "SMB", 199.00, 6);
SELECT * FROM jogos;

SET AUTOCOMMIT = 0;  
SAVEPOINT ponto1;   -- criar um ponto de restaquracao para caso de erro e ROLLBACK para restaurar
-- ROLLBACK não serve para EXCLUSÕES DE TABELAS, mas de dados sim. Deletou perdeu! É somente para correção de dados.

UPDATE jogos SET nome_do_jogo = "Super Metroid" WHERE jogo_pk ; -- vai gerar um erro proposital
SELECT nome_do_jogo FROM jogos;

ROLLBACK TO SAVEPOINT ponto1; -- somente para correção de dados.
SELECT nome_do_jogo FROM jogos;

UPDATE jogos SET nome_do_jogo = "Super Metroid" WHERE jogo_pk =  10;


-- É recomendado dar um COMMIT sempre após um UPDATE para salvar o estado atual

COMMIT; -- ATENÇÃO !!! Não será possivel voltar a um ponto de restauração anterior ao COMMIT

SAVEPOINT ponto2;

-- Alterar valor dos jogos em promoção
UPDATE jogos SET valor_R$ = valor_R$ * 0.5
WHERE prateleira_fk = 3; -- ZELDA B vai para o valor 52,60
SELECT * FROM jogos; 


UPDATE jogos SET valor_R$ = valor_R$ * 1.3
WHERE prateleira_fk = 4; -- Zelda C vai para 130.04

SELECT * FROM jogos; 

-- UPDATE jogos SET valor_R$ = valor_R$ * 0.5
-- WHERE nome_do_jogo = 'FF XV';                      -- DEU ERRO

-- Criar tabela promocao
CREATE TABLE promocao(
promo_pk INT (3) NOT NULL,
cod_promocao_jogo INT(3) NOT NULL,
FOREIGN KEY (cod_promocao_jogo)
	REFERENCES jogos (jogo_pk )
);
-- INSERIR VALORES JOGO 1 E 2
INSERT promocao VALUES(0, 1), (0, 2);
SELECT * FROM promocao;
SELECT * FROM jogos; 


-- exibir jogos em promocao
SELECT jogos.nome_do_jogo, jogos.valor_R$
FROM jogos
WHERE jogos.jogo_pk IN 
-- SUBCONSULTA
(SELECT cod_promocao_jogo FROM promocao);


-- jogos que não estão em promoção NOT IN
SELECT jogos.nome_do_jogo, jogos.valor_R$
FROM jogos
WHERE jogos.jogo_pk NOT IN 
-- SUBCONSULTA
(SELECT cod_promocao_jogo FROM promocao);

SELECT nome_do_jogo AS 'Mais barato!!'
FROM jogos WHERE valor_R$ = SOME (
SELECT MIN(valor_R$) FROM jogos);

SELECT nome_do_jogo FROM jogos; 

-- inserir o numro 1 em Medal of Honor
UPDATE jogos SET nome_do_jogo = 'Medal of Honor 1' WHERE jogo_pk = 6;
SELECT nome_do_jogo FROM jogos WHERE nome_do_jogo = 'Medal of Honor 1';

SELECT nome_do_jogo FROM jogos; 
SELECT jogo_pk ,nome_do_jogo, prateleira_fk  FROM jogos; 
SELECT * FROM jogos;

-- DELETE -- No filme dos Vingadores THANOS destruiu metade do universo. Grandes poderes, 
-- grandes responsabilidades.

-- não tem comando reverso (Ctrl+z), apagou perdeu mesmo!

-- Apagar Call of Duty da prateleira 1
 DELETE FROM jogos WHERE jogo_pk = 9; -- Cuidado, não tem comando reverso
SELECT * FROM jogos WHERE jogo_pk = 9;

SELECT * FROM jogos ORDER BY nome_do_jogo; -- Crescente
SELECT * FROM jogos ORDER BY nome_do_jogo DESC; -- Decrescente

-- OBSERVE A ORDEM:   
--       SELECT __ FROM __ WHERE__
--          DELETE FROM __ WHERE__
--        SELECT __ FROM __ ORDER BY__DESC

-- identificar nome do jogo de guerra
SELECT jogos. jogo_pk, jogos.nome_do_jogo, localizacao.prateleira, localizacao.secao
FROM jogos INNER JOIN localizacao
ON localizacao.loc_pk = jogos.prateleira_fk
WHERE secao = 'Guerra' ORDER BY jogo_pk;

-- CRIAR ESTOQUE
ALTER TABLE jogos ADD estoque INT(3) NOT NULL AFTER valor_R$;
SELECT * FROM jogos;

-- ADD quantidades no estoque para 30 e corrija os que tiverem valores diferentes
UPDATE jogos SET estoque = 30 WHERE jogo_pk;

UPDATE jogos SET estoque = 23 WHERE jogo_pk = 1;
UPDATE jogos SET estoque = 14 WHERE jogo_pk = 2;
SELECT * FROM jogos;


-- quantos generos existem em cada categoria
SELECT COUNT(loc_pk) secao FROM localizacao GROUP BY secao; -- usar chave primaria para contar de forma distinta

SELECT * FROM jogos, promocao;

SELECT COUNT(secao) FROM localizacao;
SELECT COUNT(jogo_pk) FROM jogos;
SELECT COUNT(nome_do_jogo) FROM jogos;

-- VIEW para atualização do SELECT, esse recurso já fica armazenado para agilizar consulta em BD muito grandes
CREATE VIEW V_tabelas AS
SELECT jogos.jogo_pk, jogos.nome_do_jogo AS 'NOME', jogos.valor_R$, localizacao.secao
FROM jogos INNER JOIN localizacao
WHERE jogos.prateleira_fk = localizacao.loc_pk
AND jogos.valor_R$ > 150; 

SELECT * FROM V_tabelas;

-- DROP VIEW V_tabelas;

/*nomes de todos os jogos na tabela com nomes iniciados por ‘me’”:*/
SELECT nome_do_jogo
FROM jogos
WHERE nome_do_jogo LIKE "me%";
 