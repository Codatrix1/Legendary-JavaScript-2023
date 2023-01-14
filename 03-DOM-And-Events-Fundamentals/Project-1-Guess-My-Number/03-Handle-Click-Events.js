//-------------------------------------------------------
// LECTURE 73: HANDLING CLICK EVENTS
//-------------------------------------------------------

// ❓ What is an event?
// ✅ An event is something that happens on a page for example, a mouse click, mouse movement, or a key press etc, then with an EVENT LISTENER we can wait for a certain event to happen and then react to it.

// LETS DEVELOP THE APPLICATION STEP-BY-STEP
// Step - 1 - First We have to addEventListener
// Step - 2 - Then we have to add an Event Handler
// Step - 3 - Then we have to provide the NAME of the event as the 1st Argument, and then we have to provide a FUNCTION as the 2nd Argumnet
// NOTE - The EVENT HANDLER is the function we wrote as the 2nd Argument
//
// ❕ A Function is just another value, thus we can use it as an agrument.

// ⭕ NOTE - We did not call the function, but actually , the function we defined is called by the JavaScript Engine who will call it, as soon as the event happens.

const checkBtnEl = document.querySelector(".check");

checkBtnEl.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  }
});
