// Exercises of chap 5 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//5.1 Flattening
console.log("\nExcercise  5.1: Flattening"); //Print Title
let arrays =  [[1, 2, 3], [4, 5], [6]]; // Arrays of Arrays

let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened); // Print the Array
// → [1, 2, 3, 4, 5, 6]

console.log("\n Or "); //Different way to do the excersice 

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, curr) => {
  // acc = acumulador
  // curr = sub-array actual
  return acc.concat(curr); // ahora el return es explícito
}, []); // [] = valor inicial

console.log(flattened);
// → [1, 2, 3, 4, 5, 6]

