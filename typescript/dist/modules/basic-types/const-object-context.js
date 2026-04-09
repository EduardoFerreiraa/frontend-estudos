"use strict";
/* const file = {
  name: "lista de funcionários.txt",
  size: 244536367,
} as const;
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFileUpload = handleFileUpload;
const file = {
    name: "lista de funcionários.txt",
    size: 244536367,
};
// file.name = "lista_de_dependentes.txt";
function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}
handleFileUpload(file);
