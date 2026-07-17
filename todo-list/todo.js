// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    let tasks = [];

    let taskInput = document.getElementById('taskInput');
    let addBtn = document.getElementById('addBtn');
    let taskList = document.getElementById('taskList');
    let taskCount = document.getElementById('taskCount');

    function addTask() {
        let taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        let newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(newTask);
        taskInput.value = "";
        displayTasks();
        updateTaskCount();
    }

    function displayTasks() {
        taskList.innerHTML = "";
        
        tasks.forEach(function(task) {
            let li = document.createElement('li');
            li.innerHTML = `
                <span onclick="toggleTask(${task.id})" style="cursor: pointer; ${task.completed ? 'text-decoration: line-through; color: gray;' : ''}">${task.text}</span>
                <button onclick="deleteTask(${task.id})" style="margin-left: 10px; background: red; color: white;">Delete</button>
            `;
            
            taskList.appendChild(li);
        });
    }

    function toggleTask(id) {
        tasks.forEach(function(task) {
            if (task.id === id) {
                task.completed = !task.completed;
            }
        });
        displayTasks();
    }

    function deleteTask(id) {
        tasks = tasks.filter(function(task) {
            return task.id !== id;
        });
        displayTasks();
        updateTaskCount();
    }

    function updateTaskCount() {
        taskCount.textContent = tasks.length;
    }

    addBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    window.toggleTask = toggleTask;
    window.deleteTask = deleteTask;

});