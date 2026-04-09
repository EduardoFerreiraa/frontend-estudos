/* const file = {
  name: "lista de funcionários.txt",
  size: 244536367,
} as const; 
*/

type File = {
  readonly name: string;
  size: number;
};

const file: File = {
  name: "lista de funcionários.txt",
  size: 244536367,
} as const;

// file.name = "lista_de_dependentes.txt";

export function handleFileUpload(file: File) {
  console.log(`Nome: ${file.name}`);
  console.log(`Tamanho: ${file.size}`);
}

handleFileUpload(file);
