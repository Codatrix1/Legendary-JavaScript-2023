"use strict";

//------------------------------------------------
// LECTURE 33   FUNCTIONS
//------------------------------------------------

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
