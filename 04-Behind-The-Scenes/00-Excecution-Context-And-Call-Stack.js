"use strict";

//-------------------------------------------------------
// LECTURE 91: EXECUTION CONTEXT AND THE CALL STACK
//-------------------------------------------------------

/*
 ________________  
|                |
|                |
|                |             
|________________|                              
|                |                                      
|   first()      |       JS ENGINE        
|________________|                              
|                |             
|   second()     |               
|________________|               
|                |
|                |
|    GLOBAL      |
|                |
|________________|

CALL STACK
*/

//--------------------------------
// COMPILED CODE STARTS EXECUTION
//--------------------------------

const name = "peter";

const first = function () {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

const second = function (x, y) {
  var c = 2;
  return c;
};

const x = first();

console.log(x); // 3
