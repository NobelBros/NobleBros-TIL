const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


generateJoke()

jokeBtn.addEventListener('click', () => {
  console.log('btn click')
})


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

