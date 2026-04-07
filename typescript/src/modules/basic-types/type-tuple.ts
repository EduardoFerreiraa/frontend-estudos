let filmArray: (number | string | boolean)[] = [1, "Guerra Civil", true];
let filmTuple: [number, string, boolean] = [
  2,
  "Um lugar silencioso: Dia um",
  true,
];

let filmTupleOpcionalPositin: [number, string, boolean?] = [
  2,
  "Um lugar silencioso: Dia um",
  false,
];

//
const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;

console.log(id);
