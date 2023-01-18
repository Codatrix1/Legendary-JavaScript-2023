"use strict";

//-------------------------------------------------------------
// LECTURE 93: SCOPING IN PRACTICE
//-------------------------------------------------------------

const calcAge = function (birthYear) {
  const age = 2077 - birthYear;

  const printAge = function () {
    let output = `${firstName}, you are ${age} years old born in ${birthYear}`;
    console.log(output);
    // Peter, you are 88 years old born in 1989

    //-------------
    // BLOCK SCOPE
    //-------------
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // <-- Ignores BLOCK, Since "var" is Function Scoped
      const lastName = "Quinn"; // Creating NEW variable with outer scope's variable name
      output = `NEW OUTPUT!`; // Reassigning outer scope's variable

      const str = `Oh! You are a millenial, ${firstName} ${lastName}`;
      console.log(str);
      //  Oh! You are a millenial, Peter Quinn

      //------------------------------------------------------
      // FUNCTION SCOPED: Also Block Scoped in "strict mode"
      //------------------------------------------------------
      const addNum = function (a, b) {
        return a + b;
      };

      console.log(addNum(2, 3)); // 5
    }

    // console.log(str); // Reference error
    console.log(millenial); // true
    // console.log(addNum(2, 3)); // Reference error
    console.log(output); // NEW OUTPUT!
  };

  printAge();

  return age;
};

//  This is available to be ACCESSED, as it has been defined in the global scope
const firstName = "Peter";
const lastName = "Mathison";

// Function Call
calcAge(1989);

// console.log(age); // Reference error: Sinc it is in INNER SCOPE
// printAge(); // Refrenece error
