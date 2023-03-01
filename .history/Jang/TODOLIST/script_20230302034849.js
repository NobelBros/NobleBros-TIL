const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

const todos = Json.parse(localStorage.getItem('todos'))

if (todos) {
  todos.forEach((todo) => addTodo(todo))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    // ???
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    todoUL.appendChild(todoEl)

    input.value = ''

    updateLS()
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li')

  const todos = []

  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })

  localStorage.setItem('todos')
}
