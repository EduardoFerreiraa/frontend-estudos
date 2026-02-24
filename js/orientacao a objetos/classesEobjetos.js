// Notação Literal 
/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 2,
    verificarDisponibilidade: function() {
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }
}

hotel.quartos = 25
// hotel['quartos'] = 30
delete hotel.piscinas
console.log(hotel.quartos)
console.log(hotel.piscinas)
*/

/*
// Notação de construtor (objeto em branco)
const hotel = new Object()
hotel.quartos = 30
hotel.ocupados = 10
hotel.verificarDisponibilidade = function() {
    let res = this.quartos - this.ocupados
    return "Disponível: " + res
}

// console.log(hotel.quartos)
hotel.verificarDisponibilidade()
*/


// Criando classes (mais simples)
class Hotel {
    
    constructor() {
        this.quartos = 20
        this.ocupado = 10
    }

    verificarDisponibilidade() {
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }

}

const hotel = new Hotel()
//console.log(hotel.quartos)
hotel.verificarDisponibilidade()