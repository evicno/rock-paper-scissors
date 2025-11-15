function getComputerChoice (){
    computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;    
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, paper or scissors? ");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Play again.");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            console.log("You lose! Paper beats Rock.");
        }
        else { // computerChoice == "scissors"
            humanScore ++;
            console.log("You win! Rock beats Scissors.");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore ++;
            console.log("You win! Paper beats Rock.");
        }
        else { // computerChoice == "scissors"
            computerScore ++;
            console.log("You lose! Scissors beat Paper.");
        }
    }
    else { // humanChoice === "scissors"
        if (computerChoice === "paper") {
            humanScore ++;
            console.log("You win! Scissors beat Paper.");
        }
        else {  // computerChoice == "rock" 
            computerScore ++;
            console.log("You lose! Rock beats Scissors.");
        }
}
}

humanScore = 0;
computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);