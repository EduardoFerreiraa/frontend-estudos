import { useState } from "react";
import AbaIndireta from "./AbaIndireta";


export default function ConteudoIndireta() {

    const [aba, setAba] = useState("");

    function alterarNome(nome: string) {
        setAba(nome);
    }

    return (
        <div>
            <span>{aba}</span>
            <hr />
            <AbaIndireta atualizar={alterarNome}/>
        </div>
    ) 
}