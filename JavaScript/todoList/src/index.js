// Separate application logic (creating new todos, setting todos as complete, changing todo priority)
// from the DOM-related stuff - keep in separate modules
// use webpack / also use data-fns library
// Use localStorage to save data (JSON format)
// Make sure that the app doesn't crash if the data that you want to retrieve are not there

import './style.css';
import { App } from "./app.js";
import { DOM } from "./dom.js";
import { setupSidebarToggle } from "./sidebar.js";

document.addEventListener('DOMContentLoaded', () => {
    // Create the App instance (this runs its internal init)
    const appInstance = App();

    // Create the DOM instance, *injecting* the App
    const domInstance = DOM();


    // Set up event subscriptions
    domInstance.onGroupChange((groupId) => {
        appInstance.setCurrentGroup(groupId);
        const currentGroup = appInstance.getCurrentGroup();
        domInstance.renderTodos(currentGroup, currentGroup.todos);
    });

    domInstance.onTodoStatusToggle(({groupId, todoId}) => {
        const result = appInstance.toggleTodoStatus(groupId, todoId);
        if (result.success) {
            const currentGroup = appInstance.getCurrentGroup();
            if (currentGroup && currentGroup.id === groupId) {
                domInstance.renderTodos(currentGroup, currentGroup.todos);
            }
        }
    });

    domInstance.onAddTodo((todoData) => {
        appInstance.addTodo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
            todoData.completed
        );
        // open form
        const currentGroup = appInstance.getCurrentGroup();
        domInstance.renderTodos(currentGroup, currentGroup.todos);
    });

    // Initialize everything
    const initialGroups = appInstance.getGroups();
    const defaultGroup = appInstance.getDefaultPage();
    setupSidebarToggle();
    domInstance.init(initialGroups, defaultGroup);
});
