document.getElementById('add-task').addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const job = document.getElementById('task-job').value;
    const time = document.getElementById('task-time').value;
    if (title && time) {
        const taskSection = document.getElementById(`tasks-${job}`);
        const task = document.createElement('div');
        task.className = 'notification is-primary';
        task.innerHTML = `${title} - ${time} hour(s) <button class="delete"></button>`;
        taskSection.appendChild(task);
        document.getElementById('task-title').value = '';

        task.querySelector('.delete').addEventListener('click', function() {
            task.remove();
        });
    }
});