//------------------------------------------
// LECTURE - 9: LINKING A JavaScript File
//-------------------------------------------

/*

let js = "amazing";

if (js === "amazing") {
  console.log("JavaScript is FUN!");
}

console.log(12 + 13 + 12);

*/

//------------------------------------------
// LECTURE - 10: VALUES AND VARIABLES
//-------------------------------------------

/*

//  Values
console.log("Ankur");
console.log(34);

// Variables: Use camelCase
let firstName = "Peter";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//  Only letters, _ (underscores) and $ (Dollar Sign) are allowed to be written in variable names in JavaScript

let peter_quinn = "PQ";
let $myFunc = 27;

let PI = 3.1415;
let Person = "Peter"; // OOP Convention

// Some naming Conventions
let fullName = "Peter Quinn";
let myFirstJob = "Analyst";
let myCurrentJob = "Programmer";

*/

//----------------------------------------------------------
// LECTURE - 11: VALUES AND VARIABLES: Practice Assignments
//----------------------------------------------------------

/*
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console


let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = "139.34 crore";

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);

*/

//----------------------------------------------------------
// LECTURE - 12: DATA TYPES
//----------------------------------------------------------
/*

// In JavaScript, every Value is either an Object, or a Primitive. When its not an Object, its a Primitive Value

//-----------------------
// 🔴 Object Data Types
//-----------------------

let personDetails = {
  firstName: "Peter",
  job: "Programmer",
  age: 33,
};

console.log(typeof personDetails);

//---------------------------------
// 🔴 Primitives - 7 Data Types
//---------------------------------

// 1) Number
let age = 23;

// 2) Strings
let myName = "Pete";

// 3) Boolean
let fullAge = true;

// 4) Undefined
let children;

// 5) Null

// 6) Symbol(ES2015)

// 7) BigInt(ES2020)

console.log(typeof 23);
console.log(typeof "Hello");
console.log(typeof true);

// 🟡 DYNAMIC TYPING means than we can easily change the type of value that is held by a variable. JavaScript automatically determines the type of data, as soon as it declared. We dont have to declare it manually, as in may programming languages
//-------------------
// Reassigning the Value of javascriptIsFun using the Box Analogy with a New Label
//------------------

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun); // boolean

javaScriptIsFun = "DEFINITELY";
console.log(typeof javaScriptIsFun); // string

//--------------------------------------------------------
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1990;
console.log(typeof year); // number

//----------------------------------------------------
// BUG: Should return null. Never corrected due to legacy reasons
console.log(typeof null); // object

*/

//----------------------------------------------------------
// LECTURE - 13: LET, CONST and VAR
//----------------------------------------------------------

/*

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

*/

//----------------------------------------------------------
// LECTURE - 14: BASIC OPERATORS
//----------------------------------------------------------

/*

//---------------------------
// 1) ARITHEMATICAl OPERATORS
//----------------------------

const currentYear = 2077;

const agePeter = currentYear - 1990;
const ageCarrie = currentYear - 1992;

console.log(agePeter, ageCarrie);

// 2 ** 3 = 2 to the power of 3 = 2 * 2 * 2
console.log(agePeter * 2, agePeter / 10, 2 ** 3);

const firstName = "Peter";
const lastName = "Quinn";
console.log(firstName + " " + lastName); // CONCATENATE STRINGS

//-----------------------
// 2) typeof OPERATORS
//-----------------------

const year = 2077;
console.log(typeof year);

const javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

//-------------------------
// 3) ASSIGNMENT OPERATORS
//-------------------------

let x = 10 + 5; // 15
x += 10; // x = x + 10

x *= 4; // x = x * 4

x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1

console.log(x); // Result: 99

//-------------------------
// 4) COMPARSION OPERATORS
//-------------------------
// Boolean Results: >, < , >= , <=
console.log(ageCarrie, agePeter); // 85, 87

console.log(ageCarrie > agePeter); // false
console.log(ageCarrie >= 18); // true

const isFullAge = ageCarrie >= 18;
console.log(isFullAge); // true

console.log(currentYear - 1990 > currentYear - 1992); // true

*/
//----------------------------------------------------------
// LECTURE - 15: OPERATOR PRECEDENCE
//----------------------------------------------------------

const currentYear = 2077;

const agePeter = currentYear - 1990;
const ageCarrie = currentYear - 2011;

console.log(currentYear - 1990 > currentYear - 1992); // true
console.log(35 - 10 - 5); // 20

let x, y;
x = y = 35 - 10 - 5; // 20
console.log(x, y); // 20 20

const averageAge = (ageCarrie + agePeter) / 2;
console.log(ageCarrie, agePeter, averageAge); // 66 87 76.5
