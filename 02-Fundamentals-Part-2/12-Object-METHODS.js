"use strict";

//-------------------------------------------------------
// LECTURE 44: OBJECT METHODS
//-------------------------------------------------------

/*

⭕ Functions are really just another type of value, and if a function 
is just a value, then we can create a key:value pair in which the value is a function, then that
means that infact, we can Add Functions to Objects.

Any Function that is attached to an 🔴 Object is called a 🟠 Method.

If we think a function as a Property, we can simply add it to our object

-----------------------------------------------------------
💢 Arrays are Also 🔴 Objects, but they are special kind of Objects, 
and they have functions or they have 🟠 Methods so that we can 
manipulate them like push,pop,shift and many more. They are built-in methods.
-------------------------------------------------------------------------------------

*/

const carrie = {
  firstName: "Carrie",
  lastName: "Mathison",
  job: "Analyst",
  birthYear: 1985,
  friends: ["Saul", "Peter"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(carrie.calcAge(1985)); // 52
console.log(carrie["calcAge"](1985)); // 52

// -----------------------------------------------------------------------------------------
// 🎇 In very method JavaScript gives us Access to a special variable called ⭕ "this".
// So we can access the value of birthYear variable for the function in our object method
// ✅ In short, "this" method is like the 🔴 Object calling the🟠 method

//------------
// ⭕ "this"
//------------

const peter = {
  firstName: "Peter",
  lastName: "Quinn",
  job: "Field Operator",
  birthYear: 1987,
  friends: ["Saul", "Carrie"],
  hasDriversLicense: false,

  calcAge: function () {
    console.log(this); // "OBJECT"
    return 2037 - this.birthYear;
  },
};

console.log(peter.calcAge()); // 50

//---------------------------------------------
// ⭕ "this": Adding a property using "this"
//--------------------------------------------

const saul = {
  firstName: "Saul",
  lastName: "Berenson",
  job: "Director",
  birthYear: 1975,
  friends: ["Saul", "Carrie"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(saul.calcAge()); // 62

// : Efficient for heavier calculations
console.log(saul.age); // 62
console.log(saul.age); // 62

//------------
// CHALLENGE
//-----------
console.log(saul.getSummary());
// "Saul is a 62 year old Director, and has a/no drivers license"
