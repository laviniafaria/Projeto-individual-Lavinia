
CREATE DATABASE baralho_cigano;

USE baralho_cigano;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE quiz (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
descricao TEXT
);

CREATE TABLE respostas (
id INT PRIMARY KEY AUTO_INCREMENT,
usuario_id INT,
quiz_id INT,
resposta TEXT,
FOREIGN KEY (usuario_id) REFERENCES usuario(id),
FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);

CREATE TABLE ranqueamento (
usuario_id INT,
quiz_id INT,
pontuacao INT,
PRIMARY KEY (usuario_id, quiz_id),
FOREIGN KEY (usuario_id) REFERENCES usuario(id),
FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);
select * from usuario;

