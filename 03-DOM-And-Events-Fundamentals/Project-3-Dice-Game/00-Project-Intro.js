"use strict";

//-------------------------------------------------------
// LECTURE 82: PROJECT # 3: DICE GAME
//-------------------------------------------------------

// 1) Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

// 2) Initial Conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");
