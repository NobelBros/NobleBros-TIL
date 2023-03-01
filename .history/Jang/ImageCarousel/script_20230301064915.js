const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval  = setinterval(run, 2000)

console.log(img)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  
}