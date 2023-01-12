"use strict";

//-------------------------------------------------------
// LECTURE 40: BASIC ARRAY OPERATIONS: METHODS
//-------------------------------------------------------
//-----------------------------------------
// ⭐⭐ Shortcut to remember: UP SP II

// 1) unshift()
// 2) push()
// 3) shift()
// 4) pop()
// 5) indexOf()
// 6) includes()

//------------------------------------
// 🔥 ADDING ELEMENTS
//------------------------------------
//---------------------
// ⭐ Unshift Method:
//---------------------
// Add element to the start of the Array: Also Mutates the Original Array

const greeting = ["Hello", "there"];
const newLength1 = greeting.unshift("Apple");

console.log(greeting); // ['Apple', 'Hello', 'there']
console.log(newLength1); // 3

//-------------------
// ⭐ Push Method:
//-------------------
// Add element to the end of the Array: Also Mutates the Original Array

const friendsList = ["Summer", "Beth", "Morty"];
const newLength2 = friendsList.push("Rick");

console.log(friendsList); // ["Summer", "Beth", "Morty", "Rick"];
console.log(newLength2); // 4

//------------------------------------
// 🔴 REMOVING ELEMENTS
//------------------------------------

//-------------------
// ⭐ Shift Method:
//-------------------
// Remove element from the start of the Array: Also Mutates the Original Array

const vegetables = ["carrot", "peas", "onion"];
const shifted = vegetables.shift();

console.log(shifted); //  carrot
console.log(vegetables); // ['peas', 'onion']

//-------------------
// ⭐ Pop Method:
//-------------------
// Remove element from the end of the Array: Also Mutates the Original Array
const fruits = ["apple", "orange", "strawberry"];
const popped = fruits.pop();

console.log(popped); // strawberry
console.log(fruits); // ['apple', 'orange']

//------------------------------------
// 🔴🔴 OTHER METHODS
//------------------------------------

//------------------------------
// indexOf() : Returns the index
//------------------------------

const newVeggies = ["carrot", "peas", "onion"];

console.log(newVeggies.indexOf("peas")); // 1
console.log(newVeggies.indexOf("banana")); // -1

//------------------------------------------------
// includes() : Boolean result: Strict Equality
//----------------------------------------------
const newItems = ["pencil", "pen", "eraser", 56];

console.log(newItems.includes("pencil")); // true
console.log(newItems.includes(56)); // true
console.log(newItems.includes("56")); // false

if (newItems.includes("pencil")) {
  console.log("Your cart contains pencil 🏆");
}
