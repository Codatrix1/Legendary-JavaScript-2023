"use strict";

//-------------------------------------------------------
// LECTURE 36:  FUNCTIONS Calling OTHER FUNCTIONS
//-------------------------------------------------------

const cutPieces = function (fruit) {
  return fruit * 6;
};

const fruitProcessor = function (numApples, numOranges) {
  const applePieces = cutPieces(numApples);
  const orangePieces = cutPieces(numOranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;

  return juice;
};

console.log(fruitProcessor(2, 3)); // Juice with 12 apple pieces and 18 orange pieces.
