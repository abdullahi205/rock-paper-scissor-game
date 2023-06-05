# rock-paper-scissor-game

1. What I learnt in this project 
---------
- how get computer random with arrays 
- get input from user and compare against computer choice 
- how to display results each round 
- there is no one way of coming to solution.
- i understood what functions and variables  were put i didnt know how they worked together as one 

code i learnt how to 
- 
```javascript
    // get random choice
     function getComputerChoice(){
        let choice = ['rock', 'paper', 'scissors'];
        let randomChoice = choice[Math.floor(Math.random() * 3)];
        return randomChoice;
    }
    //display score
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

```


2. over all 
----
- the project was rock paper scissors player against computer 5 rounds and display winner each round. and game is played on console the first version. I got stuck most time figuring what i want to dispay javascript and i learnt alot from this project.


3. My process 
----
- I created one function which can call to play mutiple rounds and nested everything else inside it
- i asked player input 
- created function produce random choice between rock, paper and scissors
- the determine winner of each round 
- display winner of each rounds 
- display the score 
- call first function 5 times .