
const kps = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    let listIndex = Math.floor(Math.random() * 3)
    return kps[listIndex]
}

function decideWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw! Go again!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
}

function playRound(playerSelection, computerSelection) {
    return decideWinner(playerSelection,computerSelection)
}

function game() {
    let playerSelection = ""
    let computerSelection = ""
    let playerW = 0
    let computerW = 0

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}. Fight!`)
        playerSelection = prompt("Rock, Paper or Scissors?")
        playerSelection = playerSelection.toLowerCase()
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

        while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
            playerSelection = prompt("Check your spelling... Rock, Paper or Scissors?")
            playerSelection = playerSelection.toLowerCase()
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        }

        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)

        if (result.includes("Draw")) {
            console.log(result)
            continue;
        }
        else if (result.includes("win")) {
            playerW+=1
        }
        else {
            computerW+=1
        }
        console.log(result)
    }

    if (playerW > computerW) {
        return `You won! Result ${playerW}-${computerW}.`
    }
    else if (computerW > playerW) {
        return `You lost! Result ${computerW}-${playerW}.`
    }
    else {
        return `Draw! Result ${playerW}-${computerW}.`
    }
}

console.log(game())