function playGame()
{
    let roundCount = 2, humanScore = 0, computerScore = 0; // WHY 2?????

    // getting the reference for each button from HTML file
    const btn = document.querySelectorAll("button");
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    
    // function when rock button is clicked
    rockBtn.addEventListener("click", () => {
        playRound("ROCK");
    });

    // function when paper button is clicked
    paperBtn.addEventListener("click", () => {
        playRound("PAPER");
    });

    // function when scissors button is clicked
    scissorsBtn.addEventListener("click", () => {
        playRound("SCISSORS");
    });

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

    function playRound(humanChoice)
    {
        let computerChoice = getComputerChoice();
        
        // Console
        console.log(`ROUND ${roundCount}`);
        console.log(`User current score: ${humanScore}`);
        console.log(`Computer current score: ${computerScore}`);
        console.log("\n");

        // Interface
        const roundIndicator = document.querySelector("#round-indicator");
        const gameScreen = document.querySelector("#game-screen");
        const upperText = document.querySelector("#upper-text");
        const bottomText = document.querySelector("#bottom-text");
        const userScore = document.querySelector("#user-score");
        const botScore = document.querySelector("#bot-score");

        roundIndicator.textContent = `Round ${roundCount}`;
        upperText.textContent = `Bot chose ${computerChoice}`;

        // Human Wins Scenario
        if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
            (humanChoice === "PAPER" && computerChoice === "ROCK") || 
            (humanChoice === "SCISSORS" && computerChoice === "PAPER"))
        {
            // Console
            console.log("User wins");
            // Game Screen
            humanScore++;
            bottomText.textContent = "You win!";
            userScore.textContent = `Your Score: ${humanScore}/5`;
        }
        else if ((humanChoice === "ROCK" && computerChoice === "PAPER") || 
                (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
                (humanChoice === "SCISSORS" && computerChoice === "ROCK"))
        {
            // Console
            console.log("User loses");
            // Game Screen
            computerScore++;
            bottomText.textContent = "You lose!";
            botScore.textContent = `Bot's Score: ${computerScore}/5`;
        }
        else
        {
            console.log("Tie");
            bottomText.textContent = "It's a tie!";
        }

        console.log("\n");
        roundCount++;

        if (humanScore === 5 || computerScore === 5)
        {
            if (humanScore > computerScore)
            {
                console.log("User wins the game");
                upperText.textContent = `YOU WIN THE GAME!`;
                bottomText.textContent = "Pick a move to start another round.";
            }
            else if (computerScore > humanScore)
            {
                console.log("User loses the game");
                upperText.textContent = `YOU LOSE THE GAME!`;
                bottomText.textContent = "Pick a move to start another round.";
            }
            else
            {
                console.log("It's a tie!");
                upperText.textContent = `IT'S A TIE!`;
                bottomText.textContent = "Pick a move to start another round.";
            }

            roundCount = 1;
            humanScore = 0;
            computerScore = 0;
            userScore.textContent = `Your Score: ${humanScore}/5`;
            botScore.textContent = `Bot's Score: ${computerScore}/5`;
        }
    }
}

playGame();