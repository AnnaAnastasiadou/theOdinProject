import { format } from "date-fns";

const DOM = (appInstance) => {
    // DOM elements
    const elements = {
        projectsList: document.querySelector('.groups-list'),
        todosPage: document.querySelector('.todos-page'),
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
                    renderTodos(group, currentTodos);
                }
                
            });
        });
    };

    // Render the todos of each group
    const renderTodos = (group, todos) => {
        if (!elements.todosPage) return;
        
        // Clear the page and add the header
        elements.todosPage.innerHTML = `
            <h2 class="group-header">${group.name}</h2>
        `;

        if (todos.length === 0) {
            const emptyHtml = document.createElement('div');
            emptyHtml.className = "empty-state";
            emptyHtml.innerHTML = `
                <i class="fa-solid fa-clipboard-list"></i>
                <h3>"No Tasks Found"</h3>
                <p>Add a new task to get started</p>
                <button class="add-todo">Add Task</button>
            `;
            elements.todosPage.appendChild(emptyHtml); 
            return;
        }

        // Create the main todos container
        const todosContainer = document.createElement('div');
        todosContainer.className = "todos-container";
        elements.todosPage.appendChild(todosContainer);

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
            todosContainer.appendChild(todoElement);
        })
    }

    const renderDefaultPage = () => {
        const defaultGroup = appInstance.getDefaultPage();
        renderTodos(defaultGroup, defaultGroup.todos);
    }

    // This function will be called in index.js
    const init = () => {
        renderGroups();
        renderDefaultPage();

        // appInstance.addTodo("hello", "This is test 1", "2026-08-03", "low", true);
        // appInstance.addTodo("hello2", "This is test 2", "2026-08-03", "medium", true);
        // appInstance.addTodo("hello3", "This is test 3", "2026-08-03", "high");
        // appInstance.addTodo("hello4", "This is test 4", "2026-08-03", "low");
    }

    return { init }
}

export { DOM };