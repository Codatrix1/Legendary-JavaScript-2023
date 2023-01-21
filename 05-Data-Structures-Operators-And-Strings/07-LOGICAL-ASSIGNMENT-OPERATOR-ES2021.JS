"use strict";

//----------------------------------------------------------------------------------
// LECTURE 109: LOGICAL ASSIGNMENT OPERATOR 🟢 ES2021 (NEWLY ADDED CONTENT in 2021)
//-----------------------------------------------------------------------------------

//---------------------------------
// 🔥 SHORT CIRCUIT EVALUATION 🔥
//---------------------------------
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1); // {name: 'Capri', numGuests: 20}
console.log(rest2); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//---------------------------------------------
// 🟢 ES2021 🟢: LOGICAL ASSIGNMENT OR (||) OPERATOR
//---------------------------------------------
const rest3 = {
  name: "Capri",
  numGuests: 20,
};

const rest4 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

// OR Assignment Operator: EXCEPT 0 or undefined
rest3.numGuests ||= 10;
rest4.numGuests ||= 10;

console.log(rest3); // {name: 'Capri', numGuests: 20}
console.log(rest4); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//------------------------------------------------------------------------------
// 🟢 ES2021 🟢: LOGICAL NULLISH ASSIGNMENT OR (||) OPERATOR: WORKS with 0 or undefined
//-------------------------------------------------------------------------------
const rest5 = {
  name: "Capri",
  numGuests: 0,
};

const rest6 = {
  name: "Taste of Punjab",
  owner: "Ankur",
  // numGuests: undefined
};

rest5.numGuests ??= 10;
rest6.numGuests ??= 10;

console.log(rest5); // {name: 'Capri', numGuests: 0}
console.log(rest6); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//---------------------------------
// 🔥 SHORT CIRCUIT EVALUATION 🔥
//---------------------------------

const rest7 = {
  name: "Capri",
  numGuests: 0,
};

const rest8 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest7.owner = rest7.owner && "<ANONYMOUS>";
console.log(rest7); // {name: 'Capri', numGuests: 0, owner: undefined}

rest8.owner = rest8.owner && "<ANONYMOUS>";
console.log(rest8); // {name: 'Taste of Punjab', owner: '<ANONYMOUS>'}

//-----------------------------------------------------
// 🟢 ES2021 🟢: LOGICAL ASSIGNMENT AND (&&) OPERATOR
//-----------------------------------------------------
const rest9 = {
  name: "Capri",
  numGuests: 0,
};

const rest10 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest9.owner &&= "<ANONYMOUS>";
console.log(rest9); // {name: 'Capri', numGuests: 0}

rest10.owner &&= "<ANONYMOUS>";
console.log(rest10); // {name: 'Taste of Punjab', owner: '<ANONYMOUS>'}
