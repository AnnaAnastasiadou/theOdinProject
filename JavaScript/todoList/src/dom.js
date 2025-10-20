import { format } from "date-fns";

const DOM = () => {
    // DOM elements
    const elements = {
        projectsList: document.querySelector('.groups-list'),
        todosPage: document.querySelector('.todos-page'),
        sidebar: document.querySelector('.sidebar')
    };

    /*
    *
    * This is a simple Pub/Sub pattern implementation
    * It allows parts of the application to communicate without
    * knowing about eac other directly
    * 
    */

    // Event registry - stores all event subscribers
    const events = {
        groupChange: [], // Array of callbacks for when a group is changed
        todoStatusToggle: [], // Array of callbacks for when todo status is toggled
        addTodo: [] // Array of callbacks for when a new todo is added
    };

    /*
     * EMIT FUNCTION - Publishes an event to all subscribers
     * 
     * When something happens in the DOM, we emit an event
     * to let any interested parties know about it.
     * 
     * @param {string} eventName - The name of the event to emit
     * @param {any} data - The data to pass to all subscribers
     * 
     */

    
    const emit = (eventName, data) => {
        if (events[eventName]) {
            events[eventName].forEach(callback => callback(data));
        }
    };

    /**
     * ON FUNCTION - Subscribers to an event
     * 
     * Other parts of the application can use this to show
     * interest to specific events
     * 
     * @param {string} eventName - The name of the event to listen for
     * @param {function} callback - The function to call when the event occurs
     * @returns {function} unsubscribe - A function that can be called to stop listening
     */

    const on = (eventName, callback) => {
            if (events[eventName]) {
                events[eventName].push(callback);
            }
            return () => { // Return unsubscribe function
                events[eventName] = events[eventName].filter(cb => cb !== callback);
            };
        };

    const handleStatusToggle  = (statusElement) => {
        const todoId = Number(statusElement.dataset.todoId);
        const groupId = Number(statusElement.dataset.groupId);

        if (todoId && groupId) {
            emit('todoStatusToggle', {groupId, todoId})
        }

    };

    /**
     * INITIALIZE EVENT HANDLERS
     * This sets up the click listeners that trigger our custom events
     */
    const initializeEventHandlers = () => {
        document.addEventListener('click', (e) => {
            // Check if the element or one of its parents have the class "status"
            // console.log(e);
            const statusElement = e.target.closest('.status'); 
            if (statusElement) {
                e.preventDefault();
                handleStatusToggle(statusElement);
            }

            const addTodoBtn = e.target.closest('.add-todo');
            if (addTodoBtn) {
                e.preventDefault();
                emit('addTodo', {status: 'requested'}); 
            }
        });
    };

    // Render groups in sidebar
    const renderGroups = (groups) => {
        elements.projectsList.innerHTML = '';

        groups.forEach(group => {
            const groupElement = document.createElement('h3');
            groupElement.className = 'group-item';
            groupElement.textContent = group.name;
            groupElement.dataset.groupId = group.id;
            elements.projectsList.appendChild(groupElement);

            groupElement.addEventListener('click', () => {
                emit('groupChange', group.id);
            });

            elements.projectsList.appendChild(groupElement);
        });
    };

    // Render the todos of each group
    const renderTodos = (group, todos) => {
        if (!elements.todosPage) return;
        
        // Clear the page and add the header
        elements.todosPage.innerHTML = `
            <h2 class="group-header">${group.name}</h2>
        `;

        if (todos.length === 0) {
            const emptyHtml = document.createElement('div');
            emptyHtml.className = "empty-state";
            emptyHtml.innerHTML = `
                <i class="fa-solid fa-clipboard-list"></i>
                <h3>"No Tasks Found"</h3>
                <p>Add a new task to get started</p>
                <button class="add-todo">Add Task</button>
            `;
            elements.todosPage.appendChild(emptyHtml); 
            return;
        }

        // Create the main todos container
        const todosContainer = document.createElement('div');
        todosContainer.className = "todos-container";
        elements.todosPage.appendChild(todosContainer);

        todos.forEach(item => {
            const todoElement = document.createElement('div');
            todoElement.className = `todo-card priority-${item.priority} ${item.completed ? 'completed' : ''}`;
            todoElement.dataset.todoId = item.id;
            todoElement.dataset.groupId = group.id;
            todoElement.innerHTML = `
                <div class="todo-header">
                    <h3 class="todo-title">${item.title}</h3>
                    <span class="creation-date">${format(item.createdDate, "dd/MM/yyyy")}</span>
                </div>
                <p class="todo-description">${item.description}</p>
                <div class="todo-footer">
                    <span class="due-date">
                        <img src="https://img.icons8.com/fluency/48/calendar--v1.png" alt="calendar--v1"/> 
                        Due: ${format(item.dueDate, "dd/MM/yyyy")}
                    </span>
                    <button class="status completed-${item.completed}" data-todo-id="${item.id}" data-group-id="${group.id}">
                        ${item.completed ? '<i class="fa-regular fa-circle-check"></i>Completed' : 
                                            '<i class="fa-solid fa-hourglass-start"></i>Pending'}
                    </button>
                </div>
            `;
            todosContainer.appendChild(todoElement);
        })
    }


    // This function will be called in index.js
    const init = (initialGroups, defaultGroup) => {
        renderGroups(initialGroups);
        renderTodos(defaultGroup, defaultGroup.todos);
        initializeEventHandlers();
    }

    return { 
        init, 
        renderGroups,
        renderTodos,
        onGroupChange: (callback) => on('groupChange', callback),
        onTodoStatusToggle: (callback) => on('todoStatusToggle', callback),
        onAddTodo: (callback) => on('addTodo', callback)
    };
}

export { DOM };
