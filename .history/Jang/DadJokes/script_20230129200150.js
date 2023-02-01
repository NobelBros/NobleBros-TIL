const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke (){
  const config = 'https://icanhazdadjoke.com'


  fetch('https://icanhazdadjoke.com', {config})
}