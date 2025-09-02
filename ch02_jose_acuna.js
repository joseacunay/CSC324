// jose

// looping a triangle
/* About imagen */
// Ejercicios del capítulo 2 de Eloquent JavaScript

// 2.1 Looping a Triangle
let triangle = "roma";

console.log("Ejercicio 2.1: Looping a Triangle");
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}
console.log (triangle)

// 2.2 FizzBuzz
console.log("\nEjercicio 2.2: FizzBuzz");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 2.3 Chessboard
console.log("\nEjercicio 2.3: Chessboard");
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);



console.log("Rama".length)
