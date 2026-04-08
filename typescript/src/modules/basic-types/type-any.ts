export function handleFileUpload(file: any) {
  console.log(`Nome: ${file.name}`);
  console.log(`Tamanho: ${file.zise}`); // Apenas para fins didáticos
}

const file = ({
  name: "lista de funcionários.txt",
  size: 244536367,
});
handleFileUpload(file);
