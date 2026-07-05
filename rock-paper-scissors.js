function playGame()
{
    let count = 1, humanScore = 0, computerScore = 0;

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

    function getHumanChoice()
    {
        let choice = prompt(`ROUND ${count}\nEnter your move:`);
        return choice.toUpperCase()
    }

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === "ROCK" && computerChoice === "SCISSORS")
        {
            console.log("You win!");
            humanScore++;
        }
        else if (humanChoice === "ROCK" && computerChoice === "PAPER")
        {
            console.log("You lose!");
            computerScore++;
        }
        else if (humanChoice === "PAPER" && computerChoice === "ROCK")
        {
            console.log("You win!");
            humanScore++;
        }
        else if (humanChoice === "PAPER" && computerChoice === "SCISSORS")
        {
            console.log("You lose!");
            computerScore++;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        {
            console.log("You win!");
            humanScore++;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "ROCK")
        {
            console.log("You lose!");
            computerScore++;
        }
        else
        {
            console.log("It's a tie!");
        }
    }

    // MAIN GAME
    while (count <= 5)
    {
        console.log(`ROUND ${count}`);

        // Display current scores
        console.log(`Your current score: ${humanScore}`);
        console.log(`Computer's current score: ${computerScore}`);
        console.log("\n");

        // Human picks a move
        const humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection}`);

        // Computer picks a move
        const computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}`);

        // Compares the results
        playRound(humanSelection, computerSelection);
        console.log("\n");

        // Updates the round
        count++;
    }

    // Compares final scores
    if (humanScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore)
    {
        console.log("You lose the game! You suck!");
    }
    else
    {
        console.log("It's a tie!");
    }

    // Displays final scores
    console.log(`Your final score: ${humanScore}`);
    console.log(`Computer's final score: ${computerScore}`);
}

playGame();