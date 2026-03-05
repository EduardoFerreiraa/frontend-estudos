// Funções construtoras

const Hotel = function() {

    this.hotel = "Hotel do Jamilton"
    this.quantidadeSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function() {
        this.suitesOcupadas++
        console.log("ocupadas: " +this.suitesOcupadas)
    }
}

const hotel = new Hotel()
hotel.reservar()