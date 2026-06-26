"use client"

import { useState } from "react"

export default function Entrada() {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    function calcularImc() {
        const p = parseFloat(peso);
        const a = parseFloat(altura);

        const imc = p / (a * a);

        if(imc <= 18) {
            setResultado("Abaixo do peso");
        } else if(imc > 18 && imc < 25) {
            setResultado("Peso normal");
        } else {
            setResultado("Sobrepeso")
        }
    }

    const [valor, setValor] = useState("Inicial"); 
    function alterarValor(e:any) {
        console.log(e)
        setValor(e.target.value)
    }

    return (
        <div className="p-2">
            <h1>Cálculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>
            <input 
                className="campo-texto"
                value={peso}
                onChange={e => setPeso(e.target.value)}
                placeholder="ex: 90"
                type="text" 
            /> KG
            <br />

            <p>Digite sua altura</p>
            <input 
                className="campo-texto"
                value={altura}
                onChange={e => setAltura(e.target.value)}
                placeholder="ex: 1.75"
                type="text" 
            /> Metros
            <br />
            <br />

            <button onClick={calcularImc} className="botao">Calcular</button>
            <br />

            <span>Resultado: {resultado}</span>
        </div>
    )
}