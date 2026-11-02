let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (value === "") return;

  tasks.push(value);
  saveTasks();
  renderTasks();

  input.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index]);

  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    saveTasks();
    renderTasks();
  }
}

renderTasks();