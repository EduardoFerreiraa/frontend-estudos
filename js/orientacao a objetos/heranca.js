// Herança - Reutilização e manutenção
// Classe - Cao Passaro 

class Animal { // superclasse - pai
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    correr() {
        console.log("correr")
        console.log("como")
        console.log("um")
        // 30 linhas
    }

    dormir() {
        console.log("dormir")
    }
}

class Cao extends Animal { // subclasse - filha
    constructor(cor, tamanho, peso, orelha) {
        super(cor, tamanho, peso)
        this.tamanhoOrelha = orelha
    }

    latir() {
        console.log("latir")
    }

    correr() {
        super.correr()
        console.log("cao")
        // 5 linhas
    }
}

class Passaro extends Animal { // subclasse - filha
    constructor(cor, tamanho, peso) {
        super(cor, tamanho, peso)
    }

    correr() {
        super.correr
        console.log("passaro")
    }

    voar() {
        console.log("voar")
    }
}

class Papagaio extends Passaro {
    constructor(cor, tamanho, peso, pFalar) {
        super(cor, tamanho, peso, pFalar)
        this.sabeFalar = true
    }

    falar() {
        console.log("falar")
    }
}

// Instancia
//const cao = new Cao("Amarelo", 65, 3, 5)
//const animal = new Animal("Amarelo", 60, 3)
//animal.correr()
//console.log(animal.tamanho)
//console.log(cao.tamanho)

//const cao = new Cao()
//const passaro = new Passaro()
const papagaio = new Papagaio("Vermelho", 20, 1, true)
console.log(papagaio.cor)

//papagaio.correr() // Animal
//papagaio.voar() // Passaro
//papagaio.falar()
//cao.tamanhoOrelha = 50
//cao.correr()

//cao.correr()
//passaro.correr()
//passaro.cor = "Amarelo"
//console.log(passaro.cor)

/*
cao.latir()
passaro.correr()
passaro.voar()
*/
