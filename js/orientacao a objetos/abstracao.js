// Pilar 1 - Abstração
/*
Modelo, Entidade, Identidade,
Características e Ações
*/

// Criando uma Classe
class Carro {
    constructor() {
        this.marca = "Volkswagen",
        this.modelo = "Gol",
        this.cor = "prata",
        this.placa = "EMJ-2565"
    }

    // Exemplo - Ações
    ligar() {

    }
}

// Objeto
const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo)

const carro2 = new Carro()
console.log(carro2.modelo)

// Loja virtual
class Produto {
    constructor() {

        // roupas
        this.tamanho = "P",
        this.cor = "vermelho",
        this.preco = "45,90",

        // Eletronicos
        this.altura = "50cm",
        this.largura = "30cm"

    }
}