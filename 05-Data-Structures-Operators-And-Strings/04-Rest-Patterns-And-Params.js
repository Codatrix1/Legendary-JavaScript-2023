"use strict";

//-------------------------------------------
// LECTURE 106: REST PATTERNS And PARAMETERS
//-------------------------------------------

/*

Rest Pattern looks exactly like the Spread (...) Operater  ---> With the same syntax (...)

But it does the opposite of the Spread Operator

 With Spread We Expand ⭕, ..... With REST we compress.....💢


⭕ Spread Operator  ------->  [to Unpack or Expand an Array to individual elements]

                             Use Case 1.) To Build New Arrays
                             Use Case 2.) to Pass Multiple Values to a Function

⭕ Rest Patterns <----------- [to collect multiple elements and Pack Elements into An Array]

//------------------------------------------------------------------------------------
// ✅ Whats the BIG difference between the Spread Operator and the Rest Pattern ❓❓
--------------------------------------------------------------------------------------

The Spread(...) Operator and the Rest Patterns , both have the same looking syntax, but they work in opposite ways, depending upon where they are used.

The Spread(...) Operator -------> It is used where we would otherwise write values, separated by a comma

The Rest Patterns  -------> It is used where we would otherwise write variable names, separated by a comma, and not the values separated by commas

*/
//---------------------------
// ⭐ PART - 1 - DESTRUCTURING
//---------------------------
//------------------------
// SPREAD SYNTAX: BECAUSE on RIGHT SIDE of the Assignment Operator
//-----------------------
const arr = [2, 3, 4, ...[67, 89]];

console.log(arr);
// (5) [2, 3, 4, 67, 89]

//--------------------------------------
// REST SYNTAX: LEFT SIDE of Assignment
//--------------------------------------
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b, others);
// 1 2 (4) [3, 4, 5, 6]

//----------------
// Our OBJECT
//----------------
const restaurant = {
  nameOfRestaurant: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  // Destructuring inside the args itself: with default values
  orderDelivery: function ({
    stIndex = 0,
    mnIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[stIndex]} and ${this.mainMenu[mnIndex]} will be delivered at ${address} by ${time} hours`
    );
  },

  // METHOD: Function to order pasta using the SPREAD Operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your order of pasta with ingrediants ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // METHOD: Function to order pizza using the REST Operator
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant, otherIngrediants);
  },
};

//--------------------------------
// REST and SPREAD Together Usage
//-------------------------------
const [pasta, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pasta, risotto, otherFood);
// Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// .......................................
// The REST Collects all the array after the last variable,
// so it does not include any skipped element. So the REST PATTERN Must be the last
//................ There can only be only ONE REST PATTERN
//
//--------------------------------------------
//.....We can do the Same with Objects ⭕
//--------------------------------------------

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
// {thu: {…}, fri: {…}}

/*





*/

//------------------------------
// ⭐⭐ PART - 2 - FUNCTIONS
//------------------------------

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log(add(2, 3, 4)); // 9
console.log(add(12, 13, 34, 67)); // 126

//-----------------------------------------
// using SPREAD in params and REST in args
//-----------------------------------------
const x = [23, 5, 7];
console.log(add(...x)); // 35

// UTILIZING METHOD
restaurant.orderPizza("mushrooms", "olives", "corn", "onion"); // mushrooms (3) ['olives', 'corn', 'onion']

// The Rest Prameters ----> The rest parameters serves to collect all of the remaining, basically, unused parameters that were not used in the mainIngrediant Parameter
