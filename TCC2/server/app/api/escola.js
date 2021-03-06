var mongoose = require('mongoose');
var model = mongoose.model('Escola');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (escolas) {
            res.json(escolas);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (escola) {
            if (!escola) throw Error('Escola não encontrada');
            res.json(escola[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (escola) {
            res.status(200).json();
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.adiciona = function (req, res) {
    var c = req.body;
    c["ativo"] = true;
    model
        .create(c)
        .then(function (escola) {
            usuarioModel.adiciona({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                id_escola: escola._id,
                tipo: 2
            }).then(usu => {
                res.json(escola);
            });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (escola) {
            modelUsuario.findOne({ id_escola: escola._id }).then(usu => {
                usu.email = escola.email;
                usu.nome = escola.nome;
                usu.senha = escola.senha;
                modelUsuario.update({ _id: usu._id }, usu).then(abc => {
                    res.json(escola);
                });
            })
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;