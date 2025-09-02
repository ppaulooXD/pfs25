const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {

    async listarView(req, res) {
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        res.render('usuario/listar', {usuarios: lista});
    }

    cadastrarView(req, res) {
        res.render('usuario/cadastrar');
    }

    cadastrar(req, res) {
        
    }

}

module.exports = UsuarioController;