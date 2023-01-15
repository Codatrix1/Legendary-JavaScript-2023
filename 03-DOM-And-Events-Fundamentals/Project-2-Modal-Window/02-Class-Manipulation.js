"use strict";

//-------------------------------------------------------
// LECTURE 80: WORKING WITH CLASSES
//-------------------------------------------------------

// modal.classList.remove("class-1", "class-2"......)

// With the above code, we are removing the "hidden" class from
//        CSS to make our modal window appear.
// We can add multiple class names at the same time

//  classList Methods - add, remove, check class is present on the element or NOT ie, the KEYPRESS Event

const btnsShowModal = document.querySelectorAll(".show-modal");

const modalEl = document.querySelector(".modal");
const closeModalEl = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

/*

//-------------------------------------------
// Looping: Using for loop 🔴
//--------------------------------------------
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    console.log("Button Clicked");

    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
}

//-------------------------------------------
// Advanced Looping: Using forEach Method 🟢
//--------------------------------------------
// looping through the elements and adding click EventListener
btnsShowModal.forEach((eachButton) => {
  eachButton.addEventListener("click", function () {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
});


*/

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
