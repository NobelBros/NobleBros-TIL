const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('circles');

let currentActive = 1

next.addEventListener('click',()=>{
    currentActive++
    console.log(currentActive);
}