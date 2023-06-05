
function playGame(){
    // get player input
    const playerChoice = prompt('choose rock or paper or scissors').toLowerCase();


    // get computer choice
    function getComputerChoice(){
        let choice = ['rock', 'paper', 'scissors'];
        let randomChoice = choice[Math.floor(Math.random() * 3)];
        return randomChoice;
        
    
    }
    const computerSelection = getComputerChoice();
    // determine the winner
    let winner;
    if(playerChoice == computerSelection){
        winner = 'it is tie';
     }else if (playerChoice == 'rock' && computerSelection == 'paper'){
        winner = 'computer wins'
    }else if(playerChoice == 'paper' && computerSelection == 'rock'){
        winner = 'player wins';
    }else if(playerChoice == 'rock' && computerSelection == 'scissors'){
        winner = 'player wins';
    }else if(playerChoice == 'scissors' && computerSelection == 'rock'){
        winner = 'computer wins';
    }else if(playerChoice == 'paper' && computerSelection == 'scissors'){
        winner = 'computer wins';
    }else if(playerChoice == 'scissors' && computerSelection == 'paper'){
        winner = 'player wins';
    }

    // display each round winner
    console.log('playerChoice: ' + playerChoice);
    console.log('computerSelection: ' + computerSelection);
    console.log(winner);
    //display game winner
    let rounds = 0;
    let playerwins = 0;
    let computerwins = 0;
    if(winner === 'player wins'){
        playerwins++;
    }else if(winner === 'computer wins'){
        computerwins++;
    }
    rounds++;
    console.log('thanks for playing');
    console.log('rounds: ' + rounds);
    console.log('player result: ' + playerwins);
    console.log('computer result: ' + computerwins);
}
playGame();
playGame();
playGame();
playGame();
playGame();