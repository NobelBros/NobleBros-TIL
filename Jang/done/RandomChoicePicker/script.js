const tagsEl = document.getElementById('tags')
const textarea = document.querySelector('textarea')

textarea.focus()

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value)

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = ''
    }, 10)

    reandomeSelect()
  }
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}
function reandomeSelect() {
  const times = 30

  const interval = setInterval(() => {
    const ramdomTag = pickRandomTag()

    highlightTag(ramdomTag)

    setTimeout(() => {
      unHighlightTag(ramdomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    })
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
