// dom.js
import { format, isToday, isTomorrow, isThisWeek, parseISO } from 'date-fns';

/**
 * DOM MODULE
 * Handles all UI interactions, rendering, and event communication.
 * Uses Pub/Sub pattern for clean decoupling from app logic.
 */
const DOM = () => {
    //  DOM ELEMENTS
    const elements = {
        filtersList: document.querySelector('.filters-list'),
        groupsList: document.querySelector('.groups-list'),
        todosPage: document.querySelector('.todos-page'),
        addGroupBtn: document.getElementById('add-group-btn'),

        // Add Todo Modal
        addTodoModal: document.getElementById('addTodoModal'),
        addTodoForm: document.getElementById('addTodoForm'),
        closeModal: document.querySelector('.close-modal'),
        cancelBtn: document.querySelector('.cancel-btn'),
        submitNewTodoBtn: document.getElementById('submit-new-todo-btn'),
        newChecklistItem: document.getElementById('newChecklistItem'),
        addChecklistBtn: document.getElementById('add-checklist-btn'),
        checklistItems: document.getElementById('checklistItems'),

        // View/Edit Modal
        viewEditTodoModal: document.getElementById('viewEditTodoModal'),
        viewEditTodoForm: document.getElementById('viewEditTodoForm'),
        closeViewEditModal: document.querySelector('.close-view-edit'),
        saveViewEditTodoBtn: document.getElementById('saveViewEditTodoBtn'),
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
    };

    const emit = (name, data) => events[name].forEach((cb) => cb(data));
    const on = (name, cb) => {
        if (events[name]) events[name].push(cb);
        return () => (events[name] = events[name].filter((fn) => fn !== cb));
    };

    //  HIGHLIGHT ACTIVE ITEM
    const highlightActiveItem = (type, id) => {
        document
            .querySelectorAll('.filter-item, .group-item')
            .forEach((el) => el.classList.remove('active'));

        const activeElement = document.querySelector(
            `[data-${type}-id="${id}"]`
        );
        if (activeElement) activeElement.classList.add('active');
    };

    //  GROUPS
    const handleAddGroup = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'New Group Name';
        input.className = 'add-group-input';
        elements.groupsList.insertAdjacentElement('afterbegin', input);
        input.focus();

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const name = input.value.trim();
                if (!name) return alert('Group name cannot be empty');
                emit('addGroup', name);
                input.remove();
            } else if (e.key === 'Escape') {
                input.remove();
            }
        });
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

            groupElement.addEventListener('click', () => {
                emit('groupChange', group.id);
                highlightActiveItem('group', group.id);
            });

            // Delete
            groupElement
                .querySelector('.delete-group')
                .addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (
                        confirm(
                            `Delete group "${group.name}" and all its tasks?`
                        )
                    ) {
                        emit('deleteGroup', group.id);
                    }
                });

            // Edit
            const editBtn = groupElement.querySelector('.edit-group');
            const nameSpan = groupElement.querySelector('.group-name');
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (groupElement.querySelector('input')) return;

                const input = document.createElement('input');
                input.value = group.name;
                input.className = 'edit-group-input';
                nameSpan.replaceWith(input);
                groupElement.classList.add('editing');
                input.focus();

                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') saveEdit();
                    else if (e.key === 'Escape') cancelEdit();
                });

                const saveEdit = () => {
                    const newName = input.value.trim();
                    if (!newName) return cancelEdit();
                    emit('editGroupName', { id: group.id, newName });
                    input.replaceWith(nameSpan);
                    groupElement.classList.remove('editing');
                };
                const cancelEdit = () => {
                    input.replaceWith(nameSpan);
                    groupElement.classList.remove('editing');
                };

                document.addEventListener(
                    'click',
                    (e) => {
                        if (!groupElement.contains(e.target)) cancelEdit();
                    },
                    { once: true }
                );
            });
        });
    };

    //  FILTERS
    const availableFilters = [
        { id: 'all', name: 'All Todos', icon: 'fa-list' },
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
            el.innerHTML = `<i class="fas ${f.icon}"></i>${f.name}`;
            el.addEventListener('click', () => {
                emit('filterChange', f.id);
                highlightActiveItem('filter', f.id);
            });
            elements.filtersList.appendChild(el);
        });
    };

    const applyGlobalFilter = (groups, filter) => {
        const allTodos = groups.flatMap((g) =>
            g.todos.map((t) => ({ ...t, groupName: g.name, groupId: g.id }))
        );

        if (filter === 'all') return { title: 'All Todos', todos: allTodos };

        const filtered = allTodos.filter((t) => {
            if (!t.dueDate) return false;
            const d = parseISO(t.dueDate);
            return filter === 'today'
                ? isToday(d)
                : filter === 'tomorrow'
                ? isTomorrow(d)
                : filter === 'week'
                ? isThisWeek(d)
                : true;
        });

        const titles = {
            today: 'Tasks Due Today',
            tomorrow: 'Tasks Due Tomorrow',
            week: 'Tasks Due This Week',
        };

        return { title: titles[filter] || 'Filtered Tasks', todos: filtered };
    };

    //  TODOS
    const renderTodos = (group, todos, type = 'group') => {
        elements.todosPage.innerHTML = '';
        const header = document.createElement('div');
        header.className = 'todos-header';
        header.innerHTML = `<h2 class="group-header">${group.name}</h2>`;
        elements.todosPage.appendChild(header);

        if (type === 'group') {
            header.insertAdjacentHTML(
                'beforeend',
                `
        <button class="add-btn"><i class="fa-solid fa-plus"></i> Add Todo</button>
        `
            );
        }

        if (!todos.length) {
            elements.todosPage.innerHTML += `
        <div class="empty-state">
            <i class="fa-solid fa-clipboard-list"></i>
            <h3>No Tasks Found</h3>
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
                <span class="creation-date">${format(
                    t.createdDate,
                    'dd/MM/yyyy'
                )}</span>
            </div>
            <p class="todo-description">${t.description}</p>
            <div class="todo-footer">
                <span class="due-date">
                <img src="https://img.icons8.com/fluency/48/calendar--v1.png"/> 
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
                    <i class="fa-solid fa-pen"></i> View/Edit
                </button>
                </span>
            </div>
        `;
            container.appendChild(el);
        });
    };

    //  CHECKLIST HELPERS
    const addChecklistItem = (text = '') => {
        const val = text || elements.newChecklistItem.value.trim();
        if (!val) return;

        const li = document.createElement('li');
        li.className = 'checklist-item';
        li.innerHTML = `
            <div class="checklist-item-content">
            <input type="checkbox" class="checklist-item-checkbox">
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
                id: Date.now() + Math.random(),
            })
        );

    const clearChecklist = () => (elements.checklistItems.innerHTML = '');

    //  MODALS (ADD + VIEW/EDIT)
    const openAddTodoModal = () => {
        elements.addTodoModal.style.display = 'block';
        elements.addTodoForm.reset();
        clearChecklist();
        document.getElementById('todoDueDate').min = new Date()
            .toISOString()
            .split('T')[0];
        document.getElementById('todoTitle').focus();
    };
    const closeAddTodoModal = () =>
        (elements.addTodoModal.style.display = 'none');

    const openViewEditTodoModal = (todo) => {
        const m = elements.viewEditTodoModal;
        m.style.display = 'block';
        m.dataset.todoId = todo.id;
        m.dataset.groupId = todo.groupId;
        document.getElementById('viewEditTitle').value = todo.title || '';
        document.getElementById('viewEditDescription').value =
            todo.description || '';
        document.getElementById('viewEditDueDate').value = todo.dueDate || '';
        document.getElementById('viewEditPriority').value =
            todo.priority || 'low';
        document.getElementById('viewEditNotes').value = todo.notes || '';
    };
    const closeViewEditTodoModal = () =>
        (elements.viewEditTodoModal.style.display = 'none');

    const handleAddTodoSubmit = (e) => {
        e.preventDefault();
        const f = new FormData(elements.addTodoForm);
        const data = {
            title: f.get('title').trim(),
            description: f.get('description').trim(),
            dueDate: f.get('dueDate'),
            priority: f.get('priority'),
            notes: f.get('notes'),
            checklist: getChecklistData(),
            completed: false,
        };

        if (!data.title || !data.description || !data.dueDate) {
            return alert('Please fill out all required fields.');
        }

        emit('addTodo', data);
        closeAddTodoModal();
    };

    const handleSaveViewEdit = () => {
        const f = new FormData(elements.viewEditTodoForm);
        const data = {
            id: Number(elements.viewEditTodoModal.dataset.todoId),
            groupId: Number(elements.viewEditTodoModal.dataset.groupId),
            title: f.get('title'),
            description: f.get('description'),
            dueDate: f.get('dueDate'),
            priority: f.get('priority'),
            notes: f.get('notes'),
        };
        emit('saveTodoEdit', data);
        closeViewEditTodoModal();
    };

    //  EVENT INITIALIZERS
    const initializeEventHandlers = () => {
        document.addEventListener('click', (e) => {
            const status = e.target.closest('.status');
            if (status) {
                e.preventDefault();
                emit('todoStatusToggle', {
                    todoId: Number(status.dataset.todoId),
                    groupId: Number(status.dataset.groupId),
                });
            }

            const addTodoBtn = e.target.closest('.add-btn');
            if (addTodoBtn) openAddTodoModal();

            const viewBtn = e.target.closest('.view-edit-todo-btn');
            if (viewBtn) {
                emit('viewEditTodo', {
                    todoId: Number(viewBtn.dataset.todoId),
                    groupId: Number(viewBtn.dataset.groupId),
                });
            }
        });

        elements.addGroupBtn.addEventListener('click', handleAddGroup);
        initializeModalHandlers();
    };

    const initializeModalHandlers = () => {
        // Add Todo Modal
        elements.closeModal.addEventListener('click', closeAddTodoModal);
        elements.cancelBtn.addEventListener('click', closeAddTodoModal);
        elements.submitNewTodoBtn.addEventListener(
            'click',
            handleAddTodoSubmit
        );
        elements.addChecklistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addChecklistItem();
        });

        // View/Edit Modal
        elements.saveViewEditTodoBtn.addEventListener(
            'click',
            handleSaveViewEdit
        );
        elements.closeViewEditModal.addEventListener(
            'click',
            closeViewEditTodoModal
        );
        document
            .querySelector('#viewEditTodoModal .cancel-btn')
            .addEventListener('click', closeViewEditTodoModal);
    };

    //  INITIALIZATION
    const init = (initialGroups, defaultGroup) => {
        renderFilters();
        renderGroups(initialGroups);
        renderTodos(defaultGroup, defaultGroup.todos);
        initializeEventHandlers();
        highlightActiveItem('group', defaultGroup.id);
    };

    //  PUBLIC INTERFACE
    return {
        init,
        renderGroups,
        renderTodos,
        renderFilteredTodos: ({ title, todos }) =>
            renderTodos({ name: title, id: 'filter-view' }, todos, 'filter'),
        applyGlobalFilter,
        openViewEditTodoModal,
        highlightActiveItem,

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
    };
};

export { DOM };
