const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
        let computerChoice = choice[Math.floor(Math.random() * choice.length)];
        console.log(computerChoice);
        return computerChoice;
        
    
 }

function winnerCheck(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    }else if(
        (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock")
    ){
        return "player";
    }else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = winnerCheck(playerSelection, computerSelection);
    if(result === "Tie"){
        return "its tie"
    }else if(result === "player"){
        return  `you wins! ${playerSelection} beats ${computerSelection} `
    }else{
        return `computer wins ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice (){
    let validatedInput = false;
    while (validatedInput === false){
        const options = prompt("rock paper scissors")
        if(options === null){
            continue
        }
        const optionsInLower = options.toLowerCase();
        if(choice.includes(optionsInLower)){
            validatedInput = true;
            return optionsInLower;
        }
    }
    
        
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome");
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
        console.log("------------------");
        if(winnerCheck(playerSelection, computerSelection) === "player"){
            playerScore++;
        }
        else if (winnerCheck(playerSelection, computerSelection) === "computer"){
            computerScore++;
        }
    }
    console.log("Game over")
        if(playerScore > computerScore){
            console.log('player wins the game');
        }else if (playerScore < computerScore){
            console.log("computer wins the game");
        }else{
            console.log("game is tie");
        }
}



game();
    

  
