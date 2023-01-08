//----------------------------------------------------------
// LECTURE - 12: DATA TYPES
//----------------------------------------------------------

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
