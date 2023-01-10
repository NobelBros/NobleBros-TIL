const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) //0.03초 마다 blurring시전

function blurring() {
  load ++ // 변수 로드 숫자 상승

    if(load > 99) {
      clearInterval(int)
    }
    // 100까지만 상승


  loadText.innerText = `${load}%` // 퍼센트 텍스트 상승
  loadText.style.opacity = scale(load, 0, 100, 1, 0) // 퍼센트 텍스트 투명도 조절
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}