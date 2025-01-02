document.getElementById('add-task').addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const job = document.getElementById('task-job').value;
    if (title) {
        const taskSection = document.getElementById(`tasks-${job}`);
        const task = document.createElement('div');
        task.className = 'notification is-primary';
        task.innerHTML = `${title} <button class="delete"></button>`;
        taskSection.appendChild(task);
        document.getElementById('task-title').value = '';

        task.querySelector('.delete').addEventListener('click', function() {
            task.remove();
        });
    }
});