const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach((value) => {
  value.addEventListener("click", (e) => {
    e.currentTarget.parentNode.classList.toggle("active");
  });
});
