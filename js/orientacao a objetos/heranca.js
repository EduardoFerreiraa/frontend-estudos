// Herança - Reutilização e manutenção
// Classe - Cao Passaro 

class Cao {
    constructor() {
        this.cor = "",
        this.tamanho = 0,
        this.peso = 0
    }

    correr() {
        console.log("correr")
    }

    dormir() {
        console.log("dormir")
    }

    latir() {
        console.log("latir")
    }
}

class Passaro {
    constructor() {
        this.cor = "",
        this.tamanho = 0,
        this.peso = 0
    }

    correr() {
        console.log("correr")
    }

    dormir() {
        console.log("dormir")
    }

    voar() {
        console.log("voar")
    }
}

// Instancia
const cao = new Cao()
const passaro = new Passaro()

cao.correr()
cao.latir()

passaro.correr()
passaro.voar()