const Database = require('../utils/database');

class UsuarioModel {

    #usuarioId;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;
    #usuarioAtivo;
    #perfilId;

    get usuarioId() {
        return this.#usuarioId;
    }

    set usuarioId(value) {
        this.#usuarioId = value;
    }

    get usuarioNome() {
        return this.#usuarioNome;
    }

    set usuarioNome(value) {
        this.#usuarioNome = value;
    }

    get usuarioEmail() {
        return this.#usuarioEmail;
    }

    set usuarioEmail(value) {
        this.#usuarioEmail = value;
    }

    get usuarioSenha() {
        return this.#usuarioSenha;
    }

    set usuarioSenha(value) {
        this.#usuarioSenha = value;
    }

    get usuarioAtivo() {
        return this.#usuarioAtivo;
    }

    set usuarioAtivo(value) {
        this.#usuarioAtivo = value;
    }

    get perfilId() {
        return this.#perfilId;
    }

    set perfilId(value) {
        this.#perfilId = value;
    }

    constructor(id, nome, email, senha, ativo, perfilId) {
        this.#usuarioId = id;
        this.#usuarioNome = nome;
        this.#usuarioEmail = email;
        this.#usuarioSenha = senha;
        this.#usuarioAtivo = ativo;
        this.#perfilId = perfilId;
    }

    async listar() {
        const sql = "SELECT * FROM tb_usuario";

        const banco = new Database();

        const rows =  await banco.ExecutaComando(sql);

        let listaUsuarioModel = [];
        for(let i = 0; i < rows.length; i++) {
            let usuario = new UsuarioModel();
            usuario.usuarioId = rows[i]["usu_id"];
            usuario.usuarioNome = rows[i]["usu_nome"];
            usuario.usuarioEmail = rows[i]["usu_email"];
            usuario.usuarioAtivo = rows[i]["usu_ativo"];
            usuario.perfilId = rows[i]["per_id"];

            listaUsuarioModel.push(usuario);
        }

        return listaUsuarioModel;
    }
}

module.exports = UsuarioModel;