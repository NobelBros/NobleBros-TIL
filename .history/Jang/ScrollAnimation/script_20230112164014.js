const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  //  여기서 5*4는 뭘까???
  // const triggerBottom = window.innerHeight / 5 * 4

  // boxes.forEach(box => {
  //   const boxTop = box.getBoundingClientRect().top

  //   if(boxTop.top < triggerBottom){
  //     box.classList.add('show')
  //   } else {
  //     box.classList.remove('show')
  //   }
  // })
} 