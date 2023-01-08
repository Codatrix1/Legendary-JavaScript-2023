//----------------------------------------------------------
// LECTURE - 26: THE SWITCH STATEMENT
//----------------------------------------------------------

// const day = prompt("Enter a day: ");

const day = "saturday";

switch (day) {
  case "monday": // day === "monday" : SCRICT COMPARISON
    console.log("Plan course structure");
    console.log("Goto coding meetup");
    break;
  case "tuesday":
    console.log("Plan theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// Using if/else

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Goto coding meetup");
} else if (day === "tuesday") {
  console.log("Plan theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid");
}
