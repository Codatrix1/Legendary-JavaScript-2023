"use strict";

//-------------------------------------------------------
// LECTURE 35:  ARROW FUNCTIONS: Added in ES6
//-------------------------------------------------------

//---------------------
// 🔥 EXPLICIT Return
//--------------------
const calcAge3 = (birthYear) => {
  return 2037 - birthYear;
};
console.log(calcAge3(1993)); // 44

//----------------------
// 🌟 IMPLICIT Return
//----------------------
const calcAge4 = (birthYear) => 2037 - birthYear;
console.log(calcAge4(1993)); // 44

//-----------------
// More Examples
//---------------

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const yearsLeftForRetirement = 65 - age;
  return yearsLeftForRetirement;
};

console.log(yearsUntilRetirement(1994)); // 22
