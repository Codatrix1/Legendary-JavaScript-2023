//----------------------------------------------------------
// LECTURE - 22: EQUALITY OPERATORS: == VS ===
//----------------------------------------------------------

// ASSIGNMENT OPERATOR                              ---> =
// LOOSE EQUALITY OPERATOR (Performs TYPE COERCION) ---> ==
// STRICT OPERATOR (NO TYPE COERCION)               ---> ===

const number = 18; // Assignment
console.log("18" == 18); // true
console.log("18" === 18); // false

const age = "18";

if (age === 18) console.log("You can drive (STRICT ===)");
if (age == 18) console.log("You can drive (LOOSE ==)");

// EXAMPLE

//--------------------------
// 🔴 PROMPT Function - This is a pretty simple
// function of getting a value from a WebPage. This is the prompt function

const favNum = Number(prompt("Enter a number: "));

if (favNum === 33) {
  console.log("33 is a nice number");
} else if (favNum === 7) {
  console.log("7 is also a nice number");
} else if (favNum === 9) {
  console.log("9 is also a nice number");
} else {
  console.log("Number is neither 33 or 7 or 9");
}

if (favNum !== 33) console.log("Why not 33?");
