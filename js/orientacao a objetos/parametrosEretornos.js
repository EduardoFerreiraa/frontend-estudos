// Métodos - parâmetros e retornos

class Usuario {
    constructor() {
        this.email = "",
        this.senha = ""
    }

    login() {
        let emailBd = "ja@gmail.com"
        let senhaBd = "1234"

        if( senhaBd == this.senha) {
            //console.log("senha válida")
            return "senha válida"
        } else {
            //console.log("senha inválida")
            return "senha inválida"
        }
    }
}

const usuario = new Usuario()
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.login()
console.log(mensagem)