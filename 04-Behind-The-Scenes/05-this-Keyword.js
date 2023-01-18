"use strict";
//--------------------------------
// LECTURE 96: THE "this" KEYWORD
//--------------------------------

//....................................
//.. EXTREMELY IMPORTANT CONCEPT
//..........................................
//
//...........EXECUTION CONTEXT......... has 3 parts

//......1. Variable Environment
//......2. Scope Chain
//......3. "this" keyword         <--------- VERY IMPORTANT

//
// "this" keyword/variable ----> Special variable that is created for every execution context(every function). It takes the value of (points) to the "owner" of the funtion in which the "this" keyword is used
//.. Its not a STATIC Value. It depends on HOW the function is called, and its value is only assigned when the function is ACTUALLY Called.

//-----------------
// ⭐ 1) METHOD
//-----------------
// METHOD 👉 this = <OBJECT that is calling the method>

// Example
const peter = {
  name: "Peter",
  year: 1989,

  calcAge: function () {
    return 2037 - this.year;
  },
};

console.log(peter.calcAge()); // 48

//-------------------------------
// ⭐⭐ 2) SIMPLE FUNCTION CALL
//--------------------------------
// SIMPLE FUNCTION CALL 👉 this = undefined [ONLY VALID in STRICT MODE; Otherwise it points to ❗ window OBJECT which is very problematic]

//--------------------------------------------
// ⭐⭐⭐ 3) ARROW FUNCTIONS: NO OWN "this"
//-------------------------------------------
// METHOD 👉 this = <this of the surrounding function [lexical this]>

//------------------------------
// ⭐⭐⭐⭐ 4) EVENT LISTENER FUNCTIONS
//-----------------------------
// METHOD 👉 this = <DOM ELEMENT that the handler is attached to>

//--------------------
// 🔥 IMPORTANT NOTE
//-------------------
// "this" DOES NOT point to the function itself, and also NOT its variable environment!

//-------------------------------------------
// 🔴🟢 OTHER WAYS TO CALL A FUNCTION 🟢🔴
//------------------------------------------
// new , call, apply, bind [✔ LATER IN THE LECTURES]
