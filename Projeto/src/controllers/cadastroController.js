var cadastroModel = require("../models/cadastroModel.js");

function buscarPorEmail(req, res) {
  var email = req.query.email;

  cadastroModel.buscarPorEmail(email).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  cadastroModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  cadastroModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
   var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  cadastroModel.buscarPorEmail(email).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `O login com o email: ${email} já existe` });
    } else {
      cadastroModel.cadastrar(nome, email, senha).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorEmail,
  buscarPorId,
  cadastrar,
  listar,
};
