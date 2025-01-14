const todoSave = document.querySelector('#todoSave')
const todoList = document.querySelector('#todoList')
const todoModal = document.querySelector('#todoModal')

const renderTodoList = (todoTitle, todoUniqueID) => {
	const todoTemplate = `<a href="#${todoUniqueID}" class="block">
				<div class="bg-white rounded shadow p-2 hover:shadow-md transition-shadow cursor-pointer">
					<h3 class="font-medium text-sm text-gray-800 truncate">${todoTitle}</h3>
					<p class="text-xs text-gray-500 mt-1">${new Date().toLocaleString().split(' ')[0].replace(',', '')}</p>
				</div>
			</a>`
	
	todoList.insertAdjacentHTML('beforeend', todoTemplate)
}

const renderTodoModal = (todoTitle, todoDescription, todoUniqueID) => {
	const modalTemplate = `<div id="${todoUniqueID}" class="modal items-center justify-center">
			<div class="bg-white rounded shadow-lg p-4 max-w-sm w-full mx-2">
				<h2 class="text-lg font-bold mb-2">${todoTitle}</h2>
				<p class="text-sm text-gray-600 mb-3">${todoDescription}</p>
				<div class="flex justify-between items-center">
					<p class="text-xs text-gray-500">${new Date().toLocaleString().split(' ')[0].replace(',', '') }</p>
					<div>
						<button class="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600 transition-colors">Delete</button>
						<a href="#" class="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 transition-colors ml-2">Close</a>
					</div>
				</div>
			</div>
		</div>`
	
	todoModal.insertAdjacentHTML('beforeend', modalTemplate)
}

const saveTodoToLocalStorage = (title, description) => {
	localStorage.setItem("todos", JSON.stringify(todosData));
}

const generateID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

todoSave.addEventListener('click', (evnt) => {
	evnt.preventDefault();
	const regexCode = /[A-Za-z0-9]+/
	const todoInputTitle = document.querySelector('input').value
	const todoDescription = document.querySelector('textarea').value
	const todoUniqueID = generateID()
	
	if (regexCode.test(todoInputTitle)) {
		renderTodoList(todoInputTitle, todoUniqueID)
		renderTodoModal(todoInputTitle, todoDescription, todoUniqueID)
	} else {
		console.warn('Enter the Title!');
	}

})