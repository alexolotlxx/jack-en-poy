function playGame()
{
    let roundCount = 2, humanScore = 0, computerScore = 0; // WHY 2?????

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
            userScore.textContent = `Your Score: ${humanScore}`;
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
            botScore.textContent = `Bot's Score: ${computerScore}`;
        }
        else
        {
            console.log("Tie");
            bottomText.textContent = "It's a tie!";
        }

        console.log("\n");
        roundCount++;
    }

    // getting the reference for each button from HTML file
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

}

playGame();