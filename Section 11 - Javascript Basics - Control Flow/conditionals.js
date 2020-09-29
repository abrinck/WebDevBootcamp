var age = Number(prompt('What is your age?'));

if (age < 0) {
	console.log("Come back once you're born");
} else if (age < 18) {
	console.log('You are too young to enter the club');
} else if (age < 21) {
	console.log('You may enter but you may not drink');
} else {
	console.log('You may enter the club');
}

if (age === 21) {
	console.log('Happy 21st Birthday!');
}

if (age % 2 == 1) {
	console.log('Your age is odd');
}

if (Math.sqrt(age) % 1 === 0) {
	console.log('Your age is a perfect square!');
}
