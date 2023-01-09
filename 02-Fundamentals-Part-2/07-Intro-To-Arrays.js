"use strict";

//-------------------------------------------------------
// LECTURE 39: INTRO TO ARRAYS: FIRST DATA STRUCTURE
//-------------------------------------------------------

// Two Common Data Structures:
// 1) ARRAYS
// 2) OBJECTS

//  This is Our First ⭕ Data Structure. Array is like a big container in which we can throw variables that we can use later in our program. Arrays can hold any values we like and any type of values we want.

// The two most important Data Sctructures in JavaScript are
//

// ---------> 1.ARRAYS
//
// --------------> 2. OBJECTS

const yearsArray = new Array(1990, 1989, 1978);
console.log(yearsArray);

// Using the square brackets is called the Literal Syntax, the usual way
const myFriends = ["Mike", "Jessie", "Heisenberg", "Peter", "Carrie"];
console.log(myFriends); // ["Mike", "Jessie", "Heisenberg"];

console.log(myFriends[0]); // Mike: "0" based
console.log(myFriends[2]); // Heisenberg

console.log(myFriends.length); // 3

// GET LAST ELEMENT
console.log(myFriends[myFriends.length - 1]); // Carrie

// We should always use an expression, not a statement in JavaScript to get results.
// Any Position in an ARRAY simply needs to be an expression, i.e. it must have a value.
// We can also create Arrays like below, using the new Keyword

// ⭕ ARRAYS are ❌ not primitive values, so they can be ✅ Mutated. On the other hand, the primitive values are immutable

console.log(myFriends); // ["Mike", "Jessie", "Heisenberg", "Peter", "Carrie"]

myFriends[1] = "Morty";

console.log(myFriends); // ["Mike", "Morty", "Heisenberg", "Peter", "Carrie"]

// ❌ myFriends = ["Bobby", "Bobo"]; // This won't work

//--------------------------------
// More Examples

const job = "Scientist";
const friendsOfRick = ["Morty", "Birdperson"];

const rickDetails = [
  "Rick",
  "Sanchez",
  job,
  friendsOfRick,
  2023 - 1956,
  friendsOfRick[1],
  friendsOfRick.length,
];

console.log(rickDetails);
// ['Rick', 'Sanchez', 'Scientist', Array(2), 67, 'Birdperson', 2]

//---------
// EXERCISE
//---------
const calcAge = (birthYear) => {
  return 2037 - birthYear;
};

const years = [1991, 1995, 2000, 1987, 1945];

console.log([
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
]);

// [46, 42, 92]
