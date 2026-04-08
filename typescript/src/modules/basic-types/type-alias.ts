type Salary = number | string;
type Programmer = {
  name: string;
  age?: number;
  skills?: string[];
  contact: { email: string; phone: string };
  salary?: Salary;
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer({
  name: "Maria",
  skills: ["PHP"],
  contact: { email: "eduardoferreira@gmail.com", phone: "+55 11 98888-7777" },
});
