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
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const yearsLeftForRetirement = 65 - age;
  // return yearsLeftForRetirement;
  return `${firstName} retires in ${yearsLeftForRetirement} years`;
};

console.log(yearsUntilRetirement(1994, "Peter")); // Peter retires in 22 years
console.log(yearsUntilRetirement(1986, "Carrie")); // Carrie retires in 14 years

//⚡⚡⚡⚡⚡⚡⚡ - Whats the diffrence between ARROW Functions and
// (Expression, Declarative Function)?

// Answer - The ARROW Function does not get a 🔴 'this' Keyword, which is an important Keyword.
//⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
