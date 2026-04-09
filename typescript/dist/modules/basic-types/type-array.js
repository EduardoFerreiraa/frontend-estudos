// let films = ["Duna: parte 2", "Divertida Mente 2"];
let films = ["Duna: parte 2", "Divertida Mente 2"];
// let numbers: number[] = [10, 20, 30, 40, 50];
// let films: Array<string> = ["Duna: parte 2", "Divertida Mente 2"];
// let numbers: Array<number> = [10, 20, 30, 40, 50];
export function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
