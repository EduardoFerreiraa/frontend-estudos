import { Acomodacao, Cabecalho, Menu } from "@/src/components/componentes";

export default function Page() {
    return (
        <div>
            <h1 className="bg-blue-500">Título propriedades (APP)</h1>
            <Cabecalho titulo="São Roque, Brasil, teste"
            preco="R$350"/>
            <hr />
            <Acomodacao />
            <Cabecalho titulo="Campos do Jordão, Brasil"
            preco="R$500"/>
        </div>
    )
}