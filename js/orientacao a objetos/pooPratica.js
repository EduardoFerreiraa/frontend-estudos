// Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma linguagem, mas a forma como você soluciona problemas usando uma linguagem de programação

// Javascript é multi paradigma

// Procedural
function verificarDisponibilidade(q,o) {
    let res = q - o
    console.log("Disponíveis: " + res)
}

let quartos = 20
let ocupados = 10
verificarDisponibilidade(quartos, ocupados)


// Orientado a objetos