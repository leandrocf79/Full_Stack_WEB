CREATE TABLE vendas 
(
	usuario VARCHAR(40),
    produto VARCHAR(60),
    preco DECIMAL(15,2),
    quantidade int,
    categoria VARCHAR(60)
);

ALTER TABLE vendas ADD COLUMN total DECIMAL(15,2);


INSERT INTO vendas VALUES(  /* aqui é só para aula, não se usa assim */
	'jamilton.damasceno', 'Zenphone Celular', 3500.90,
    1, 'eletronicos'
);


/* SELECT - no lugar do * é melhor escrever os nomes das colunas que for utilizar */
SELECT * FROM vendas WHERE preco > 1200;
/* pode usar conectores lógicos:
  <>  diferente
  > e <  ou >= e <=
*/


/* Mais sobre consultas com SELECT */
-- BETWEEN, AND, OR
SELECT * FROM vendas WHERE preco BETWEEN 1200.90 AND 2000;
SELECT * FROM vendas WHERE categoria = "eletronicos" OR preco > 1200.90;



-- IN e NOT IN  ( Buscar algo que esteja DENTRO de... ou FORA de...)
SELECT * FROM vendas WHERE categoria IN('livros', 'eletrodomesticos');

-- NOT
SELECT * FROM vendas WHERE NOT preco > 1200;
SELECT * FROM vendas WHERE NOT preco BETWEEN 1200.90 AND 2000;-- ...1200.90 2000...


/*   LIKE - faz busca com parte do nome (note%  ou %book - % é um caracter coringa   */
SELECT * FROM vendas WHERE NOT produto LIKE '%note%';


-- Ordenação com ORDER BY e LIMIT
/*
ASC -> ASCENDENTE A..Z 0..100
DESC -> DESCENDENTE Z...A 100..0
*/
SELECT * FROM vendas 
/*WHERE 1=1*/
ORDER BY produto ASC
LIMIT 5; /* Limita os 5 primeiros na busca e para o usuário teria que ir para próxima pagina */



-- Consultas com agregação, FUNCÕES SUM, MAX, MIN utilizando alias(apelido)
SELECT produto AS pro, preco, quantidade FROM vendas;
SELECT produto, preco, quantidade, (preco * quantidade) AS total FROM vendas; /* Aqui mesmo pode fazer calculos básicos (+ - * / )   */
SELECT usuario, SUM(total) AS total_vendas FROM vendas GROUP BY usuario; /* GROUP BY - é para  agrupar no total de CADA usuário */



-- Alterando a tabela para total
UPDATE vendas SET total = preco * quantidade;


/* Limpar e remover tabelas */
DROP TABLE postagens;
TRUNCATE TABLE usuarios;