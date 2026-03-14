const lista = ["Jamilton", "Ana", "Marcela", "Pedro"];

/*
for (indice in lista) {
    console.log(lista[indice])
} 


const percorrer = function(item, i, arr) {
    console.log(item);
}

lista.forEach(percorrer);
*/

Array.prototype.percorrer = function() {
    console.log(this);
}

lista.percorrer()
