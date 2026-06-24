import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/src/components/interface"

export default function Pagina() {

    return (
        <div>
            <Cabecalho titulo="AirBnb"
             subtitulo="Início"
            />

            <Conteudo titulo="teste">
                <h1>Página início</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam eius rem quae dolorum consequatur voluptatem? Voluptates dolorum, cupiditate possimus cumque neque corporis asperiores voluptas ipsam quam recusandae laborum! Maxime.
                </p>
            </Conteudo>

            <Rodape />
        </div>
    )
}