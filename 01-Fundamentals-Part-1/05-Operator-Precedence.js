//----------------------------------------------------------
// LECTURE - 15: OPERATOR PRECEDENCE
//----------------------------------------------------------

const currentYear = 2077;

const agePeter = currentYear - 1990;
const ageCarrie = currentYear - 2011;

console.log(currentYear - 1990 > currentYear - 1992); // true
console.log(35 - 10 - 5); // 20

let x, y;
x = y = 35 - 10 - 5; // 20
console.log(x, y); // 20 20

const averageAge = (ageCarrie + agePeter) / 2;
console.log(ageCarrie, agePeter, averageAge); // 66 87 76.5
