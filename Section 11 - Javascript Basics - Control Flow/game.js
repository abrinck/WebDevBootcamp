let secretNumber = 4;

let guess = Number(prompt('Guess a number'));

if (guess === secretNumber) {
	alert('You got it right!');
} else if (guess > secretNumber) {
	alert('Too high guess again');
} else {
	alert('Too low guess again');
}