// Exercises of chap 3 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//1.0 Minimun
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
