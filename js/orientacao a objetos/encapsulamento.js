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
        this._numeroConta = 80,
        this._saldo = 0
    }

    sacar(valorSaque) {
        this._saldo = this.saldo - valorSaque
    }

    depositar(valorDeposito) {
        this._saldo = this.saldo + valorDeposito
    }


    get saldo() {
        return this._saldo
    }

    set saldo(novoSaldo) {
        if (novoSaldo > 0) {
            this._saldo = novoSaldo
        }
    }

    get numeroConta() {
        // Verificar se o usuário está logado
        return "Número: " + this._numeroConta 
    }

    set numeroConta( numero ) {
        if (numero > 0) {
            this._numeroConta = numero
        }
    }

}

const conta = new ContaBancaria()
//conta.numeroConta = 60
conta.saldo = 500 // seguro
conta.sacar(50) // 450
conta.depositar(100) // 550

console.log(conta.saldo)

