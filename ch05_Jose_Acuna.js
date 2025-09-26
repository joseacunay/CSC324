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

let arrays2 = [[1, 2, 3], [4, 5], [6]];

let flattened2 = arrays2.reduce((acc, curr) => {
  // acc = acumulador
  // curr = sub-array actual
  return acc.concat(curr); // Using Return
}, []); // [] = Initial Value

console.log(flattened2);
// → [1, 2, 3, 4, 5, 6]

//Made in class for examples
let arrays3 = [["G",["EO"]],["RGE","TO"],["W","N"]]; //Tried to show letter too. Not just number
let flattened3 = arrays3.reduce((acc, curr) => {
  // acc = acumulador
  // curr = sub-array actual
  return acc.concat(curr); // Using Return
}); // [] = Initial Value
console.log(flattened3);

//5.2 Own Loop Function 
console.log("\nExcercise  5.2: Own Loop Function"); //Print Title

function loop(value, test, update, body) {   // Define the loop function with 4 parameters
  for (let j = value; test(j); j = update(j)) { // Start at value; keep going while test(j) is true; update j each iteration
    body(j);                                  // Execute the body function with the current value
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


//5.3 Everything 
console.log("\nExcercise  5.3: Everything"); //Print Title
function every(array, test) { //
for (let element of array) { // Loop through each element in the array
    if (!test(element)) { // If any element does NOT pass the test...
      return false;// Immediately return false
    }
  }
  return true;   // 
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

