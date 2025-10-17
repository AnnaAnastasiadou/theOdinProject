const createTodo = function(title, description, dueDate, priority, completed, projectId) {
    return {
        id: Date.now() + Math.random(),
        createdDate: new Date(),
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: completed,
        projectId: projectId,
        notes: [],
        checklist: []
    };
}

export { createTodo };