
const kps = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    listIndex = Math.floor(Math.random() * 3)
    return kps[listIndex]
}

function decideWinner(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = "rOCK"  //this needs a prompt i think
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    computerSelection = "Paper" //testing
    decideWinner(playerSelection,computerSelection)
}

console.log(playRound())