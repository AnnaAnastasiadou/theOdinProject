import { App } from "./app.js";

const DOM = () => {
    // DOM elements
    const elements = {
        projectsList: document.querySelector('.groups-list'),
        todosContainer: document.querySelector('.all-todos-container'),
        sidebar: document.querySelector('.sidebar')
    };

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
            })
        })
    }

    return {renderGroups};
}

const domInstance = DOM();
export { domInstance as DOM };