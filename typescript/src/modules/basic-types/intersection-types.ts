export const bootstrap = (): void => {
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    departament: string;
  };

  type Customer = {
    wishList: string[];
  };

  type EmployeeDatails = Person & Employee;

  const employee: EmployeeDatails = {
    name: "Jorge",
    age: 25,
    departament: "TI",
  };

  type CustomerDetails = Person & Customer & Employee;

  const customer: CustomerDetails = {
    name: "Maria",
    age: 28,
    departament: "Contabilidade",
    wishList: ["Smartphone", "Laptop", "Headphones"],
  };
};
