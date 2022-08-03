// choose between those three choices
const choices = ['rock', 'paper', 'scissors']
const winners = []// empty array for the winner output!!
// function


function game(){
	
	// play the game 
	// play five rounds
	// console based
	
	for (let i = 1; i <= 5; i++){
		
		playRound(i);
	
	}
	document.querySelector('button').textContent = "Play New Game";
	
	logWins();

	
}




function playRound(round){
	// you code goes here!!
	const playerSelection = playerChoice();
	const computerSelection = computerChoice();
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner);
	logRound(playerSelection, computerSelection, winner, round);
 
	
}



function playerChoice() {
	// get input from player 
	let input = prompt("Type Rock, Paper or Scissors: ");

	while (input == null) {
		input = prompt("Type Rock, Paper or Scissors: ");
	}
	
	input = input.toLowerCase();
	let check = validateInput(input);
	
	while (check === false) {
		input = prompt(" Type Rock Paper Scissors, spelling needs to be exact, but capitalisation doesn't matter ");
	};
	while (input === null) {
		input = prompt("Type Rock, Paper or Scissors: ");
	}
	
	input = input.toLowerCase();
	check = validateInput(input);
	

return input;

}



// computer choice
function computerChoice(){
	return choices[Math.floor(Math.random() * choices.length)]
}
function validateInput(choice) {
	
	return choices.includes(choice);
		
}

function checkWinner(choiceP, choiceC){
	
	if (choiceP === "rock" && choiceC === "scissors"){
		return "Tie";
	} else if ((choiceP === "rock" && choiceC === "scissors") || (choiceP === "paper" && choiceC === "rock") || (choiceP === "scissors" && choiceC === "paper") ) {
		return "player";
	} else {
		return "computer";
	}
	
}

function logWins() {
	
	let playerWins = winners.filter((item) => item == "Player").length;
	let computerWins = winners.filter((item) => item == "Computer").length;
	let ties = winners.filter((item) => item == "Tie").length;
	
	console.log('Results:');
	console.log('Player wins:', playerWins);
	console.log('Computer Wins:',computerWins);
	console.log('Ties:', ties);
}
function logRound(playerChoice, computerChoice, winner, round){
	console.log('Round:', round);
	console.log('Player Choose:', playerChoice);
	console.log('Computer Choose:', computerChoice);
	console.log(winner, 'Won the round!');
	console.log('----------------------------')
	
	
}
