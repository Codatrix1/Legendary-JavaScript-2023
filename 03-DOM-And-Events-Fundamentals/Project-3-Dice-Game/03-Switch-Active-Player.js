"use strict";

//-------------------------------------------------------
// LECTURE 84: SWITCH ACTIVE PLAYER
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

// To manipulate CSS of player--active
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Default variables
let currentScore = 0;
let activePlayer = 0;
const overallScores = [0, 0];

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // DYNAMIC
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0; // DYNAMIC
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // TOGGLE ACTIVE PLAYER WHEN DICE ROLL IS 1
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
