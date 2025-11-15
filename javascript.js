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
    console.log(humanChoice);
}

