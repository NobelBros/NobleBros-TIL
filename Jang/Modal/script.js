const button = document.querySelector('button')
const dialog = document.querySelector('dialog')

button.addEventListener("click", ()=>{
  dialog.showModal()
})

// 유저가 어디를 클릭한지 알 수 있기위해
dialog.addEventListener("click", ()=>{
  console.log(dialog.returnValue)
})