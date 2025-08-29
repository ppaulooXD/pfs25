class UsuarioModel {

    #usuarioId;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;
    #usuarioAtivo;
    #perfilId;

    get id() {
        return this.#usuarioId;
    }

    set usuarioId(value) {
        this.#usuarioId = value;
    }

}

module.exports = UsuarioModel;