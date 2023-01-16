"use strict";

//-------------------------------------------------------
// LECTURE 83: ROLLING THE DICE
//-------------------------------------------------------

// Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Default variables
let currentScore = 0;

//  Initial Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice functionalility
btnRoll.addEventListener("click", function () {
  // 1.) Generate a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2.) Display the dice picture
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNumber}.png`;

  // 3.) Check for rolled 1: if true, switch to next player
  if (diceNumber !== 1) {
    // Add dice to current score
    currentScore += diceNumber;
    currentScore0El.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
  }
});
