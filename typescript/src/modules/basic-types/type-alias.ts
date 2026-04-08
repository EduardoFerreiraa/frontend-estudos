export function showProgrammer(programmer: {
  name: string;
  age?: number;
  skills?: string[];
}) {
  console.log(programmer);
}

showProgrammer({ name: "Leonardo", skills: ["PHP"] });
