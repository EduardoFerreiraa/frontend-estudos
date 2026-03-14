/*
typeof []
typeof new Array
*/

const nomes = ["Jamilton", "Maria"]
nomes.push("Pedro")
delete nomes[2]

console.log(nomes)

const frutas = new Array("Morango", "Banana")
console.log(frutas[1])