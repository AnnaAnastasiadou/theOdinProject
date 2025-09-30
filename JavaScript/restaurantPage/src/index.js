import './styles.css';
// Import utility functions (like navigate and clearContent)
import { navigate } from './utility.js';
// Import all page loading functions
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

// --- Application Setup ---
// Initial page load: Load the home page and set the logo button as active.
// The navigate function handles clearing content, loading the page, and updating the active button state.
navigate(loadHome, 'logo-btn');

// Attach Event Listeners for Navigation Buttons
document.getElementById('logo-btn').addEventListener('click', () => navigate(loadHome, 'logo-btn'));
document.getElementById('menu-btn').addEventListener('click', () => navigate(loadMenu, 'menu-btn'));
document.getElementById('about-btn').addEventListener('click', () => navigate(loadAbout, 'about-btn'));
document.getElementById('contact-btn').addEventListener('click', () => navigate(loadContact, 'contact-btn'));