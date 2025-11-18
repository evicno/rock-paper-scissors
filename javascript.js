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
        roundResult.textContent = "Tie! Play again.";
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            roundResult.textContent = "You lose! Paper beats Rock.";
        }
        else { // computerChoice == "scissors"
            humanScore ++;
            roundResult.textContent = "You win! Rock beats Scissors.";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore ++;
            roundResult.textContent = "You win! Paper beats Rock.";
        }
        else { // computerChoice == "scissors"
            computerScore ++;
            roundResult.textContent = "You lose! Scissors beats Paper.";
        }
    }
    else { // humanChoice === "scissors"
        if (computerChoice === "paper") {
            humanScore ++;
            roundResult.textContent = "You win! Scissors beat Paper.";
        }
        else {  // computerChoice == "rock" 
            computerScore ++;
            roundResult.textContent = "You lose! Rock beats Scissors.";
        }
}
}

function displayWinner() {
    const score = document.querySelector("#score");
    score.textContent = "Final score : " + humanScore + " for you, " + computerScore + " for the computer";
    const result = document.createElement("p");
    score.appendChild(result);
    if (humanScore > computerScore) {
        result.textContent = "You win!";
    }
    else {
        result.textContent = "You lose!";
    }
}

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round_result");
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {  
        console.log(button.id);
        playRound(button.id, getComputerChoice());
        if (humanScore == 5 || computerScore == 5) {
            displayWinner();
        }  
    })
})



    
    


