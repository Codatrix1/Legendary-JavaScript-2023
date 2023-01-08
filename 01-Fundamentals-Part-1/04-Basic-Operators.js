//----------------------------------------------------------
// LECTURE - 14: BASIC OPERATORS
//----------------------------------------------------------

//---------------------------
// 1) ARITHEMATICAl OPERATORS
//----------------------------

const currentYear = 2077;

const agePeter = currentYear - 1990;
const ageCarrie = currentYear - 1992;

console.log(agePeter, ageCarrie);

// 2 ** 3 = 2 to the power of 3 = 2 * 2 * 2
console.log(agePeter * 2, agePeter / 10, 2 ** 3);

const firstName = "Peter";
const lastName = "Quinn";
console.log(firstName + " " + lastName); // CONCATENATE STRINGS

//-----------------------
// 2) typeof OPERATORS
//-----------------------

const year = 2077;
console.log(typeof year);

const javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

//-------------------------
// 3) ASSIGNMENT OPERATORS
//-------------------------

let x = 10 + 5; // 15
x += 10; // x = x + 10

x *= 4; // x = x * 4

x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1

console.log(x); // Result: 99

//-------------------------
// 4) COMPARSION OPERATORS
//-------------------------
// Boolean Results: >, < , >= , <=
console.log(ageCarrie, agePeter); // 85, 87

console.log(ageCarrie > agePeter); // false
console.log(ageCarrie >= 18); // true

const isFullAge = ageCarrie >= 18;
console.log(isFullAge); // true

console.log(currentYear - 1990 > currentYear - 1992); // true
