"use strict";

//------------------------------------------------
// LECTURE 113: OPTIONAL CHAINING (?.) 🟢 ES2020 :
//------------------------------------------------

//-------------------------------------------------------
// 🟢 Definition: CHECKS IF VALUE ON THE LEFT EXISTS

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

//-------------------------------
// GET OPENING HOURS FOR monday
//-------------------------------
// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // ❌ Uncaught TypeError: Cannot read properties of undefined (reading 'open')

// check for monday
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon); // NO OUTPUT
}

//----------------------------------------------------------
// 🟢 ES2020 : Avoiding ERRORS with Optional Chaining (?.)
//----------------------------------------------------------
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example: OPTIONAL CHAINING with Nullish Coalescing
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const eachDay of days) {
  //   console.log(eachDay);
  const openAt = restaurant.openingHours[eachDay]?.open ?? "closed";
  console.log(`On ${eachDay} we open at ${openAt}`);
}

/*
On mon we open at closed
On tue we open at closed
On wed we open at closed
On thu we open at 12
On fri we open at 11
On sat we open at 0
On sun we open at closed

*/

//--------------
// with METHOD
//-------------
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // (2) ['Focaccia', 'Pasta']
console.log(restaurant.orderNoodles?.(0, 1) ?? "Method does not exist"); // Method does not exist

//--------------
// with ARRAYS
//-------------

const users = [
  { firstName: "Peter", job: "Analyst" },
  { firstName: "Carrie", job: "Station Chief" },
];

console.log(users[0]?.firstName ?? "USER ARRAY EMPTY"); // Peter

// Conventional Way
if (users.length > 0) {
  console.log(users[0].firstName); // Peter
} else {
  console.log("USER ARRAY EMPTY");
}
