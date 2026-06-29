export default function Aplicacao() {
    return (
        <div className="bg-blue-900">
            <h1 className="text-orange-400">Cores</h1>
            <h1 className="text-orange-200">Cores</h1>
            <h1 className="text-[#49e70f]">Cores</h1>

            <button className="bg-orange-600 hover:bg-orange-400">Botão</button>
            <button className="bg-[#e6d700] hover:bg-[#918200]">Botão</button>

            {/* h-96 bg-[url(/img/cidade.jpg)] */}
            <h1 className="
            h-96 
            bg-orange-200
            bg-[url(/img/nuvem.png)]
            bg-no-repeat
            bg-center
            ">Fundo imagem</h1>
        </div>
    )
}