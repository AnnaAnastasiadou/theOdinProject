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
    domInstance.onFilterChange(filterValue => {
        const allGroups = appInstance.getGroups();
        const filterResult = domInstance.applyGlobalFilter(allGroups, filterValue);
        domInstance.renderFilteredTodos(filterResult, filterValue);
    });

    domInstance.onGroupChange((groupId) => {
        appInstance.setCurrentGroup(groupId);
        const currentGroup = appInstance.getCurrentGroup();
        domInstance.renderTodos(currentGroup, currentGroup.todos);
    });

    domInstance.onDeleteGroup( groupId => {
        try {
            appInstance.deleteGroup(groupId);
            console.log('deleted');
            const updatedGroups = appInstance.getGroups();
            console.log('updated');
            domInstance.renderGroups(updatedGroups);
            console.log('rendered');
            const currentGroup = appInstance.getDefaultPage();
            if (currentGroup) {
                console.log("......");
                domInstance.renderTodos(currentGroup, currentGroup.todos);
                
                // Re-highlight the new active item
                domInstance.highlightActiveItem('group', currentGroup.id);
            }
            else {
                console.log("currentGroup doesn't exist");
            }
        }
        catch(error) {
            alert(`Error deleting project: ${error.message}`);
            console.error("Group Deletion Error:", error);
        }
    });

    domInstance.onEditGroupName( (data)  => {
        const { id: groupId, newName } = data;
        try {
            console.log(newName);
            console.log("calling onEditGroupName");
            appInstance.editGroupName(groupId, newName);
            console.log("app function called");
            const updatedGroups = appInstance.getGroups();
            domInstance.renderGroups(updatedGroups);
            domInstance.highlightActiveItem('group', groupId);
        }
        catch(error) {
            alert(`Error editing project: ${error.message}`);
            console.error("Group Edit Error:", error);
        }
    });

    domInstance.onTodoStatusToggle(({groupId, todoId}) => {
        const result = appInstance.toggleTodoStatus(groupId, todoId);
        if (result.success) {
            const currentGroup = appInstance.getCurrentGroup();
            if (currentGroup) {
                domInstance.renderTodos(currentGroup, currentGroup.todos);
            }
        }
    });

    domInstance.onAddTodo((todoData) => {
        try {
            appInstance.addTodo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.completed,
                todoData.notes,
                todoData.checklist
            );
            const currentGroup = appInstance.getCurrentGroup();
            domInstance.renderTodos(currentGroup, currentGroup.todos);
        }
        catch (error) {
            console.error('Error adding todo', error);
            alert('Error adding task: ' + error.message);
        }
    });

    // domInstance.onEditTodo(({ groupId, todoId }) => {
    //     // Open an edit form pre-filled with todo data
    //     const group = appInstance.getGroupById(groupId);
    //     const todo = group.todos.find(t => t.id === todoId);
    //     console.log("Edit Todo requested:", todo);
    // });

    // Initialize everything
    const initialGroups = appInstance.getGroups();
    const defaultGroup = appInstance.getDefaultPage();
    setupSidebarToggle();
    domInstance.init(initialGroups, defaultGroup);
    // appInstance.addGroup("Geia sas");
    // Testing
    // appInstance.addTodo("hello", "This is test 1", "2025-10-20", "low", true);
    // appInstance.addTodo("hello2", "This is test 2", "2025-10-21", "medium", true);
    // appInstance.addTodo("hello3", "This is test 3", "2025-10-25", "high");
    // appInstance.addTodo("hello4", "This is test 4", "2026-08-03", "low");

});
