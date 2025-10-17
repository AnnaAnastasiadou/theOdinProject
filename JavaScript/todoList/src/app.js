import { createGroup } from "./group.js"
import { createTodo } from "./todo.js"


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

    const setCurrentGroup = (groupId) => {
        const group = groups.find(group => group.id === groupId);
        if (group) {
            currentGroup = group;
            console.log("Current group set to: ", group.name);
            return currentGroup;
        }
        else {
            throw new Error(`Group: ${groupId} not found`);
        }
    };

    const init = () => {
        try {
            // Create default groups
            addGroup('All Todos');
            const tasks = addGroup('Tasks');
            
            // Set default group
            setCurrentGroup(tasks.id);

            console.log('App initialized successfully');
        }
        catch (error) {
            console.log('App initialization note:', error.message)
        }

    }

    init();
    
}
