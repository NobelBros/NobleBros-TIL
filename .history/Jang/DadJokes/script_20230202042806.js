const jokeEl = document.getElementById('joke')
const jokeBtn = document.querySelector('.btn')

jokeBtn.addEventListener('click', console.log('!!!'))

generateJoke()

function generateJoke(){
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res)=>res.json())
    .then((data)=> {
      jokeEl.innerHTML = data.joke
    })
}

