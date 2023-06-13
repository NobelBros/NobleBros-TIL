// - Bring in toggle buttons (quertSellector)
// - Loop through nodelist (forEach)
// - Add click event (addEventListener)
// - Toggle the active  class on the parent node (.parentNode & classList.toggle())

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
