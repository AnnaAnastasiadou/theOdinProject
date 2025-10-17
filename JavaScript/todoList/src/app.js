import { createGroup } from "./group.js"
import { createTodo } from "./todo.js"

const DEFAULT_GROUP_NAME = 'Tasks';

export const App = () => {
    let groups = [];
    let currentGroup = null;

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

    const addTodo = (title, description, dueDate, priority, completed = false, project = null) => {
        // Determine which group to add the todo to
        let targetGroupId = null
        if (!project) {
            targetGroupId = getGroupIdByName(DEFAULT_GROUP_NAME);
        }
        else {
            targetGroupId = getGroupIdByName(project);
        }

        const newTodo = createTodo(
            title,
            description, 
            dueDate, 
            priority,
            completed,
            targetGroupId
        );

        const targetGroup = getGroupById(targetGroupId);
        targetGroup.todos.push(newTodo);

        console.log("Todo added to", targetGroup.name, ":", newTodo);
        return newTodo;
    }

    const init = () => {
        try {
            // Create default groups
            addGroup('All Todos');
            const tasks = addGroup(DEFAULT_GROUP_NAME);
            
            // Set default group
            setCurrentGroup(tasks.id);

            console.log('App initialized successfully');
        }
        catch (error) {
            console.log('App initialization note:', error.message)
        }

    }

    init();
    addTodo("Work task", "Complete project", "2024-01-30", "high", false, "Tasks");
    addTodo("Personal task", "Buy groceries", "2024-01-25", "medium", false, "All Todos");
}
