const pagenationEl = document.querySelector('.pagenation')
const circleEl = document.querySelector('ol.pagenation__circle')
const contentEl = document.querySelectorAll('.circle__content')

let a = 0
let b = 0
console.log(b)
circleEl.addEventListener('click', function() {
  if (a === -360) {
    a = 0
    b = 0
  }
  
  a -= 90
  b += 1

  pagenationEl.style.transform = `translate(-100px, -100px) rotate(${a}deg)`

})

contentEl.forEach((content) => {
  circleEl.addEventListener('click', () => {
    removeActiveClasses()
    .classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

