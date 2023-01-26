"use strict";

//----------------------------------
// LECTURE 117: MAPS: Fundamentals
//----------------------------------
//---------
// 🟢 ES6
//--------

// MAP SHORTCUT METHODS: ⭐ SG HD SC: set,get,has,delete,size,clear

// Maps as the name suggests are NOT The same, as we know.
//------> MAPS - Maps in JavaScript are the Data Structures that we can use to MAP/ASSIGN Values to KEYS
//
//
//    ⭕ MAP ------>   MAP Values ------> Keys

//    🔴 Just like the Object, this also makes the KEY : "VALUE" pairs
//
//.......................................................
//    🟢 Whats the difference between OBJECTS and SETS ?
//.......................................................
//
// In MAPS, The KEY can be of any type. And This is very useful

//  OBJECTS --------> Keys -----> Strings Only

//  MAPS ------------> Keys -----> Strings, Numbers, Booleans, Objects, Arrays

// ⭕ When we keep adding elements, Programmtically using CODE, then the set method is used

//-----------------------------------------
// Create a new Map using the constructor
//-----------------------------------------

const restaurant = new Map();

//-----------------------
// add key: value pairs
//-----------------------
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Firenze, Italy");
restaurant.set(2, "Lisbon, Portugal");

console.log(restaurant);

// 🔗 Chaining "set" method to add multiple items at one time since it immediately returns
restaurant
  .set("categories", ["Italian", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open")
  .set(false, "We are closed");

console.log(restaurant); // It also updates the previous one

//----------------------------------------------------------------
// ⭕ Reading Data from a Map -----> mapName.get("key") Method
//---------------------------------------------------------------
// data types matter while we retrieve data

console.log(restaurant.get("name")); // Classico Italiano
console.log(restaurant.get(true)); // We are Open
console.log(restaurant.get(1)); // Firenze, Italy

console.log(restaurant.get("true")); // undefined
console.log(restaurant.get("1")); // undefined

//-------------------------
// Getting result: Evaluating the value and retrieving data
//---------------------------
const time = 21;

const getStatus = restaurant.get(
  time > restaurant.get("open") && time < restaurant.get("close")
);

console.log(getStatus); // We are open

//--------------------
// MORE MAP METHODS
//--------------------

// check for properties
console.log(restaurant.has("categories")); // true

// delete property
restaurant.delete(1);
console.log(restaurant);

// size property
console.log(restaurant.size); // 7

// clear all
// restaurant.clear(); // Map(0) {size: 0}

//----------------------
// USING ARRAYS AS KEYS
//----------------------
const orangeMap = new Map();

const arrayAsKey = [1, 2, 3];

orangeMap.set(arrayAsKey, "Hello");

console.log(orangeMap); // Map(1) {Array(3) => 'Hello'}
console.log(orangeMap.get(arrayAsKey)); // Hello

//-----------------------------------
// setting a DOM element as the key
//------------------------------------
// orangeMap.set(document.querySelector("h1"), "Heading of the DOM");

// console.log(orangeMap); // Map(2) {Array(3) => 'Hello', h1 => 'Heading of the DOM'}
