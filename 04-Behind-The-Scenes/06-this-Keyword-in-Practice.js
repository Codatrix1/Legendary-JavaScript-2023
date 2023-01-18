"use strict";
//---------------------------------------------
// LECTURE 97: THE "this" KEYWORD in Practice
//---------------------------------------------

//----------
// GLOBAL
//---------
console.log(this); // WINDOW OBJECT

//----------------------------
// INSIDE A GENERAL FUNCTION
//----------------------------
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this); // undefined
  return age;
};
console.log(calcAge(1989)); // 48

//------------------------
// INSIDE ARROW FUNCTION
//------------------------
const calcAgeArrow = (birthYear) => {
  const age = 2037 - birthYear;
  console.log(this); // WINDOW OBJECT: Uses the LEXICAL "this" keyword
  return age;
};
console.log(calcAgeArrow(1989)); // 48

//------------------------------
// INSIDE AN OBJECT as a METHOD
//------------------------------

//----------
// OBJECT 1
//---------
const peter = {
  year: 1991,

  calcAge: function () {
    console.log(this); // "this" 👉  {year: 1989, calcAge: ƒ}
    return 2037 - this.year;
  },
};
// "peter" is the Object that is calling the METHOD
console.log(peter.calcAge()); // 46

//-----------
// OBJECT 2
//----------
const carrie = {
  year: 1980,
};

carrie.calcAge = peter.calcAge; // 🔥 Method BORROWING
// "this" 👉 {year: 1980, calcAge: ƒ}
console.log(carrie.calcAge()); // 57

//------------------------------------------------------------
// Another Example: To show that the "this" keyword is dynamic
//-------------------------------------------------------------

const fn = peter.calcAge; // 🔥 METHOD BORROWING
// "this" 👉 undefined
fn(); // TypeError: Cannot read properties of undefined (reading 'year')
