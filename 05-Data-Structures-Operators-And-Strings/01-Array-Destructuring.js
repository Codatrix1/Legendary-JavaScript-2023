"use strict";

//------------------------------------
// LECTURE 103: ARRAY DESTRUCTURING
//------------------------------------

/*
------------------
❗ DESTRUCTURING 
-----------------

- This is an ES6 feature, 
- its a way of unpacking values, from an ARRAY or an OBJECT into seperate variables. 
- It means to break a complex data structure down 
- like arrays or objects, in a smaller data structure, like a VARIABLE


The theme here will be to simulate a Food Delivery Application

*/

const firstArray = [8, 9, 17];

// Destructuring assignment
const [x, y, z] = firstArray;

// Result
console.log(x, y, z); // 8 9 17

// Original Array unaffected
console.log(firstArray); // (3) [8, 9, 17]

//------------------------------------------
// DESTRUCTURING ARRAYS from OBJECT EXAMPLE
//---------------------------------------
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIdx, mainCourseIdx) {
    return [this.starterMenu[starterIdx], [this.mainMenu[mainCourseIdx]]];
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// Switching Variables
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Receive 2 values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread ['Pizza']

//----------------------
// NESTED Destructuring
//----------------------
// .... What if, we want individual items?..
//We have to do de-structuring, inside de-structuring---
// This is called Nested De-Structuring

const nestedArr = [3, 5, ["hello", "there"]];

const [i, , [k, l]] = nestedArr;

console.log(i, k, l); // 3 'hello' 'there'

//-----------------------------
//  🔥 ASSIGNING DEFAULT VALUES
//-----------------------------

const [p = "dafaultValue", q = "dafaultValue", r = "dafaultValue"] = [8, 9];

console.log(p, q, r); // 8 9 'dafaultValue'
