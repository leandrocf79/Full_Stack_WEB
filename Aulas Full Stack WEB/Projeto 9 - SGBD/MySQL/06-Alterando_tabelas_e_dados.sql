/* CHAR(2)  --> Vai usar 2 caracteres independentemente se estiver vazio, 
				bom usar para valores FIXOS como siglas de estado (SP, MG) por exemplo.

VARCHAR(2)  --> Vai se adaptar ao tamanho máximo de conteúdo inserido, tamanho variável. 
				Consome um pouco mais de recursos que apenas CHAR.
                Serve para letras ou números.

Caso precise alterar: MODIFY (modificar) os tipos de dados.
NOT NULL - não pode ficar em branco.
NOT NULL DEFAULT 0  - Se ficar vazio será preenchido com zero.
*/


CREATE TABLE postagens_blog
(
	titulo VARCHAR(30) NOT NULL DEFAULT 'Título padrão',
    descricao TEXT NOT NULL
);
INSERT INTO postagens_blog(titulo, descricao,  dt_postagem, qtd_visualizacoes) 
			VALUES ('Título da postagem','Descrição postagem', '2025-10-26', 56265265);


/* Renomeando nome da tabela */
ALTER TABLE postagens_blog RENAME TO postagens;


/* ADD (adicionar) uma coluna a sua tabela, você escolhe os tipos de dados */
ALTER TABLE postagens 
	ADD COLUMN data_postagem DATE NOT NULL   AFTER   titulo, /*DATE será alterado para datetime*/
    ADD COLUMN qtd_visualizacoes INT NOT NULL DEFAULT 0;
/*se por FIRST ou AFTER insere de acordo com o escolhido*/



/* DROP (eliminar) uma coluna da sua tabela */
ALTER TABLE postagens 
	DROP COLUMN data_postagem,
    DROP COLUMN qtd_visualizacoes;


/* CHANGE (mudar) o nome e os tipos de dados de uma coluna já existente */
ALTER TABLE postagens 
	CHANGE COLUMN data_postagem  dt_postagem DATETIME NOT NULL;


/* MODIFY (modificar) os tipos de dados e a posição de uma coluna existente */
ALTER TABLE postagens 
	MODIFY COLUMN qtd_visualizacoes BIGINT;/*Alterou de INT para BIGINT*/

/* Eliminando e limpando tabela */
DROP TABLE postagens;
TRUNCATE TABLE postagens;
