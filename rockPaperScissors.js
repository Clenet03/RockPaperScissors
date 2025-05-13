function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) return "rock";
  else if (num === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper or Scissors :");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    displayScore();
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    displayScore();
  } else {
    console.log("It's a draw!");
    displayScore();
  }
}

function displayScore() {
  console.log("Human Score : " + humanScore);
  console.log("Computer Score : " + computerScore);
}

function playGame(maxScore) {
  while (humanScore < maxScore && computerScore < maxScore) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
}

playGame(3);
