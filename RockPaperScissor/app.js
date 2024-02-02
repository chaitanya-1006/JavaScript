const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";

let isGameRunning=false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or  ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Input! We Chose ${DEFAULT_USER_CHOICE} for you!`);
    return ;
  }

  return selection;
};

const getComputerChoice =  () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
  if (isGameRunning) {
    return ;
  }

  isGameRunning = true;
  console.log("Game is Starting");
  const playserSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if(playserSelection)
  {
    winner=getWinner(computerSelection,playserSelection);
  }else
  {
    winner=getWinner(computerSelection);
  }
  
  let message=`You picked ${playserSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection}. You`;
  if(winner === RESULT_DRAW)
  {
    message = message + 'had a draw';
  }
  else if(winner=== RESULT_PLAYER_WIN)
  {
    message = message + 'Won';
  }
  else
  {
    message=message+'Lost'
  }
  alert(message);
//   console.log(playserSelection);
//   console.log(computerSelection);
console.log(winner)

  isGameRunning=false;
});



