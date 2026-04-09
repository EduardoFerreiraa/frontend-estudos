/* const file = {
  name: "lista de funcionários.txt",
  size: 244536367,
} as const;
*/
const file = {
    name: "lista de funcionários.txt",
    size: 244536367,
};
// file.name = "lista_de_dependentes.txt";
export function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}
handleFileUpload(file);
