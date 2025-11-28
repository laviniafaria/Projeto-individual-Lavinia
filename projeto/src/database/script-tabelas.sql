
CREATE DATABASE baralho_cigano;
USE baralho_cigano;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);

select * from usuario;

CREATE TABLE quiz (
	id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	descricao TEXT
);

CREATE TABLE respostas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	usuario_id INT NOT NULL,
	quiz_id INT NOT NULL,
	resposta_certas INT NOT NULL,
	resposta_erradas INT NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id),
	FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);

select * from respostas;

CREATE TABLE ranqueamento (
	usuario_id INT NOT NULL,
	quiz_id INT NOT NULL,
	pontuacao INT NOT NULL,
	PRIMARY KEY (usuario_id, quiz_id),
	FOREIGN KEY (usuario_id) REFERENCES usuario(id),
	FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);

SELECT u.nome, r.resposta_erradas, r.resposta_certas
	FROM usuario AS u JOIN respostas AS r
		ON u.id = r.usuario_id
			GROUP BY u.nome, r.resposta_certas, r.resposta_erradas
				ORDER BY resposta_certas DESC LIMIT 5;
