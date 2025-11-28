var database = require("../database/config");

function mostrar_grafico1(id_usuario) {

    var instrucaoSql = `SELECT
            q.titulo AS tituloQuiz,
            r.resposta_certas AS acertos,
            r.resposta_erradas AS erros
        FROM respostas r 
        JOIN 
            quiz q ON r.quiz_id = q.id
        WHERE 
            r.usuario_id = ${id_usuario}
        ORDER BY 
            r.resposta_certas DESC LIMIT 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function rank() {

    var instrucaoSql = `
    SELECT u.nome, r.resposta_erradas, r.resposta_certas
	FROM usuario AS u JOIN respostas AS r
		ON u.id = r.usuario_id
			GROUP BY u.nome, r.resposta_certas, r.resposta_erradas
				ORDER BY resposta_certas DESC LIMIT 5;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrar_grafico1,
    rank
}
