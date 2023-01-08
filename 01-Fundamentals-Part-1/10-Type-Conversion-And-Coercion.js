//----------------------------------------------------------
// LECTURE - 20: Type CONVERSION And Type COERCION
//----------------------------------------------------------

//----------------------
// 🔴 Type Conversion - When we manually convert one type to another
//----------------------

const inputYear = "1991";

console.log(Number(inputYear), inputYear); // 1991 '1991'

console.log(Number(inputYear) + 18); // 2009
console.log(Number("Hello")); // NaN

console.log(typeof NaN); // number

console.log(23, String(23)); // 23 '23'

//------------------
// 🔴 Type Coercion
//------------------

// When JavaScript converts automatically converts types behind the scenes for us. It happens whenever an operator is dealing with two values that have different types, so JavaScript will convert one value to match with the other value, so that in the end the operation can be successfully executed.

//  "+" operator converts NUMBERS to STRINGS
console.log("I am " + 23 + " years old"); // I am 23 years old
console.log("I am " + "23" + " years old"); // I am 23 years old

console.log("10" + "5" + 3); // 1053
console.log(typeof ("10" + "5" + 3)); // string

// "-" operator coverts STRINGS to NUMBERS
console.log("10" - "5" - 3); // 2
console.log(typeof ("10" - "5" - 3)); // number

// Also
console.log("22" / "2"); // 11
console.log(typeof ("22" / "2")); // number

//---------
// EXAMPLES
//---------
let n = "1" + 1;
n = n - 1;
console.log(n, typeof n); // 10 'number'

console.log(2 + 3 + 4 + "5"); // 95
console.log(typeof (2 + 3 + 4 + "5")); // string

console.log(typeof ("10" - "4" - "3" - 2 + "00")); // 100
console.log(typeof ("10" - "4" - "3" - 2 + "00")); // string
