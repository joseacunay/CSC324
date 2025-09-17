// Exercises of chap 4 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//4.1 The sum of a Range
console.log("\nExcercise  4.1: The Sum of Range"); //Print Title

function range(start, end, step = 1) { // Creates an array of numbers from start to end with step
  let result = []; // Store the generated numbers

  if (step === 0) throw new Error("Step cannot be 0"); // Prevents infinite loop if step = 0 (ChatGPT Used for made this line)

  if (step > 0) { 
    for (let i = start; i <= end; i += step) { // Positive step => count up
      result.push(i); // Add number to array
    }
  } else {
    for (let i = start; i >= end; i += step) { // Negative step => count down
      result.push(i); // Add number to array
    }
  }

  return result; // Return the final array
}

function sum(numbers) { // Returns the sum of numbers in an array
  let total = 0; // Accumulator
  for (let num of numbers) { total += num; } // Add each number to total
  return total; // Return total sum
}

// Ex
console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
console.log(sum(range(1, 10))); // → 55

// 4.2 Reversing an array
console.log("\nExercise 4.2: Reversing an array"); // Print title

function reverseArray(array) { // Function that creates a new reversed array (does not change original)
  let result = [];                
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);// Add elements from end to start
  }
  return result;                  
}

function reverseArrayInPlace(array) { // Function that reverses array in place (changes the original array)
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let j = array.length - 1 - i; // Index from the end
    let temp = array[i]; // Save current element
    array[i] = array[j]; // Swap with opposite element
    array[j] = temp; // Put saved element in opposite position
  }
  return array;
}

//Ex
let array = ["A", "B", "C"];
console.log(reverseArray(array));
// → ["C", "B", "A"];
console.log(array);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);     
console.log(arrayValue);
// → [5, 4, 3, 2, 1]  


// 4.3 List
console.log("\nExercise 4.3: A List"); // Print title

function arrayToList(array) { // Convert array to list
  let list = null;                          // Start with empty list
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }; // Add each item to front
  }
  return list;// Return full list
}
function listToArray(list) { // Convert list to array
  let array = [];// Empty array
  for (let node = list; node; node = node.rest) {
    array.push(node.value);// Push value to array
  }
  return array;// Return array
}
function prepend(value, list) { // Add element to front of list
  return { value, rest: list };// New object pointing to list
}
function nth(list, n) {// Get element at position n (iterative)
  let node = list;                          
  for (let i = 0; node; i++, node = node.rest) {
    if (i === n) return node.value;// Found position
  }
  return undefined;// Not found
}


function nthRecursive(list, n) { // Get element at position n (recursive)
  if (!list) return undefined;// Empty list
  if (n === 0) return list.value;// Found position
  return nthRecursive(list.rest, n - 1); // Go deeper
}

//Ex
console.log(arrayToList([10, 20]));// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 2));// → 30



// 4.4 Deep Comparison
console.log("\nExercise 4.4: Deep Comparison"); // Print title

function deepEqual(a, b) {
  if (a === b) return true;   // If both values are exactly the same (number, string, boolean, etc.)


  if (a == null || typeof a != "object" ||   // If one of them is null or not an object, they are not equal
      b == null || typeof b != "object") {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);   // Get property names of both objects


  if (keysA.length !== keysB.length) return false; // If number of properties is different → not equal
  for (let key of keysA) { // Check each property
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) { // If property does not exist in b OR values are not deeply equal → false
      return false;
    }
  }

  return true;   // If all checks passed => equal
}

//Ex
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));// → true
console.log(deepEqual(obj, {here: 1, object: 2}));// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));// → true
