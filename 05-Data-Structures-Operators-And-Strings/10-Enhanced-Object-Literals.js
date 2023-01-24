"use strict";

//-----------------------------------------------
// LECTURE 112: ENHANCED OBJECT LITERALS
//----------------------------------------------

//----------
// Array:
//----------
const day = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

//----------
// OBJECT 1
//----------
const openingHours = {
  // Compute Names as Expressions: Enhanced Object Literal Syntax ⭐
  [day[3]]: {
    open: 12,
    close: 22,
  },
  [day[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 3}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

//------------
// OBJECT 2
//-----------
const restaurant = {
  nameOfRestaurant: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // 🟢 ES6 Include object 1 in 2: Enhanced Object Literal Syntax ⭐
  openingHours,

  // Shorten Function: Enhanced Object Literal Syntax ⭐
  orderNew(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

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
