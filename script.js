// Rock Paper Scissors

// 1 = Rock
// 2 = Paper
// 3 = Scissors


let computerChoice = 0;
let playerChoice = 0;
let score = 0;

function getComputerChoice() {
    // Chooses a random number: 1, 2, or 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerChoice = randomNumber;
}

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    playerInput.toLowerCase();
    if (playerInput == "rock") {
        playerChoice = 1;
    }
    else if (playerInput == "paper") {
        playerChoice = 2;
    }
    else if (playerInput == "scissors") {
        playerChoice = 3;
    }

}

function playRound() {
    getComputerChoice();
    getPlayerChoice();

    // Player chooses Rock
    if (playerChoice == 1) {
        if (computerChoice == 1) {
            console.log("It's a tie! Rock vs Rock!");
        }
        else if (computerChoice == 2) {
            console.log("You lose! Paper covers Rock!");
        }
        else if (computerChoice == 3) {
            console.log("You win! Rock smashes Scissors!");
            score += 1;
        }
    }

    // Player chooses Paper
    if (playerChoice == 2) {
        if (computerChoice == 1) {
            console.log("You win! Paper covers Rock!");
            score += 1;
        }
        else if (computerChoice == 2) {
            console.log("It's a tie! Paper vs Paper!");
        }
        else if (computerChoice == 3) {
            console.log("You lose! Scissors cut Paper!!");
        }
    }

    // Player chooses Scissors
    if (playerChoice == 3) {
        if (computerChoice == 1) {
            console.log("You lose! Rock smashes Scissors!");
        }
        else if (computerChoice == 2) {
            console.log("You win! Scissors cut Paper!");
            score += 1;
        }
        else if (computerChoice == 3) {
            console.log("It's a tie! Scissors vs Scissors!");
        }
    }
}

// Plays the game!
function game() {
    score = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(score);
}

game();
