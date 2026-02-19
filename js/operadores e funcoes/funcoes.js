/*
1) Desligar a torneira;
2) Pedir copo de água;
3) Ir ao mercado comprar arroz;
*/

function calcularMedia(nota1, nota2) {
    
    let totalNotas = nota1 + nota2
    let media = totalNotas / 2

    return media
}

// desligarTorneira()
// let retorno = irMercadoComprarArroz(10)
// console.log(retorno)
let media = calcularMedia(10, 5)
console.log(media)