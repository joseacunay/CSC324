// Exercises of chap 6 de Eloquent JavaScript
// Author: Jose Acuna
// Class: Web Programming


class Group { //Creates a new class called Group.
  constructor() {
    this.members = []; // Start with an empty array to save values
  }

  add(value) {
    if (!this.has(value)) { // Check: if the value is NOT in the group
      this.members.push(value); // Add the value to the array
    }
  }

  delete(value) { // Remove the value from the array if it exists

    this.members = this.members.filter(v => v !== value); //Checks each element (v) in the array and keeps it only if it is not equal (!==) to value. That way, the chosen value disappears from the group.
  }

  has(value) {//Checks if the value is already in the group.
    return this.members.includes(value); // Return true if value is in the group
  }

  static from(iterable) {
    let group = new Group(); // Make a new empty group
    for (let item of iterable) { // Go through each value in the iterable
      group.add(item);// Add each value to the group
    }
    return group;// Return the finished group
  }
}

let group = Group.from([10, 20]);   // Make a group with 10 and 20
console.log(group.has(10));         // → true (10 is inside the group)
console.log(group.has(30));         // → false (30 is not in the group)
group.add(10);                      // Does nothing (10 is already inside)
group.delete(10);                   // Removes 10 from the group
console.log(group.has(10));         // → false (10 is gone now)

