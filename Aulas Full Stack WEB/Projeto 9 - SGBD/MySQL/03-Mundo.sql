/*      ATENÇAÕ ESPECIAL:
DROP TABLE pais; Apaga a tabela.
TRUNCATE TABLE pais; Apaga o todo o conteúdo da tabela
DELETE FROM cidade WHERE id = 1;  Apaga um item específico
*/


CREATE DATABASE mundo;
USE mundo;

CREATE TABLE IF NOT EXISTS city(
	city_pk INT(5) PRIMARY KEY AUTO_INCREMENT,
	cep VARCHAR(8) NOT NULL,
	nome_da_cidade VARCHAR(50) NOT NULL
);

SHOW TABLES;

SHOW COLUMNS FROM city;

INSERT city VALUES
(0, 11111111, 'Aguaí'),
(0, 22222222, 'Aguas da Prata'), 
(0,33333333, 'Araraquara'),
(0, 44444444, 'Araçatuba'),
(0, 55555555, 'Araras');


/*nomes de todas as cidades na tabela cidade com
nomes iniciados por ‘ag’”:*/
SELECT nome_da_cidade
FROM city
WHERE nome_da_cidade LIKE "ag%";

-- inserir tabelas:




/*Encontrar nomes e a população de todas as cidades com
nomes iniciados por ‘ag’”:*/
SELECT Name, Population
FROM city
WHERE Name LIKE "ag%";

/*nomes, sua população e os países em que se
encontram, para todas as cidades com nomes iniciados por ‘ag’”:*/
SELECT city.Name, city.Population,
country.Name
FROM city, country
WHERE city.Name LIKE 'ag%' AND city.CountryCode = country.Code;