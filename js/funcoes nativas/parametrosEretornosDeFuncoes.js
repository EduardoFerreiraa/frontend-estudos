// Parâmetros padrão 

/*function somar(numero1, numero2) {
    numero1 = isNan(numero1) ? 0 : numero1
    numero2 = isNan(numero2) ? 0 : numero2

    return numero1 + numero2;
}

somar(2, "Eduardo");

// NaN -> Not a Number (não é um número) */

// Valor padrão do es2015
function somar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}

somar(2, 10);
