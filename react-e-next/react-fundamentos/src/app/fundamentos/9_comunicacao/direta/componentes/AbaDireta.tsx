import ConteudoDireta from "./ConteudoDireta";
import { useState } from "react";

export default function AbaDireta() {

    const [aba, setAba] = useState("");

    return (
        <div>
            <button onClick={() => setAba("Conversas")}>Conversas</button>
            <button onClick={() => setAba("Atualizações")}>Atualizações</button>
            <button onClick={() => setAba("Chamadas")}>Chamadas</button>

            <ConteudoDireta nome={aba}/> 
        </div>
    )
}