// Objetos liteirais - melhorias

let nome = "Notebook"
let preco = 1200

const produto = {

    nome: nome,
    preco: preco,
    exibirProduto : function() {
        console.log(`${this.nome}, ${this.preco} `)
    }
}

console.log(produto.nome)