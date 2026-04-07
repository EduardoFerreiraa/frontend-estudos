"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProgrammer = showProgrammer;
//let programmer: { name: string; age: number, skills: string[] } = {
let programmer = {
    name: "Jorge",
    age: 35,
    skills: ["JavaScript", "TypeScript"],
};
programmer.name = "Eduardo";
programmer.age = 19;
function showProgrammer(programmer) {
    console.log(programmer);
}
showProgrammer(programmer);
showProgrammer({ name: "Leonardo", skills: ["PHP"] });
