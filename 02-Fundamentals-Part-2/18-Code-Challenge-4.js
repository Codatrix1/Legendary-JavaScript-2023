"use strict";
//-------------------------------------------------------
// LECTURE 50: Coding challenge # 4
//-------------------------------------------------------

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

/////////////////////// Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array
GOOD LUCK

*/

// 1. Create an array 'bills' containing all 10 test bill values

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

/*
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
*/

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);

  const total = bills[i] + tip;
  totals.push(total);
}
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

/*

Bills: 22,295,176,440,37,105,10,1100,86,52
Tips: 4.4,44.25,26.4,88,7.4,15.75,2,220,12.9,7.8
Totals: 26.4,339.25,202.4,528,44.4,120.75,12,1320,98.9,59.8


*/

//----------------------
// Calc Sum and Average
//----------------------

const calcSumAndAverage = function (arr) {
  // Initial Sum
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    // Recurring Sum
    // sum += arr[i];
    sum = sum + arr[i];
  }

  //   console.log(`Sum: ${sum}`);

  return `Average: ${sum / arr.length}`;
};

console.log(calcSumAndAverage([10, 20, 30]));
console.log(calcSumAndAverage([10, 5, 15]));

console.log(calcSumAndAverage(tips));
console.log(calcSumAndAverage(totals));

/*
Average: 20
Average: 10
Average: 42.89
Average: 275.19
*/
