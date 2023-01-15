"use strict";

//-------------------------------------------------------
// LECTURE 81: HANDLE KEYPRESS "Esc" Event
//-------------------------------------------------------

//--------------------------------------
// 🎹 KeyBoard Events - They are GLOBAL Events.
// So we Listen to the whole document, while handiling the KeyBoard Event.

const btnsShowModal = document.querySelectorAll(".show-modal");

const modalEl = document.querySelector(".modal");
const closeModalEl = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

// Utility Functions
const displayModalWindowFunction = function () {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const hideModalWindowFunction = function () {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

// 1) Show Modal: Adding Event Listener to all three buttons
btnsShowModal.forEach((eachButton, idx) => {
  //   console.log(idx);
  eachButton.addEventListener("click", displayModalWindowFunction);
});

// 2) Hide modal: When clicked on CLOSE btn AND OVERLAY btn
closeModalEl.addEventListener("click", hideModalWindowFunction);
overlayEl.addEventListener("click", hideModalWindowFunction);

// 3) We only want this function on pressing the Esc Key, NOT ALL KEYS
//----------------------------------------------------------------------------------------
// Here the argument ⭐⭐ "event" is the KeyboardEvent for all keys, it generates an Object like we did earlier. So, we can get the
//   {key: value} pair, and use it.
//--------------------------------------------------------------------------------------------

/*
document.addEventListener("keydown", function (e) {
  //   console.log(e); // ⭕ TO LOOK AT ALL THE KEYS as an OBJECT in the console
  //   console.log(e.key);

  // If the pressed Key is Esc
  if (e.key === "Escape") {
    // console.log("Esc key is pressed");
    // and  If the Modal DOES NOT Contain the "hidden" class, then Close the Modal.. We can merge the two conditions together using the && logic
    // Condition to hide modal [Toggle/Invert]
    if (!modalEl.classList.contains("hidden")) {
      hideModalWindowFunction();
    }
  }
});

*/

document.addEventListener("keydown", function (e) {
  // Condition to hide modal [Toggle/Invert]: If the pressed Key is Esc
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    hideModalWindowFunction();
  }
});
