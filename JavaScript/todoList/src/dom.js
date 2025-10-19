import { App } from "./app.js";

const DOM = () => {
    // DOM elements
    const elements = {
        projectsList: document.querySelector('.groups-list'),
        todosContainer: document.querySelector('.todos-container'),
        sidebar: document.querySelector('.sidebar')
    };

    // Default page
    const DEFAULT_PAGE = "Tasks";

    // Render groups in sidebar
    const renderGroups = () => {
        const groups = App.getGroups();
        elements.projectsList.innerHTML = '';

        groups.forEach(group => {
            const groupElement = document.createElement('h3');
            groupElement.className = 'group-item';
            groupElement.textContent = group.name;
            groupElement.dataset.groupId = group.id;
            elements.projectsList.appendChild(groupElement);

            groupElement.addEventListener('click', () => {
                App.setCurrentGroup(group.id);
                const currentTodos = App.getCurrentTodos();
                renderTodos(currentTodos);
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
                    <h3>${"No Todos Yet"}</h3>
                    <p>Click the add button to create your first todo!</p>
                </div>
            `;
        }
    }

    const renderDefaultPage = () => {
        const defaultGroup = App.getDefaultPage();
        renderTodos(defaultGroup.todos);
    }

    renderGroups();
    renderDefaultPage();
    
    // return {renderGroups};
}

const domInstance = DOM();
export { domInstance as DOM };