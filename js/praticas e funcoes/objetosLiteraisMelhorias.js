// Objetos liteirais - melhorias

let nome = "Notebook"
let preco = 1200


const produto = {
    nome, // nome: nome 
    preco,
    exibirProduto() {
        console.log(`${this.nome}, ${this.preco}, ${this.categoria} `)
    }
}


const pro = produto 
pro.preco = 2000

console.log(pro.preco)
console.log(produto.preco)

/*
produto.categoria = "Eletrônicos"
produto.exbirPreco = function() {
    `Preço: ${this.preco}`
}
produto.nome = "Notebook"
produto.exbirPreco()
*/


//produto.exibirProduto()
// console.log(produto.categoria)
