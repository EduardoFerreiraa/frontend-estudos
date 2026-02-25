// Pilar - Encapsulamento


/*class Carro {
    constructor() {
        this.modelo = "Gol",
        this.cor = "Vermelho"
    }

    frear() {
        freio com tecnologia a disco
        .
        .
        .
        .
        .
        .
        .
        
        console.log("Parar o carro")
    }
}
*/


/*
const carro = new Carro()
carro.frear()

const filtro = new Filtro()
filtro.pretoEbranco( imagem )
*/





// Encapsulamento, modificadores de acesso e getters e setter
class ContaBancaria {
    constructor() {
        this.numeroConta = 0,
        this.saldo = 0
    }
}

const conta = new ContaBancaria()
conta.numeroConta = 50

