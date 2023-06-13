const container = document.querySelector('.container')
const unsplashURL = 'https://picsum.photos/'
const rows = 5

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNumber()}/${getRandomNumber()}`
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300
}
