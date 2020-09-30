function printReverse(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	let value = arr[0];
	let uniform = true;
	arr.forEach(element => {
		if (element !== value) {
			uniform = false;
		}
	});
	console.log(uniform);
}

function sumArray(arr) {
	let total = 0;
	arr.forEach(element => {
		total += element;
	});
	console.log(total);
}

function max(arr) {
	let max = arr[0];
	arr.forEach(element => {
		if (max < element) {
			max = element;
		}
	});
	console.log(max);
}
