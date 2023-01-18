"use strict";
//----------------------------------------------------------------------------
// LECTURE 95: HOISTING AND TDZ in PRACTICE
//----------------------------------------------------------------------------

//-----------------------
// ⭐ VARIABLES HOISTING
//-----------------------

console.log(firstName); // undefined
// console.log(job); // ❌ Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(birthYear); // ❌ Uncaught ReferenceError: Cannot access 'birthYear' before initialization

var firstName = "Peter";
let job = "Analyst";
const birthYear = 1989;

//--------------------
// ⭐ FUNCTIONS HOISTING
//--------------------

console.log(addDecl(2, 3)); // 5
// console.log(addExpr(4, 5)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(9, 10)); // TypeError: addArrow is not a function: Since its UNDEFINED as its HOISTED USING "var"
console.log(addArrow); // undefined

// Function Declaration
function addDecl(a, b) {
  return a + b;
}

// Function Expression
const addExpr = function (x, y) {
  return x + y;
};

// Arrow Function
var addArrow = (p, q) => p + q;

//--------------------------------------
// 🚩 DANGERS OF HOISTING with "var" 🚩
//-------------------------------------
// EXAMPLE
// ❌❌❌❌❌❌❌

if (!numProducts) deleteShoppingCart(); // All products deleted

var numProducts = 10; // We have produts in our cart

// Creates BUG
function deleteShoppingCart() {
  console.log("All products deleted");
}

//----------------
// MORE EXAMPLES
//----------------

var x = 1; // Creates property in the window object, ❗ NOT RECOMMENDED At All
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

// ---------------------------------------
// 🔥 TEMPORAL DEAD ZONE, LET AND CONST 🔥
// ---------------------------------------
// TDZ

const firstName = "Peter";

if (firstName === "Peter") {
  console.log(`${firstName} is a/an ${job}`);
  const age = 2077 - 1989;
  console.log(age);
  const job = "Analyst"; // Uncaught ReferenceError: Cannot access 'job' before initialization
  console.log(x); // Uncaught ReferenceError: x is not defined
}
