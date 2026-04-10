export const bootstrap = () => {
    console.log("Int - Max Safe: ", Number.MAX_SAFE_INTEGER);
    console.log("Int - Min Safe: ", Number.MIN_SAFE_INTEGER);
    let bigintNumber = 9007199254740991n;
    console.log("Atribuição com sufixo  n: ", bigintNumber);
    let bigintNumber2 = BigInt(9007199254740991n);
    console.log("Atribuição com o construtor BigInt: ", bigintNumber2);
};
