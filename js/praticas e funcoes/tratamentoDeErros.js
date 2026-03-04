// Tratamento de erros com Try Catch
function contarQuantidadeLetras(produto) {
    try {
        console.log(produto.nome.length)
        console.log("teste")
    } catch (erro) {
        tratarErro( erro )
        // console.log("Erro ao processar")
    } /* finally {
        console.log("finally") // sempre exibir independente se deu certo ou erro
    } */
}

function tratarErro(erro) {
    throw new Error("Código erro: 164")
}

const produto = {
    nom: "Notebook",
    preco: 1220
}

contarQuantidadeLetras(produto)