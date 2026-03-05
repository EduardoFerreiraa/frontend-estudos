class Carro {
    constructor() {
        this.placa = "AMP-1230"
    }
}

class Bmw extends Carro {
    constructor() {
        super()
        this.nome = "BMW 320i"
    }
}

const objBmw = new Bmw()
console.log(objBmw.placa)
console.log(objBmw.nome)