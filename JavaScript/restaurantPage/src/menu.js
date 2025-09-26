import {clearContent, setActiveButton } from './utility.js';

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
                <div class="menu-category">
                    <h3 class="category-title">Appetizers</h3>
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
                
                <div class="menu-category">
                    <h3 class="category-title">Main Courses</h3>
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
                
                <div class="menu-category">
                    <h3 class="category-title">Desserts</h3>
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
        </div>
    `;
    content.innerHTML = menuHTML;
}

export default loadMenu;