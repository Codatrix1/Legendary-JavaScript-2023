"use strict";
//-------------------------------------------------------
// LECTURE 76: RESET FUNCTION: CODING CHALLENGE # 1
//-------------------------------------------------------

/*

Implement a game reset functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input
fields

4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;

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
