CREATE TABLE usuarios
(
	nome VARCHAR(70),
    usuario VARCHAR(70),
    senha VARCHAR(12)
);

INSERT INTO usuarios(nome, usuario, senha, idade) 
			VALUES ('Jamilton Damasceno', 'jamilton.damasceno', '123jamilton', 34);
            
INSERT INTO usuarios(nome, usuario, senha, idade) 
			VALUES ('Maria Silva', 'maria.silva', '123456', 25);

/*WHERE - Para encontrar algo específico*/
DELETE FROM usuarios WHERE usuario = 'maria.silva';

UPDATE usuarios SET
	senha = '56789',
    nome = 'Maria Almeida Silva'
    WHERE usuario = 'maria.silva';


ALTER TABLE usuarios ADD COLUMN idade TINYINT;

UPDATE usuarios SET
	idade = 30
    WHERE usuario = 'maria.silva';

TRUNCATE TABLE usuarios;
    

    

