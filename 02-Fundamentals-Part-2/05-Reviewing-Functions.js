"use strict";

//-------------------------------------------------------
// LECTURE 37: REVIEWING FUNCTIONS
//-------------------------------------------------------

const calcAge = function (year) {
  return 2037 - year;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const yearsLeftForRetirement = 65 - age;

  if (yearsLeftForRetirement > 0) {
    return `${firstName} retires in ${yearsLeftForRetirement} years`;
  } else {
    return -1;
    // Below code is ignored if the function has returned
    console.log(`${firstName} already retired 🎉`);
  }
};

console.log(yearsUntilRetirement(1994, "Peter")); // Peter retires in 22 years
console.log(yearsUntilRetirement(1986, "Carrie")); // Carrie retires in 14 years

console.log(yearsUntilRetirement(1970, "Mike")); // -1

//--------------------------
// ⭐ FUNCTION DECLARATION
//--------------------------
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//--------------------------
// ⭐ FUNCTION EXPRESSION
//-------------------------
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//-----------------------------------------
// ⭐ ARROW FUNCTIONS (No "this" keyword)
//------------------------------------------
const calcAge3 = (birthYear) => 2037 - birthYear; // IMPLICIT Return

const calcAge4 = (birthYear) => {
  // EXPLICIT Return
  return 2037 - birthYear;
};

// Three different ways of writing functions, but they all work in a similar way, receive INPUT Data, TRANSFORM Data, and then OUTPUT Data.
