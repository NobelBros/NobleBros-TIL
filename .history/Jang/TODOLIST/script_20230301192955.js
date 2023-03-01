const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

form.addEventListener((event) => {
  event.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }
}
