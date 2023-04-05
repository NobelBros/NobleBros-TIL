const button = document.querySelectorAll('.ripple')

button.forEach((button) => {
  button.addEventListener('click', function (event) {
    const x = event.clientX
    const y = event.clientY

    const buttonTop = event.target.offsetTop
    const buttonLeft = event.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    // 바닐라 JS를 사용할 때 DOM에 뭔가를 추가할 때, 지우는것도 잊지 말아야 한당~
  })
})
