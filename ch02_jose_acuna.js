
console.log("%cExercises of chap 2 de Eloquent JavaScript", "font-weight: bold");
console.log("%cAuthor: Jose Acuna", "font-weight: bold");
console.log("%cClass: Web Programming", "font-weight: bold");

// 2.1 Looping a Triangle
let triangle = "roma"; // Declares a variable named triangle and assigns it the string "roma"

console.log("Ejercicio 2.1: Looping a Triangle"); //Prints the text "Ejercicio 2.1: Looping a Triangle"
for (let i = 1; i <= 7; i++) { // Loop continues while i is less than or equal to 7. i++ increases i by 1 each iteration
  console.log("#".repeat(i)); // Inside the loop, prints a string of # repeated i times. On the first iteration it prints #, on the second ##, and so on up to #######
}
console.log (triangle) //Print the value of variable

// 2.2 FizzBuzz
console.log("\nEjercicio 2.2: FizzBuzz"); // Print Title
for (let i = 1; i <= 100; i++) { // Loop i from 1 to 100.
  if (i % 3 === 0 && i % 5 === 0) { // If i is divisible by both 3 and 5.
    console.log("FizzBuzz"); // Print
  } else if (i % 3 === 0) { // Else if i is divisible by 3
    console.log("Fizz"); //Print Fizz 
  } else if (i % 5 === 0) { // Else if i is divisible by 5.
    console.log("Buzz"); //Print
  } else {
    console.log(i); // Otherwise, print the number itself
  }
}

// 2.3 Chessboard
console.log("\nEjercicio 2.3: Chessboard"); //Print Title
let size = 8; //Chessboard size
let board = ""; // Creates an empty string board to build the chessboard
for (let y = 0; y < size; y++) { // Outer loop for rows (y from 0 to 7).
  for (let x = 0; x < size; x++) { //Inner loop for columns (x from 0 to 7)
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#"; // Adds a " " (space) if the sum of row and column is even, otherwise adds "#".This creates the alternating black and white squares.
    }
  }
  board += "\n"; // Created a new line
}
console.log(board); // show the chessboard