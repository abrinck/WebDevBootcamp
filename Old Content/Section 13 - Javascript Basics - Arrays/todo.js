let todos = [];
let input;
$(document).ready(function () {
	while (input !== 'quit') {
		input = prompt('What would you like to do?');

		if (input === 'list') {
			listTodos();
		} else if (input === 'new') {
			addTodo();
		} else if (input === 'delete') {
			deleteTodos();
		}
	}
	console.log('You quit the app');
});

function deleteTodos() {
	let index = prompt('Enter index of todo to delete');
	todos.splice(index, 1);
	console.log('Deleted todo');
}

function addTodo() {
	let newTodo = prompt('Enter new todo');
	todos.push(newTodo);
}

function listTodos() {
	console.log('**********');
	todos.forEach(function (todo, index) {
		console.log(index + ': ' + todo);
	});
	console.log('**********');
}
