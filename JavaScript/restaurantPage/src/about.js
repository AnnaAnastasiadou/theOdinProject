import {clearContent, setActiveButton } from './utility.js';
// <img src="https://images.unsplash.com/photo-1554679665-f5537f187268" alt="Restaurant interior">
// <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e" alt="Chef preparing food">
function loadAbout() {
    // Clear existing content
    clearContent();

    const content = document.getElementById('content');
    const aboutHTML = `
        <div id="about-page" class="page">
            <h2>About Us</h2>
            <p>The Loop Restaurant was founded on a simple principle: to create a welcoming place where friends and family can enjoy simple, delicious food.</p>
            <p>Our chefs are passionate about using the freshest local ingredients to craft dishes that are both comforting and unforgettable. We believe that great food and great company go hand in hand, and we look forward to welcoming you to our table.</p>
        </div>
    `;
    content.innerHTML = aboutHTML;
}

export default loadAbout;