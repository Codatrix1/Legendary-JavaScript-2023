"use strict";

//-------------------------------------------------------
// LECTURE 79: PROJECT # 2: MODAL WINDOW
//-------------------------------------------------------

//------------Limitation of document.querySelector method------
//
//  Answer:    Whenever we select document.querySelector which
//     matches multiple elements, only the first one would be
//      selected. So, We use document.querySelectorAll instead.

//  It gives us a NodeList(3), similar to an array containing
//   all the elements

// We can loop through the NodeList(3) and do something with it

const showModalBtnElements = document.querySelectorAll(".show-modal");

const modalEl = document.querySelector(".modal");
const closeModalEl = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

for (let i = 0; i < showModalBtnElements.length; i++) {
  console.log(showModalBtnElements[i].textContent);
}

//......................................
// ⭐ Advanced Looping: forEach Mehod
//.........................................

// btnsShowModal.forEach((eachModal, index) => {
//   console.log(eachModal.textContent);
//   return eachModal;
// });

showModalBtnElements.forEach((eachButton) => {
  console.log(eachButton.textContent);
  return eachButton;
});
