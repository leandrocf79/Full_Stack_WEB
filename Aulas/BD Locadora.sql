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
localizacao_fk INT(3) NOT NULL,
FOREIGN KEY (localizacao_fk)
	REFERENCES localizacao(loc_pk)
);


    
INSERT localizacao VALUES
(0, "Guerra", "001"),
(0, "Guerra", "002"),
(0, "Aventura", "100"),
(0, "Aventura", "101"),
(0, "RPG", "150"),
(0, "RPG", "151"),
(0, "Plataforma 2D ", "200"),
(0, "Plataforma 2D ", "201 ");

INSERT jogos VALUES
(0, "COD 3", 125.23, 1),
(0, "BTF 1", 173.92, 2),
(0, "Zelda B", 105.20, 3),
(0, "Zelda C", 100.03, 4),
(0, "Crhono T", 234.56, 5);

-- outra forma de inserir valores
INSERT INTO jogos (nome_do_jogo, valor_R$, localizacao_fk) VALUES
("Medal of Honor", 334.47, 1),
("Medal of Honor 2", 434.56, 2),
('Call of Duty', 333.99, 2),
('Call of Duty', 333.99, 1);


SELECT * FROM localizacao;
SELECT * FROM jogos;

-- identificar nome do jogo e prateleira
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_pk = jogos.localizacao_fk;



-- identificar nome do jogo de aventura
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_pk = jogos.localizacao_fk
WHERE secao = 'Aventura';

-- identificar e ordedar crescente as secoes    (LEFT, ASC) 
SELECT  jogos.nome_do_jogo, localizacao.prateleira, localizacao.secao
FROM jogos LEFT JOIN localizacao  
ON localizacao.loc_pk = jogos.localizacao_fk
ORDER BY jogos.nome_do_jogo ASC;

-- Inserir novos jogos
INSERT jogos VALUES 
(0, "Super Metroid", 174.97, 7),
(0, "SDonkey Kong", 374.00, 8),
(0, "FF XV", 144.54, 5),
(0, "SMB", 199.00, 6);

SELECT nome_do_jogo FROM jogos;


-- Alterar valor dos jogos em promoção
UPDATE jogos SET valor_R$ = valor_R$ * 0.5
WHERE localizacao_fk = 3; -- ZELDA B vai para o valor 52,60
SELECT * FROM jogos; 


UPDATE jogos SET valor_R$ = valor_R$ * 1.3
WHERE localizacao_fk = 4; -- Zelda C vai para 130.04

SELECT * FROM jogos; 

-- UPDATE jogos SET valor_R$ = valor_R$ * 0.5
-- WHERE nome_do_jogo = 'FF XV';                      -- DEU ERRO

-- Criar tabela promocao
CREATE TABLE promocao(
Promo INT (3) NOT NULL,
cod_promocao_jogo INT(3) NOT NULL,
FOREIGN KEY (cod_promocao_jogo)
	REFERENCES jogos (jogo_pk )
);
-- INSERIR VALORES JOGO 1 E 2
INSERT promocao VALUES(0, 1), (0,2);
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

-- inserir o numro 1 em Medal of Honor 1
UPDATE jogos SET nome_do_jogo = 'Medal of Honor 1' WHERE jogo_pk = 6;
SELECT nome_do_jogo FROM jogos WHERE nome_do_jogo = 'Medal of Honor 1';

SELECT nome_do_jogo FROM jogos; 
SELECT jogo_pk ,nome_do_jogo, localizacao_fk  FROM jogos; 
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
ON localizacao.loc_pk = jogos.localizacao_fk
WHERE secao = 'Guerra' ORDER BY jogo_pk;