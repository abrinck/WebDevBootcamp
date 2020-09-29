function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function factorial(num) {
	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}

function kebabToSnake(str) {
	let res = str.replace(/-/g, '_');
	return res;
}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));
