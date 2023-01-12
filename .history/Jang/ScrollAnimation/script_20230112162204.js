const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop.top < triggerBottom){
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}