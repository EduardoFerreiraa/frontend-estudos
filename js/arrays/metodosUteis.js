const estados = ["São Paulo", "Ceará", "Rio de Janeiro", "Bahia", "Minas Gerais"]

/* Remove elementos de um Array */
// estados.pop() // remove o último elemento do Array
// estados.shift() // remove o primeiro elemento 

/*  Adiciona novo elemento no array */

// estados.push("teste") // adiciona no final
// estados.unshift("teste") // adiciona no inicio

/*  Retorna novo array  */
// const novo = estados.splice(0, 2, "teste1", "teste2", "teste3") // emendar
const novo = estados.slice(1, 5) // cortar
console.log(novo)