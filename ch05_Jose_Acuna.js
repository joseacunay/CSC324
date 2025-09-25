// Exercises of chap 5 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//5.1 Flattening
console.log("\nExcercise  5.1: Flattening"); //Print Title
let arrays =  [[1, 2, 3], [4, 5], [6]]; // Arrays of Arrays

let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []); // Flattens an array of arrays into a single array. 
// Reduce goes through each sub-array. "=>" have the same value of RETURN

console.log(flattened); // Print the Array
// → [1, 2, 3, 4, 5, 6]

console.log("\n Or "); //Different way to do the exercise using RETURN

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, curr) => {
  // acc = acumulador
  // curr = sub-array actual
  return acc.concat(curr); // Using Return
}, []); // [] = valor inicial

console.log(flattened);
// → [1, 2, 3, 4, 5, 6]

//5.2 Own Loop Function 
console.log("\nExcercise  5.2: Own Loop Function"); //Print Title

function loop(value, test, update, body) { // Define the loop function with 4 parameters
  while (test(value)) { // As long as the test function returns true for the value...
    body(value); // Execute the body function with the current value
    value = update(value); // Update the value for the next iteration
  }
}

loop(3, n => n > 0, n => n - 1, console.log); // Call loop: start at 3, print, subtract 1 until it reaches 0
// → 3
// → 2
// → 1
