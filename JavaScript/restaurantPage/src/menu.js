import {clearContent} from './utility.js';
import appetizersImg from './images/appetizers.jpg';
import mainsImg from './images/mains.jpg';
import dessertsImg from './images/desserts.jpg';

// Helper function to find the corresponding image by ID
function getCategoryImg(categoryElement) {
    return categoryElement.querySelector('.mobile-img');
}

// Helper function to hide all images and show all menu item lists
function resetCategories(categories) {
    categories.forEach(category => {
        const img = getCategoryImg(category);
        const items = category.querySelector('.menu-items');

        category.classList.remove('show-image'); 
        if (img) {
            img.classList.remove('show-image');
        }

        if (items) {
            items.classList.remove('hidden-mobile');
        }
    });
}

// When you press on one of the menu sections
// on smaller screens the relative image should appear
function addMobileImageToggles() {
    if (window.innerWidth > 600) return;

    const categories = document.querySelectorAll('.menu-category');

    categories.forEach(category => {
        const img = getCategoryImg(category);
        const items = category.querySelector('.menu-items');

        // --- Category Click Listener (Shows Image) ---
        category.addEventListener("click", (e) => {
            if (e.target.classList.contains('menu-img')) return;
            if (!img || !items) return;

            resetCategories(categories);

            items.classList.add('hidden-mobile');
            category.classList.add('show-image'); 

            setTimeout(() => {
                img.classList.add('show-image');
            }, 10);
        });

        // --- Image Click Listener (Shows Menu Category) ---
        if (img) {
            img.addEventListener("click", () => {
                category.classList.remove('show-image');
                img.classList.remove('show-image');
                if (items) {
                    items.classList.remove('hidden-mobile');
                }
            });
        }
    });
}

function loadMenu() {
    // Clear existing content
    clearContent();

    const content = document.getElementById('content');
    const menuHTML = `
        <div id="menu-page" class="page">
            <div id="menu-intro">
                <h2>Our Menu</h2>
                <p>All dishes are prepared with locally sourced ingredients and served with passion.</p>
            </div>
            <div id="menu">
                <div class="menu-category" id="appetizers">
                    <h3 class="category-title">Appetizers</h3>
                    <img class="menu-img mobile-img" src="${appetizersImg}" alt="bruschetta">
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Garlic Bread <span class="item-price">£7.99</span></div>
                            <div class="item-description">Freshly baked bread with garlic butter and herbs</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Bruschetta <span class="item-price">£9.99</span></div>
                            <div class="item-description">Toasted bread topped with tomatoes, garlic, and basil</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Mozzarella Sticks <span class="item-price">£8.99</span></div>
                            <div class="item-description">Breaded and fried mozzarella served with marinara sauce</div>
                        </div>
                    </div>
                </div>
                <img class="menu-img desktop-img" src="${appetizersImg}" alt="bruschetta">
            
                <img class="menu-img desktop-img" src="${mainsImg}" alt="carbonara" height="500" width="500">
                <div class="menu-category" id="mains">
                    <h3 class="category-title">Main Courses</h3>
                    <img class="menu-img mobile-img" src="${mainsImg}" alt="carbonara">
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Spaghetti Carbonara <span class="item-price">£16.99</span></div>
                            <div class="item-description">Classic pasta with bacon, eggs, and parmesan cheese</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Grilled Salmon <span class="item-price">£22.99</span></div>
                            <div class="item-description">Fresh salmon fillet with lemon butter sauce and vegetables</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Beef burger <span class="item-price">£14.99</span></div>
                            <div class="item-description">8oz beef patty with lettuce, tomato, and Loop sauce</div>
                        </div>
                    </div>
                </div>

                <div class="menu-category" id="desserts">
                    <h3 class="category-title">Desserts</h3>
                    <img class="menu-img mobile-img" src="${dessertsImg}" alt="lava cake">
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Tiramisu <span class="item-price">£8.99</span></div>
                            <div class="item-description">Classic Italian dessert with coffee-soaked ladyfingers</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Chocolate Lava Cake <span class="item-price">£9.99</span></div>
                            <div class="item-description">Warm chocolate cake with a molten center, served with ice cream</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Cheesecake <span class="item-price">£7.99</span></div>
                            <div class="item-description">New York style cheesecake with berry compote</div>
                        </div>
                    </div>
                </div>
                <img class="menu-img desktop-img" id="desserts-img" src="${dessertsImg}" alt="lava cake" height="500" width="500">
            </div>
        </div>
    `;
    content.innerHTML = menuHTML;

    addMobileImageToggles(); 
}

export default loadMenu;