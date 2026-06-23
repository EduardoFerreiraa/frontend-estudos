function Acomodacao() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Góes</p>
        </div>
    )
}

export default function Page() {
    const nome = "Jamilton";

    return (
        <div>
            {Acomodacao()}
            <hr />  
            {Acomodacao()}
            <hr />
            {nome}
        </div>
    )
}