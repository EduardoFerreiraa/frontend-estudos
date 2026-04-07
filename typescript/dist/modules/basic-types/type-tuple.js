"use strict";
let filmArray = [1, "Guerra Civil", true];
let filmTuple = [
    2,
    "Um lugar silencioso: Dia um",
    true,
];
let filmTupleOpcionalPositin = [
    2,
    "Um lugar silencioso: Dia um",
    false,
];
//
const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;
console.log(id);
