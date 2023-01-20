"use strict";

//----------------------------------------
// LECTURE 105: The SPREAD Operator {...}
//-----------------------------------------
// Let's talk about the amazing Spread(...) operator. We can use the spread operator to basically expand an array into all its elements, so its unpacking all the array elements at once.

const arr = [2, 3, 4];

// conventional:
// ❌ Adding elements in an array is very common. We can do it by manually doing it or looping through it.

const badNewArr = [34, 67, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [34, 67, 2, 3, 4]

// Using Spread {...}
// ✅ But we can do it in much better way using the spread operator since ES6, It takes the elements out of the array and write them individually. We use the spread array whenever we need to write mulyiple values, separated by commas. It happens when we write an array literal, like we did in our code.

// <------- 1st Situation -  whenever we need to write mulyiple values, separated by commas
// 2nd situation --------------> When we pass arguments into functions  -- writing indivial elements

const goodNewArr = [23, 56, ...arr];
console.log(goodNewArr); // [23, 56, 2, 3, 4]

console.log(...goodNewArr); // 23 56 2 3 4 // Writes the individual items of the array using the spread operator❗

//----------------------------------------------------------
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

// Keep in mind that we are creating a New Array Here, and NOT MANIPULATING THE ORIGINAL Array inside the object
const newMainMenu = [...restaurant.mainMenu, "Burger"];
console.log(newMainMenu); // ['Pizza', 'Pasta', 'Risotto', 'Burger']

// The Spread Operator is similar to de-structuring, as they both helps us to get elements out of arrays.

//........................................................................
// ✅ But, Whats the BIG difference between the De-Structuring amd the Spead Operator(...) ❓❓❓
//.....................................................................
//
//
//❗❗❗ NOTE - Important

// The Spread Operator(...) -----> Takes all the elements from the array, and it also DOES NOT CREATE NEW Variables. And as a consequence, WE CAN ONLY USE IT, in places where we would otherwise use the values separated by Commas

//----------------------------------------------------------------
// ⭕ The 2 VERY Important Use Cases of the Spread(...) Operator
//----------------------------------------------------------------

//-------------> 1. Create Shallow Copies of Arrays
//
//-----------> 2. Merge 2 arrays Together

//------------------------
//--- Shallow Copy array
//------------------------

const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);
// ['Pizza', 'Pasta', 'Risotto']

//---------------------------
// Join Two Arrays Together
//---------------------------

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(wholeMenu);
// (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

console.log(...wholeMenu);
// Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

//  ✅ We see that the Spread (...) Operator works entirely on arrays, but that's not entirely true,because the Spread(...) Operator works on all called ♻ ITERABLES

//.........................
// 🔴 What are Iterables?
//.......................

// There are many Iterables in JavaScript. We will see that in future sections. For now, They are things like all arrays, strings, maps, or sets, BUT ❗ NOT OBJECTS 🔴

const theString = "Ankur";
const letters = [...theString, " ", "Sinha"];

console.log(letters); // (7) ['A', 'n', 'k', 'u', 'r', ' ', 'Sinha']

console.log(...letters); // // A n k u r   Sinha

// We can use Spread(...) Operater while Building an Array Or When We pass values into a function
console.log(...theString); // A n k u r

// ❗ console.log(`${...theString} Sinha`);  // This will give an Error. We cant use it this way ❌

// -------------------------------------------------------------
//  Real Life Example ✅ // Real World Application - Use Case
// -------------------------------------------------------------

const restaurantAnkur = {
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

  // METHOD: Function to order pasta using the Spread Operator
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
};

// Function to order pasta using the Spread Operator: // ⭕ Very important - ES6
const ingrediants = ["mushrooms", "corn", "cheese"];
restaurantAnkur.orderPasta(...ingrediants); // Here is your order of pasta with ingrediants mushrooms, corn, and cheese

//--------------------------------------------
// ❗❗ Since ES2018, We can also use Spead Operators on Objects..
// Even Though They are NOT Iterables ♻.
// Very Important To Remenber ✅ ⭕ Very important
//--------------------------------------------------

const newRestaurantAnkur = {
  foundIn: 1992,
  founder: "Ankur",
  ...restaurantAnkur,
};

console.log(newRestaurantAnkur);
// {foundIn: 1992, founder: 'Ankur', nameOfRestaurant: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), …}

//--------------------------
// 🔥 MAKING A SHALLOW COPY
//-------------------------
const restaurantAnkurCopy = { ...restaurantAnkur };

// changing the name
restaurantAnkurCopy.nameOfRestaurant = "Taste of Punjab";

// logging
console.log(restaurantAnkur.nameOfRestaurant); // Classico Italiano
console.log(restaurantAnkurCopy.nameOfRestaurant); // Taste of Punjab
