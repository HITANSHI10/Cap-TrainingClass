const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete";

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}