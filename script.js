let round = 1, computerChoice = getComputerChoice();

const gameScreen = document.querySelector("#game-screen")
const upperText = document.querySelector("#upper-text")
const container = document.querySelector(".container");
const startBtn = document.querySelector(".start-button");

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

    upperText.textContent = "Round" + " " + round;
    const bottomText = document.createElement("p");
    bottomText.id = "bottom-text";
    bottomText.textContent = "Make your move";

    gameScreen.appendChild(bottomText);
}

function playRound(humanChoice, computerChoice) {

    console.log(`Bot picked ${computerChoice}`);
    console.log(`user picked ${humanChoice}`);
 
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
        (humanChoice === "PAPER" && computerChoice === "ROCK") || 
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        console.log("User wins");
    }
    else if ((humanChoice === "ROCK" && computerChoice === "PAPER") || 
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") || 
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
        console.log("User loses");
    }
    else {
        console.log("It's a tie");
    }
}

startBtn.addEventListener("click", initGame);

rockBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playRound("ROCK", computerChoice);
});

paperBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playRound("PAPER", computerChoice);
});

scissorsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playRound("SCISSORS", computerChoice);
});

