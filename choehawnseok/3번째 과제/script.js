const todoList = document.querySelector(".todo");
const donedoList = document.querySelector(".done");

new Sortable(todoList, {
  // 애니메이션 초
  animation: 150,
  // 같은 이름의 그룹이면 공유가 가능하여 자유롭게 이동 가능능
  group: "todos",
});

new Sortable(donedoList, {
  animation: 150,
  group: "todos",
});

const input = document.querySelector("input");

let inputValue = "";

input.addEventListener("input", (e) => {
  inputValue = e.currentTarget.value;
  console.log(inputValue);
});

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && !e.isComposing) {
    input.value = "";
    const li = document.createElement("li");
    li.innerText = inputValue;
    todoList.append(li);
  }
});
