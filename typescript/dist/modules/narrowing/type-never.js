export const bootstrap = () => {
    function throwError(message) {
        throw new Error(message);
    }
    // throwError("Aplicação interrompida. Erro interno!");
    console.log("Continuação...");
    console.log("Continuação...");
    console.log("Continuação...");
    function infinteLoop() {
        let total = 0;
        while (true) {
            const inputText = prompt("Digite um valor numérico");
            if (inputText) {
                const inputNumber = parseFloat(inputText);
                if (!isNaN(inputNumber)) {
                    total += inputNumber;
                    console.log(total);
                }
            }
        }
    }
    infinteLoop();
    console.log("Continuação...");
    console.log("Continuação...");
    console.log("Continuação...");
    // Fim do fluxo
};
