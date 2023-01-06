const pagenationEl = document.querySelector('.pagenation')
const circleEl = document.querySelector('ol.pagenation__circle')
const circleWrap = document.querySelector('.circle__wrapper')
const contentsEl = document.querySelectorAll('.circle__content')
const contentEl = document.querySelector('.circle__content')
const circle1Child = circleWrap.firstElementChild
const circle2Child = circleWrap.firstElementChild.nextElementSibling
const circle3Child = circleWrap.lastElementChild.previousElementSibling
const circleLChild = circleWrap.lastElementChild
let contentBroEl = contentEl.nextElementSibling

console.log(circle2Child)

let a = 0
let b = 1
circleEl.addEventListener('click', function() {
  if (a === -360) {
    a = 0
  }

  a -= 90
  b += 1
  
  pagenationEl.style.transform = `translate(-100px, -100px) rotate(${a}deg)`
  
  removeActiveClasses()

  if (b === 1) {
    circle1Child.classList.add('active')
  } else if (b === 2) {
    circle2Child.classList.add('active')
  } else if (b === 3) {
    circle3Child.classList.add('active')
  } else {
    circleLChild.classList.add('active')
    b = 0
  }
  
  console.log(a)
  console.log(b)
  
})

// contentsEl.forEach((content, idx) => {
//   circleEl.addEventListener('click', () => {
//     removeActiveClasses()
//     // idx.classList.add('active')
//     contentBroEl.classList.add('active')
//   })
// })

function removeActiveClasses() {
  contentsEl.forEach( content => {
    content.classList.remove('active')
  })
}

