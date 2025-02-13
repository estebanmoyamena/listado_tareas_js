
let tasks = [];
let taskIdCounter = 1;

window.addTask = function() {
    const inputField = document.getElementById('taskInput');
    const taskName = inputField.value.trim();
    
    if (!taskName) {
        alert('⚠️ Por favor escribe una tarea válida');
        return;
    }
    
    const newTask = {
        id: taskIdCounter++,
        name: taskName,
        completed: false,
        date: new Date().toLocaleDateString()
    };
    
    tasks.push(newTask);
    inputField.value = '';
    renderTasks();
    updateClearButton();
};

window.toggleTask = function(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return {...task, completed: !task.completed};
        }
        return task;
    });
    renderTasks();
    updateClearButton();
};

window.deleteTask = function(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    updateClearButton();
};

// Función para limpiar tareas completadas
window.clearCompleted = function() {
    if (!confirm('¿Borrar todas las tareas completadas?')) return;
    
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
    updateClearButton();
};


function renderTasks() {
    const listElement = document.getElementById('taskList');
    listElement.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;

        // box
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => window.toggleTask(task.id);
        checkbox.ariaLabel = `Marcar tarea "${task.name}" como ${task.completed ? 'pendiente' : 'completada'}`;

        // tarea
        const span = document.createElement('span');
        span.style.flexGrow = '1';
        span.textContent = task.name;

        // fecha
        const dateElement = document.createElement('small');
        dateElement.style.color = '#95a5a6';
        dateElement.style.margin = '0 15px';
        dateElement.textContent = task.date;

        // boton eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️ Eliminar';
        deleteBtn.onclick = () => window.deleteTask(task.id);
        deleteBtn.ariaLabel = `Eliminar tarea "${task.name}"`;

        // ensamblar elementos
        taskElement.append(checkbox, span, dateElement, deleteBtn);
        listElement.appendChild(taskElement);
    });
    
    updateCounter();
}

// actualiza el contador de tareas
function updateCounter() {
    const pending = tasks.filter(t => !t.completed).length;
    document.getElementById('pendingCounter').textContent = pending;
}

// actualizar boton de limpiar
function updateClearButton() {
    const hasCompleted = tasks.some(task => task.completed);
    const clearButton = document.querySelector('.btn-clear');
    if (clearButton) {
        clearButton.style.display = hasCompleted ? 'block' : 'none';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // datos para prueba 
    tasks = [
        {
            id: taskIdCounter++,
            name: 'Revisar casos de prueba',
            completed: false,
            date: new Date('2024-03-15').toLocaleDateString()
        },
        {
            id: taskIdCounter++,
            name: 'Actualizar documentación',
            completed: true,
            date: new Date('2024-03-14').toLocaleDateString()
        }
    ];
    renderTasks();
    updateClearButton();
});