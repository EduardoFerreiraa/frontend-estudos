import { Cabecalho, Conteudo, Menu, Rodape } from "@/src/components/componentes"

export default function Pagina() {

    return (
        <div>
            <Cabecalho 
                titulo="AirBnb"
                subtitulo="Início"
                className="bg-blue-500"
            />

            <Menu />

            <Conteudo>
                <h1>Página início</h1>

                <img src="/img/formula1.jpeg" alt="Formula1" 
                style={{width:400, height:250}}
                />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam eius rem quae dolorum consequatur voluptatem? Voluptates dolorum, cupiditate possimus cumque neque corporis asperiores voluptas ipsam quam recusandae laborum! Maxime.
                </p>
            </Conteudo>

            <Rodape />
        </div>
    )
}