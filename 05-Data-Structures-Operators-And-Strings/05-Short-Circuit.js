"use strict";

//-------------------------------------------
// LECTURE 107: SHORT CIRCUITING (&& AND ||)
//-------------------------------------------

//.................................
// There are 3 Properties of the Logical Operators
//...............................
//
//
// 1.) --------------> They can USE any Data Type
// 2.) --------------> They can RETURN any Data Type
// 3.) --------------> Short-Circuiting (Short-Circuit Evaluation)

//...................
// About Short-Ciruiting
//...................

// ⭕ If the first value is a TRUTHY Value, it will immediately return The TRUTHY Value. The other value/Operand will not be Evaluated
// ✅ The operands with the logical operators need not to be only Boolean. It can be any expression or value.

//----------------------------------------------------------------------
//      🔥🔥  SHORT CIRCUITING WITH OR (||) OPERATOR
//----------------------------------------------------------------------

console.log("----- OR  -----");

console.log(34 || "Peter"); // 34
console.log("" || "Peter"); // Peter
console.log(true || 0); // true
console.log(undefined || null); // null: Its an Object (Legacy BUG).. a FALSY VALUE - NO Short-Circuiting
console.log(false || false); // It will display the 2nd Value, even if its a FALSY value, as the 1st value is FALSY

console.log(undefined || 0 || "" || "Hello! Codatrix" || 23 || null); // Hello! Codatrix

// ⭕  As we already know that, in the case of OR (||), if any value is a TRUTHY Value, it will immediately evaluate to the TRUTHY Value. This this also makes sense during Short-Circuiting

//.....................................
// 🔴 OUR DATA
//.....................................

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

//.....................................
// ⭕ A Practical Example
//.....................................
//
// Lets say if we want to count the number of Guests in our Restaurant Object, we don't know, if the property numGuests exists. However, we want to define a Variable, if its present.
//
//......If its NOT, we want a DEFAULT Value for it.

//--------------------------
// with TERNARY Operator
//-------------------------
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

//-------------------------
// with SHORT CIRCUITING
//------------------------
// <----- TO BE SOLVED in NEXT LECTURE: Since "0" is supposed to be a REAL NUMBER, IT SHOULD NOT BE EVALUATED AS FALSEY
// restaurant.numGuests = 0;
restaurant.numGuests = 34;

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 34

//----------------------------------------------------------------------
//       🔥🔥 SHORT CIRCUITING WITH AND (&&) OPERATOR
//----------------------------------------------------------------------
console.log("----- AND -----");

console.log(0 && "Carrie"); // 0
console.log(78 && "Carrie"); // Carrie

console.log("Hello" && 23 && null && 45); // null

// PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza("cheese", "corn", "onion"); // cheese (2) ['corn', 'onion']
}

restaurant.orderPizza &&
  restaurant.orderPizza("cheese", "corn", "onion", "spinach");
// cheese (3) ['corn', 'onion', 'spinach']
