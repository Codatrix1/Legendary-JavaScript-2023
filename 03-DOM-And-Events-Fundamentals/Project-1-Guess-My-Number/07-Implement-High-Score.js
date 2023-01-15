"use strict";
//-------------------------------------------------------
// LECTURE 77: IMPLEMENT HIGH SCORES
//-------------------------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no guess input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#37b24d";
    document.querySelector(".number").style.width = "30rem";

    // Implement high score
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    document.querySelector(".highscore").textContent = highScore;

    // When guess too high
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game 😟 ";
      document.querySelector(".score").textContent = 0;
    }

    // When guess too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game 😟 ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = currentScore;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
