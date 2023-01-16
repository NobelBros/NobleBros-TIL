const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  const trigger = window.innerHeight
  console.log(window.innerHeight)
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    
    if (boxTop < trigger / 2) {
      box.classList.add('end')
    } else if (boxTop < trigger / 3 * 2 ) {
      box.classList.remove('start')
    } else if ( boxTop < trigger) {
      box.classList.add('start')
    } else {
      box.classList.remove('end')
      box.classList.remove('start')
    }
  })
}