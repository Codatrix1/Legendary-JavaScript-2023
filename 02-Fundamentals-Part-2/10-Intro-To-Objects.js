"use strict";

//-------------------------------------------------------
// LECTURE 42: INTRODUCTION TO OBJECTS
//-------------------------------------------------------

// 🔴 In OBJECTS, we actually define key Value Pairs, so that we can give each of the values here, a Name. We use {} curly braces to write an object. It was impossible to write a key value pair to write as an array. But we can write the same as an Object

// They are the most fundamental concept in the whole  JavaScript Language

//--------
// Array
//-------

const peterDetailsArray = [
  "Peter",
  "Quinn",
  "Freelancer",
  2037 - 1989,
  ["Carrie", "Saul"],
];

//------------
// OBJECTS
//-----------
//❗ IMPORTANT
// ⭕ This type of writing an object is called the OBJECT LITERAL SYNTAX
// We get the property names in an alphabetical order, unlike the way we had written the object

// key: value // "peterDetails" object has 5 properties as defined

const peterDetails = {
  firstName: "Peter",
  lastName: "Quinn",
  occupation: "Freelancer",
  age: 2037 - 1989,
  friends: ["Carrie", "Saul"],
};

// Question - What is the difference between an Array and an Object ???    📌

// Ans - In an Array, we have to refer to the proper index of the elements in order to retrieve them , but in Objects, there is no order and thus, we can retrieve them as we want.

// Array can be used to get the data which is structured, whereas, 🔴 Objects are used to get the data which is unstructured. But how do we get data from an object???
