import { format, isToday, isTomorrow, isThisWeek, parseISO } from "date-fns";

const DOM = () => {
    // DOM elements
    const elements = {
        filtersList: document.querySelector('.filters-list'),
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
        filterChange: [],
        groupChange: [], 
        todoStatusToggle: [], 
        addTodo: [] 
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

    // Define standard filter groups
    const availableFilters = [
        { id: 'all', name: 'All Todos', icon: 'fa-list' },
        { id: 'today', name: 'Today', icon: 'fa-calendar-day' },
        { id: 'tomorrow', name: 'Tomorrow', icon: 'fa-forward' },
        { id: 'week', name: 'This Week', icon: 'fa-calendar-week' }
    ];

    // Render filter in sidebar
    const renderFilters = () => {
        if (!elements.filtersList) return;

        elements.filtersList.innerHTML = '';

        availableFilters.forEach(filter => {
            const filterElement = document.createElement('h3');
            filterElement.className = 'filter-item';
            filterElement.innerHTML = `
                <i class="fas ${filter.icon}"></i>
                ${filter.name}
            `;
            filterElement.dataset.filterId = filter.id;

            filterElement.addEventListener('click', () => {
                emit('filterChange', filter.id);
            });

            elements.filtersList.appendChild(filterElement);
        });

    }

    // Apply global filter to all todos from all groups
    const applyGlobalFilter = (allGroups, filterValue) => {
        // Flatten all todos from all groups and add group info
        const allTodos = allGroups.flatMap(group => 
            group.todos.map(todo => ({ 
                ...todo, 
                groupName: group.name,
                groupId: group.id 
            }))
        );

        if (filterValue === 'all') {
            return { 
                title: 'All Todos', 
                todos: allTodos
            };
        }

        // Apply date filter
        const filteredTodos = allTodos.filter(todo => {
            if (!todo.dueDate) return false;
            
            const dueDate = parseISO(todo.dueDate);
            switch (filterValue) {
                case 'today':
                    return isToday(dueDate);
                case 'tomorrow':
                    return isTomorrow(dueDate);
                case 'week':
                    return isThisWeek(dueDate);
                default:
                    return true;
            }
        });

        const filterTitles = {
            'today': 'Tasks Due Today',
            'tomorrow': 'Tasks Due Tomorrow', 
            'week': 'Tasks Due This Week'
        };

        return { 
            title: filterTitles[filterValue] || 'Filtered Tasks',
            todos: filteredTodos
        };
    };

    const renderFilteredTodos = (filterResult) => {
        renderTodos({ 
            name: filterResult.title,
            id: 'filter-view'
        }, filterResult.todos); 
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
            const itemGroupId = item.groupId || group.id; 
            todoElement.dataset.groupId = itemGroupId;
            // todoElement.dataset.groupId = group.id;
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
                    <button class="status completed-${item.completed}" data-todo-id="${item.id}" data-group-id="${itemGroupId}">
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
        renderFilters();
        renderGroups(initialGroups);
        renderTodos(defaultGroup, defaultGroup.todos);
        initializeEventHandlers();
    }

    return { 
        init, 
        renderFilteredTodos,
        applyGlobalFilter,
        renderGroups,
        renderTodos,
        onFilterChange: (callback) => on('filterChange', callback),
        onGroupChange: (callback) => on('groupChange', callback),
        onTodoStatusToggle: (callback) => on('todoStatusToggle', callback),
        onAddTodo: (callback) => on('addTodo', callback)
    };
}

export { DOM };
