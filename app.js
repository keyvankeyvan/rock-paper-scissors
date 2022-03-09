const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');

// Selects all buttons
const possibleChoices = document.querySelectorAll('button');

// This will be the string of the id of button
let userChoice;

//for each button we add a event listener looking for event (e) ('click')
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    computerChoice = generateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;

    if (userChoice === 'rock' && computerChoice === 'paper'){
        resultDisplay.innerHTML = 'You lose.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors'){
        resultDisplay.innerHTML = 'You lose.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        resultDisplay.innerHTML = 'You lose.';
    } else if (userChoice === computerChoice){
        resultDisplay.innerHTML = 'Tie!';
    } else{
        resultDisplay.innerHTML = 'You win!';
    }
}));

function generateComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    // Returns a string at random index ([0] or [1] or [2]) in array above 
    return options[Math.floor(Math.random() * options.length)];
}