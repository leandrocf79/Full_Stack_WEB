
CREATE DATABASE IF NOT EXISTS SuperGames DEFAULT CHARACTER SET utf8 ;
USE SuperGames ;

-- -----------------------------------------------------
-- Table `SuperGames`.`localizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS localizacao (
  loc_id INT (3)  PRIMARY KEY AUTO_INCREMENT,
  secao VARCHAR(50) NOT NULL,
  prateleira INT(3) ZEROFILL NOT NULL
  );
-- DROP TABLE localizacao;

-- -----------------------------------------------------
-- Table `SuperGames`.`jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS jogos (
jogo_id INT(3) PRIMARY KEY AUTO_INCREMENT,
nome_do_jogo VARCHAR(50) NOT NULL,
valor_R$ DECIMAL(6,2) NOT NULL,
localizacao_id INT(3) NOT NULL,
FOREIGN KEY (localizacao_id)
	REFERENCES localizacao(loc_id)
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

SELECT * FROM localizacao;
SELECT * FROM jogos;

-- identificar nome do jogo e prateleira
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_id = jogos.localizacao_id;



-- identificar nome do jogo de aventura
SELECT jogos.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.loc_id = jogos.localizacao_id
WHERE secao = 'Aventura';

-- identificar e ordedar crescente as secoes    (LEFT, ASC) 
SELECT  jogos.nome_do_jogo, localizacao.prateleira, localizacao.secao
FROM jogos LEFT JOIN localizacao  
ON localizacao.loc_id = jogos.localizacao_id
ORDER BY jogos.nome_do_jogo ASC;

-- Inserir novos jogos
INSERT jogos VALUES 
(0, "Super Metroid", 174.97, 7),
(0, "SDonkey Kong", 374.00, 8),
(0, "FF XV", 144.54, 5),
(0, "SMB", 199.00, 6);

SELECT jogos.nome_do_jogo FROM jogos;


-- Alterar valor dos jogos em promoção
UPDATE jogos SET valor_R$ = valor_R$ * 0.5
WHERE localizacao_id = 3; -- ZELDA B
SELECT * FROM jogos; 


UPDATE jogos SET valor_R$ = valor_R$ * 1.3
WHERE localizacao_id = 4;
SELECT * FROM jogos; 

-- UPDATE jogos SET valor_R$ = valor_R$ * 0.5
-- WHERE nome_do_jogo = 'FF XV';                      -- DEU ERRO

CREATE TABLE promocao(
Promo INT (3) NOT NULL,
cod_promocao_jogo INT(3) NOT NULL,
FOREIGN KEY (cod_promocao_jogo)
	REFERENCES jogos (jogo_id )
);
-- INSERIR VALORES JOGO 1 E 2
INSERT promocao VALUES(0, 1), (0,2);
SELECT * FROM promocao;
SELECT * FROM jogos; 



-- exibir jogos em promocao
SELECT jogos.nome_do_jogo, jogos.valor_R$
FROM jogos
WHERE jogos.jogo_id IN 
-- SUBCONSULTA
(SELECT cod_promocao_jogo FROM promocao);


-- jogos que não estão em promoção NOT IN
SELECT jogos.nome_do_jogo, jogos.valor_R$
FROM jogos
WHERE jogos.jogo_id NOT IN 
-- SUBCONSULTA
(SELECT cod_promocao_jogo FROM promocao);

SELECT nome_do_jogo AS 'Mais barato!!'
FROM jogos WHERE valor_R$ = SOME (
SELECT MIN(valor_R$) FROM jogos);
