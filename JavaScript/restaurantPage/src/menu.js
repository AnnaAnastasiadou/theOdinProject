import {clearContent} from './utility.js';
import appetizersImg from './images/appetizers.jpg';
import mainsImg from './images/mains.jpg';
import dessertsImg from './images/desserts.jpg';

// Helper function to find the corresponding image by ID
function getCategoryFigure(categoryElement) {
    return categoryElement.querySelector('.mobile-figure');
}

// Helper function to hide all images and show all menu item lists
function resetCategories(categories) {
    categories.forEach(category => {
        const figure = getCategoryFigure(category);
        const img = figure ? figure.querySelector('.menu-img') : null;
        const items = category.querySelector('.menu-items');

        if (figure) {
            figure.classList.remove('show');
        }

        if (items) {
            items.classList.remove('hidden-mobile');
        }
    });
}

// When you press on one of the menu sections
// on smaller screens the relative image should appear
function addMobileImageToggles() {
    const mobileQuery = window.matchMedia('(max-width: 600px)');

    // 2. Check if the current screen size matches the mobile query
    if (!mobileQuery.matches) {
        // If it's a desktop screen, exit immediately
        return;
    } 

    const categories = document.querySelectorAll('.menu-category');
    resetCategories(categories); 
    categories.forEach(category => {
        const figure = getCategoryFigure(category);
        const img = figure ? figure.querySelector('.menu-img') : null;
        const items = category.querySelector('.menu-items');

        // --- Category Click Listener (Shows Image) ---
        category.addEventListener("click", (e) => {
            if (figure && figure.contains(e.target)) return; 
            if (!figure || !items) return;

            if (figure.classList.contains('show')) {
                figure.classList.remove('show');
                 items.classList.remove('hidden-mobile');
                 return;
            };

            resetCategories(categories);

            items.classList.add('hidden-mobile');

            setTimeout(() => {
                figure.classList.add('show');
            }, 10);
        });

        // --- Image Click Listener (Shows Menu Category) ---
        if (figure) {
            figure.addEventListener("click", () => {
                figure.classList.remove('show');
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
                    <figure class="mobile-figure">
                        <img class="menu-img mobile-img" src="${appetizersImg}" alt="bruschetta">
                        <figcaption class="caption-overlay">Bruschetta</figcaption>
                    </figure>                
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
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>
                <figure class="desktop-figure">
                    <img class="menu-img desktop-img" src="${appetizersImg}" alt="bruschetta">
                    <figcaption>Bruschetta</figcaption>
                </figure>
                <figure class="desktop-figure">           
                    <img class="menu-img desktop-img" src="${mainsImg}" alt="carbonara" height="500" width="500">
                    <figcaption class="caption-overlay">Carbonara</figcaption>
                </figure>
                <div class="menu-category" id="mains">
                    <h3 class="category-title">Main Courses</h3>
                    <figure class="mobile-figure">
                        <img class="menu-img mobile-img" src="${mainsImg}" alt="carbonara">
                        <figcaption class="caption-overlay">Carbonara</figcaption>
                    </figure>
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
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>

                <div class="menu-category" id="desserts">
                    <h3 class="category-title">Desserts</h3>
                    <figure class="mobile-figure">
                        <img class="menu-img mobile-img" src="${dessertsImg}" alt="lava cake">
                        <figcaption class="caption-overlay">Lava Cake</figcaption>
                    </figure>
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
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>
                <figure class="desktop-figure">
                    <img class="menu-img desktop-img" id="desserts-img" src="${dessertsImg}" alt="lava cake" height="500" width="500">
                    <figcaption class="caption-overlay">Lava Cake</figcaption>
                </figure>
            </div>
        </div>
    `;
    content.innerHTML = menuHTML;


    addMobileImageToggles(); 
    window.addEventListener('resize', addMobileImageToggles);

}

export default loadMenu;