//Ternary conditions

/* syntax
condition ? iftrue : iffalse;*/

const soup = "CHicken Noodles Soup"
let iscustomerBanned = false;
let soupAccess = iscustomerBanned ? "Sorry no soup for you" : soup ? `Yes,we have ${soup} today.` : `NO soup today `;
console.log (soupAccess)


const testScore = 99;

let myGrade = testScore >= 90  ? "A" :
              testScore >= 80 ? "B+" :
              testScore >= 70 ? "B" :
              testScore >= 60 ? "C+" :
              testScore >= 50 ? "C" :
              testScore >= 40 ? "D+" :
              testScore >= 30 ? "D" :
              "F";

console.log(`My test grade is ${myGrade}.`);

let player = "rock"
let computer = "scissors"
let results = player === computer ?
"Tie game"
:player === "rock" && computer === "paper"?
"Computer wins"
:player === "paper" && computer === "scissors"?
"Computer wins"
:player === "scissors" && computer === "rock"?
"computer wins"
:"player wins"

console.log(results)
