
const kps = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    listIndex = Math.floor(Math.random() * 3)
    return kps[listIndex]
}
