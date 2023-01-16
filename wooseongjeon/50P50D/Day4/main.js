const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

search.addEventListener('click', function() {
  search.classList.toggle('active')
  input.focus()
})