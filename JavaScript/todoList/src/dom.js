import { format, isToday, isTomorrow, isThisWeek, parseISO } from "date-fns";

const DOM = () => {
    // DOM elements
    const elements = {
        filtersList: document.querySelector('.filters-list'),
        projectsList: document.querySelector('.groups-list'),
        todosPage: document.querySelector('.todos-page'),
        sidebar: document.querySelector('.sidebar'),
        addTodoModal: document.getElementById('addTodoModal'),
        addTodoForm: document.getElementById('addTodoForm'),
        closeModal: document.querySelector('.close-modal'),
        cancelBtn: document.querySelector('.cancel-btn'),
        submitNewTodoBtn: document.getElementById('submit-new-todo-btn'),
        newChecklistItem: document.getElementById('newChecklistItem'),
        addChecklistBtn: document.getElementById('add-checklist-btn'),
        checklistItems: document.getElementById('checklistItems')
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

    // Highlight the active filter or group
    const highlightActiveItem = (type, id) => {
        const activeClass = 'active';

        // Remove 'active' from all filters and groups
        document.querySelectorAll('.filter-item, .group-item').forEach(el => {
            el.classList.remove(activeClass);
        });
        
        // Add 'active' state to the clicked element
        const activeElement = document.querySelector(`[data-${type}-id="${id}"]`);
        if (activeElement) {
            activeElement.classList.add(activeClass);
        }
        else {
        console.warn(`No element found for type "${type}" and id "${id}"`);
        }

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

            // Update add todo button handler to open modal
            const addTodoBtn = e.target.closest('.add-btn');
            if (addTodoBtn) {
                e.preventDefault();
                openAddTodoModal(); 
            }
        });
        
        // Initialize modal handlers
        initializeModalHandlers();

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
                highlightActiveItem('filter', filter.id);
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
        }, filterResult.todos, "filter"); 
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
                highlightActiveItem('group', group.id);
                emit('groupChange', group.id);
            });

            elements.projectsList.appendChild(groupElement);
        });
    };

    // Render the todos of each group
    const renderTodos = (group, todos, type = "group") => {
        if (!elements.todosPage) return;
        
        // Clear content and add header
        elements.todosPage.innerHTML = '';
        const header = document.createElement('div');
        header.className = 'todos-header';
        header.innerHTML = `<h2 class="group-header">${group.name}</h2>`;
        elements.todosPage.appendChild(header);
        
        if (todos.length === 0) {
            const emptyHtml = document.createElement('div');
            emptyHtml.className = "empty-state";
            emptyHtml.innerHTML = `
                <i class="fa-solid fa-clipboard-list"></i>
                <h3>"No Tasks Found"</h3>
            `;
            elements.todosPage.appendChild(emptyHtml);
            if (type === "group") {
                const addSection = `
                    <p>Add a new task</p>
                    <button class="add-btn">Add Task</button>
                `
                emptyHtml.appendChild(addSection);
            } 
            return;
        }

        if (type === "group") {
            // Add button only for group containers
            const addButton = document.createElement('div');
            addButton.className = 'todos-actions';
            addButton.innerHTML = `
                <button class="add-btn">
                    <i class="fa-solid fa-plus"></i> Add Todo
                </button>
            `
            header.appendChild(addButton);
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
                    <span class="todo-action">
                        <button class="status completed-${item.completed}" data-todo-id="${item.id}" data-group-id="${itemGroupId}">
                            ${item.completed ? '<i class="fa-regular fa-circle-check"></i>Completed' : 
                                                '<i class="fa-solid fa-hourglass-start"></i>Pending'}
                        </button>
                        <button class="edit-todo-btn" data-todo-id="${item.id}" data-group-id="${itemGroupId}">
                            <i class="fa-solid fa-pen"></i> Edit
                        </button>
                    </span>
                </div>
            `;
            todosContainer.appendChild(todoElement);
        })
    }

    const openAddTodoModal = () => {
        console.log("Open.....");
        if (elements.addTodoModal) {
            elements.addTodoModal.style.display = 'block';
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('todoDueDate').min = today;
            // Reset form
            elements.addTodoForm.reset();
            clearChecklist();
            // Focus on title input
            document.getElementById('todoTitle').focus();
        }
    };

    const closeAddTodoModal = () => {
        if (elements.addTodoModal) {
            elements.addTodoModal.style.display = 'none';
        }
    };

    // Checklist functions
    const addChecklistItem = (text = '') => {
        if (!elements.checklistItems) return;
        
        const itemText = text || elements.newChecklistItem.value.trim();
        if (!itemText) return;

        const checklistItem = document.createElement('li');
        checklistItem.className = 'checklist-item';
        checklistItem.innerHTML = `
            <div class="checklist-item-content">
                <input type="checkbox" class="checklist-item-checkbox">
                <span class="checklist-item-text">${itemText}</span>
            </div>
            <div class="checklist-item-actions">
                <button type="button" class="remove-checklist-item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add remove functionality
        const removeBtn = checklistItem.querySelector('.remove-checklist-item');
        removeBtn.addEventListener('click', () => {
            checklistItem.remove();
        });

        elements.checklistItems.appendChild(checklistItem);
        
        // Clear the input
        if (elements.newChecklistItem) {
            elements.newChecklistItem.value = '';
            elements.newChecklistItem.focus();
        }
    };

    const clearChecklist = () => {
        if (elements.checklistItems) {
            elements.checklistItems.innerHTML = '';
        }
    };

    const getChecklistData = () => {
        if (!elements.checklistItems) return [];
        
        const items = [];
        const checklistElements = elements.checklistItems.querySelectorAll('.checklist-item');
        
        checklistElements.forEach(item => {
            const textElement = item.querySelector('.checklist-item-text');
            const checkbox = item.querySelector('.checklist-item-checkbox');
            
            if (textElement) {
                items.push({
                    text: textElement.textContent,
                    completed: checkbox ? checkbox.checked : false,
                    id: Date.now() + Math.random() // Generate unique ID
                });
            }
        });
        
        return items;
    };

    const handleAddTodoSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Add Todo...");
        const formData = new FormData(elements.addTodoForm);
        const todoData = {
            title: formData.get('title'),
            description: formData.get('description'),
            dueDate: formData.get('dueDate'),
            priority: formData.get('priority'),
            notes: formData.get('notes'),
            checklist: getChecklistData(),
            completed: false
        };

        // Basic validation
        if (!todoData.title.trim()) {
            alert('Please enter a task title');
            return;
        }

        if (!todoData.description.trim()) {
            alert('Please enter a description');
            return;
        }

        if (!todoData.dueDate) {
            alert('Please enter a due date');
            return;
        }
        console.log("Todo Data Before Emit:", todoData);
        // Add an event listener to the button
        // Emit the addTodo event with the form data
        try {
            emit('addTodo', todoData);
            console.log("After Emit: Form title value is", document.getElementById('todoTitle').value);
            closeAddTodoModal();
        } catch (err) {
            console.error("Error during emit('addTodo'):", err);
    }
    };

    const initializeModalHandlers = () => {
        // Close modal when clicking on X
        if (elements.closeModal) {
            elements.closeModal.addEventListener('click', closeAddTodoModal);
        }

        // Close modal when clicking cancel button
        if (elements.cancelBtn) {
            elements.cancelBtn.addEventListener('click', closeAddTodoModal);
        }

        // Handle form submission
        if (elements.submitNewTodoBtn) {
            console.log("Added......")
            elements.submitNewTodoBtn.addEventListener('click', handleAddTodoSubmit);
        }

        if (elements.addChecklistBtn) {
            elements.addChecklistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                addChecklistItem();
            });
        }
    };

    // This function will be called in index.js
    const init = (initialGroups, defaultGroup) => {
        renderFilters();
        renderGroups(initialGroups);
        renderTodos(defaultGroup, defaultGroup.todos);
        initializeEventHandlers();
        // initializeModalHandlers();
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
