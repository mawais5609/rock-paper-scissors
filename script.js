function playGame() {
    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3)

        if (randomNumber === 0) return "rock"
        if (randomNumber === 1) return "paper"
        if (randomNumber === 2) return "scissors"
    }

    function getHumanChoice() {
        return prompt("Enter your choice: rock, paper, scissors").toLowerCase()
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Its a tie! Both choices are same ${humanChoice}`)
            return
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++
            console.log(`You Win! ${humanChoice} beats ${computerChoice} --- YourScore:${humanScore} - ComputerScore:${computerScore}`)
        } else {
            computerScore++
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} --- YourScore:${humanScore} - ComputerScore:${computerScore}`)
        }

    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        alert(`You win! YourScore:${humanScore} --- ComputerScore:${computerScore}`)
    } else {
        alert(`You Lose! YourScore:${humanScore} --- ComputerScore:${computerScore}`)
    }
}

playGame()