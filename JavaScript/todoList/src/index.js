// Separate application logic (creating new todos, setting todos as complete, changing todo priority)
// from the DOM-related stuff - keep in separate modules
// use webpack / also use data-fns library
// Use localStorage to save data (JSON format)
// Make sure that the app doesn't crash if the data that you want to retrieve are not there

import './style.css';
import { App } from "./app.js";
import { DOM } from "./dom.js";
import { setupSidebarToggle } from "./sidebar.js";

document.addEventListener('DOMContentLoaded', () => {
    // Create the App instance (this runs its internal init)
    const appInstance = App();

    // Create the DOM instance, *injecting* the App
    const domInstance = DOM(appInstance);

    // Initialize the UI
    setupSidebarToggle();
    domInstance.init();

    // --- Testing ---
    // App.addGroup("GEIA SAS");
    // App.addTodo('Test todo', 'This goes to default group', '2024-01-25', 'high');
    
    // console.log('Current group:', App.getCurrentGroup().name);
    // App.addTodo('Test todo', 'This goes to default group', '2024-01-25', 'high');
});

