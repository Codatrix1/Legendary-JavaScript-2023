"use strict";

//-------------------------------------------------------
// LECTURE 43: DOT Vs BRACKET NOTATION
//-------------------------------------------------------

// ⭕ Now we will learn, How to retrieve data from an Object and How to change data in an Object using both the DOT AND BRACKET Notation.

// Undefined - This is a result if we try to acccess the property that is not present in an Object

const peterDetails = {
  firstName: "Peter",
  lastName: "Quinn",
  occupation: "Freelancer",
  age: 2037 - 1989,
  friends: ["Carrie", "Saul"],
};

console.log(peterDetails);

//-----------------------------------------------
// ⭕ Using the DOT Notation
//-----------------------------------------------
console.log(peterDetails.firstName); // Peter
console.log(peterDetails.occupation); // Freelancer
console.log(peterDetails.friends); // ['Carrie', 'Saul']
console.log(peterDetails.job); // undefined

//--------------------------------
// ⭕ Using the BRACKET Notation
//--------------------------------
console.log(peterDetails["firstName"]); // Peter

// Using an expression to get the object info
const nameKey = "Name";
console.log(peterDetails["first" + nameKey]); // Peter
console.log(peterDetails["last" + nameKey]); // Quinn

// ⭕ Qusetion 1 - Whats the difference between the DOT Notation and a BRACKET Notation ?  📌
// Ans - In DOT Notation, we have to use the real/final property name, but in the BRACKET Notation, we can use the computed property name too.

// ⭕ Question 2 - In what situation we should use the DOT Notation and when to use the BRACKETS Notation ????
// Ans - When we have to get the calculated value from the Object, we use the BRACKETS Notation. In any OTHER CASES, we can use the DOTS Notation.

// ❓ lET'S ASSUME THAT WE DON'T KNOW WHAT NOTATION TO USE. How do we figure out that?????

const interestedIn = prompt(
  "What do you want to know about Peter: firstName, lastName, occupation, age, friends?"
);

// Evaluates to true
if (peterDetails[interestedIn]) {
  console.log(peterDetails[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, occupation, age, friends`
  );
}

//----------------------------------
// ADDING PROPERTIES TO AN OBJECT
//---------------------------------

const carrieDetails = {
  firstName: "Carrie",
  lastName: "Matthison",
  occupation: "Social Worker",
  age: 2037 - 1985,
  friends: ["Peter", "Saul"],
};

carrieDetails.location = "Germany";
carrieDetails.vehicleName = "BMW";

console.log(carrieDetails);

// CHALLENGE
// "Carrie has 2 friends, and his best friend is called Peter"

console.log(
  `${carrieDetails.firstName} has ${carrieDetails.friends.length} friends and her best friend is called ${carrieDetails.friends[0]}`
);
