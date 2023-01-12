"use strict";
//-----------------------------------------------------------
// LECTURE 47: LOOPING ARRAYS, BREAKING, AND CONTINUING
//-----------------------------------------------------------

// ⭕ One of the most important applications of "for" ⭕ loop is to loop through arrays
// Array index starts at 0

const peterArray = [
  "Peter",
  "Quinn",
  "Freelancer",
  2037 - 1989,
  ["Carrie", "Saul"],
  true,
];

// peterArray[0]
// peterArray[1]
// peterArray[2]
// ....
// .....
// peterArray[i]

//------------------------------------
// for (initial; condition; counter)
//----------------------------------

const types = [];

for (let i = 0; i < peterArray.length; i++) {
  // Reading from peterArray
  console.log(peterArray[i], typeof peterArray[i]);
  // Filling types array
  types[i] = typeof peterArray[i];
}

console.log(types); // ['string', 'string', 'string', 'number', 'object', 'boolean']

//-----------------------------
// ⭐ push() METHOD EXAMPLE 1
//-----------------------------
const typesList = [];
for (let i = 0; i < peterArray.length; i++) {
  // Reading from peterArray
  console.log(peterArray[i], typeof peterArray[i]);
  // Filling types array: Using ⭐ push()
  typesList.push(typeof peterArray[i]);
}

console.log(typesList); // ['string', 'string', 'string', 'number', 'object', 'boolean']

//-----------------------------
// ⭐ push() METHOD EXAMPLE 2
//-----------------------------
// ⭕ Lets do a practical example.. lets use the age calculator and push all the values to an empty array

const years = [1991, 2007, 1969, 2020];
let ages = [];

for (let i = 0; i < years.length; i++) {
  const calcAge = 2037 - years[i];

  ages.push(calcAge);
}

console.log(ages); // [46, 30, 68, 17];

//-----------------------------------------------------------
// ⭐🌟Advanced Method 1) from future Sections: "for-of" loop
//-----------------------------------------------------------
const currentAges = [];
for (const eachYear of years) {
  currentAges.push(2037 - eachYear);
}
console.log(currentAges); // [46, 30, 68, 17];

//-------------------------------------------------
// ⭐🌟Advanced Method: 2) from future Sections: "map"
//-------------------------------------------------
const mapYears = years.map((eachYear) => 2037 - eachYear);
console.log(mapYears); // [46, 30, 68, 17];

//////////////////////////////////////////////////////////////////////////////////////
//  ⭕⭕ Now lets learn about the two most important statements for loops------

// // They are 🟠CONTINUE and 🟠BREAK

// Continue - This is to exit current iteration of te loop and continue to next one
// Break - This is used to completely terminate from the current loop, including the current iteration
//..............................................................................
// // We want to print only the string values, we can use ✅ CONTINUE
//..........................................................................
//

const carrieArray = [
  2037 - 1985,
  true,
  "Carrie",
  "Mathison",
  "Analyst",
  ["Peter", "Saul"],
];

//-----------------------------------------
// --- 🟢 PRINT ONLY STRINGS: CONTINUE ----
//-----------------------------------------

console.log(`--- PRINT ONLY STRINGS: CONTINUE ----`);

for (let i = 0; i < carrieArray.length; i++) {
  if (typeof carrieArray[i] !== "string") continue;
  console.log(carrieArray[i], typeof carrieArray[i]);
}

/*
Carrie string
Mathison string
Analyst string

*/
//-----------------------------------------------
// --- 🔴 BREAK: as soon as a STRING is found ----
//-----------------------------------------------
console.log(`--- STOP as soon as a STRING is found ----`);

for (let i = 0; i < carrieArray.length; i++) {
  if (typeof carrieArray[i] === "string") break;

  console.log(carrieArray[i], typeof carrieArray[i]);
}

/*
52 'number'
true 'boolean'
*/
