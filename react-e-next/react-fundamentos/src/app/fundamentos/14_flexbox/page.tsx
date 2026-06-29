export default function Aplicacao() {
    return (

        // flex-row-reverse
        // order-2 grow justify-between items-start
        <div className="border p-3 flex flex-row flex-wrap gap-3 justify-evenly items-start">
            <div className="caixa h-28">Caixa 1</div>
            <div className="caixa">Caixa 2</div>
            <div className="caixa">Caixa 3</div>
        </div>
    )
}