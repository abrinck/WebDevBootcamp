player1Score = 0;
player2Score = 0;
scoreToWin = 5;
player1ScoreText = document.querySelector('#player1Score');
player2ScoreText = document.querySelector('#player2Score');
scoreToWinText = document.querySelector('#scoreToWin');
player1Button = document.querySelector('#player1Button');
player2Button = document.querySelector('#player2Button');
resetButton = document.querySelector('#resetButton');
scoreToWinInput = document.querySelector('#scoreToWinInput');
gameover = false;

player1Button.addEventListener('click', function () {
	if (!gameover) {
		player1Score++;
		player1ScoreText.innerHTML = player1Score;
		if (player1Score === scoreToWin) {
			player1ScoreText.classList.add('winner');
			gameover = true;
		}
	}
});

player2Button.addEventListener('click', function () {
	if (!gameover) {
		player2Score++;
		player2ScoreText.innerHTML = player2Score;
		if (player2Score === scoreToWin) {
			player2ScoreText.classList.add('winner');
			gameover = true;
		}
	}
});

resetButton.addEventListener('click', function () {
	reset();
});

scoreToWinInput.addEventListener('change', function () {
	scoreToWin = Number(this.value);
	scoreToWinText.innerHTML = scoreToWin;
	reset();
});

function reset() {
	player1Score = 0;
	player2Score = 0;
	player1ScoreText.innerHTML = player1Score;
	player2ScoreText.innerHTML = player2Score;
	player1ScoreText.classList.remove('winner');
	player2ScoreText.classList.remove('winner');
	gameover = false;
}
