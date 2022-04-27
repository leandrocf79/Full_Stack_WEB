
CREATE DATABASE IF NOT EXISTS SuperGames DEFAULT CHARACTER SET utf8 ;
USE SuperGames ;

-- -----------------------------------------------------
-- Table `SuperGames`.`localizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS localizacao (
  id INT (3)  PRIMARY KEY AUTO_INCREMENT,
  secao VARCHAR(50) NOT NULL,
  prateleira INT(3) ZEROFILL NOT NULL
  );
-- DROP TABLE localizacao;

-- -----------------------------------------------------
-- Table `SuperGames`.`jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS jogos (
	cod_do_jogo INT(3) PRIMARY KEY AUTO_INCREMENT,
	nome_do_jogo VARCHAR(50) NOT NULL,
	valor_R$ DECIMAL(6,2) NOT NULL,
	localizacao_id INT(3) NOT NULL,
    FOREIGN KEY localizacao_id 
		REFERENCES localizacao(id)
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
SELECT jogo.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.id = jogos.localizacao_id;

-- identificar nome do jogos de aventura
SELECT jogo.nome_do_jogo, localizacao.prateleira
FROM jogos INNER JOIN localizacao
ON localizacao.id = jogos.localizacao_id
WHERE secao 'Aventura';

-- identificar e ordedar crescente as secoes    (LEFT, ASC) 
SELECT localizacao.secao, localizacao.prateleira, jogo.nome_do_jogo
FROM localizacao LEFT JOIN localizacao   
ON localizacao.id = jogos.localizacao_id
ORDER BY jogos.nome_do_jogo ASC;

-- pesquisas
SELECT count(*) FROM jogos;

SELECT MAX(valor_R$) AS "Maior valor" from jogos;

SELECT MIN(valor_R$) AS "Menor valor" from jogos;
SELECT * FROM jogos;

SELECT AVG (valor) AS 'Media Guerra'
FROM jogos INTER JOIN 
ON localizacao.id = jogos.localizacao_id
WHERE secao = 'Guerra';

SELECT SUM(valor_R$) AS 'Total' FROM jogos;



