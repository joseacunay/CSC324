// Exercises of chap 4 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming

//4.1 The sum of a Range
console.log("\nExcercise  4.1: The Sum of Range"); //Print Title

function range(start, end, step = 1) { // Función que genera un array de números desde "start" hasta "end"
// con un incremento (step) que puede ser positivo o negativo.
  let result = []; // Aquí guardaremos los números generados

  if (step === 0) throw new Error("El paso (step) no puede ser 0"); 
  // Si step es 0, se detiene porque no tendría sentido. Solo verifica que el step > 0

  if (step > 0) {
    
    for (let i = start; i <= end; i += step) { // Caso: step positivo → vamos de menor a mayor
      result.push(i); // Agregamos cada número al array
    }
  } else {
    // Caso: step negativo → vamos de mayor a menor
    for (let i = start; i >= end; i += step) {
      result.push(i); // Agregamos cada número al array
    }
  }

  return result; // Devolvemos el array final
}

// Función que recibe un array de números y devuelve su suma
function sum(numbers) {
  let total = 0; // Variable acumuladora
  for (let num of numbers) { // Recorremos cada número del array
    total += num; // Lo sumamos al acumulador
  }
  return total; // Devolvemos la suma total
}
// Ex
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//4.2 Reversing an array
console.log("\nExcercise  4.2: Reversing an array"); //Print Title

function reverseArray(array) {
  let result = [];                // Creamos un array vacío para guardar el resultado invertido
  for (let i = array.length - 1; i >= 0; i--) {
    // Empezamos desde el último índice (array.length - 1) y vamos hacia el inicio
    result.push(array[i]);        // Agregamos cada elemento al nuevo array en orden inverso
  }
  return result;                  // Devolvemos el nuevo array invertido
}
let array = ["A", "B", "C"];
console.log(reverseArray(array));
// → ["C", "B", "A"];
console.log(array);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);
// → [5, 4, 3, 2, 1]