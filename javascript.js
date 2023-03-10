/* Rock Paper Scissor Script */



// randomly generate computer's selection
function getComputerChoice(){
    return computerSelection;
}

// prompt user's choice
function getUserChoice(){
    return userChoice;
}

// check user against computer
function compare(playerSelection, computerSelection){
    var isPlayerWin = false;
    var winMsg = "You win!" + playerSelection + " beats " + computerSelection;
    var losMsg = "You lose!" + computerSelection + " beats " + playerSelection;
    // if player is rock 
        // if computer is scissor
            // player win
        // else
            // player lose

    // if player is scissor
        // if computer is paper
            // player win
        // else
            // player lose

    // if player is paper
        // if computer is rock
            // player win
        // else
            // player lose
}


// start a round, taking in player and computer's choices
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice;
    return compare(playerSelection,computerSelection);
}

// have multiple rounds
function game(){
    for (let i = 0; i < 5; i++) {
        //playRound(playerSelection, computerSelection)
     }
}



