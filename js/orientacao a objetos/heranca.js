// Herança - Reutilização e manutenção
// Classe - Cao Passaro 
class Animal {
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
}

class Cao {
    latir() {
        console.log("latir")
    }
}

class Passaro {
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