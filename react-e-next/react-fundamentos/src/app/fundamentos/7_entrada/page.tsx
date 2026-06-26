export default function Entrada() {
    return (
        <div className="p-2">
            <h1>Entrada de dados</h1>
            <input 
                value={"Digite algo"}
                type="text" 
                className="campo-texto"
            />
        </div>
    )
}