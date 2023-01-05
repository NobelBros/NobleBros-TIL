const boxes = document.querySelectorAll(".box");

//  intersection observer를 사용시 사라졌을 떄의 처리가 다름 코드는 이게 더 간단하고 브라우저마다 다른 상호작용을 신경 쓰지 않아도 된다.

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
    } else if (e.intersectionRatio === 0) {
      e.target.classList.remove("show");
    }
  });
});

boxes.forEach((box) => {
  observer.observe(box);
});

// window.addEventListener("scroll", checkBoxes);
//
// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }
