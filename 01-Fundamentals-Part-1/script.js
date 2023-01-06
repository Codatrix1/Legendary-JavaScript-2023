//------------------------------------------
// LECTURE - 9: LINKING A JavaScript File
//-------------------------------------------

/*

let js = "amazing";

if (js === "amazing") {
  console.log("JavaScript is FUN!");
}

console.log(12 + 13 + 12);

*/

//------------------------------------------
// LECTURE - 10: VALUES AND VARIABLES
//-------------------------------------------

/*

//  Values
console.log("Ankur");
console.log(34);

// Variables: Use camelCase
let firstName = "Peter";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//  Only letters, _ (underscores) and $ (Dollar Sign) are allowed to be written in variable names in JavaScript

let peter_quinn = "PQ";
let $myFunc = 27;

let PI = 3.1415;
let Person = "Peter"; // OOP Convention

// Some naming Conventions
let fullName = "Peter Quinn";
let myFirstJob = "Analyst";
let myCurrentJob = "Programmer";

*/

//----------------------------------------------------------
// LECTURE - 11: VALUES AND VARIABLES: Practice Assignments
//----------------------------------------------------------

/*
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console


let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = "139.34 crore";

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);

*/

//----------------------------------------------------------
// LECTURE - 12: DATA TYPES
//----------------------------------------------------------
/*

// In JavaScript, every Value is either an Object, or a Primitive. When its not an Object, its a Primitive Value

//-----------------------
// 🔴 Object Data Types
//-----------------------

let personDetails = {
  firstName: "Peter",
  job: "Programmer",
  age: 33,
};

console.log(typeof personDetails);

//---------------------------------
// 🔴 Primitives - 7 Data Types
//---------------------------------

// 1) Number
let age = 23;

// 2) Strings
let myName = "Pete";

// 3) Boolean
let fullAge = true;

// 4) Undefined
let children;

// 5) Null

// 6) Symbol(ES2015)

// 7) BigInt(ES2020)

console.log(typeof 23);
console.log(typeof "Hello");
console.log(typeof true);

// 🟡 DYNAMIC TYPING means than we can easily change the type of value that is held by a variable. JavaScript automatically determines the type of data, as soon as it declared. We dont have to declare it manually, as in may programming languages
//-------------------
// Reassigning the Value of javascriptIsFun using the Box Analogy with a New Label
//------------------

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun); // boolean

javaScriptIsFun = "DEFINITELY";
console.log(typeof javaScriptIsFun); // string

//--------------------------------------------------------
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1990;
console.log(typeof year); // number

//----------------------------------------------------
// BUG: Should return null. Never corrected due to legacy reasons
console.log(typeof null); // object

*/

//----------------------------------------------------------
// LECTURE - 13: LET, CONST and VAR
//----------------------------------------------------------

/*

//---------------
// LET: Mutable
//---------------
let age = 30;
age = 35;

let count;
count = 0;

//--------------------
// CONST: Immutable
//--------------------
const birthYear = 1990;
// birthYear = 1990; // ❌

//-------------------------------
// VAR: We should ❌ Avoid using "var" variable
// declaration at all costs as "const" is used since ES6
//-------------------------------
var job = "Programmer";
job = "Writer";
console.log(job);

// ❌ Avoid Creating Variable in the Global SCOPE.
lastName = "Quinn";
console.log(lastName);

// ❓❓ Question - What is the Difference Between let and var ?
// let is Block Scoped 🟨
// Var is Function Scoped ⭕

*/

//----------------------------------------------------------
// LECTURE - 14: BASIC OPERATORS
//----------------------------------------------------------

/*

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

*/
//----------------------------------------------------------
// LECTURE - 15: OPERATOR PRECEDENCE
//----------------------------------------------------------

/*

const currentYear = 2077;

const agePeter = currentYear - 1990;
const ageCarrie = currentYear - 2011;

console.log(currentYear - 1990 > currentYear - 1992); // true
console.log(35 - 10 - 5); // 20

let x, y;
x = y = 35 - 10 - 5; // 20
console.log(x, y); // 20 20

const averageAge = (ageCarrie + agePeter) / 2;
console.log(ageCarrie, agePeter, averageAge); // 66 87 76.5

*/

//----------------------------------------------------------
// LECTURE - 16: CODING CHALLENGE # 1
//----------------------------------------------------------

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.


Test data:
  - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
  - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI); // true

*/

//----------------------------------------------------------
// LECTURE - 17: STRINGS and TEMPLATE LITERALS
//----------------------------------------------------------

/*

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

*/

//----------------------------------------------------------
// LECTURE - 18: TAKING DECISIONS: if / else STATEMENTS
//----------------------------------------------------------

/*

const age = 15;

if (age >= 18) {
  console.log(`Carrie can have her driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Carrie will have to wait for another ${yearsLeft} to start driving`
  );
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

//----------------------------------------------------------
// LECTURE - 19: CODING CHALLENGE # 2
//----------------------------------------------------------

/*

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI); // true

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI ${bmiMark} is greater than John's ${bmiJohn}`);
} else {
  console.log(`John's BMI ${bmiJohn} is greater`);
}

*/

//----------------------------------------------------------
// LECTURE - 20: Type CONVERSION And Type COERCION
//----------------------------------------------------------

/*

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

*/

//----------------------------------------------------------
// LECTURE - 21: TRUTHY And FALSY VALUES
//----------------------------------------------------------

/*

// ⭕ FALSY VALUES - They are the values that are not exactly false,
// but will become false when we try to convert them into a Boolean. And in JavaScript,
// there are only 5 falsy values. EVERYTHING ELSE are the TRUTHY values.

//---------------
// 🔴 Falsy Values:   0,  '',  undefined,  null,  NaN
//---------------

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

//------------------
// 🟢 Truthy Values
//------------------

console.log(Boolean({})); // true
console.log(Boolean("Peter")); // true

//---------------------------------------------------------------------------
// ❓ Question - When exactly does JavaScript does Type Coercion to Booleans?
//---------------------------------------------------------------------------

// ✅ Answer - It happens in 2 Scenarios.
// -----> First, when using logical Operators, and
// -----> Second in a Logical Context, like for example in the condition of an if/else statement.

//----------
// EXAMPLE
//---------

//--------
// ❗ FALSY
//-------
let money = 0; // <----- Evaluates to FALSE, Hence FALSY
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should earn some money!"); // You should earn some money!
}

//---------
// ✔ TRUTHY
//--------
money = 100; // <----- Evaluates to TRUE, Hence TRUTHY
if (money) {
  console.log("Don't spend it all"); // Don't spend it all
} else {
  console.log("You should get a job");
}

//-----------
// BUG : Height is "0", which is defined, but its evaluated as FALSY,
// This can be solved by using LOGICAL OPERATORS
//-----------

let oldHeight = 0;

if (oldHeight) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

*/
//----------------------------------------------------------
// LECTURE - 22: EQUALITY OPERATORS: == VS ===
//----------------------------------------------------------

/*

// ASSIGNMENT OPERATOR                              ---> =
// LOOSE EQUALITY OPERATOR (Performs TYPE COERCION) ---> ==
// STRICT OPERATOR (NO TYPE COERCION)               ---> ===

const number = 18; // Assignment
console.log("18" == 18); // true
console.log("18" === 18); // false

const age = "18";

if (age === 18) console.log("You can drive (STRICT ===)");
if (age == 18) console.log("You can drive (LOOSE ==)");

// EXAMPLE

//--------------------------
// 🔴 PROMPT Function - This is a pretty simple
// function of getting a value from a WebPage. This is the prompt function

const favNum = Number(prompt("Enter a number: "));

if (favNum === 33) {
  console.log("33 is a nice number");
} else if (favNum === 7) {
  console.log("7 is also a nice number");
} else if (favNum === 9) {
  console.log("9 is also a nice number");
} else {
  console.log("Number is neither 33 or 7 or 9");
}

if (favNum !== 33) console.log("Why not 33?");


*/

//----------------------------------------------------------
// LECTURE - 23: BASIC BOOLEAN LOGIC: AND, OR & NOT
//----------------------------------------------------------

// BOOLEAN LOGIC - It is branch of computer science which uses True and False values to solve complex logical problems. It uses several logical operators to combine True and False values, similar to the arithmetic operators that we use to combine numeric values.

// For example - AND, OR & NOT Operators.

// 💡 - REFER TO THE NOTES PDF OF THE COURSE TO SEE THE TRUTH TABLE

/*

--------------------
---- AND Table --- 🔴
--------------------
--------------------
AND   | True   False
--------------------     
True  | True  | False
------
False | False | False


--------------------
---- OR Table --- 🔴
--------------------
--------------------
OR    | True   False
--------------------     
True  | True  | True
------
False | True | False


--------------------
---- NOT Table --- 🔴
--------------------

-- NOT True === False
-- NOT False === True

*/

//----------------------------------------------------------
// LECTURE - 24: LOGICAL OPERATORS
//----------------------------------------------------------

/*

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const ofFullAge = true; // C

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true

console.log(hasGoodVision && !ofFullAge); // false
console.log(hasGoodVision || !ofFullAge); // true

//-----------------------------------
if (hasDriversLicense && hasGoodVision) {
  console.log("Carrie can drive"); // Carrie can drive
} else {
  console.log("Someone else should drive..");
}

//--------------------------------------
if (hasDriversLicense && hasGoodVision && ofFullAge) {
  console.log("Morty can drive..."); // Morty can drive...
} else {
  console.log("Morty should not drive......");
}

//--------------------------------------
if (hasDriversLicense && hasGoodVision && !ofFullAge) {
  console.log("Morty can drive...");
} else {
  console.log("Morty should not drive......"); // Morty should not drive......
}

//--------------------------------------
if (hasDriversLicense || hasGoodVision || !ofFullAge) {
  console.log("Morty can drive..."); // Morty can drive...
} else {
  console.log("Morty should not drive......");
}

*/

//----------------------------------------------------------
// LECTURE - 25: CODING CHALLENGE # 3
//----------------------------------------------------------

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. 

Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:

§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK



// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(`Dolphins Average ${avgDolphins}, Koalas Average ${avgKoalas}`);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins wins 🏆 with an average of ${avgDolphins}`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log(`Koalas wins 🏆 with an average of ${avgKoalas}`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("Both Wins the trophy 🏆");
} else {
  console.log("Its a draw");
}

*/
