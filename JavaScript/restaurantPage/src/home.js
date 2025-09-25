import {clearContent, setActiveButton} from './utility.js';

function loadHome() {
    const content = document.getElementById('content');

    // Clear existing content
    clearContent();

    // Create home page div and append to content
    const homePage = document.createElement('div');
    homePage.id = 'home-page';
    homePage.className = 'page';
    content.appendChild(homePage);

    // Create welcome section
    const welcomeSection = document.createElement('div');
    welcomeSection.id = 'welcome-section';


   // Create elements of the home page
    const welcomeHeadline = document.createElement('h2');
    welcomeHeadline.textContent = 'Welcome to the Loop Restaurant';

    const welcomeText = document.createElement('p');
    welcomeText.textContent = 'Comfort food that brings you back again and again';

    const reservationLink = document.createElement('a');
    reservationLink.textContent = 'Make a reservation now';
    reservationLink.href = '#';
    reservationLink.className = 'reservation-link';
    
    // Append elements to welcome section
    welcomeSection.appendChild(welcomeHeadline);
    welcomeSection.appendChild(welcomeText);


    // Append elements to home page
    homePage.appendChild(welcomeSection);
    homePage.appendChild(reservationLink);

    // Make logo button to appear selected
    setActiveButton('logo-btn');
}   

export default loadHome;
