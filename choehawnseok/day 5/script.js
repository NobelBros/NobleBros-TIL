const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loading = 0;

let int = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function blurring() {
  loading++;
  if (loading > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${loading}%`;
  loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}
