import Image from "next/image"

export default function Page() {

    const usuario = {
        nome: "Ana Maria",
        urlPerfil: "https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-1.9e8fb857.png&w=640&q=75"
    }

    return (
        <div>
            <h1>Imagens</h1>
            <Image
                src="/img/formula1.jpeg"
                alt={"Nome: " + usuario.nome}
                width={400}
                height={225}
            />
            {/* <img
                // src={usuario.urlPerfil}
                src="/img/formula1.jpeg"
                alt={"Nome: " + usuario.nome}
                style={
                    {width: 700, height: 400}
                }
            /> */}
        </div>
    )
}