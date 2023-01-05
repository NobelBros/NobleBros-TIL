const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = search.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
