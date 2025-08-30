const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {

    async listarView(req, res) {
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        res.render('usuario/listar', {usuarios: lista});
    }

    cadastrarView(req, res) {
        //montagem via construtor
        let teste = new UsuarioModel(0, 'paulo', 'ph@gmail.com', '123');

        //montagem via setter
        teste.usuarioSenha = '123';
        teste.usuarioNome = 'nome';
        res.render('usuario/cadastrar');
    }

}

module.exports = UsuarioController;