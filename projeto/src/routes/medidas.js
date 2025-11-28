var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController.js");

router.post("/mostrar_grafico1", function (req, res) {
    medidaController.mostrar_grafico1(req, res);
})

router.post("/rank", function (req, res) {
    medidaController.rank(req, res);
})


module.exports = router;