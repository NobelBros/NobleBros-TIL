const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    removeActive(faq)
    faq.classList.add('active')
  })
})

function removeActive(faq) {
  faqs.forEach(faq => {
    faq.classList.remove('active')
  })
}

