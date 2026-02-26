// Herança - Reutilização e manutenção
// Classe - Cao Passaro 

class Animal { // superclasse - pai
    constructor() {
        this.cor = "",
        this.tamanho = 0,
        this.peso = 0
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
    constructor() {
        super()
        this.tamanhoOrelha = 0
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
    voar() {
        console.log("voar")
    }
}

class Papagaio extends Passaro {
    falar() {
        console.log("falar")
    }
}

// Instancia
const cao = new Cao()
//const passaro = new Passaro()
//const papagaio = new Papagaio()

//papagaio.correr() // Animal
//papagaio.voar() // Passaro
//papagaio.falar()
cao.tamanhoOrelha = 50
cao.correr()

//cao.correr()
//passaro.correr()
//passaro.cor = "Amarelo"
//console.log(passaro.cor)

/*
cao.latir()
passaro.correr()
passaro.voar()
*/
