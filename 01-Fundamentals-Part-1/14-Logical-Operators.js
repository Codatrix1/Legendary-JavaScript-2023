//----------------------------------------------------------
// LECTURE - 24: LOGICAL OPERATORS
//----------------------------------------------------------

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const ofFullAge = true; // C

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true

console.log(hasGoodVision && !ofFullAge); // false
console.log(hasGoodVision || !ofFullAge); // true

//-----------------------------------
if (hasDriversLicense && hasGoodVision) {
  console.log("Carrie can drive"); // Carrie can drive
} else {
  console.log("Someone else should drive..");
}

//--------------------------------------
if (hasDriversLicense && hasGoodVision && ofFullAge) {
  console.log("Morty can drive..."); // Morty can drive...
} else {
  console.log("Morty should not drive......");
}

//--------------------------------------
if (hasDriversLicense && hasGoodVision && !ofFullAge) {
  console.log("Morty can drive...");
} else {
  console.log("Morty should not drive......"); // Morty should not drive......
}

//--------------------------------------
if (hasDriversLicense || hasGoodVision || !ofFullAge) {
  console.log("Morty can drive..."); // Morty can drive...
} else {
  console.log("Morty should not drive......");
}
