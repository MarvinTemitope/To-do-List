// Get references to HTML elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  // Get the task text from the input field
  const taskText = taskInput.value;

  // Create a new task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  // Create a checkbox for the task
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleTaskCompletion);

  // Create a label for the task text
  const taskLabel = document.createElement("label");
  taskLabel.textContent = taskText;

  // Append the checkbox and label to the task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskLabel);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to toggle the completion status of a task
function toggleTaskCompletion(event) {
  const checkbox = event.target;
  const taskLabel = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskLabel.style.textDecoration = "line-through";
  } else {
    taskLabel.style.textDecoration = "none";
  }
}

// Event listener for the add task button
addTaskBtn.addEventListener("click", addTask);
