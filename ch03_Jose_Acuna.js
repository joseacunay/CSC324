// Exercises of chap 3 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//3.1 Minimun
console.log("\nExcercise  3.1: Minimun"); //Print Title
function min(a, b) { //Create a function call min and 
  if (a < b) { //Compared "a" and "b". If "a" is greater than "b"
    return a; //Show "a" if "a" is greater than "b"
  } else { // If "a" isn't greater than "b"
    return b; // Show "b" 
  }
}
// Ex:
console.log(min(5, 10));
console.log(min(20, 7));

//3.2 Recursion
console.log("\nExcercise  3.2: Recursion"); //Print Title
function isEven(n) { // Function that differentiates between even and odd numbers
  if (n ===0 ) {
    return true;   // if n is equal to 0 is even
  } else if (n === 1) {
    return false;  // if n is equal to 1 is odd
  } else if (n < 0) {
    return isEven(-n); // Corrects negative numbers, so negative by negative would give a positive number
  } else {
    return isEven(n - 2); // Recursive case
  }
}
console.log(isEven(50));  // Response should be "true"
console.log(isEven(75));  // Response should be "false"
console.log(isEven(-1));  // Response should be "false"

//3.3 Bean counting
console.log("\nExcercise  3.3: Bean Counting"); //Print Title
function countChar(str, char) { // Define a function named countChar that takes two parameters
  let count = 0; // Initialize a counter variable "count" to 0. 
  for (let i = 0; i < str.length; i++) { // Start a loop that goes through each character of the string."i" begins at 0, continues while "i" is less than the string length, 
    if (str[i] === char) { // Check if the current character (str[i]) is equal to "char".
    count++;// If it is, add 1 to the counter.
    }
  }
return count;// After the loop finishes, return the final value of "count".
}
function countBs(str) {// Define a new function named countBs that takes one parameter "str".
  return countChar(str, "B"); // Call countChar, but always look for the uppercase letter "B".
}
console.log(countBs("BOB"));// Print
console.log(countChar("kakkerlak", "k")); //Print

