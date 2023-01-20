"use strict";

//------------------------------------
// LECTURE 104: OBJECT DESTRUCTURING
//------------------------------------

/*


*/

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
};

//-------------------------
// DESTRUCTURING OBJECTS
//-------------------------

// ⭐ 1) Original properties
const { nameOfRestaurant, openingHours, categories } = restaurant;
console.log(nameOfRestaurant, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//-------------
// ⭐ 2) Renaming
//-------------

const {
  nameOfRestaurant: resName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resName, hours, tags);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//-----------------------------------------
// ⭐ 3) Adding default values if NOT there
//----------------------------------------

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// [](4)[("Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad")];

//-----------------------------------------
// ⭐ 4) Mutate Variables
//----------------------------------------
let firstName = "Peter";
let lastName = "Quinn";

const obj = { firstName: "Carrie", lastName: "Mathison" };

({ firstName, lastName } = obj);

console.log(firstName, lastName); // Carrie Mathison

//------------------
// ⭐ 5) NESTED OBJECTS
//-----------------
//-------------
const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

//------------
const {
  fri: { open, close },
} = openingHours;

console.log(open, close); // 11 23

//-------------
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c); // 11 23

//-----------------------------------------------------
// ⭐ 6) DESTRUCTURING OBJECT INSIDE A METHOD FUNCTION
//-----------------------------------------------------

//------------------------------------
// WITH ALL OBJECT PROPERTIES PRESENT
//------------------------------------
restaurant.orderDelivery({
  time: "22:30",
  address: "Via de Sole",
  stIndex: 2,
  mnIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered at Via de Sole by 22:30 hours

//------------------------------------------
// WITH DEFAULT VALUES: MISSING PROPERTIES
//-----------------------------------------
restaurant.orderDelivery({
  address: "Via de Sole",
  stIndex: 2,
}); // Order received! Garlic Bread and Pasta will be delivered at Via de Sole by 20:00 hours
