'use client'
import { useState } from "react";

export default function Page() {

    // let numero = 0;
    let [numero, funcao] = useState(0) // [numero, funcao]
    function incrementar() {
        funcao(numero + 1) 
        console.log("Número: " + numero)
    }

    function decrementar() {
        funcao(numero - 1) 
        console.log("Número: " + numero)
    }

    return (
        <div>
            <h1>Estados</h1>
            <button 
            onClick={incrementar} 
            className="bg-blue-400 p-2"
            >
                incrementar
            </button> <br />

            <button 
            onClick={decrementar} 
            className="bg-blue-400 p-2"
            >
                Decrementar
            </button> <br />

            <p>Número: {numero}</p>
        </div>
    )
}