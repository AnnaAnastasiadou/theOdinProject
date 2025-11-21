const createGroup = function(name) {
    return {
        id: Date.now() + Math.random(),
        name: name,
        todos: []
    };
}

export { createGroup };