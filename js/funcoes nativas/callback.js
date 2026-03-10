function processar(callbackSucesso, callbackErro) {

    /*
    ações
    ...
    */
   let resultadoProcessamento = true
   if (resultadoProcessamento) {
        callbackSucesso()
   } else {
        callbackErro()
   }
}

const salvarResultado = function() {
    /*
    ...
    */
   console.log("Salvar resultado")
}


const erro = function() {
    /*
    ...
    */
   console.log("Erro")
}

processar(salvarResultado, erro)