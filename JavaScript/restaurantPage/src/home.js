import {clearContent} from './utility.js';

function loadHome() {
    // Clear existing content before loading the new page
    clearContent();

    const content = document.getElementById('content');
    const homeHTML = `
        <div id="home-page" class="page">
            <h2>Welcome to the Loop Restaurant</h2>
            <p>Comfort food that brings you back again and again</p>
            <a href="#" class="reservation-link">Make a reservation now</a>
        </div>
    `;
    content.innerHTML = homeHTML;
}   

export default loadHome;
