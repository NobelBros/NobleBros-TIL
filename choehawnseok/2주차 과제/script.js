const todo = document.querySelector(".todo");
const done = document.querySelector(".done");
const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");
const todoListItems = document.querySelectorAll("#todo-list li");
const doneListItems = document.querySelectorAll("#done-list li");
const todoInput = document.querySelector("#todo-input");

let currentDraggingItem = "";

todoInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && !e.isComposing) {
    const text = todoInput.value;
    const li = document.createElement("li");
    li.className = "item";
    li.draggable = true;
    li.innerHTML = text;
    todoList.append(li);
    todoInput.value = "";
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragend", dragEnd);
  }
});
todoListItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

doneListItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

todoList.addEventListener("dragover", dragOver);
todoList.addEventListener("dragenter", dragEnter);
todoList.addEventListener("dragleave", dragLeave);
todoList.addEventListener("drop", dragDrop);

doneList.addEventListener("dragover", dragOver);
doneList.addEventListener("dragenter", dragEnter);
doneList.addEventListener("dragleave", dragLeave);
doneList.addEventListener("drop", dragDrop);

function dragStart(e) {
  this.className += " hold";
  currentDraggingItem = this;
  setTimeout(() => (this.className = " invisible"), 0);
}

function dragEnd() {
  this.className = "item";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.className = "list";
  this.append(currentDraggingItem);
  console.log("dragDrop");
}
