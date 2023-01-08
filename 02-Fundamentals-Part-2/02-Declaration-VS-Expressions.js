"use strict";

//-------------------------------------------------------
// LECTURE 34  FUNCTIONS: DECLARATIONS Vs EXPRESSIONS
//-------------------------------------------------------

// 🔴 Whts the diference between a DECLARATIVE Function and an EXPRESSION Function ???

// // In a Declarative Function, we can Call the Function before defining it.

// // This happens because of a Process Called ⚡⚡⚡ HOISTING ⚡⚡⚡.

//--------------------------------------------
// 1) DECLARATIVE ------- Added Before ES6
//--------------------------------------------

console.log(calcAge1(1990)); // 47 ✔✔ Can be called before or after being defined

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge1(1990)); // 47

//--------------------------------------------------
// 2) EXPRESSION--------- Added Before ES6
//-----------------------------------------------
// // The ⭕ below is called a Function EXPRESSION and as we know, an expression outputs VALUE. It is also called an ANONYMOUS FUNCTION as it does not have any name. We are just storing the expression value in a const variable name

// //  VERY IMPORTANT ---- Functions are basically values in JavaScript, and hence, we can store the value in a  variable. REMEMBER THAT.

// console.log(calcAge2(1992)); // ❌

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(calcAge2(1992)); // 46
