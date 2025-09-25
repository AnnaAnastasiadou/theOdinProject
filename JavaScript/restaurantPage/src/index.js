import './styles.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

// Load homepage by default
loadHome();

document.getElementById('logo-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('about-btn').addEventListener('click', loadAbout);
document.getElementById('contact-btn').addEventListener('click', loadContact);