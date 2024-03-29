// Your Interactive game

const playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
  // Play the game
  let playerChoice = prompt("Please enter rock, paper or scissors.");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();

    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let results = playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
        ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
        : `playerOne: ${playerOne}\nComputer: ${computer} \nYou win!`;
        alert(results)
        let playAgain = confirm("Play Agian?") 
        playAgain ? location.reload() : alert("Ok thanks for playing");

      console.log(results); // You can replace this with an alert if desired
    } else {
      alert("You didn't enter rock, paper or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}