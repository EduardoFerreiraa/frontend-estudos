"use strict";
// let films = ["Duna: parte 2", "Divertida Mente 2"];
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseStrings = toUpperCaseStrings;
let films = ["Duna: parte 2", "Divertida Mente 2"];
// let numbers: number[] = [10, 20, 30, 40, 50];
// let films: Array<string> = ["Duna: parte 2", "Divertida Mente 2"];
// let numbers: Array<number> = [10, 20, 30, 40, 50];
function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
