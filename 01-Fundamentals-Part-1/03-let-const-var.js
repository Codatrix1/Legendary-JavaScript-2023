//----------------------------------------------------------
// LECTURE - 13: LET, CONST and VAR
//----------------------------------------------------------

//---------------
// LET: Mutable
//---------------
let age = 30;
age = 35;

let count;
count = 0;

//--------------------
// CONST: Immutable
//--------------------
const birthYear = 1990;
// birthYear = 1990; // ❌

//-------------------------------
// VAR: We should ❌ Avoid using "var" variable
// declaration at all costs as "const" is used since ES6
//-------------------------------
var job = "Programmer";
job = "Writer";
console.log(job);

// ❌ Avoid Creating Variable in the Global SCOPE.
lastName = "Quinn";
console.log(lastName);

// ❓❓ Question - What is the Difference Between let and var ?
// let is Block Scoped 🟨
// Var is Function Scoped ⭕
