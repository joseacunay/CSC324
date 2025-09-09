// Exercises of chap 3 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//3.1 Minimun
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
function isEven(n) { // Function that differentiates between even and odd numbers
  if (n === 0) {
    return true;   // if n is equal to 0 is even
  } else if (n === 1) {
    return false;  // if n is equal to 1 is odd
  } else if (n < 0) {
    return isEven(-n); // Corrects negative numbers, so negative by negative would give a positive number
  } else {
    return isEven(n - 2); // caso recursivo
  }
}
console.log(isEven(50));  // true
console.log(isEven(75));  // false
console.log(isEven(-1));  // false

