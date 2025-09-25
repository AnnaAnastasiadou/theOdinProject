import {clearContent, setActiveButton } from './utility.js';

function loadMenu() {
    // Clear existing content
    clearContent();

    const content = document.getElementById('content');

    // Create menu page section and append it to content
    const menuPage = document.createElement('div');
    menuPage.id = 'menu-page';
    menuPage.classList.add('page');
    content.appendChild(menuPage);

    // Create menu elements 
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Our Menu';

    const menuDescription = document.createElement('p');
    menuDescription.textContent = 'All dishes are prepared with locally sourced ingredients and served with passion.';
    
    const appetizers = document.createElement('div');
    appetizers.classList.add = ('menu-category');
    
    const mainCourses = document.createElement('div');
    mainCourses.classList.add = ('menu-category');
    
    const desserts = document.createElement('div');
    desserts.classList.add = ('menu-category');
    
    // Add content in the appetizers section
    appetizers.innerHTML = `
        <h3>Appetizers</h3>
        <div class = "menu-item">
            <div class = "item-name">Garlic Bread <span class = "item-price">€7.99</span></div>
            <div class = "item-description">Freshly baked bread with garlic butter and herbs</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Bruschetta <span class = "item-price">€9.99</span></div>
            <div class = "item-description">Toasted bread topped with tomatoes, garlic, and basil</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Mozzarella Sticks <span class = "item-price">€8.99</span></div>
            <div class = "item-description">Breaded and fried mozzarella served with marinara sauce</div>
        </div>
    `;

    // Add content in the main courses section
    mainCourses.innerHTML = `
        <h3>Main Courses</h3>
        <div class = "menu-item">
            <div class = "item-name">Spaghetti Carbonara <span class = "item-price">€16.99</span></div>
            <div class = "item-description">Classic pasta with bacon, eggs, and parmesan cheese</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Grilled Salmon <span class = "item-price">€22.99</span></div>
            <div class = "item-description">Fresh salmon fillet with lemon butter sauce and vegetables</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Beef burger <span class = "item-price">€14.99</span></div>
            <div class = "item-description">8oz beef patty with lettuce, tomato, and Loop sauce</div>
        </div>
    `;

    desserts.innerHTML = `
        <h3>Desserts</h3>
        <div class = "menu-item">
            <div class = "item-name">Tiramisu <span class = "item-price">€8.99</span></div>
            <div class = "item-description">Classic Italian dessert with coffee-soaked ladyfingers</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Chocolate Lava Cake <span class = "item-price">€9.99</span></div>
            <div class = "item-description">Warm chocolate cake with a molten center, served with ice cream</div>
        </div>
        <div class = "menu-item">
            <div class = "item-name">Cheesecake <span class = "item-price">€7.99</span></div>
            <div class = "item-description">New York style cheesecake with berry compote</div>
        </div>
    `;

    // Add elements in the content
    menuPage.appendChild(menuHeader);
    menuPage.appendChild(menuDescription);
    menuPage.appendChild(appetizers);
    menuPage.appendChild(mainCourses);
    menuPage.appendChild(desserts);

    // Make menu button appear selected
    setActiveButton('menu-btn');
}

export default loadMenu;