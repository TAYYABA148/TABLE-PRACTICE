
const choices = ['rock', 'paper', 'scissors'];

const userChoiceElem = document.getElementById('userChoice');
const computerChoiceElem = document.getElementById('computerChoice');
const resultElem = document.getElementById('result');

// Function to generate computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}