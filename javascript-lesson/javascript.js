const computerChoiceDisplay = document.getElementById('Computer-choice')
const playerChoice = document.getElementById('Player-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('button')
let playerscoredisplay = document.getElementById('playerscoredisplay')
let computerscoredisplay = document.getElementById('computerscoredisplay')


let userChoice
let computerChoice
let result
let playerscore = 0;
let computerscore = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    scorecounter()
    winner()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win the round!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'computer wins the round!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors" ) {
        result = 'you win the round!'
    }

    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'computer wins the round!'
    }

    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win the round!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'computer wins the round!'
    }
    resultDisplay.innerHTML = result
}

    function scorecounter() {
        if (result === "you win the round!") {
            playerscore++;
        } else if (result === "computer wins the round!") {
            computerscore++;
        }
        console.log(playerscore);
        console.log(computerscore);

        playerscoredisplay.innerHTML = playerscore
        computerscoredisplay.innerHTML = computerscore
    }

    function winner() {
        if (playerscore === 5 ) {
            console.log("You Win!")
            playerscore = 0;
            computerscore = 0;
        } else if (computerscore === 5) {
            console.log("Computer Wins!")
            playerscore = 0;
            computerscore = 0;
        }
    }