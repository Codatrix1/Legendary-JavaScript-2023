"use strict";
//--------------------------------------------------------------------
// LECTURE 99: PRIMITIVES vs OBJECTS [Primitives VS Reference Types]
//--------------------------------------------------------------------

// ❗ ❗ VERY IMPORTANT............................

//  Here, we need to learn the difference about the Primitive Types and the Object Types, in the way
// they both stored in the Momory... It creates a lOT OF CONFUSION, so its really important to undertstand the concept very clearly.

// It is a very Practical Aspect

//--------------------
// With PRIMITIVES
//--------------------
// Number, Strings, Booleans, undefined, null, BigInt, Symbol

let age = 30;
let oldAge = age;

age = 31;

console.log(age); // 31
console.log(oldAge); // 30

//------------------------
// With OBJECTS
//-----------------------
// Object Literals, Arrays, Functions, etc, .....

const ankur = {
  firstName: "Ankur",
  age: 32,
};

const rick = ankur; // copying the object properties to a new object
rick.age = 27; // changing the age

console.log("Rick Details:", rick); // Rick Details: {firstName: 'Ankur', age: 27}
console.log("Ankur Details:", ankur); // Ankur Details: {firstName: 'Ankur', age: 27}
// We see that the "age" for "ankur" has also been re-assigned.. Lets see why

/*

             CALL STACK                                       Memory HEAP
----------------------------------                  ------------------------------------
Identifier       Address     Value                     Address          Value

                                          ===========>    D30F       {firstName: "Ankur", age: 32 ❌}
age----------/----> 0001     30        /                                                      27 ✔
            / \                       /
oldAge----/   \----> 0002     31    /
                                  /  
ankur --------> 0003 -------> D30F
            /
          /
rick --->   


Thus, "ankur" and "rick" ------------> both points to the same Object in the Memory HEAP, 
thus having the same address, with an altered property value ....... 
i.e. age: 27, for both "ankur" and "rick". 
This has huge implications, in JavaScript.


//--------------------------------------------------------------
   ❗Important  - Its a mis-conception that "const" are immutable. 
//--------------------------------------------------------------

Well, its TRUE for Primitive Values, but we can mutate it when 
it comes to OBJECTS or The REFERENCE Values. We are not changing the value
"identifier" in the Call Stack referencing to the HEAP Object.
 We are infact changing the value in the HEAP itself.



❗Important
--> There are 3 more topis for "HOW JAVASCRIPT WORK BEHIND THE SCENES" TOPICS FOR LATER ⌛

1.--- Prototypal Inheritance ---> Object Oriented Programmimg(OOP) with JavaScript
2.--- Event Loop --->  Asynchronous JavaScript: Promises, Async/Await anf AJAX
3.--- How DOM Really Works -----> Advanced DOM and Events





*/
