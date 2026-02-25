// Pilar 1 - Abstração
/*
Modelo, Entidade, Identidade,
Características e Ações
*/

class Carro {
    constructor() {
        this.marca = "Volkswagen",
        this.modelo = "Gol",
        this.cor = "prata",
        this.placa = "EMJ-2565"
    }
}

const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo)

const carro2 = new Carro()
console.log(carro2.modelo)