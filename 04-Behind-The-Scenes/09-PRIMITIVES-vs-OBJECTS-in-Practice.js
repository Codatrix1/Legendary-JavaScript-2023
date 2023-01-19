"use strict";
//--------------------------------------------------------------------------------
// LECTURE 100: PRIMITIVES vs OBJECTS [Primitives VS Reference Types] in PRACTICE
//--------------------------------------------------------------------------------

//---------------
// PRIMITIVES
//--------------
let lastName = "Williams";
let oldLastName = lastName;

lastName = "Smith";

console.log(lastName, oldLastName); // Smith Williams

//-------------------------
// OBJECTS/REFERENCE TYPES
//-------------------------

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 34,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Smith";

console.log("Before:", jessica); // Before: {firstName: 'Jessica', lastName: 'Smith', age: 34}
console.log("After:", marriedJessica); // After: {firstName: 'Jessica', lastName: 'Smith', age: 34}

// marriedJessica = {}; // ❌ TypeError: Assignment to constant variable.

//------------------------------
// ⭐ SHALLOW COPYING OBJECTS
//------------------------------
const peter = {
  firstName: "Peter",
  lastName: "Quinn",
  age: 35,
};
//---------------------------------------
// Merge Two objects: 💥 Object.assign()
//---------------------------------------
const peterCopy = Object.assign({}, peter);

console.log(peterCopy); // {firstName: 'Peter', lastName: 'Quinn', age: 35}

peterCopy.lastName = "Smith";

console.log("Before:", peter); // Before: {firstName: 'Peter', lastName: 'Quinn', age: 35}
console.log("After:", peterCopy); // After: {firstName: 'Peter', lastName: 'Smith', age: 37}

// ❌ There is still a problem. It only works on the 1st Level. If we have another object, inside of an object, .....   the 2nd level object, or the inner object remains unchanged. So, it will still point to the same place in the memory  HEAP. Thus, we say that, Object.assign({}, objectName) only creates a shallow copy, and NOT A DEEP CLONE of the original  Object ❌

const carrie = {
  firstName: "Carrie",
  lastName: "Mathison",
  age: 38,
  friends: ["Peter", "Saul"],
};

const carrieCopy = Object.assign({}, carrie);

carrieCopy.lastName = "Smith";
carrieCopy.friends.push("Brody");
carrieCopy.friends.push("Mike");

console.log("Before:", carrie);
// Before: {firstName: 'Carrie', lastName: 'Mathison', age: 38, friends: (4)['Peter', 'Saul', 'Brody', 'Mike']}

console.log("After:", carrieCopy);
// Before: {firstName: 'Carrie', lastName: 'Smith', age: 38, friends: (4)['Peter', 'Saul', 'Brody', 'Mike']}

/*
//-----------------------------------
❗❗ To Make DEEP CLONE of an Object, We use an External Library - 
🔥 Lodash  It has a lot of other helpful functions, 
which we will use in the future sections

*/
