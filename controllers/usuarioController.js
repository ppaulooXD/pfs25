const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {

    listarView(req, res) {
        res.render('usuario/listar');
    }

    cadastrarView(req, res) {
        let teste = new UsuarioModel();
        teste.usuarioId(1);
        res.render('usuario/cadastrar');
    }

}

module.exports = UsuarioController;