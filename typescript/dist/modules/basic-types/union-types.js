"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalize = totalize;
let shoppingCart = [200.75, 150.12, "33.90", "44", "not defined"];
// export function totalize(values: Array<(number | string | null | object)>) {}
// retornar o total 
function totalize(values) {
    return values
        .map((value) => (typeof value === "number" ? value : parseFloat(value))) // converter todos os valores para números
        .filter((value) => !isNaN(value)) // Filtrar os valores válidos
        .reduce((acc, curr) => acc + curr, 0); // Totalizar
}
console.log(totalize(shoppingCart));
