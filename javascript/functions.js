//score
let playerW = 0
let computerW = 0

//Array of choices
const kps = ["Rock", "Paper", "Scissors"]

//Decides computers 'hand'
function computerPlay() {
    let listIndex = Math.floor(Math.random() * 3)
    return kps[listIndex];
}

//Decides winner
function decideWinner(playerSelection, computerSelection) {
    console.log("tulee tänne asti, sit pitäs muuttaa arvoja")
    console.log(document.getElementsByClassName("results")[0]);
    //okei tää löytää sit vaa muutetaan tota resultin tekstii alkuun sit vilkuillaan pelin päättäminen
    if (playerSelection == computerSelection) {   
        return "Draw";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerW+=1
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerW+=1
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerW+=1
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        playerW+=1
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

//Plays one round
function playRound(playerSelection, computerSelection) {
    decideWinner(playerSelection,computerSelection);
}

//Checks if game is over
function isGameOver () {
    if (playerW == 5 || computerW == 5) {
        return true;
    }
}

function game(playerSelection) {
    playRound(playerSelection, computerPlay())
}

document.addEventListener("click", function (e) {
        parent = e.target.parentElement;
        //tee tähän check onks se rock paper tai scissors ettei ota buttonia
        game(parent.className)
});