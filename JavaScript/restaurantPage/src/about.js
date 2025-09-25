import {clearContent, setActiveButton } from './utility.js';
// <img src="https://images.unsplash.com/photo-1554679665-f5537f187268" alt="Restaurant interior">
// <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e" alt="Chef preparing food">
function loadAbout() {
    // Clear existing content
    clearContent();

    // Create about page and append to content
    const aboutPage = document.createElement('div');
    aboutPage.id = 'about-page';
    aboutPage.classList.add('page');
    content.appendChild(aboutPage);
    
    // Creating about elements
    const aboutText = document.createElement('div');
    const aboutImages = document.createElement('div');

    // Create about text content
    aboutText.innerHTML = `
        <p>Loop Restaurant was founded in 2010 by chef Maria Rodriguez, who dreamed of creating a place where people could enjoy delicious comfort food in a warm, inviting atmosphere.</p>
        <p>Our philosophy is simple: use the freshest ingredients, prepare everything with care, and treat every customer like family. Over the years, we've become a beloved neighborhood spot where people come to celebrate, connect, and of course, enjoy great food.</p>
        <p>We're proud to source our ingredients from local farms and producers, supporting our community while ensuring the highest quality for our dishes.</p>
        <h3>Our Team</h3>
        <p>Our talented team of chefs and staff work tirelessly to create memorable dining experiences. From our head chef with 20 years of experience to our friendly servers who know many of our regulars by name, everyone at Loop Restaurant is dedicated to making your visit special.</p>
    `;

    // Append element in about page
    aboutPage.appendChild(aboutText);
    aboutPage.appendChild(aboutImages);

    // Make menu button appear selected
    setActiveButton('about-btn');
}

export default loadAbout;