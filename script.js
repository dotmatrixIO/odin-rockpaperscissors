playerscore = 0;
computerscore = 0

/* Add div to keep track of running total */
const results = document.querySelector('#results');
const content = document.createElement('div');
content.classList.add('content');


/* Allow buttons to run a new game */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {

    game();

  });
});


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
    

    /* conditions for the game's result */  
    if (playerSelection == 'rock' & computerSelection == 'Rock')
    {
        content.textContent = 'Draw! Both players chooose Rock!';
        results.appendChild(content);
        
    }
        
     
    else if (playerSelection == 'paper' & computerSelection == 'Rock')
    {
        content.textContent = 'You win! Paper beats Rock';
        results.appendChild(content);
        playerscore ++;
        
        /* update score */
        document.getElementById("p1").innerHTML = ("Player score: " + playerscore);
    }
    
    else if (playerSelection == 'scissors' & computerSelection == 'Rock')
    {
        content.textContent = 'You lose! Rock beats Scissors!';
        results.appendChild(content);
        computerscore ++;

        /* update score */
        document.getElementById("p2").innerHTML = ("Computer score: " + computerscore);
    }


    else if (playerSelection == 'rock' & computerSelection == 'Paper')
    {
        content.textContent = 'You lose! Paper beats rock!';
        results.appendChild(content);
        computerscore ++;

        /* update score */
        document.getElementById("p2").innerHTML = ("Computer score: " + computerscore);
    }
        
    
    else if (playerSelection == 'paper' & computerSelection == 'Paper')
    {
        content.textContent = "Draw! Both players choose paper!";
        results.appendChild(content);
    }

    
    else if (playerSelection == 'scissors' & computerSelection == 'Paper')
    {
        content.textContent = "You win! Scissors beats Paper!";
        results.appendChild(content);
        playerscore ++;

        /* update score */
        document.getElementById("p1").innerHTML = ("Player score: " + playerscore);
    }

    
    else if (playerSelection == 'rock' & computerSelection == 'Scissors')
    {
        content.textContent = "You win! Rock beats Scissors!";
        results.appendChild(content);
        playerscore ++;

        /* update score */
        document.getElementById("p1").innerHTML = ("Player score: " + playerscore);
    }

    
    else if (playerSelection == 'paper' & computerSelection == 'Scissors')
    {
        content.textContent = "You lose! Scissors beats Paper!";
        results.appendChild(content);
        computerscore ++;

        /* update score */
        document.getElementById("p2").innerHTML = ("Computer score: " + computerscore);
    }


    else if (playerSelection == 'scissors' & computerSelection == 'Scissors')
    {
        content.textContent = "Draw! Both players choose paper!";
        results.appendChild(content);
    }


}

/* function to run the game - call this in the while loop in index.html */ 
function game()
{
  
    let ask = prompt("Type Rock, Paper or Scissors")
    playerInput = ask.toString()

    /* allow for case-insensitive player input */
    playerChoice = playerInput.toLowerCase()

    playRound(playerChoice, getComputerChoice)


    if (playerscore == 5 || computerscore == 5)
    {
        alert("You win!")
    }

    else if (computerscore == 5)
    {
        alert("You lose :(")
    }

}




