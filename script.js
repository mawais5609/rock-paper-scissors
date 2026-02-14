function playGame() {
    const buttons = document.querySelectorAll(".buttons > button")
    const results = document.querySelector(".results")

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const targetValue = event.target.getAttribute("class")
            playRound(targetValue, getComputerChoice())
        })
    })


    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3)

        if (randomNumber === 0) return "rock"
        if (randomNumber === 1) return "paper"
        if (randomNumber === 2) return "scissors"
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            results.textContent = ""
            results.textContent = `Its a tie! Both choices are same ${humanChoice}`
            return
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++
            results.textContent = ""
            results.textContent = `You Win! ${humanChoice} beats ${computerChoice} --- 
                                    YourScore:${humanScore} - ComputerScore:${computerScore}`
        } else {
            computerScore++
            results.textContent = ""
            results.textContent = `You Lose! ${computerChoice} beats ${humanChoice} --- 
                                    YourScore:${humanScore} - ComputerScore:${computerScore}`
        }

        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "You Wins!" : "Computer Wins!"
            results.textContent = ""
            results.textContent = `${winner} --- YourScore:${humanScore} - ComputerScore:${computerScore}`
            humanScore = 0
            computerScore = 0
        }

    }
}

playGame()