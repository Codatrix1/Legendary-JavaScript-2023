"use strict";

//-------------------------------------------------------
// COMPLETE MODAL APPLICATION
//-------------------------------------------------------

// SELECT ELEMENTS
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
document.addEventListener("keydown", function (e) {
  // Condition to hide modal [Toggle/Invert]: If the pressed Key is Esc
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    hideModalWindowFunction();
  }
});
