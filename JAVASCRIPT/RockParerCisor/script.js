const choices = ["rock","paper","scissors"]
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDIsplay = document.getElementById('resultDIsplay')
const playerScoreDisplay = document.getElementById('playerScoreDisplay')
const computerScoreDisplay = document.getElementById('computerScoreDisplay')

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)]
    let result = ""
    if(playerChoice === computerChoice){
        result = "IT'S A TIE !"
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN!" : "YOU LOSE"
                break
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!" : "YOU LOSE"
                break
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN!" : "YOU LOSE"
                break
             }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer : ${computerChoice}`
    resultDIsplay.textContent = result

    resultDIsplay.classList.remove("greenText","redText")


    switch(result){
        case "You WIN!":
            resultDIsplay.classList.add('greenText')
            playerScore++
            playerScoreDisplay.textContent = playerScore
            break
        case "YOU LOSE":
            resultDIsplay.classList.add('redText')
            computerScore++
            computerScoreDisplay.textContent = computerScore
            break 
        }
}