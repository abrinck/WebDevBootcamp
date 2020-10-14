let answer = 'no';
while (answer.toLowerCase().indexOf('yes') === -1 && answer.toLowerCase().indexOf('yeah') === -1) {
	answer = prompt('Are we there yet?');
}
alert('Yay, we finally made it!');
