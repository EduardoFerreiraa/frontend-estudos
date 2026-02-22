// Var vs let (Escopo)
// let numero = 10 // global

/*
var -> escopo global, função
let -> escopo global, função e bloco
*/

{
    var numero = 5
    console.log(numero)
}

function calcular() {
    numero = 12
}

// calcular()
// numero = 20
console.log(numero)