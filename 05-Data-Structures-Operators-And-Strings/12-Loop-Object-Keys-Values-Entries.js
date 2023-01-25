"use strict";

//---------------------------------------------------------------
// LECTURE 114: LOOPING OBJECTS: Object Keys, Values and Entries
//---------------------------------------------------------------

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

  // METHOD: Function to order pizza using the REST Operator
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant, otherIngrediants);
  },
};

const openingHours = {
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
};

//

//----------------------------------------------------
// Object.keys(), Object.values(), Object.entries()
//----------------------------------------------------

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const eachDay of properties) {
  openStr += `${eachDay},`;
}

console.log(openStr); // We are open on 3 days: thu,fri,sat,

// Property VALUES
const values = Object.values(openingHours);
console.log(values); // (3) [{…}, {…}, {…}]

// ENTIRE OBJECT: Property NAMES + Property VALUES
const entries = Object.entries(openingHours);
console.log(entries);

/*
(3) [Array(2), Array(2), Array(2)]
0 : (2) ['thu', {…}]
1 : (2) ['fri', {…}]
2 : (2) ['sat', {…}]
*/

// simple destructuring: [key, value]

// nested destructuring: [key, { open, close }]
for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key}, we are open at ${open} and close at ${close}`);
}
