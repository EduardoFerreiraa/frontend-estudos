'use client'

export default function Page() {

    let numero = 0;
    function incrementar() {
        numero += 1;
        console.log("Número: " + numero)
    }

    return (
        <div>
            <h1>Estados</h1>
            <button 
            onClick={incrementar} 
            className="bg-blue-400 p-2"
            >
                Clique aqui
            </button>

            <p>Número: {numero}</p>
        </div>
    )
}