// Métodos - parâmetros e retornos

class Usuario {
    constructor() {
        this.email = "",
        this.senha = "",
        this.subtotalCompra = 0
    }

    login() {
        let emailBd = "ja@gmail.com"
        let senhaBd = "1234"

        if ( senhaBd == this.senha) {
            //console.log("senha válida")
            return "senha válida"
        } else {
            //console.log("senha inválida")
            return "senha inválida"
        }
    }

    calcularDesconto(cupom) {
        
        let desconto = 0
        if ( cupom == "DESC20") {
            desconto = 20
        } else if (cupom == "FESTA10") {
            desconto = 10
        }
        
        return this.subtotalCompra - desconto  
    }
}

const usuario = new Usuario()
usuario.subtotalCompra = 279
usuario.calcularDesconto("FESTA10")

/*
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.login()
console.log(mensagem)
*/

