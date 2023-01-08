//----------------------------------------------------------
// LECTURE - 21: TRUTHY And FALSY VALUES
//----------------------------------------------------------

// ⭕ FALSY VALUES - They are the values that are not exactly false,
// but will become false when we try to convert them into a Boolean. And in JavaScript,
// there are only 5 falsy values. EVERYTHING ELSE are the TRUTHY values.

//---------------
// 🔴 Falsy Values:   0,  '',  undefined,  null,  NaN
//---------------

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

//------------------
// 🟢 Truthy Values
//------------------

console.log(Boolean({})); // true
console.log(Boolean("Peter")); // true

//---------------------------------------------------------------------------
// ❓ Question - When exactly does JavaScript does Type Coercion to Booleans?
//---------------------------------------------------------------------------

// ✅ Answer - It happens in 2 Scenarios.
// -----> First, when using logical Operators, and
// -----> Second in a Logical Context, like for example in the condition of an if/else statement.

//----------
// EXAMPLE
//---------

//--------
// ❗ FALSY
//-------
let money = 0; // <----- Evaluates to FALSE, Hence FALSY
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should earn some money!"); // You should earn some money!
}

//---------
// ✔ TRUTHY
//--------
money = 100; // <----- Evaluates to TRUE, Hence TRUTHY
if (money) {
  console.log("Don't spend it all"); // Don't spend it all
} else {
  console.log("You should get a job");
}

//-----------
// BUG : Height is "0", which is defined, but its evaluated as FALSY,
// This can be solved by using LOGICAL OPERATORS
//-----------

let oldHeight = 0;

if (oldHeight) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
