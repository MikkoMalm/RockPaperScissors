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

    //change images based on chosen weapons

    if (playerSelection == "Rock") {
        document.getElementsByClassName("playerHand")[0].innerHTML = "<img src='./resources/rock.png' alt='Fist emoji (as a rock)'>";
    }
    if (playerSelection == "Paper") {
        document.getElementsByClassName("playerHand")[0].innerHTML = "<img src='./resources/paper.png' alt='Open hand emoji (as paper)'>";
    }
    if (playerSelection == "Scissors") {
        document.getElementsByClassName("playerHand")[0].innerHTML = "<img src='./resources/scissors.png' alt='Peace sign hand (as scissors)'>";
    }

    if (computerSelection == "Rock") {
        document.getElementsByClassName("computerHand")[0].innerHTML = "<img src='./resources/rock.png' alt='Fist emoji (as a rock)'>";
    }

    if (computerSelection == "Paper") {
        document.getElementsByClassName("computerHand")[0].innerHTML = "<img src='./resources/paper.png' alt='Open hand emoji (as paper)'>";
    }

    if (computerSelection == "Scissors") {
        document.getElementsByClassName("computerHand")[0].innerHTML = "<img src='./resources/scissors.png' alt='Peace sign hand (as scissors)'>";
    }

    //change result
     
    if (playerSelection == computerSelection) {   
        document.getElementsByClassName("results")[0].textContent = "Draw!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerW+=1
        document.getElementsByClassName("score")[0].textContent = `${playerW} - ${computerW}`
        document.getElementsByClassName("results")[0].textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerW+=1
        document.getElementsByClassName("score")[0].textContent = `${playerW} - ${computerW}`
        document.getElementsByClassName("results")[0].textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerW+=1
        document.getElementsByClassName("score")[0].textContent = `${playerW} - ${computerW}`
        document.getElementsByClassName("results")[0].textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        playerW+=1
        document.getElementsByClassName("score")[0].textContent = `${playerW} - ${computerW}`
        document.getElementsByClassName("results")[0].textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

//Plays one round
function playRound(playerSelection, computerSelection) {
    decideWinner(playerSelection,computerSelection);
}

function game() {
    document.addEventListener("click", function (e) {
        parent = e.target.parentElement;
        if (parent.className == "Rock" || parent.className == "Paper" || parent.className == "Scissors") {
            playerSelection = parent.className
            playRound(playerSelection, computerPlay())
        }
    });
}

game()