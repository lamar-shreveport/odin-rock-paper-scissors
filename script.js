// Rock Paper Scissors

// 1 = Rock
// 2 = Paper
// 3 = Scissors

let computerChoice = 0;
let playerChoice = 0;
let score = 0;
let div = document.querySelector('div');
let restartBtn = document.querySelector('#restart');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

function getComputerChoice() {
    // Chooses a random number: 1, 2, or 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerChoice = randomNumber;
}

function playRound() {
    getComputerChoice();

    // getPlayerChoice(
    let p = document.createElement("p");

    // Player chooses Rock
    if (playerChoice == 1) {
        if (computerChoice == 1) {
            p.append("It's a tie! Rock vs Rock!");
            div.appendChild(p);
        }
        else if (computerChoice == 2) {
            p.append("You lose! Paper covers Rock!");
            div.appendChild(p);
        }
        else if (computerChoice == 3) {
            p.append("You win! Rock smashes Scissors!");
            div.appendChild(p);
            score += 1;
        }
    }

    // Player chooses Paper
    if (playerChoice == 2) {
        if (computerChoice == 1) {
            p.append("You win! Paper covers Rock!");
            div.appendChild(p);
            score += 1;
        }
        else if (computerChoice == 2) {
            p.append("It's a tie! Paper vs Paper!");
            div.appendChild(p);
        }
        else if (computerChoice == 3) {
            p.append("You lose! Scissors cut Paper!");
            div.appendChild(p);
        }
    }

    // Player chooses Scissors
    if (playerChoice == 3) {
        if (computerChoice == 1) {
            p.append("You lose! Rock smashes Scissors!");
            div.appendChild(p);
        }
        else if (computerChoice == 2) {
            p.append("You win! Scissors cut Paper!");
            div.appendChild(p);
            score += 1;
        }
        else if (computerChoice == 3) {
            p.append("It's a tie! Scissors vs Scissors!");
            div.appendChild(p);
        }
    }

}

// Empties play history

function clearHistory() {
    document.querySelector('#play-history').innerHTML = "";
    restartBtn.style.visibility = 'hidden';
    rockBtn.style.visibility = 'visible';
    paperBtn.style.visibility = 'visible';
    scissorsBtn.style.visibility = 'visible';
}

// Plays the game!

function game() {
    playRound();

    // Find the last paragraph so we can add the score
    // Cursed?
    let lastP = document.querySelector('p:last-child');
    lastP.append(` Score = ${score}\n`);

    // Win @ 5. If click another button, clear and start new game
    if (score === 5) {
        let h1 = document.createElement('H1');
        h1.textContent = "You win!";
        lastP.append(h1);
        score = 0;

        restartBtn.style.visibility = 'visible';
        rockBtn.style.visibility = 'hidden';
        paperBtn.style.visibility = 'hidden';
        scissorsBtn.style.visibility = 'hidden';
    }
}

const button = document.querySelectorAll('button');

// Need to cycle through buttons for event listener
button.forEach(button => button.addEventListener('click', () => {
    if(button.textContent == 'Rock') playerChoice = 1;
    else if (button.textContent == 'Paper') playerChoice = 2;
    else if (button.textContent == 'Scissors') playerChoice = 3;
    game();

}));

restartBtn.addEventListener('click', ()=>{
    clearHistory();
});