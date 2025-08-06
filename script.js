const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task elements
  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Toggle completed
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
