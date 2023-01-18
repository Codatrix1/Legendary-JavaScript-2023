"use strict";
//---------------------------------------------------
// LECTURE 98: REGULAR FUNCTIONS vs ARROW FUNCTIONS
//---------------------------------------------------

//------------------------------------------
//......PITFALLS of the "this" keyword ❌
//------------------------------------------

const peterDetails = {
  firstName: "Peter",
  birthYear: 1989,

  calcAge: function () {
    console.log(this); // "peterDetails" Object
    return 2037 - this.birthYear;
  },

  greet: () => {
    console.log(this); // WINDOW OBJECT
    console.log(`Hello! ${this.firstName}`);
  },
};

peterDetails.greet(); // undefined
console.log(window.firstName); // undefined

//---------------------------------
// 🔴 Function INSIDE Of a METHOD
//--------------------------------

// WE HAVE AN ❗❗ ISSUE
const carrieDetails = {
  firstName: "Carrie",
  birthYear: 1980,

  calcAge: function () {
    console.log(this); // "peterDetails" Object
    console.log(2037 - this.birthYear);

    const millenial = function () {
      console.log(this); // undefined: "this" keyword inside a regular function call is UNDEFINED
      //   console.log(this.birthYear >= 1980 && this.birthYear <= 1996); // ❌ TypeError: 'birthYear' undefined
    };

    millenial();
  },

  greet: () => {
    console.log(this); // WINDOW OBJECT
    console.log(`Hello! ${this.firstName}`);
  },
};

carrieDetails.calcAge();

//------------------------------------
// 🟢 SOLUTION 1: Old Version - Pre - ES6
//-------------------------------------
const carrieDetailsSolOne = {
  firstName: "Carrie",
  birthYear: 1980,

  calcAge: function () {
    console.log(this); // "peterDetails" Object
    console.log(2037 - this.birthYear);

    // Solution - 1
    const self = this;
    const millenial = function () {
      console.log(self); // "carrieDetailsSolOne" OBJECT
      console.log(self.birthYear >= 1980 && self.birthYear <= 1996); //  true
    };

    millenial();
  },

  greet: () => {
    console.log(this); // WINDOW OBJECT
    console.log(`Hello! ${this.firstName}`);
  },
};

carrieDetailsSolOne.calcAge(); // true

//------------------------------------
// 🟢🟢 SOLUTION 2: New Version - ES6+
//-------------------------------------
// ->>> Using Arrow Function, as they uses the "this" keyword of the parent scope

const carrieDetailsSolTwo = {
  firstName: "Carrie",
  birthYear: 1980,

  calcAge: function () {
    console.log(this); // "peterDetails" Object
    console.log(2037 - this.birthYear);

    // Solution - 2
    const millenial = () => {
      console.log(this); // "carrieDetailsSolTwo" OBJECT
      console.log(this.birthYear >= 1980 && this.birthYear <= 1996); //  true
    };

    millenial();
  },

  greet: () => {
    console.log(this); // WINDOW OBJECT
    console.log(`Hello! ${this.firstName}`);
  },
};

carrieDetailsSolTwo.calcAge(); // true

//------------------------------------------------------------------------------
//.......NOt IMPORTANT...... More Modern way to Specify Multiple Parameters
// IN the previous LECTURE about the Call Stack, the functions
// get access to "this" keyword as well as

// the "arguments" keyword <-------

// ONly availale in Regular Functions <-----
//.. This is useful if we want a function to accept MORE PARAMETERS , than SPECIFIED.
//------------------------------------------------------------------------------------

//----------------------
// 💥 Arguments Keyword
//---------------------
//.. This is useful if we want a function to accept MORE PARAMETERS , than SPECIFIED.
// ONLY AVAILABLE WITH REGULAR FUNCTIONS
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExp(2, 6, 8, 12));
// Arguments(4) [2, 6, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]
// 8

const addArrow = (x, y) => {
  console.log(arguments);
  return x + y;
};

console.log(addArrow(2, 6));
// ❌ ReferenceError: arguments is not defined
