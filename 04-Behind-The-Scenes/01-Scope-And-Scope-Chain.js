"use strict";

//-------------------------------------------------------------
// LECTURE 92: SCOPE AND THE SCOPE CHAIN
//-------------------------------------------------------------

// CONCEPTS

// ⭐ SCOPING: How our program's variables are organized and accessed
// Where do variables live? OR Where can we access a certain variable, and where not

// ⭐ LEXICAL SCOPING: Scoping is controlled by PLACEMENT of functions and blocks in the code

// ⭐ SCOPE: Space or environment which a certain variable is DECLARED (variable env in case of functions)
// There is a GLOBAL Scope, FUNCTION Scope and a BLOCK Scope

// ⭐ SCOPE OF A VARIABLE: Region of our code where a certain variable can be ACCESSED

//-----------------------------
// 3 TYPES OF SCOPE
//-----------------------------

//...................
// 1) GLOBAL SCOPE
//.................

const name = "Peter";
const age = 23;

// - Outside of any function or block
// - Variables declared in global scope are AVAILABLE EVERYWHERE

//.....................
// 2) FUNCTION SCOPE
//....................

const calcAge = function (birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
};

// console.log(now); // Reference ERROR ❌

// - Variables are accessible only inside function, NOT OUTSIDE
// - Also called local scope

//.........................
// 3) BLOCK SCOPE (ES6)
//.........................

const year = 1980;

if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = "Paneer";
}

// console.log(millenial); // Reference ERROR ❌

// - Variables are accessible only INSIDE BLOCK(block scoped)
// ONLY applies to ❗let and ❗const
// - Functions are also block scoped (in strict mode)

//-------------------------------------------
// -------- THE SCOPE CHAIN EXAMPLE --------
//--------------------------------------------

// VARIABLE LOOKUP IN THE SCOPE CHAIN

const myName = "Peter";

const firstFn = function () {
  const age = 34;

  // 1) SIBLING SCOPE
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  // 2) SIBLING SCOPE
  const secondFn = function () {
    const job = "Analyst";
    console.log(`${myName} is a ${age} year old ${job}`);
    // Peter is a 34 year old Analyst
  };

  secondFn();
};

firstFn();

//-------------------------------------------
// ----- SCOPE CHAIN EXAMPLE vs CALL STACK
//-------------------------------------------
const a = "Peter";

first();

function first() {
  const b = "Hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
}

function third() {
  const d = "Hey!";
  console.log(d + c + b + a); // REFERENCE ERROR: c is not defined
}

//-------------------------------------------
// ----- ⭐⭐ SUMMARY ⭐⭐
//--------------------------------------------

/*

-> Scoping asks the question - " Where do variables live?" OR "Where can we access a certain variable, and where not? "

-> There are 3 types of scopes in JavaScript - The Global Scope, The Function Scope and The Block Scope

-> Only "let" and "const" variables are BLOCK SCOPED. Variables declared with "var" end up in the closest function scope

-> In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written

-> Every scope always has access to all the variables from all its outer scopes. This is the scope chain

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.

-> The scope chain is a one way street; a scope will never ever have access to the variables of an inner scope

-> The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes;

-> The scope chain has nothing to do with the order of the functions where called. It does not affect the scope chain at all.


*/
