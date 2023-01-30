const faqs = document.querySelectorAll('.faq')
const faqActive = document.querySelector('.faq active')

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

