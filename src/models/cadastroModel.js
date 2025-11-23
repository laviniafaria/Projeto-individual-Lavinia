var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM email WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, nome, email FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
  var instrucaoSql = `SELECT * FROM usuario WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
  var instrucaoSql =  `INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorEmail, buscarPorId, cadastrar, listar };
