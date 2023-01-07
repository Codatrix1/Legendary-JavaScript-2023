"use strict";

//------------------------------------------------
// LECTURE 32     ACTIVATING Strict MODE
//------------------------------------------------

// ⭕ Scrict Mode is a special mode in javascript that helps us to write more secure code in Javascript. It should be the first script in the js file. It helps to avoid introducing accidental BUGS in our code. This is how its written and USE IT EVERYTIME

// "use strict";

// Reasons to use strict mode

// 1. It forbids us to do certain things
// 2. It creates visbile errors in developer console which would go un-noticed by javascript if we do not use it

// Another thing that strict mode does is to introduce a short list of variable names that are reserved for features that might be added to the language a bit later. For Example

/*

// RESERVED WORDS (or to be Reserved in future releases)

//--------------------------
const interface = "Audio";
const private = 234;
const if = 1;

*/

//------------------------------------------------
// LECTURE 33     FUNCTIONS
//------------------------------------------------

/*

//--------------------------
// ⭕ What are functions ?
//--------------------------

// They are the building block of real world JavaScript Applications and one of the the most important concept. Its a piece of code that we can use over and over again in our program. A variable can hold a value, but a function can hold one or more complete lines of code. For Example

function logger() {
  console.log("My name is Peter Quinn");
}

// Running / calling / Invoking the function
logger();
logger();

// ✅ A functions can not only re-use a piece of code, but it can also RECIEVE DATA and RETURN DATA back. I like to think Functions as🚀 MACHINES.

// It is basically like a food processor. The functions takes some input or ingrediants in, processes it as instructed, and returns the result 😋 🧃

function fruitProcessor(numApples, numOranges) {
  const juice = `Juice with ${numApples} apples and ${numOranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(8, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//--------------------------
// DON'T REPEAT YOURSELF: DRY
//---------------------------

function fullNameFunc(firstName, secondName) {
  const fullName = `${firstName} ${secondName}`;
  return fullName;
}

console.log(fullNameFunc("Peter", "Quinn"));
console.log(fullNameFunc("Carrie", "Matthison"));

//-------------------
// Built-in function
//-------------------

console.log(typeof "24"); // string

const myNum = Number("24");
console.log(typeof myNum); // number

*/
