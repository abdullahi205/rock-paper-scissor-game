const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const winner = 5;
let result
const container = document.querySelector('.container')

function getComputerChoice(){
        let computerChoice = choice[Math.floor(Math.random() * choice.length)];
        return computerChoice;
        
    
 }

 function playRound(playerSelection, computerSelection){
    
  if((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'rock') || (computerSelection === 'paper'&& playerSelection === 'scissors')){
    result = 'YOU WIN!'
  }else if((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper'&& playerSelection === 'rock')){
    result = 'COMPUTER WINS!'
  }else if(computerSelection === playerSelection){
    result = "IT'S A TIE"
  }

  return result
}

function game(){
 
  const buttons = document.querySelectorAll('button');
  const playerChoice = document.createElement('div')
  playerChoice.classList.add('playerchoice')
  container.appendChild(playerChoice)

  const gameResult = document.createElement('div')
  gameResult.classList.add('gameresult')
  container.appendChild(gameResult)

  const roundScore = document.createElement('div')
  roundScore.classList.add('score')
  container.appendChild(roundScore)

  const gameWinner = document.createElement('div')
  gameWinner.classList.add('winner')
  container.appendChild(gameWinner);

  buttons.forEach(button => {
    button.addEventListener('click', function(e){
      computerSelection = getComputerChoice();
      playerSelection = button.id;
      playerChoice.innerHTML = `You  <img src="images/${playerSelection}-emoji.png"> : <img src="images/${computerSelection}-emoji.png"> Computer `
      gameResult.textContent = (playRound(playerSelection, computerSelection))
      getResult()
      roundScore.textContent = `YOU: ${playerScore} COMPUTER: ${computerScore}`
      endGame()
  })
  });   
  function getResult(){
    if (result === 'YOU WIN!') {
      playerScore++;
    } else if (result === 'COMPUTER WINS!') {
      computerScore++;
    }
  }

  function endGame(){
    if(playerScore === winner){
      gameWinner.textContent = "You are genius"
      buttons.forEach(button => {
        button.disabled = true;
      })
      const reloadPage = document.createElement('button')
      reloadPage.textContent = 'Play Again'
      reloadPage.classList.add('reload-button')
      container.appendChild(reloadPage)
      reloadPage.addEventListener('click', () =>{
        location.reload()
      })
    }else if(computerScore === winner){
      gameWinner.textContent = "Have another try"
      buttons.forEach(button => {
        button.disabled = true;
      })
      const reloadPage = document.createElement('button')
      reloadPage.textContent = 'Play Again'
      reloadPage.classList.add('reload-button')
      container.appendChild(reloadPage)
      reloadPage.addEventListener('click', () =>{
        location.reload()
      })
    }
  }
}



game();
    