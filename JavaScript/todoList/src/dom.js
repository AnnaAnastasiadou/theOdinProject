// dom.js
import { format, isToday, isTomorrow, isThisWeek, parseISO } from 'date-fns';

/**
 * DOM MODULE
 * Handles all UI interactions, rendering, and event communication.
 * Implements a Pub/Sub pattern to cleanly decouple the UI from core application logic.
 */
const DOM = () => {
    // Centralized access to all necessary HTML elements.
    const elements = {
        filtersList: document.querySelector('.filters-list'),
        groupsList: document.querySelector('.groups-list'),
        todosPage: document.querySelector('.todos-page'),
        addGroupBtn: document.getElementById('add-group-btn'),

        // Todo Modal Elements
        todoModal: document.getElementById('todoModal'),
        todoForm: document.getElementById('todoForm'),
        todoModalTitle: document.getElementById('todoModalTitle'),
        closeModalBtn: document.querySelector('#todoModal .close-modal'),
        cancelBtn: document.querySelector('#todoModal .cancel-btn'),
        submitTodoBtn: document.getElementById('submitTodoBtn'),

        // ADD THESE MISSING FORM ELEMENTS:
        todoId: document.getElementById('todoId'),
        todoGroupId: document.getElementById('todoGroupId'),
        todoTitle: document.getElementById('todoTitle'),
        todoDescription: document.getElementById('todoDescription'),
        todoDueDate: document.getElementById('todoDueDate'),
        todoPriority: document.getElementById('todoPriority'),
        todoNotes: document.getElementById('todoNotes'),

        newChecklistItem: document.getElementById('newChecklistItem'),
        addChecklistBtn: document.getElementById('add-checklist-btn'),
        checklistItems: document.getElementById('checklistItems'),
    };

    //  PUB/SUB EVENT SYSTEM
    const events = {
        filterChange: [],
        groupChange: [],
        todoStatusToggle: [],
        addTodo: [],
        deleteGroup: [],
        editGroupName: [],
        addGroup: [],
        viewEditTodo: [],
        saveTodoEdit: [],
        deleteTodo: [],
    };

    /* Publishes an event to all subscribers. */
    const emit = (name, data) => events[name]?.forEach((cb) => cb(data));

    /* Subscribes a callback to an event, returning an unsubscribe function. */
    const on = (name, cb) => {
        if (!events[name]) return;

        events[name].push(cb);
        return () => (events[name] = events[name].filter((fn) => fn !== cb));
    };

    //  UTILITIES & HIGHLIGHTING
    const highlightActiveItem = (type, id) => {
        // Remove 'active' from all potentially active elements
        document
            .querySelectorAll('.filter-item, .group-item')
            .forEach((el) => el.classList.remove('active'));

        // Find and highlight the new active element
        const activeElement = document.querySelector(
            `[data-${type}-id="${id}"]`
        );
        if (activeElement) activeElement.classList.add('active');
    };

    //  GROUP RENDERING & ACTIONS
    const handleAddGroup = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'New Group Name';
        input.className = 'add-group-input';

        // Add input before any existing content
        elements.groupsList.insertAdjacentElement('afterbegin', input);
        input.focus();

        const finishEdit = (name) => {
            if (!elements.groupsList.contains(input)) return;
            input.remove();
            document.removeEventListener('click', clickOutsideHandler);
            if (name) {
                emit('addGroup', name);
            }
        };

        const clickOutsideHandler = (e) => {
            if (e.target !== input) {
                finishEdit(null);
            }
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const name = input.value.trim();
                if (!name) return alert('Group name cannot be empty');
                finishEdit(name);
            } else if (e.key === 'Escape') {
                finishEdit(null);
            }
        });

        setTimeout(() => {
            document.addEventListener('click', clickOutsideHandler);
        }, 0);
    };

    const renderGroups = (groups) => {
        elements.groupsList.innerHTML = '';

        groups.forEach((group) => {
            const groupElement = document.createElement('h3');
            groupElement.className = 'group-item';
            groupElement.dataset.groupId = group.id;
            groupElement.innerHTML = `
                <span class="group-name">${group.name}</span>
                <span class="group-actions">
                    <i class="fa-solid fa-trash delete-group"></i>
                    <i class="fa-solid fa-pen-to-square edit-group"></i>
                </span>
            `;
            elements.groupsList.appendChild(groupElement);

            const nameSpan = groupElement.querySelector('.group-name');
            const editBtn = groupElement.querySelector('.edit-group');
            const deleteBtn = groupElement.querySelector('.delete-group');

            // View Group Todos on click
            groupElement.addEventListener('click', () => {
                emit('groupChange', group.id);
                highlightActiveItem('group', group.id);
            });

            // Delete Handler
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (
                    confirm(`Delete group "${group.name}" and all its tasks?`)
                ) {
                    emit('deleteGroup', group.id);
                }
            });

            // Edit Handler
            const saveEdit = (input) => {
                const newName = input.value.trim();
                if (!newName) return cancelEdit();
                emit('editGroupName', { id: group.id, newName });
                input.replaceWith(nameSpan);
                groupElement.classList.remove('editing');
            };

            const cancelEdit = () => {
                const currentInput =
                    groupElement.querySelector('.edit-group-input');
                if (currentInput) {
                    currentInput.replaceWith(nameSpan);
                    groupElement.classList.remove('editing');
                }
            };

            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (groupElement.querySelector('input')) return; // Already editing

                const input = document.createElement('input');
                input.value = group.name;
                input.className = 'edit-group-input';

                nameSpan.replaceWith(input);
                groupElement.classList.add('editing');
                input.focus();

                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') saveEdit(input);
                    else if (e.key === 'Escape') cancelEdit();
                });

                // Click-outside-to-cancel logic
                document.addEventListener(
                    'click',
                    (e) => {
                        // Check if the click target is NOT within the group element itself
                        if (!groupElement.contains(e.target)) cancelEdit();
                    },
                    { once: true } // Automatically removes listener after the first click
                );
            });
        });
    };

    //  FILTERS
    const availableFilters = [
        { id: 'all', name: 'All To-dos', icon: 'fa-list' },
        { id: 'today', name: 'Today', icon: 'fa-calendar-day' },
        { id: 'tomorrow', name: 'Tomorrow', icon: 'fa-forward' },
        { id: 'week', name: 'This Week', icon: 'fa-calendar-week' },
    ];

    const renderFilters = () => {
        elements.filtersList.innerHTML = '';
        availableFilters.forEach((f) => {
            const el = document.createElement('h3');
            el.className = 'filter-item';
            el.dataset.filterId = f.id;
            el.innerHTML = `<i class="fas ${f.icon}"></i> ${f.name}`;

            el.addEventListener('click', () => {
                emit('filterChange', f.id);
                highlightActiveItem('filter', f.id);
            });
            elements.filtersList.appendChild(el);
        });
    };

    const applyGlobalFilter = (groups, filter) => {
        // Flatten all todos from all groups into a single array, adding group context
        const allTodos = groups.flatMap((g) =>
            g.todos.map((t) => ({ ...t, groupName: g.name, groupId: g.id }))
        );

        if (filter === 'all') return { title: 'All To-dos', todos: allTodos };

        const filtered = allTodos.filter((t) => {
            if (!t.dueDate) return false;
            const d = parseISO(t.dueDate);

            switch (filter) {
                case 'today':
                    return isToday(d);
                case 'tomorrow':
                    return isTomorrow(d);
                case 'week':
                    return isThisWeek(d);
                default:
                    return true;
            }
        });

        const titles = {
            today: 'To-dos Due Today',
            tomorrow: 'To-dos Due Tomorrow',
            week: 'To-dos Due This Week',
        };

        return { title: titles[filter] || 'Filtered To-dos', todos: filtered };
    };

    //  TODOS RENDERING
    const renderTodos = (group, todos, type = 'group') => {
        elements.todosPage.innerHTML = '';
        const header = document.createElement('div');
        header.className = 'todos-header';
        header.innerHTML = `<h2 class="group-header">${group.name}</h2>`;
        elements.todosPage.appendChild(header);

        if (type === 'group') {
            header.insertAdjacentHTML(
                'beforeend',
                `<button class="add-btn"><i class="fa-solid fa-plus"></i> Add To-do</button>`
            );
        }

        if (!todos.length) {
            elements.todosPage.innerHTML += `
                <div class="empty-state">
                    <i class="fa-solid fa-clipboard-list"></i>
                    <h3>No To-dos Found</h3>
                </div>`;
            return;
        }

        const container = document.createElement('div');
        container.className = 'todos-container';
        elements.todosPage.appendChild(container);

        todos.forEach((t) => {
            const gId = t.groupId || group.id;
            const el = document.createElement('div');
            el.className = `todo-card priority-${t.priority} ${
                t.completed ? 'completed' : ''
            }`;
            el.dataset.todoId = t.id;
            el.dataset.groupId = gId;

            el.innerHTML = `
                <div class="todo-header">
                    <h3 class="todo-title">${t.title}</h3>
                    <span class="creation-date">Created: ${format(
                        t.createdDate,
                        'dd/MM/yyyy'
                    )}</span>
                </div>
                <p class="todo-description">${t.description}</p>
                <div class="todo-footer">
                    <span class="due-date">
                        <i class="fa-solid fa-calendar-alt"></i> 
                        Due: ${format(t.dueDate, 'dd/MM/yyyy')}
                    </span>
                    <span class="todo-action">
                        <button class="status completed-${t.completed}" 
                            data-todo-id="${t.id}" data-group-id="${gId}">
                            ${
                                t.completed
                                    ? '<i class="fa-regular fa-circle-check"></i>Completed'
                                    : '<i class="fa-solid fa-hourglass-start"></i>Pending'
                            }
                        </button>
                        <button class="view-edit-todo-btn" data-todo-id="${
                            t.id
                        }" data-group-id="${gId}">
                            <i class="fa-solid fa-pen-to-square"></i> View/Edit
                        </button>
                        <button class="delete-todo-btn"
                            data-todo-id="${t.id}" data-group-id="${gId}">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </span>
                </div>
            `;
            container.appendChild(el);
        });
    };

    //  CHECKLIST HELPERS
    const addChecklistItem = (text = '', completed = false) => {
        const val = text || elements.newChecklistItem.value.trim();
        if (!val) return;

        const li = document.createElement('li');
        li.className = 'checklist-item';

        li.innerHTML = `
            <div class="checklist-item-content">
            <input type="checkbox" class="checklist-item-checkbox" ${
                completed ? 'checked' : ''
            }>
            <span class="checklist-item-text">${val}</span>
            </div>
            <button type="button" class="remove-checklist-item">
            <i class="fas fa-times"></i>
            </button>
        `;
        li.querySelector('.remove-checklist-item').addEventListener(
            'click',
            () => li.remove()
        );
        elements.checklistItems.appendChild(li);
        elements.newChecklistItem.value = '';
    };

    const getChecklistData = () =>
        [...elements.checklistItems.querySelectorAll('.checklist-item')].map(
            (li) => ({
                text:
                    li.querySelector('.checklist-item-text').textContent || '',
                completed:
                    li.querySelector('.checklist-item-checkbox').checked ||
                    false,
                id: Date.now() + Math.random(), // Simple unique ID for the item
            })
        );

    const clearChecklist = () => (elements.checklistItems.innerHTML = '');

    // MODAL MANAGEMENT
    const openTodoModal = (mode = 'add', todoData = null) => {
        // Reset form and clear checklist
        elements.todoForm.reset();
        elements.todoModal.querySelectorAll('.invalid-field').forEach((el) => {
            el.classList.remove('invalid-field');
        });
        clearChecklist();

        // Set modal title and button text based on mode
        if (mode === 'edit') {
            elements.todoModalTitle.textContent = 'Edit To-do';
            elements.submitTodoBtn.textContent = 'Save Changes';

            // Populate form with existing data
            if (todoData) {
                elements.todoId.value = todoData.id;
                elements.todoGroupId.value = todoData.groupId;
                elements.todoTitle.value = todoData.title || '';
                elements.todoDescription.value = todoData.description || '';
                elements.todoDueDate.value = todoData.dueDate || '';
                elements.todoPriority.value = todoData.priority || 'low';
                elements.todoNotes.value = todoData.notes || '';

                // Populate checklist
                if (todoData.checklist && todoData.checklist.length > 0) {
                    todoData.checklist.forEach((item) =>
                        addChecklistItem(item.text, item.completed)
                    );
                }
            }
        } else {
            elements.todoModalTitle.textContent = 'Add New To-do';
            elements.submitTodoBtn.textContent = 'Add To-do';

            // Set min date to today for new to-do
            elements.todoDueDate.min = format(new Date(), 'yyyy-MM-dd');
        }

        elements.todoModal.style.display = 'block';
        // elements.todoTitle.focus();
    };

    const closeTodoModal = () => {
        elements.todoModal.style.display = 'none';
    };

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        // Clear previous invalid highlighting
        elements.todoForm.querySelectorAll('.invalid-field').forEach((el) => {
            el.classList.remove('invalid-field');
        });

        const formData = new FormData(elements.todoForm);
        const todoData = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            dueDate: formData.get('dueDate'),
            priority: formData.get('priority'),
            notes: formData.get('notes'),
            checklist: getChecklistData(),
            completed: false,
        };

        let isValid = true;

        if (!todoData.title) {
            elements.todoTitle.classList.add('invalid-field');
            isValid = false;
        }
        if (!todoData.description) {
            elements.todoDescription.classList.add('invalid-field');
            isValid = false;
        }
        if (!todoData.dueDate) {
            elements.todoDueDate.classList.add('invalid-field');
            isValid = false;
        }

        if (!isValid) {
            alert('Please fill out all required fields.');
            elements.todoForm.querySelector('.invalid-field')?.focus();
            return;
        }

        // Determine if we're adding or editing
        const todoId = elements.todoId.value;
        if (todoId) {
            // Editing existing todo
            todoData.id = Number(todoId);
            todoData.groupId = Number(elements.todoGroupId.value);
            emit('saveTodoEdit', todoData);
        } else {
            // Adding new todo
            emit('addTodo', todoData);
        }

        closeTodoModal();
    };

    //  EVENT INITIALIZERS
    const initializeEventHandlers = () => {
        document.addEventListener('click', (e) => {
            // Handle Todo Status Toggle
            const status = e.target.closest('.status');
            if (status) {
                e.preventDefault();
                emit('todoStatusToggle', {
                    todoId: Number(status.dataset.todoId),
                    groupId: Number(status.dataset.groupId),
                });
            }

            // Handle Open Add Todo Modal Button
            const addTodoBtn = e.target.closest('.add-btn');
            if (addTodoBtn && !addTodoBtn.id) {
                e.preventDefault();
                openTodoModal('add');
            }

            const viewEditBtn = e.target.closest('.view-edit-todo-btn');
            if (viewEditBtn) {
                e.preventDefault();
                emit('viewEditTodo', {
                    todoId: Number(viewEditBtn.dataset.todoId),
                    groupId: Number(viewEditBtn.dataset.groupId),
                });
            }

            const deleteTodoBtn = e.target.closest('.delete-todo-btn');
            if (deleteTodoBtn) {
                e.preventDefault();
                const todoId = Number(deleteTodoBtn.dataset.todoId);
                const groupId = Number(deleteTodoBtn.dataset.groupId);

                if (confirm('Are you sure you want to delete this to-do?')) {
                    emit('deleteTodo', { todoId, groupId });
                }
            }
        });

        // Modal handlers
        elements.closeModalBtn.addEventListener('click', closeTodoModal);
        elements.cancelBtn.addEventListener('click', closeTodoModal);
        elements.todoForm.addEventListener('submit', handleTodoSubmit);

        // Checklist - add item on button click
        elements.addChecklistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addChecklistItem();
        });

        // Checklist - add item on Enter key
        elements.newChecklistItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addChecklistItem();
            }
        });

        // Add Group button listener
        elements.addGroupBtn.addEventListener('click', handleAddGroup);
    };

    //  MAIN INITIALIZATION
    const init = (initialGroups, defaultGroup) => {
        renderFilters();
        renderGroups(initialGroups);
        renderTodos(defaultGroup, defaultGroup.todos);

        initializeEventHandlers();

        highlightActiveItem('group', defaultGroup.id);
    };

    return {
        init,
        renderGroups,
        renderTodos,
        renderFilteredTodos: ({ title, todos }) =>
            renderTodos({ name: title, id: 'filter-view' }, todos, 'filter'),
        applyGlobalFilter,
        highlightActiveItem,
        openTodoModal,

        // Event subscriptions
        onFilterChange: (cb) => on('filterChange', cb),
        onGroupChange: (cb) => on('groupChange', cb),
        onTodoStatusToggle: (cb) => on('todoStatusToggle', cb),
        onAddTodo: (cb) => on('addTodo', cb),
        onDeleteGroup: (cb) => on('deleteGroup', cb),
        onEditGroupName: (cb) => on('editGroupName', cb),
        onAddGroup: (cb) => on('addGroup', cb),
        onViewEditTodo: (cb) => on('viewEditTodo', cb),
        onSaveTodoEdit: (cb) => on('saveTodoEdit', cb),
        onDeleteTodo: (cb) => on('deleteTodo', cb),
    };
};

export { DOM };
