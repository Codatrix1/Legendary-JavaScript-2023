"use strict";
//--------------------------------------------------------
// LECTURE 119: SUMMARY: Which Data Structure to Use ?
//--------------------------------------------------------

/*

DATA STRUCTURE OVERVIEW

SOURCES OF DATA

    1. From the Program Itself: Data written directly in the source code (e.g. status messages)
    2. From the UI: Data input from the user or Data written in DOM (e.g. Todo App)
    3. From external sources: Data Fetched for Example from web API 
       (e.g. employees object from a web API): JSON [See Below]
                                        |
                                        |
                                        |
                               --------------------
                                Collection of Data
                               --------------------
                                        |
                                        |
                                        |
                               --------------------
                                 Data Structure 
                               --------------------
                                 |              |
                                 |              |
                                 |              |
                          SIMPLE LIST?       KEY: VALUE Pairs?

                    ARRAYs   or    SETs        OBJECT or MAPS
                    


OTHER BULIT-IN
👉 WeakMap
👉 WeakSet

NON BUILT-IN
👉 Stacks
👉 Queues
👉 Linked Lists
👉 Trees
👉 Hash Tables


*/

//------------------------------
// ⭐ JSON data format example
//------------------------------
/*

{
  "count": 3,
  "details": [
    {
      "id": "1",
      "firstName": "Carrie",
      "lastName": "Mathison",
      "job": "Station Chief",
    },
    {
      "id": "2",
      "firstName": "Peter",
      "lastName": "Quinn",
      job: "Analyst",
    },
    {
      "id": "3",
      "firstName": "Saul",
      "lastName": "Berenson",
      "job": "Director",
    },
  ],
};

*/

//-------------------------------------------------------
//     ARRAYS Vs. SETS      |        OBJECTS Vs. MAPS
//-------------------------------------------------------

//------------------------------------------------
// 🔥 ARRAYS
//------------------------------------------------
// 👉 Use when we need ORDERED list of values(might contain duplicates)
// 👉 Use when we need to MANIPULATE data

const myArray = ["hello", "there", "peter"];

console.log(myArray); // (3) ['hello', 'there', 'peter']

//------------------------------------------------
// 🔥🔥 SETS
//------------------------------------------------
// 👉 Use when we need to work with UNIQUE Values
// 👉 Use when HIGH PERFORMANCE is really important (10x faster than arrays)
// 👉 Use to REMOVE DUPLICATE from arrays

const mySet = new Set(["hi", "pen", "pencil", "hi", "100", "100"]);

console.log(mySet); // Set(4) {'hi', 'pen', 'pencil', '100'}

//--------------------------------------------------
// 🔥🔥🔥 OBJECTS
//--------------------------------------------------
// 👉 Only STRING DATA TYPE for Keys
// 👉 More "traditional" key/value store
// 👉 Easier to write/access values with Dot and Bracket Notation ( . and [])
// 👉 Use when we need to include functions (METHODS)
// 👉 Use when working with JSON (can convert to map)

const myObj = {
  firstName: "Peter",
  lastName: "Quinn",
  age: 38,
};

console.log(myObj); // {firstName: 'Peter', lastName: 'Quinn', age: 38}

//------------------------------------------------------
// 🔥🔥🔥🔥 MAPS
//------------------------------------------------------
// 👉 Better performance
// 👉 ANY DATA TYPE for Keys
// 👉 Easy to iterate
// 👉 Easy to compute size
// 👉 Use when simply need to map key to values
// 👉 Use when we need keys that are NOT STRINGS

const myMap = new Map([
  ["name", "Carrie Mathison"],
  ["age", 40],
  [3, "Correct"],
  [true, "Start writing"],
]);

console.log(myMap);
// Map(4) {'name' => 'Carrie Mathison', 'age' => 40, 3 => 'Correct', true => 'Start writing'}
