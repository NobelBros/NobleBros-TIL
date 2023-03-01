const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

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
    if () {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    todoUL.appendChild(todoEl)

    input.value = ''
  }
}
