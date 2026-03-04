// Tratamento de erros com Try Catch
function contarQuantidadeLetras(produto) {
    try {
        console.log(produto.nome.length)
        console.log("teste")
    } catch (erro) {
        console.log("Erro ao processar")
    }
}

const produto = {
    nome: "Notebook",
    preco: 1220
}

contarQuantidadeLetras(produto)