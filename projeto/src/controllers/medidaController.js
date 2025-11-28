var medidaModel = require("../models/medidaModel");

function mostrar_grafico1(req, res) {

    var id_usuario = req.body.idServer
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.mostrar_grafico1(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function rank(req, res) {

    var id_usuario = req.body.idServer
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.rank(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    mostrar_grafico1,
    rank
}