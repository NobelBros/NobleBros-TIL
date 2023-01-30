// 1. next btn을 클릭하면 이미지가 바뀐다
// -> 초기 Index를 0으로 세팅한다. next btn을 클릭하면 index +1이 되게 한다.
// 1-1. idx가 img 길이(4)와 같아진다면 idx 0 초기화 (next button)
// 2. prev btn을 클릭하면 이지ㅣ가 바뀐다.
// prev btn을 클릭하면 index -1이 되게 한다.

const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

// index 초기화
let idx = 0;

const run = () => {
  idx++;
  changeImage();
};
// let interval = setInterval(run, 2000);

const changeImage = () => {
  // idx가 img 길이(4)와 같아진다면 idx 0 초기화 (next button)
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    // idx가 0보다 작아진다면 idx를 img길이의 숫자(4) 할당 (prev button)
    idx = img.length - 1;
  }
  // x축 반대방향으로 500px 움직이게 한다.
  imgs.style.transform = `translateX(${-idx * 500}px)`;
};

// const resetInterval = () => {
//   clearInterval(interval);
//   interval = setInterval(run, 5000);
// };

rightBtn.addEventListener('click', () => {
  idx += 1;
  changeImage();
});

leftBtn.addEventListener('click', () => {
  idx -= 1;
  changeImage();
});
