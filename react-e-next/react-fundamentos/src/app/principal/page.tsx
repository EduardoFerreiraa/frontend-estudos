import { Acomodacao, Cabecalho, Menu } from "@/src/components/interface"

export default function Pagina() {

    return (
        <div>
            {Cabecalho()}
            <hr />  
            {Acomodacao()}
            <hr />
        </div>
    )
}