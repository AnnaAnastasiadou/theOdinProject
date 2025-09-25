import {clearContent, setActiveButton } from './utility.js';

function loadAbout() {
    // Clear existing content
    clearContent();
    setActiveButton('about-btn');
}

export default loadAbout;