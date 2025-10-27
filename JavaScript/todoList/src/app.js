import { createGroup } from './group.js';
import { createTodo } from './todo.js';
import { loadData, saveData } from './storage.js';

const App = () => {
    let groups = [];
    let currentGroup = null;

    const createDefaultGroups = () => {
        try {
            addGroup('Default');
        } catch (error) {
            console.log('Default groups already exist');
        }
    };

    const getGroups = () => groups;

    const getCurrentGroup = () => currentGroup;

    const getGroupById = (groupId) => {
        if (!groupId) {
            throw new Error('Group ID is required');
        }

        const group = groups.find((g) => g.id === groupId);
        if (!group) {
            throw new Error(`Group with ID "${groupId}" not found`);
        }
        return group;
    };

    const getGroupByName = (groupName) => {
        const group = groups.find(
            (g) => g.name.toLowerCase() === groupName.toLowerCase()
        );
        if (!group) {
            throw new Error(`Group "${groupName}" not found`);
        }
        return group;
    };

    const getCurrentTodos = () => (currentGroup ? currentGroup.todos : []);

    const setCurrentGroup = (id) => {
        const group = getGroupById(id);
        if (group) {
            currentGroup = group;
            console.log('Current group set to: ', group.name);
            return currentGroup;
        } else {
            throw new Error(`Group: ${id} not found`);
        }
    };

    const getDefaultPage = () => {
        return groups[0];
    };

    const addGroup = (name) => {
        if (!name || name.trim() === '') {
            throw new Error('Group name cannot be empty');
        }
        let groupExists = groups.some(
            (group) => group.name.toLowerCase() === name.toLowerCase()
        );

        if (groupExists) {
            throw new Error(
                `A project with the name "${name.trim()}" already exists.`
            );
        } else {
            const newGroup = createGroup(name.trim());
            groups.push(newGroup);
            saveToStorage();
            console.log('New group created: ', newGroup);
            return newGroup;
        }
    };

    const editGroupName = (groupId, newGroupName) => {
        console.log('In app');
        const group = getGroupById(groupId);

        if (group) {
            group.name = newGroupName;
        } else {
            throw new Error(`The group with id ${groupId} was not found.`);
        }

        saveToStorage();
    };
    const deleteGroup = (groupId) => {
        if (!groupId) {
            throw new Error('Group ID not found');
        }

        const groupIndex = groups.findIndex((g) => g.id === groupId);

        if (groupIndex === -1) {
            throw new Error(`Group with ID ${groupId} not found for deletion`);
        }

        if (groups.length === 1) {
            alert('Cannot delete the last remaining project.');
            return;
        }

        const deletedGroup = groups.splice(groupIndex, 1);
        console.log(`Group deleted: ${deletedGroup}`);

        saveToStorage();
    };

    const addTodo = (
        title,
        description,
        dueDate,
        priority,
        completed = false,
        notes = '',
        checklist = []
    ) => {
        if (!currentGroup) {
            if (groups.length > 0) {
                setCurrentGroup(groups[0].id);
            } else {
                throw new Error('No groups available');
            }
        }

        const newTodo = createTodo(
            title,
            description,
            dueDate,
            priority,
            completed,
            currentGroup.id,
            notes,
            checklist
        );

        currentGroup.todos.push(newTodo);
        saveToStorage();
        console.log('Todo added to', currentGroup.name, ':', newTodo);
        return newTodo;
    };

    const updateTodo = (groupId, todoId, updatedTodoData) => {
        const group = getGroupById(groupId);
        if (!group) throw new Error(`Group ${groupId} not found`);

        const todoIndex = group.todos.findIndex((t) => t.id === todoId);
        if (todoIndex === -1)
            throw new Error(`Todo ${todoId} not found in group ${groupId}`);

        // Update the todo while preserving other fields
        group.todos[todoIndex] = {
            ...group.todos[todoIndex], // Create an object with the previous data
            ...updatedTodoData, // overwrite any replaced data
        };

        saveToStorage();
    };

    const deleteTodoFromGroup = (groupId, todoId) => {
        const group = getGroupById(groupId);
        const todoIndex = group.todos.findIndex((t) => t.id === todoId);
        if (todoIndex === -1)
            throw new Error(`Todo ${todoId} not found in group ${groupId}`);

        // delete todo from group
        const deletedTodo = group.todos.splice(todoIndex, 1);
        console.log('Todo deleted: ', deletedTodo);

        saveToStorage();
    };

    const toggleTodoStatus = (groupId, todoId) => {
        try {
            console.log('Toggling todo status:', { groupId, todoId });

            const group = getGroupById(groupId);
            if (!group) {
                throw new Error(`Group ${group.name} not found`);
            }

            const todoIndex = group.todos.findIndex(
                (todo) => todo.id === todoId
            );
            if (todoIndex === -1) {
                throw new Error(
                    `Todo with id ${todoId} not found in group ${group.name}}`
                );
            }

            // Toggle the completion status
            group.todos[todoIndex].completed =
                !group.todos[todoIndex].completed;

            saveToStorage();

            return {
                success: true,
                todo: group.todos[todoIndex],
                groupId: groupId,
            };
        } catch (error) {
            console.error(`Error toggling todo status:`, error);
            return {
                success: false,
                error: error.message,
            };
        }
    };

    // Load data from localStorage on initialization
    const loadFromStorage = () => {
        const savedGroups = loadData();
        if (savedGroups && savedGroups.length > 0) {
            groups = savedGroups;
            console.log('Data loaded from localStorage');

            // Set current group to first group after loading
            if (groups.length > 0) {
                setCurrentGroup(groups[0].id);
            }
        } else {
            createDefaultGroups();
        }
    };

    // Save data after operations
    const saveToStorage = () => {
        saveData(groups);
    };

    const init = () => {
        try {
            loadFromStorage();
            console.log('App initialized successfully');
        } catch (error) {
            console.log('App initialization note:', error.message);
        }
    };

    init();
    return {
        addGroup,
        deleteGroup,
        editGroupName,
        updateTodo,
        setCurrentGroup,
        getGroupById,
        getGroupByName,
        toggleTodoStatus,
        addTodo,
        deleteTodoFromGroup,
        getGroups,
        getCurrentGroup,
        getCurrentTodos,
        getDefaultPage,
        init,
    };
};

export { App };
