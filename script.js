/* function to return either rock, paper or scissors */
function getComputerChoice()
{

    /* assign a random integer to each choice */
    a = Math.floor((Math.random() * 3))

    if (a == 0)
    return ('Rock')

    else if (a == 1)
    return ('Paper')

    else if (a == 2)
    return ('Scissors')

}


/* function to play a round of the game */ 
function playRound(playerSelection, computerSelection)
{

    /* call function for computer choice */
    computerSelection = getComputerChoice()

    /* allow case-insensitive user input */
    playerSelection.toLowerCase()
    

    /* conditions for the game's result */  // is this counting all rock selections at once???? */
    if (playerSelection == 'rock' & computerSelection == 'Rock')
        result = "Draw! Both players choose Rock!"
        
     
    if (playerSelection == 'paper' & computerSelection == 'Rock')
        result = "You win! Paper beats Rock!"
  
    
    if (playerSelection == 'scissors' & computerSelection == 'Rock')
        result = "You lose! Rock beats Scissors!"



    if (playerSelection == 'rock' & computerSelection == 'Paper')
        result = "You lose! Paper beats Rock!"
        
    
    if (playerSelection == 'paper' & computerSelection == 'Paper')
        result = "Draw! Both players choose paper!"

    
    if (playerSelection == 'scissors' & computerSelection == 'Paper')
        result = "You win! Scissors beats Paper!"



    
    if (playerSelection == 'rock' & computerSelection == 'Scissors')
        result = "You win! Rock beats Scissors!"

    
    if (playerSelection == 'paper' & computerSelection == 'Scissors')
        result = "You lose! Scissors beats Paper!"


    if (playerSelection == 'scissors' & computerSelection == 'Scissors')
        result = "Draw! Both players choose paper!"

}

/* function to run the game - call this in the while loop in index.html */ 
function game()
{

    /* allow for case-insensitive player input */
    playerChoice = playerInput.toLowerCase()

    playRound(playerChoice, getComputerChoice)
    console.log(result)

}
