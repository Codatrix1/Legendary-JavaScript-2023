"use strict";
//-------------------------------------------------------
// LECTURE 49: The WHILE Loop
//-------------------------------------------------------

//.....................
// ๐  FOR Loop
//.....................

for (let rep = 1; rep <= 3; rep++) {
  console.log(`FOR: Weight Lifting Exercise ${rep}`);
}

//........................
// ๐  WHILE Loop
//------------------------

let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting Heavy Weight ${rep} ๐๏ธโโ๏ธ`);
  rep++;
}

/*
โกโก While Loop is a Versatile Loop, and it can be used in a wider variety of situations, 
It does not need a counter, All it needs is the CONDITION which needs to stay true to keep running.

It can be any condition, and that does not need to be COUNTER AT ALL. And thats what 
we need most of the time to solve a certain problem. 
Lets Create such an example WITHOUT A COUNTER !!!! It would just depend on a random variable.

---------------------------------------------------------------------------------------
โโ Question - We have to ROLL A DICE, and we have to KEEP ROLLING it UNTIL WE GET A 6.
--------------------------------------------------------------------------------------

SOUNDS FUN !! ๐.. Here we don't know how many times we have to 
roll the dice to get a 6, so basically, we cant use a counter variable here .. LETS DO IT
*/

//---------------
// โ Solution
//--------------

console.log(Math.random()); // 0.07943105575265452
console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6

// INITIAL
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`You rolled a ${dice}. The loop ends here.....`);
  }
}

//.............................................................
// โโญ๐  FOR Loop is the right loop to loop OVER AN ๐ข ARRAY as we know exactly,
// how many times we need the loop to run. โญ๐ข
// When we do not know the counter value, we use the WHILE Loop
//......................................................................
