/* Rock Paper Scissor Script */



// randomly generate computer's selection
function getComputerChoice(){
    var computerSelection;
    var randomNum = Math.random();
    if (randomNum < 0.33){
        computerSelection = "rock"
    } else if (randomNum < 0.66){
        computerSelection = "paper"
    } else {
        computerSelection = "scissor"
    }
    return computerSelection;
}

// prompt user's choice
function getUserChoice(){
    var userChoice = prompt("Please enter your Selection:")
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

// check user against computer
function compare(playerSelection, computerSelection){
    var isPlayerWin = false;
    var winMsg = "You win!" + playerSelection + " beats " + computerSelection;
    var losMsg = "You lose!" + computerSelection + " beats " + playerSelection;
    var tieMsg = "It's a tie!";
 

    if (playerSelection === computerSelection){
        return tieMsg;
    }

    if (playerSelection === "rock"){
        if(computerSelection === "scissor"){
            isPlayerWin = true;
        } else{
            isPlayerWin = false;
        }
    } else if (playerSelection === "scissor"){
        if(computerSelection === "paper"){
            isPlayerWin = true;
        } else{
            isPlayerWin = false;
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            isPlayerWin = true;
        } else{
            isPlayerWin = false;
        }
    } 

       
    if (isPlayerWin === true){
        return winMsg;
    } else{
        return losMsg;
    }
}


// start a round, taking in player and computer's choices
function playRound(){
    var computerSelection = getComputerChoice();
    var playerSelection = getUserChoice();
    return compare(playerSelection,computerSelection);
}

// have multiple rounds
function game(){
    for (let i = 0; i < 5; i++) {
        alert(playRound());
     }
}

game();

