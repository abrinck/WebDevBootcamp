let numSquares = 6;
let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
colorDisplay.innerHTML = pickedColor.toUpperCase();
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquares();
	resetGame(numSquares);
}

resetButton.addEventListener('click', function () {
	resetGame(numSquares);
});

function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function () {
			document.querySelector('.selected').classList.toggle('selected');
			this.classList.toggle('selected');
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			resetGame(numSquares);
		});
	}
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function () {
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				message.innerHTML = 'Correct';
				changeColors(clickedColor);
				resetButton.innerHTML = 'Play Again?';
			} else {
				this.style.backgroundColor = '#232323';
				message.innerHTML = 'Try Again';
			}
		});
	}
}

function resetGame(num) {
	colors = generateRandomColors(num);
	h1.style.backgroundColor = 'steelblue';
	message.innerHTML = '';
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor.toUpperCase();
	let squares = document.querySelectorAll('.square');
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	resetButton.innerHTML = 'New Colors';
}

function changeColors(color) {
	h1.style.backgroundColor = color;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	return color;
}
