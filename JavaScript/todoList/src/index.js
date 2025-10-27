import './style.css';
import { App } from './app.js';
import { DOM } from './dom.js';
import { setupSidebarToggle } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Create the App instance (this runs its internal init)
    const appInstance = App();

    // Create the DOM instance, *injecting* the App
    const domInstance = DOM();

    // Set up event subscriptions
    domInstance.onFilterChange((filterValue) => {
        const allGroups = appInstance.getGroups();
        const filterResult = domInstance.applyGlobalFilter(
            allGroups,
            filterValue
        );
        domInstance.renderFilteredTodos(filterResult, filterValue);
    });

    domInstance.onGroupChange((groupId) => {
        appInstance.setCurrentGroup(groupId);
        const currentGroup = appInstance.getCurrentGroup();
        domInstance.renderTodos(currentGroup, currentGroup.todos);
    });

    domInstance.onDeleteGroup((groupId) => {
        try {
            appInstance.deleteGroup(groupId);
            const updatedGroups = appInstance.getGroups();
            domInstance.renderGroups(updatedGroups);
            const currentGroup = appInstance.getDefaultPage();
            if (currentGroup) {
                domInstance.renderTodos(currentGroup, currentGroup.todos);

                // Re-highlight the new active item
                domInstance.highlightActiveItem('group', currentGroup.id);
            } else {
                console.log("currentGroup doesn't exist");
            }
        } catch (error) {
            alert(`Error deleting project: ${error.message}`);
            console.error('Group Deletion Error:', error);
        }
    });

    domInstance.onEditGroupName((data) => {
        const { id: groupId, newName } = data;
        try {
            console.log(newName);
            console.log('calling onEditGroupName');
            appInstance.editGroupName(groupId, newName);
            console.log('app function called');
            const updatedGroups = appInstance.getGroups();
            domInstance.renderGroups(updatedGroups);
            domInstance.highlightActiveItem('group', groupId);
        } catch (error) {
            alert(`Error editing project: ${error.message}`);
            console.error('Group Edit Error:', error);
        }
    });

    domInstance.onAddGroup((groupName) => {
        try {
            console.log('finished');
            const newGroup = appInstance.addGroup(groupName);
            appInstance.setCurrentGroup(newGroup.id);
            const updatedGroups = appInstance.getGroups();
            domInstance.renderGroups(updatedGroups);
            domInstance.renderTodos(newGroup, newGroup.todos);
            domInstance.highlightActiveItem('group', newGroup.id);
            console.log('finished');
        } catch (error) {
            alert(error.message);
            console.error('Group Addition Error:', error);
        }
    });

    domInstance.onTodoStatusToggle(({ groupId, todoId }) => {
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
        } catch (error) {
            console.error('Error adding todo', error);
            alert('Error adding task: ' + error.message);
        }
    });

    domInstance.onViewEditTodo(({ groupId, todoId }) => {
        const group = appInstance.getGroupById(groupId);
        const todo = group?.todos.find((t) => t.id === todoId);

        if (todo) {
            domInstance.openTodoModal('edit', todo);
        } else {
            console.error(
                `Todo with ID ${todoId} not found in group ${groupId}`
            );
        }
    });

    domInstance.onDeleteTodo(({ todoId, groupId }) => {
        appInstance.deleteTodoFromGroup(groupId, todoId);
        domInstance.renderTodos(
            appInstance.getGroupById(groupId),
            appInstance.getGroupById(groupId).todos
        );
    });

    domInstance.onSaveTodoEdit((updatedTodo) => {
        try {
            const currentGroup = appInstance.getCurrentGroup();
            appInstance.updateTodo(
                currentGroup.id,
                updatedTodo.id,
                updatedTodo
            );
            // const groups = appInstance.getGroups();
            domInstance.renderTodos(currentGroup, currentGroup.todos);
        } catch (error) {
            console.error('Error updating todo:', error);
            alert('Failed to update todo: ' + error.message);
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
});
