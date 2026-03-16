/* const numeros = [2, 3, 5]

// primeira -> 6 + 2 = 8
// segunda -> 8 + 3 = 11
// terceira -> 11 + 5 = 16

const funcao = function(acumulador, atual, i, arr) {
    // console.log(i)
    console.log("i: " + i)
    console.log("ac: " + acumulador)
    console.log("a: " + atual)
    console.log("----------")
    return acumulador + atual
}   
const resultado = numeros.reduce(funcao)
console.log(resultado) */

const produtos = [
    {nome: "Notebook", promocao: true},
    {nome: "Celular", promocao: false},
    {nome: "Mouse", promocao: false}
];

const produtosPromo = produtos.map(
    produto => produto.promocao
)

// console.log(produtosPromo)
const funcao = function(acumulador, atual) {
    console.log("ac: " + acumulador)
    console.log("a: " + atual)
    console.log("----------")
    return acumulador || atual  // true
}

const novo = produtosPromo.reduce(funcao)
console.log(novo)

