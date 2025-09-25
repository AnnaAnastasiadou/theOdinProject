import './styles.css';
import loadHome from './home.js';

// Load homepage by default
loadHome();


document.getElementById('logo-btn').addEventListener('click', loadHome);
// document.getElementById('menu-btn').addEventListener('click', loadHome);
// document.getElementById('about-btn').addEventListener('click', loadHome);
// document.getElementById('contact-btn').addEventListener('click', loadHome);