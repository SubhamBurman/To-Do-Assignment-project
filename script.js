const addButton = document.getElementById("add");
const clearButton = document.getElementById("clear");
const taskInput = document.getElementById("task-input");
const inputSection = document.getElementById("inputSection");

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value.trim() !== "") {
        createTask(taskInput.value);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    taskInput.value = "";
});

function createTask(task) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-list';

    const taskItem = document.createElement('p');
    taskItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        inputSection.removeChild(taskContainer);
    });

    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(deleteButton);
    inputSection.appendChild(taskContainer);
}
