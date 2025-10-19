import { format } from "date-fns";

const DOM = (appInstance) => {
    // DOM elements
    const elements = {
        projectsList: document.querySelector('.groups-list'),
        todosContainer: document.querySelector('.todos-container'),
        sidebar: document.querySelector('.sidebar')
    };

    // Render groups in sidebar
    const renderGroups = () => {
        const groups = appInstance.getGroups();
        elements.projectsList.innerHTML = '';

        groups.forEach(group => {
            const groupElement = document.createElement('h3');
            groupElement.className = 'group-item';
            groupElement.textContent = group.name;
            groupElement.dataset.groupId = group.id;
            elements.projectsList.appendChild(groupElement);

            groupElement.addEventListener('click', () => {
                if (appInstance.getCurrentGroup.id !== group.id) {
                    appInstance.setCurrentGroup(group.id);
                    const currentTodos = appInstance.getCurrentTodos();
                    renderTodos(currentTodos);
                }
                
            });
        });
    };

    // Render the todos of each group
    const renderTodos = (todos) => {
        if (!elements.todosContainer) return;
        
        elements.todosContainer.innerHTML = '';

        if (todos.length === 0) {
            elements.todosContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-clipboard-list"></i>
                    <h3>"No Tasks Found"</h3>
                    <p>Add a new task to get started</p>
                    <button class="add-todo">Add Task</button>
                </div>
            `;
            return;
        }
        todos.forEach(item => {
            const todoElement = document.createElement('div');
            todoElement.className = `todo-card priority-${item.priority} ${item.completed ? 'completed' : ''}`;
            todoElement.innerHTML = `
                <div class="todo-header">
                    <h3 class="todo-title">${item.title}</h3>
                    <span class="creation-date">${format(item.createdDate, "dd/MM/yyyy")}</span>
                </div>
                <p class="todo-description">${item.description}</p>
                <div class="todo-footer">
                    <span class="due-date">
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/calendar--v1.png" alt="calendar--v1"/> 
                        Due: ${format(item.dueDate, "dd/MM/yyyy")}
                    </span>
                    <span class="status completed-${item.completed}">
                        ${item.completed ? '<i class="fa-regular fa-circle-check"></i>Completed' 
                            : '<i class="fa-solid fa-hourglass-start"></i>Pending'}
                    </span>
                </div>
            `;
            elements.todosContainer.appendChild(todoElement);
        })
    }

    const renderDefaultPage = () => {
        const defaultGroup = appInstance.getDefaultPage();
        renderTodos(defaultGroup.todos);
    }

    // This function will be called in index.js
    const init = () => {
        renderGroups();
        renderDefaultPage();
        // appInstance.addTodo("hello4", "This is test 4", "2026-08-03", "low", true);
    }

    return { init }
}

export { DOM };