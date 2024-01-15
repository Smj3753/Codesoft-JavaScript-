// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        // Create a new list item
        var li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Save tasks to local storage
        saveTasksToLocalStorage();
    }
}

// Function to delete a task
function deleteTask(btn) {
    var li = btn.parentElement;
    li.remove();

    // Save tasks to local storage after deletion
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById('task-list').getElementsByTagName('li');

    for (var i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].getElementsByTagName('span')[0].innerText);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// You can add more functionality like editing tasks, loading tasks from local storage, etc.
