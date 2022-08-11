CREATE DATABASE IF NOT EXISTS clinica_medica DEFAULT CHARACTER SET utf8;
USE clinica_medica;

-- CHARSET = utf8
ALTER DATABASE clinica_medica CHARSET = utf8 COLLATE = utf8_general_ci;

-- Criar novas tabelas
CREATE TABLE IF NOT EXISTS endereco(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cep INT(8) NOT NULL,
    rua VARCHAR(30) NOT NULL,
    numero INT(8) UNSIGNED, /*  UNSIGNED - sem sinal. Para não utilizar números negativos*/
    complemento VARCHAR(8)
);

CREATE TABLE IF NOT EXISTS paciente(
	pk_paciente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cpf INT(11) NOT NULL,
	nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    endereco_id INT,
    FOREIGN KEY(endereco_id) REFERENCES endereco(id)
);

CREATE TABLE IF NOT EXISTS medicos(
	pk_medicos INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cpf INT(11) NOT NULL,
    nome_medico VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    crm INT(11) NOT NULL,
    especialidade VARCHAR(30) NOT NULL,
    endereco_id INT,
    FOREIGN KEY(endereco_id) REFERENCES endereco(id)
);

CREATE TABLE IF NOT EXISTS cartao_Ponto(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_atual DATE NOT NULL, 
    hora_chegada TIME NOT NULL, 
    hora_saida TIME NOT NULL,
    medicos_id INT,
    FOREIGN KEY(medicos_id) REFERENCES medicos(pk_medicos)
);

CREATE TABLE IF NOT EXISTS exame (
	id INT PRIMARY KEY AUTO_INCREMENT,
    data_exame DATE NOT NULL, 
    hora_chegada TIME NOT NULL, 
    sala_exame VARCHAR(10),
    exame_agendado VARCHAR(20) NOT NULL,
	paciente_id INT,
    medicos_id INT,
    FOREIGN KEY(paciente_id) REFERENCES paciente(pk_paciente),
    FOREIGN KEY(medicos_id) REFERENCES medicos(pk_medicos)
);

SHOW INDEX FROM cartao_ponto;
-- Criar savepoint para recuperar dados, se necessário, antes do commit
SAVEPOINT ponto1;

-- Inserir endereços de pacientes e médicos
SELECT * FROM endereco;
INSERT INTO endereco VALUES
(0, 12456878, 'Sobe e desce', 765, 0),
(0, 12345678, 'Sem Fim', 20, 'ap45'),
(0, 12348745, 'Sem Fim mais longe', 345,0),
(0, 85475678, 'Muito loge Sem Fim', 99, 0);

SAVEPOINT ponto2;
DELETE FROM endereco WHERE id =1 ;
-- ROLLBACK TO SAVEPOINT ponto2;

-- Inserir pacientes
SELECT * FROM paciente;
INSERT INTO paciente (cpf, nome, nascimento, endereco_id) VALUES
(22222222222, 'Maria da silva', 19790101, 2),
(33333333333, 'João da silva', 19800202, 3),
(44444444444, 'Marcos da silva', 19810303, 4);

-- Inserir novos endereços
INSERT INTO endereco VALUES
(0, 88886878, 'Sobe e desce e desaparece', 9765, 0),
(0, 99995678, 'Das Amóras', 200, 'ap75');

-- Inserir médicos que trabalhando na clínica
SELECT * FROM medicos;
INSERT INTO medicos (cpf, nome_medico, nascimento, crm, especialidade, endereco_id) VALUES
(11111222222, 'Joao da Motta', 19550202, 923546, 'Ortopedia',5),
(33333111111, 'Francisca da silva', 19690202, 123546, 'Geral',6);

-- Inserir registro de exames dos pacientes
SELECT * FROM exame;
INSERT INTO exame (data_exame, hora_chegada, sala_exame, exame_agendado, paciente_id, medicos_id) VALUES
(20220811, 110000, 2, 'Rotina', '2',1),
(20220811, 111500, '3b', 'Rotina', '3',1);

-- COMMIT;

-- Modos de consultas

SELECT * FROM exame;

CREATE VIEW Agendamentos AS
SELECT paciente.nome, exame.id, exame.data_exame, exame.hora_chegada, exame.sala_exame, exame.exame_agendado, medicos.nome_medico
FROM paciente, exame, medicos
WHERE paciente.pk_paciente IN 
-- SUBCONSULTA
(SELECT paciente_id FROM exame);
/*Faltou um ajuste aqui, ainda me falta conhecimento sobre isso*/

SELECT * FROM Agendamentos;
-- DROP VIEW Agendamentos;
