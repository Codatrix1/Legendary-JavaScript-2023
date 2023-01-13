"use strict";
//-------------------------------------------------------
// LECTURE 48: LOOPING BACKWARDS And LOOPS IN LOOPS
//-------------------------------------------------------

//--------------------------------------------
// Now lets ⭕ loop in the opposite direction
//--------------------------------------------

const peter = [
  "Peter",
  "Quinn",
  2089 - 1989,
  "Field Op",
  ["Saul", "Carrie", "Max"],
  true,
];

/*

0, 1, 2, ...., 5
5,...., 2, 1, 0

for (initial[lastElement]; condition to stop; counter){
    codeBlock
}

*/

for (let i = peter.length - 1; i >= 0; i--) {
  console.log(i, peter[i], typeof peter[i]);
}

/*
5 true 'boolean'
4 (3) ['Saul', 'Carrie', 'Max'] 'object'
3 'Field Op' 'string'
2 100 'number'
1 'Quinn' 'string'
0 'Peter' 'string'

*/

//...................................
// ⭕ Loop Inside a ⭕ Loop
//................................

// Lets go back to our Gym Repetitions example. We have 3 weight exercises, and we have to repeat each exercise 5 times. So, we have a total of 15 repetions. lets check out how to do it.

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting Exercise ${exercise}-----`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Repetation: ${rep}🏋️‍♀️ `);
  }
}
