var mongoose = require('mongoose');
var modelEscola = mongoose.model('Escola');
var api = {}
var model = mongoose.model('Questionario');
var modelQuestionarioUsuario = mongoose.model('Questionario_usuario');
var usuarioModel = require('./usuario');
var questionarioUsuarioModel = require('./questionario_usuario');
var modelUsuario = mongoose.model('Usuario');

api.lista = function (req, res) {
    modelUsuario.findOne({ email: req.usuario.login }).then(escola => {
        if (escola) {
            model
                .find({ ativo: true, id_escola: escola.id_escola, id_criador: escola.email }).populate("id_escola")
                .then(function (questionarios) {
                    res.json(questionarios);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        } else {
            console.log("Escola a qual o questionario pertence não foi encontrada!");
        }
    })
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (questionario) {
            if (!questionario) throw Error('questionario não encontrada');
            res.json(questionario[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (questionario) {
            res.status(200).json();
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
}

api.buscaEscolaUsuario = function (login) {
    return modelUsuario.findOne({ email: login });
}

api.adiciona = function (req, res) {
    var c = req.body;
    c["ativo"] = true;
    c["id_criador"] = req.usuario.login;
    c["resp1"] = c["resp2"] = c["resp3"] = c["resp4"] = c["resp5"] = "";
    api.buscaEscolaUsuario(req.usuario.login).then(user => {
        c.id_escola = user.id_escola;
        model
            .create(c)
            .then(function (questionario) {
                res.json(questionario);
            }, function (error) {
                console.log(error);
                res.status(500).json(error);
            });
    })
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (questionario) {
            res.json(questionario);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;