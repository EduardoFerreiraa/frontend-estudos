// Objetos liteirais - melhorias

let nome = "Notebook"
let preco = 1200

const produto = {

    nome, // nome: nome 
    preco,
    exibirProduto() {
        console.log(`${this.nome}, ${this.preco} `)
    }
}
produto.exibirProduto()
console.log(produto.nome)