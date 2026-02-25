// Herança - Reutilização e manutenção
// Classe - Cao Passaro 

class Cao {
    constructor() {
        this.cor = "",
        this.tamanho = 0,
        this.peso = 0
    }

    corre() {
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

    corre() {
        console.log("correr")
    }

    dormir() {
        console.log("dormir")
    }

    voar() {
        console.log("voar")
    }
}