//Warning this code kinda sucks but it works so dont complain pls it hurts my feelings
let playerChoice = "";
let result = "";
let wins = 0;
let losses = 0;
let matches = 0;
let counter = 0;
var opponent = "Random"
let selection = ["rock", "paper", "scissors"];
function randomizeAction(){
		let randValue = Math.floor(Math.random()*13);
		if (randValue < 3){
			counter += 2
		} else if (randValue == 3){
			counter = counter - 2;
		} else if (randValue > 3 && randValue <= 7){
			counter += 1 
		} else if (randValue == 8){
			counter = counter - 3;
		} else if (randValue > 8 && randValue < 10){
			counter = counter -1;
		} else if (randValue >=10 && randValue <12){
			counter = counter - 3;
		} else {
			counter = 0;
		}
		return counter;
	}
function chooseSteven(){
	opponent = "Steven";
	alert("Chose Steven")
	document.getElementById("currentOpponent").innerHTML = "Current opponent is: Steven";
}
function chooseRandom(){
	opponent = "Random"
	alert("Chose Random")
	document.getElementById("currentOpponent").innerHTML = "Current opponent is: Random";
}
function chooseNormal(){
	opponent = "Normal";
	alert("Chose Normal")
	document.getElementById("currentOpponent").innerHTML = "Current opponent is: Normal";
}
function stevenBrain(){
	if (playerChoice == "rock"){
		computerChoice = "paper";
	} else if (playerChoice == "paper"){
		computerChoice = "scissors";
	} else if (playerChoice == "scissors"){
		computerChoice = "rock";
	}
	return computerChoice;
}
function inverseSteven(){
	if (playerChoice == "rock"){
		computerChoice = "scissors";
	} else if (playerChoice == "paper"){
		computerChoice = "rock";
	} else if (playerChoice == "scissors"){
		computerChoice = "paper";
	}
	return computerChoice;
}
function normalBrain(){
	let playerName = document.getElementById('pname').value;
	if (playerName == ""){
		playerName = "Player"
	}
	counter = randomizeAction();
if (counter <= 0){
	computerChoice = selection[Math.floor(Math.random()*selection.length)];
}else if (counter == 1){
	computerChoice = playerChoice;
	alert("The computer chooses a tie");
}else if (counter > 1 && counter <= 3){
	if (wins > losses){
		alert(playerName + ", is winning so far!");
		alert("Not for long I hope");
		computerChoice = stevenBrain();
	} else if (wins == losses){
		alert("You are tied...");
		alert("Let's let luck decide then");
		computerChoice = selection[Math.floor(Math.random()*selection.length)];
	} else {
		alert("The Computer is winning so far...")
		alert("Steven takes pity on you and rewards you!")
		computerChoice = inverseSteven();
	}
}else if (counter >3 && counter <=5){
	computerChoice = stevenBrain();
} else if (counter == 6){
	computerChoice = "rock"
} else if (counter == 7){
	computerChoice = "paper";
} else if (counter == 8){
	computerChoice = "scissors";
}
return computerChoice;
}
function rockPaperScissorsRandom(){
	let playerName = document.getElementById('pname').value;
	if (playerName == ""){
		playerName = "Player"
	}
	let selection = ["rock", "paper", "scissors"];
	document.getElementById("cpuChoice").innerHTML = "";
	let computerChoice = selection[Math.floor(Math.random()*selection.length)];
	document.getElementById("cpuChoice").innerHTML = "The computer chooses " + computerChoice;
	document.getElementById("userChoice").innerHTML = playerName + " chooses " + playerChoice;
	document.getElementById("gameResult").innerHTML = "";
	setTimeout(function game(){
	if (playerChoice == computerChoice){
		matches +=1;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "It's a tie!";
		document.getElementById("gameResult").innerHTML = result;
	}else if (playerChoice == "rock" && computerChoice == "paper"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "rock" && computerChoice == "scissors"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "paper" && computerChoice == "scissors"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "paper" && computerChoice == "rock"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "scissors" && computerChoice == "paper"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "scissors" && computerChoice == "rock"){
		matches +=1;
		losses +=1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}
	},700);
};
function rockPaperScissorsSteven(){
	let playerName = document.getElementById('pname').value;
	if (playerName == ""){
		playerName = "Player"
	}
	let selection = ["rock", "paper", "scissors"];
	let computerChoice = "";
	document.getElementById("cpuChoice").innerHTML = "";
	if (counter <= 10){
	computerChoice = selection[Math.floor(Math.random()*selection.length)];
	counter += 1;
} else {
	computerChoice = stevenBrain();
	}
	document.getElementById("cpuChoice").innerHTML = "The computer chooses " + computerChoice;
	document.getElementById("userChoice").innerHTML = playerName + " chooses " + playerChoice;
	document.getElementById("gameResult").innerHTML = "";
	setTimeout(function game(){
	if (playerChoice == computerChoice){
		matches +=1;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "It's a tie!";
		document.getElementById("gameResult").innerHTML = result;
	}else if (playerChoice == "rock" && computerChoice == "paper"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "rock" && computerChoice == "scissors"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "paper" && computerChoice == "scissors"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "paper" && computerChoice == "rock"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "scissors" && computerChoice == "paper"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "scissors" && computerChoice == "rock"){
		matches +=1;
		losses +=1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}
	},700);
};
function rockPaperScissorsNormal(){
	let playerName = document.getElementById('pname').value;
	if (playerName == ""){
		playerName = "Player"
	}
	let selection = ["rock", "paper", "scissors"];
	let computerChoice = "";
	document.getElementById("cpuChoice").innerHTML = "";
	computerChoice = normalBrain();
	document.getElementById("cpuChoice").innerHTML = "The computer chooses " + computerChoice;
	document.getElementById("userChoice").innerHTML = playerName + " chooses " + playerChoice;
	document.getElementById("gameResult").innerHTML = "";
	setTimeout(function game(){
	if (playerChoice == computerChoice){
		matches +=1;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "It's a tie!";
		document.getElementById("gameResult").innerHTML = result;
	}else if (playerChoice == "rock" && computerChoice == "paper"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "rock" && computerChoice == "scissors"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "paper" && computerChoice == "scissors"){
		matches +=1;
		losses += 1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "paper" && computerChoice == "rock"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}else if(playerChoice == "scissors" && computerChoice == "paper"){
		matches +=1;
		wins += 1;
		document.getElementById("playerWins").innerHTML = "Wins " + wins;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = playerName + " Wins!";
		document.getElementById("gameResult").innerHTML = result;
	} else if (playerChoice == "scissors" && computerChoice == "rock"){
		matches +=1;
		losses +=1;
		document.getElementById("playerLosses").innerHTML = "Losses " + losses;
		document.getElementById("matchesPlayed").innerHTML = "Matches Played " + matches;
		result = "The Computer Wins!";
		document.getElementById("gameResult").innerHTML = result;
	}
	},700);
};
function playGame(){
	if (opponent == "Random"){
		rockPaperScissorsRandom();
	} else if (opponent == "Steven"){
		rockPaperScissorsSteven();
	} else if (opponent == "Normal"){
		rockPaperScissorsNormal();
	}
}
function rock(){
	playerChoice = "rock";
	playGame();
	document.getElementById('steven').style.display = "none";
	document.getElementById('normal').style.display = "none";
	document.getElementById('random').style.display = "none";
	document.getElementById('gamemodeTitle').style.display = "none";
};
function paper(){
 	playerChoice = "paper";
 	playGame();
 	document.getElementById('random').style.display = "none";
 	document.getElementById('normal').style.display = "none";
 	document.getElementById('steven').style.display = "none";
 	document.getElementById('gamemodeTitle').style.display = "none";
};
function scissors(){
	playerChoice = "scissors";
	playGame();
	document.getElementById('normal').style.display = "none";
	document.getElementById('steven').style.display = "none";
	document.getElementById('random').style.display = "none";
	document.getElementById('gamemodeTitle').style.display = "none";
};
function restartGame(){
	window.location.reload();
}