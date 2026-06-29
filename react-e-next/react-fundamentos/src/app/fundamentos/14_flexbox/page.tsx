export default function Aplicacao() {
    return (

        // flex-row-reverse
        // order-2 grow justify-between items-start
        // <div className="border p-3 flex flex-row flex-wrap gap-3 justify-evenly items-start">
        <div className="border-4 p-3 flex gap-3">
            <div className="caixa w-48 grow-0 shrink-0">Caixa 1</div>
            <div className="caixa w-72 grow shrink">Caixa 2</div>
            <div className="caixa w-96 grow-0 shrink-0">Caixa 3</div>
        </div>
    )
}