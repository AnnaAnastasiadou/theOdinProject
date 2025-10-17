import { createGroup } from "./group.js"
import { createTodo } from "./todo.js"

const App = () => {
    let groups = [];

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
            console.log("New group created: ", newGroup);
            return newGroup;
        }
    };

    const getGroupById = (groupId) => {
        const group = groups.find(g => g.id === groupId);
        if (!group) {
            throw new Error(`Group with ID "${groupId}" not found`);
        }
        return group;
    };

    const getGroupIdByName = (groupName) => {
        const group = groups.find(g => g.name.toLowerCase() === groupName.toLowerCase());
        if (!group) {
            throw new Error(`Group "${groupName}" not found`);
        }
        return group.id;
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

    const addTodo = (groupName, title, description, dueDate, priority, completed = false, project = null) => {
        const groupId = getGroupIdByName(groupName);
        
        const newTodo = createTodo(
            title,
            description, 
            dueDate, 
            priority,
            completed,
            groupId
        );

        const targetGroup = getGroupById(groupId);
        targetGroup.todos.push(newTodo);
        console.log("Todo added to", targetGroup.name, ":", newTodo);
        return newTodo;
    }

    const getGroups = () => {
        return groups;
    }

    const init = () => {
        try {
            // Create default groups
            // these groups should be in the filtered groups not the projects
            // addGroup('All Todos');
            // addGroup('Tasks');
            // addGroup('Today');
            // addGroup('This Week');

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
        getGroupIdByName,
        addTodo,
        getGroups,
        init
    };
}

const appInstance = App();
export { appInstance as App };