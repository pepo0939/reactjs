let id = 0
let todoId = 0
module.exports = {
	addTodoList: title => ({
		type: 'ADD_TODO_LIST',
		title,
		id: id++,
		added: new Date(),
		completed: false,
	}),
	removeTodoList: id => ({
		type: 'REMOVE_TODO_LIST',
		id,
	}),
	addTodo: (todoListId, title) => ({
		type: 'ADD_TODO',
		todoId: todoId++,
		todoListId,
		title,
		completed: false,
		added: new Date(),
	}),
}