//----------------------------------------------------------
// LECTURE - 18: TAKING DECISIONS: if / else STATEMENTS
//----------------------------------------------------------

const age = 15;

if (age >= 18) {
  console.log(`Carrie can have her driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Carrie will have to wait for another ${yearsLeft} to start driving`
  );
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
