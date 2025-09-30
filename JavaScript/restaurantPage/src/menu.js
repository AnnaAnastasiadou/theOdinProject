import {clearContent} from './utility.js';
import appetizersImg from './images/appetizers.jpg';
import mainsImg from './images/mains.jpg';
import dessertsImg from './images/desserts.jpg';

// Helper function to find the corresponding image container (figure element))
function getCategoryFigure(categoryElement) {
    return categoryElement.querySelector('.mobile-figure');
}

// Helper function to reset the state: hide all images and show all menu item lists
function resetCategories(categories) {
    categories.forEach(category => {
        const figure = getCategoryFigure(category);
        const img = figure ? figure.querySelector('.menu-img') : null;
        const items = category.querySelector('.menu-items');

        // Hide the mobile image figure
        if (figure) {
            figure.classList.remove('show');
        }

        // Show the menu items list
        if (items) {
            items.classList.remove('hidden-mobile');
        }
    });
}

/*
 * Adds click listeners to toggle between the category list and the corresponding image 
 * on mobile screens only, ensuring only one view is active at a time.
 */
function addMobileImageToggles() {
    // Determine if the current view size requires the mobile toggle behavior
    const mobileQuery = window.matchMedia('(max-width: 600px)');

    // If it's a desktop screen, we rely on CSS for layout, so we exit.
    if (!mobileQuery.matches) {
        return;
    } 

    const categories = document.querySelectorAll('.menu-category');
    // Ensure the initial state is clean
    resetCategories(categories); 
    
    categories.forEach(category => {
        const figure = getCategoryFigure(category);
        const items = category.querySelector('.menu-items');

        // --- Category Click Listener (Shows Image) ---
        category.addEventListener("click", (e) => {
            // If the click happened on the image/figure itself, let the image handler handle it
            if (figure && figure.contains(e.target)) return; 
            if (!figure || !items) return;

            // Toggles state: If the figure is already showing, clicking the category hides it
            if (figure.classList.contains('show')) {
                figure.classList.remove('show');
                 items.classList.remove('hidden-mobile');
                 return;
            };

            // Reset all other categories to ensure only one is open
            resetCategories(categories);

            // Hide the list of items for the current category
            items.classList.add('hidden-mobile');

            // Show the figure image after a slight delay
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
            <div class="intro">
                <h2>Our Menu</h2>
                <p>All dishes are prepared with locally sourced ingredients and served with passion.</p>
            </div>
            <div id="menu">
                <div class="menu-category card border" id="appetizers">
                    <h3 class="title">Antipasti (Appetizers)</h3>
                    <figure class="mobile-figure">
                        <img loading="lazy" class="menu-img mobile-img" src="${appetizersImg}" alt="bruschetta">
                        <figcaption class="caption-overlay">Bruschetta</figcaption>
                    </figure>                
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Pane all’Aglio <span class="item-price">€7.99</span></div>
                            <div class="item-description">Freshly baked bread brushed with garlic butter and aromatic herbs</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Bruschetta al Pomodoro <span class="item-price">€9.99</span></div>
                            <div class="item-description">Rustic toasted bread topped with vine-ripened tomatoes, garlic, basil, and a drizzle of extra virgin olive oil</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Bastoncini di Mozzarella <span class="item-price">€8.99</span></div>
                            <div class="item-description">Crispy golden breaded mozzarella served with a rich marinara sauce</div>
                        </div>
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>
                <figure class="desktop-figure">
                    <img loading="lazy" class="menu-img desktop-img" src="${appetizersImg}" alt="bruschetta">
                    <figcaption>Bruschetta</figcaption>
                </figure>
                <figure class="desktop-figure">           
                    <img loading="lazy" class="menu-img desktop-img" src="${mainsImg}" alt="carbonara" height="500" width="500">
                    <figcaption class="caption-overlay">Carbonara</figcaption>
                </figure>
                <div class="menu-category card border" id="mains">
                    <h3 class="title">Secondi Piatti (Main Courses)</h3>
                    <figure class="mobile-figure">
                        <img loading="lazy" class="menu-img mobile-img" src="${mainsImg}" alt="carbonara">
                        <figcaption class="caption-overlay">Carbonara</figcaption>
                    </figure>
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Spaghetti alla Carbonara <span class="item-price">€16.99</span></div>
                            <div class="item-description">Classic Roman pasta with guanciale, eggs, and pecorino romano</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Risotto ai Funghi Porcin <span class="item-price">€18.99</span></div>
                            <div class="item-description">Creamy Arborio rice with porcini mushrooms and parmesan</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Lasagna alla Classica <span class="item-price">€14.99</span></div>
                            <div class="item-description">Layers of fresh pasta, ragù, béchamel, and parmesan</div>
                        </div>
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>

                <div class="menu-category card border" id="desserts">
                    <h3 class="title">Dolci (Desserts)</h3>
                    <figure class="mobile-figure">
                        <img loading="lazy" class="menu-img mobile-img" src="${dessertsImg}" alt="lava cake">
                        <figcaption class="caption-overlay">Lava Cake</figcaption>
                    </figure>
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-name">Tiramisù Classico <span class="item-price">€8.99</span></div>
                            <div class="item-description">Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Torta al Cioccolato Fondente <span class="item-price">€9.99</span></div>
                            <div class="item-description">Warm dark chocolate cake with a molten center, served with vanilla gelato</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">Panna Cotta alla Vaniglia <span class="item-price">€7.99</span></div>
                            <div class="item-description">Silky vanilla cream pudding with a raspberry coulis</div>
                        </div>
                        <small class="tap-hint">Tap to view</small>
                    </div>
                </div>
                <figure class="desktop-figure">
                    <img loading="lazy" class="menu-img desktop-img" id="desserts-img" src="${dessertsImg}" alt="lava cake" height="500" width="500">
                    <figcaption class="caption-overlay">Lava Cake</figcaption>
                </figure>
            </div>
        </div>
    `;
    // Inject the HTML into the main content container
    content.innerHTML = menuHTML;

    // Attach mobile image toggles (will only apply listeners if the screen is small enough)
    addMobileImageToggles(); 
    window.addEventListener('resize', addMobileImageToggles);
}

export default loadMenu;