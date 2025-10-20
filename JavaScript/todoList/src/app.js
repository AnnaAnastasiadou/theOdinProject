import { createGroup } from "./group.js"
import { createTodo } from "./todo.js"
import { loadData, saveData } from "./storage.js";

const App = () => {
    let groups = [];
    let currentGroup = null;

    // Load data from localStorage on initialization
    const loadFromStorage = () => {
        const savedGroups = loadData();
        if (savedGroups && savedGroups.length > 0) {
            groups = savedGroups;
            console.log("Data loaded from localStorage");

            // Set current group to first group after loading
            if (groups.length > 0) {
                setCurrentGroup(groups[0].id);
            }
        }
        else {
            createDefaultGroups();
        }
    }

    const createDefaultGroups = () => {
        try {
            addGroup('Default');
        }
        catch (error) {
            console.log('Default groups already exist');
        }
    }

    // Save data after operations
    const saveToStorage = () => {
        saveData(groups);
    };

    const toggleTodoStatus = (groupId, todoId) => {
        try {
            console.log('Toggling todo status:', { groupId, todoId });

            const group = getGroupById(groupId);
            if (!group) {
                throw new Error(`Group ${group.name} not found`);
            }

            const  todoIndex = group.todos.findIndex(todo => todo.id === todoId);
            if (todoIndex === -1) {
                throw new Error(`Todo with id ${todoId} not found in group ${group.name}}`);
            }

            // Toggle the completion status
            group.todos[todoIndex].completed = !group.todos[todoIndex].completed;

            saveToStorage();
            
            return {
                success: true,
                todo: group.todos[todoIndex],
                groupId: groupId
            };
        }
        catch(error) {
            console.error(`Error toggling todo status:` , error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    const addGroup = (name) => {
        if (!name || name.trim()===''){
            throw new Error("Group name cannot be empty");
        }
        let groupExists = groups.some(group => group.name.toLowerCase() === name.toLowerCase());

        if (groupExists) {
            throw new Error(`A project with the name "${name.trim()}" already exists.`);
        }
        else {
            const newGroup = createGroup(name.trim());
            groups.push(newGroup);
            saveToStorage();
            console.log("New group created: ", newGroup);
            return newGroup;
        }
    };

    const getGroupById = (groupId) => {
        if (!groupId) {
            throw new Error('Group ID is required');
        }

        const group = groups.find(g => g.id === groupId);
        if (!group) {
            throw new Error(`Group with ID "${groupId}" not found`);
        }
        return group;
    };

    const getGroupByName = (groupName) => {
        const group = groups.find(g => g.name.toLowerCase() === groupName.toLowerCase());
        if (!group) {
            throw new Error(`Group "${groupName}" not found`);
        }
        return group;
    };

    const setCurrentGroup = (groupId) => {
        const group = getGroupById(groupId);
        if (group) {
            currentGroup = group;
            console.log("Current group set to: ", group.name);
            return currentGroup;
        }
        else {
            throw new Error(`Group: ${groupId} not found`);
        }
    };

    const addTodo = (title, description, dueDate, priority, completed = false) => {
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
            currentGroup.id
        );

        currentGroup.todos.push(newTodo);
        saveToStorage();
        console.log("Todo added to", currentGroup.name, ":", newTodo);
        return newTodo;
    }

    const addTodoToGroup = (groupName, title, description, dueDate, priority, completed = false) => {
        const group = getGroupByName(groupName)
        
        const newTodo = createTodo(
            title,
            description, 
            dueDate, 
            priority,
            completed,
            group.id
        );

        group.todos.push(newTodo);
        saveToStorage();
        console.log("Todo added to", currentGroup.name, ":", newTodo);
        return newTodo;
    }

    const getGroups = () => {
        return groups;
    }

    const getCurrentGroup = () => {
        return currentGroup;
    }

    const getCurrentTodos = () => {
        return currentGroup ? currentGroup.todos : [];
    }

    const getDefaultPage = () => {
        return groups[0];
    }

    const init = () => {
        try {
            loadFromStorage();
            console.log('App initialized successfully');
        }
        catch (error) {
            console.log('App initialization note:', error.message)
        }

    }

    init();
    return {
        addGroup,
        setCurrentGroup,
        getGroupById,
        getGroupByName,
        toggleTodoStatus,
        addTodo,
        addTodoToGroup,
        getGroups,
        getCurrentGroup,
        getCurrentTodos,
        getDefaultPage,
        init
    };
}

export { App };