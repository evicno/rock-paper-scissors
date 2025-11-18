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

function playGame() {
    humanScore = 0;
    computerScore = 0;

    

}


let humanSelection = "";
let computerSelection = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        console.log(button.id);
        playRound(button.id, getComputerChoice());
    })
})
playGame();
console.log("Final score :", humanScore, " for you, ", computerScore, " for the computer");
if (humanScore > computerScore) {
    console.log("You win!");
}
else if (humanScore < computerScore) {
    console.log("You lose!");
}
else {
    console.log("Tie game!");
}


