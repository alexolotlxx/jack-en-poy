let round = 1,
    userScore = 0,
    botScore = 0,
    computerChoice;

const gameScreen = document.querySelector("#game-screen")
const upperText = document.querySelector("#upper-text")
const middleText = document.querySelector("#middle-text")
const bottomText = document.querySelector("#bottom-text")
const container = document.querySelector(".container");
const startBtn = document.querySelector(".start-button");
const userScoreDisplay = document.querySelector("#user-score")
const botScoreDisplay = document.querySelector("#bot-score")

// sets up the buttons
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const rockImg = document.createElement("img");
const paperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

rockImg.src = "images/rock.png"
paperImg.src = "images/paper.png"
scissorsImg.src = "images/scissors.png"

rockBtn.classList.add("three-buttons")
paperBtn.classList.add("three-buttons")
scissorsBtn.classList.add("three-buttons")


function getComputerChoice()
{
    let choice = Math.random();
    if (choice >= 0.666)
        return "ROCK";
    else if (choice >= 0.333)
        return "PAPER";
    else
        return "SCISSORS";
}

// function executes every time you start a round
function initGame() {
    container.removeChild(startBtn);

    container.appendChild(rockBtn);
    rockBtn.appendChild(rockImg);
    container.appendChild(paperBtn);
    paperBtn.appendChild(paperImg);
    container.appendChild(scissorsBtn);
    scissorsBtn.appendChild(scissorsImg);

    upperText.textContent = `Round ${round}`;
    middleText.textContent = "";
    bottomText.textContent = "Make your move";

    userScoreDisplay.textContent = `Your Score: ${userScore}/5`;
    botScoreDisplay.textContent = `Bot's Score: ${botScore}/5`;

    gameScreen.appendChild(bottomText);
}

function playRound(humanChoice, computerChoice) {

    console.log(`Bot picked ${computerChoice}`);
    console.log(`user picked ${humanChoice}`);
    middleText.textContent = `You: ${humanChoice}` + "   " + `Bot: ${computerChoice}`;
 
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
        (humanChoice === "PAPER" && computerChoice === "ROCK") || 
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        bottomText.textContent = "You win!";
        console.log("User wins");

        ++userScore;
        userScoreDisplay.textContent = `Your Score: ${userScore}/5`;
    }
    else if ((humanChoice === "ROCK" && computerChoice === "PAPER") || 
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") || 
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
        bottomText.textContent = "You lose!";
        console.log("User loses");

        ++botScore;
        botScoreDisplay.textContent = `Bot's Score: ${botScore}/5`;
    }
    else {
        bottomText.textContent = "It's a tie!";
        console.log("It's a tie");
    }

    upperText.textContent = "Round" + " " + round++;

    if (userScore === 5 || botScore === 5) {
    displayWinner();
    return;
    }
}

function displayWinner() {
    
    container.removeChild(rockBtn);
    container.removeChild(paperBtn);
    container.removeChild(scissorsBtn);

    if (userScore > botScore) {
        upperText.textContent = "CONGRATULATIONS!";
        middleText.textContent = "YOU WIN THE GAME!";
        bottomText.textContent = "Press START to play again";
    } else if (botScore > userScore) {
        upperText.textContent = "YOU LOST!";
        middleText.textContent = "THE BOT BEAT YOU!";
        bottomText.textContent = "Press START to play again";
    } else {
        upperText.textContent = "NICE TRY!";
        middleText.textContent = "IT'S A TIE!";
        bottomText.textContent = "Press START to play again";
    }

    container.appendChild(startBtn);
    round = 1;
    userScore = 0;
    botScore = 0;
}

startBtn.addEventListener("click", initGame);

rockBtn.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    e.stopPropagation();
    playRound("ROCK", computerChoice);
});

paperBtn.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    e.stopPropagation();
    playRound("PAPER", computerChoice);
});

scissorsBtn.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    e.stopPropagation();
    playRound("SCISSORS", computerChoice);
});

