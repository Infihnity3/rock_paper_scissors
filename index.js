function computerPlay(){
    const random = Math.floor(Math.random() * 3)
    switch(random){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
    
//Another type to get the same results
    // if (random === 1){
    //     return "Rock";
    // } else if (random === 2){
    //     return "Paper";
    // } else if (random === 3){
    //     return "Scisors";
    // }
}

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();
    // let cs = computerSelection.toLowerCase();
    // let ps = playerSelection
    let cs = computerSelection
    if (ps === "rock" && cs === "Scissors") {
        return "You Win!!! Rock beats Scissors";
    } else if (ps === "paper" && cs === "Rock") {
        return "You Win!!! Paper beats Rock";
    } else if (ps === "scissors" && cs === "Paper") {
        return "You Win!!! Scissors beats Paper"
    } else if (ps === "rock" && cs === "Paper") {
        return "You Lose!!! Paper beats Rocks";
    } else if (ps === "paper" && cs === "Scissors") {
        return "You Lose!!! Scissors beats Paper";
    } else if (ps === "scissors" && cs === "Rock") {
        return "You Lose!!! Rock beats Scissors";
    } else {
        return "It's a draw!!! " + ps + " and " + cs + " is a draw.";
    }
}
const playerInput = window.prompt("Choose between Rock, Paper and Scissors")
// const computerInput = computerPlay();


//console.log(computerPlay());

function game(){
    for (let i = 0; i < 5; i++){
    console.log(playRound(playerInput, computerPlay()))
    };
}

game()