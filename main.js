var pl1Btn = document.getElementById('pl1Btn');
var pl2Btn = document.getElementById('pl2Btn');
var pl2Fild = document.getElementById('pl2Field');
var pl1Fild = document.getElementById('pl1Field');
var pl1Span = document.getElementById('pl1Score');
var pl2Span = document.getElementById('pl2Score');
var roundsDiv = document.querySelector('.rounds');
var pl1Score = 0;
var pl2Score = 0;
var rounds = 0;


pl1Btn.addEventListener('click', player1Cube);
pl2Btn.addEventListener('click', player2Cube);


function player1Cube() {
	var cube = Math.floor(Math.random() * 6) + 1;
	pl1Fild.innerHTML = cube;
	pl1Score += cube;
	pl1Span.innerHTML = pl1Score;
	rounds += 0.5;
	roundsDiv.innerHTML = Math.floor(rounds);
}

function player2Cube() {
	var cube = Math.floor(Math.random() * 6) + 1;
	pl2Fild.innerHTML = cube;
	pl2Score += cube;
	pl2Span.innerHTML = pl2Score;
	rounds += 0.5;
	roundsDiv.innerHTML = Math.floor(rounds);
	
}