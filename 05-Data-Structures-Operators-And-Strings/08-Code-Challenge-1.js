"use strict";

//--------------------------------------
// LECTURE 110: CODING CHALLENGE # 1
//--------------------------------------

/*

.....................................
//🟢 Football Betting Application 🟢
//...................................

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

Then, call the function again with players from game.scored

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnarby",
    "Lewandowski",
    "Hummels",
    "Sancho",
    "Gotze",
  ],
  date: "Nov 9th, 2037",

  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Solution

// 1. Create one player array for each team (variables 'players1' and 'players2')

const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk1, ...otherPlayers1] = players1;
const [gk2, ...otherPlayers2] = players2;

console.log(gk1, otherPlayers1); // Neuer (10) ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
console.log(gk2, otherPlayers2); // Burki (10) ['Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers); // (22) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final); // (14) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Perisic']

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// NESTED OBJECT DESTRUCTURING
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...playerNames) {
  const printString = `${playerNames.length} goals were scored`;
  return printString;
};

console.log(printGoals(...game.scored));
// 6 goals were scored

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log("Team 1 is likely to win");
!(team1 < team2) && console.log("Team 2 is likely to win"); // Team 2 is likely to win
