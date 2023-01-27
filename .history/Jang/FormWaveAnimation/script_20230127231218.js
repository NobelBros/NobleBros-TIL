const labels = document.querySelectorAll('.form-controllabel');

labels.forEach(label => {
  label.innerHTML = lable.innerText
        .split('')
        .map((letter, index)=> `<span style="transition-delay:${index * 50}ms"> ${letter} </span>`)
        .join('')
})