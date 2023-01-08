//----------------------------------------------------------
// LECTURE - 28: THE CONDITIONAL (TERNARY) OPERATOR
//----------------------------------------------------------

//...................................
// ✅ It is called the TERNARY Operator,
// as it has 3 Parts. The
// CONDITION ?  "IF" :  "ELSE"
//...................................
const age = 15;

const drink = age >= 18 ? "Whiskey 🥃" : "Water 💧";
console.log(drink);

//----------------------
let drink2;
if (age >= 18) {
  drink2 = "Whiskey 🥃";
} else {
  drink2 = "Water 💧";
}

console.log(drink2);

//---------------------
console.log(`I like to drink ${age > 18 ? "Whiskey 🥃" : "Water 💧"}`);
