//----------------------------------------------------------
// LECTURE - 17: STRINGS and TEMPLATE LITERALS
//----------------------------------------------------------

const firstName = "Peter";
const occupation = "programmer";
const birthYear = 1989;
const year = 2037;

const peterDetails =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + occupation;

console.log(peterDetails);

const peterNewDetails = `I'm ${firstName}, a ${
  year - birthYear
} year old ${occupation}.`;

console.log(peterNewDetails);

console.log(`This is a regular string....`);

//---------------------
// MULTILINE STRINGS
//--------------------
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`Template literal:
multiline
string`);
