import './styles.css';
import { navigate } from './utility.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

// Initial page load
navigate(loadHome, 'logo-btn');

document.getElementById('logo-btn').addEventListener('click', () => navigate(loadHome, 'logo-btn'));
document.getElementById('menu-btn').addEventListener('click', () => navigate(loadMenu, 'menu-btn'));
document.getElementById('about-btn').addEventListener('click', () => navigate(loadAbout, 'about-btn'));
document.getElementById('contact-btn').addEventListener('click', () => navigate(loadContact, 'contact-btn'));