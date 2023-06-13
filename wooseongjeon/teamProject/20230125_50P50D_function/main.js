const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const funnyBtn = document.getElementById('Funny')
const nextJokeBtn = document.getElementsByClassName('btn')
const sounds = ['Funny', 'NotFunny']

sounds.forEach((sound, idx) => {
  const btn = document.createElement('button')
  
  btn.classList.add('btn')
  btn.addEventListener('click', generateJoke)
  // if (idx === 1) {
  // } else {
  //   funnyBtn.addEventListener('click', () => {
  //     jokeBtn.classList.remove('hide')
  //   })
  // }
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)

})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// Using async
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com/', config)

  const data = await res.json()
  
  jokeEl.innerHTML = data.joke

}

