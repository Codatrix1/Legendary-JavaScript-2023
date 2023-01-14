"use strict";
//-------------------------------------------------------
// LECTURE 74: IMPLEMENTING GAME LOGIC
//-------------------------------------------------------

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;

// dev
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 Correct Number";
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
