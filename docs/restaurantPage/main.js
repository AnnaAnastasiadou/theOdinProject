/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _images_baking_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/baking.jpg */ "./src/images/baking.jpg");
/* harmony import */ var _images_family_eating_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/family-eating.jpg */ "./src/images/family-eating.jpg");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");





function loadAbout() {
    // Clear existing content
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();

    const content = document.getElementById('content');
    const aboutHTML = `
        <div id="about-page" class="page">
            <div class="intro">
                <h2 id="about-header">Our Story</h2>
                <p class="introduction">From a small family kitchen to a beloved neighborhood institution</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <div class="story section card">
                        <h3 class="title">Our Beginning</h3>
                        <p>Loop Restaurant was founded in 2010 by chef Maria Rodriguez, who dreamed of creating a place where people could enjoy delicious comfort food in a warm, inviting atmosphere. What started as a small 30-seat eatery has grown into a neighborhood favorite, but we've never lost sight of our roots.</p>
                        <p>Maria's philosophy was simple: "Food should make you feel good, and the dining experience should make you feel at home." This guiding principle has shaped everything we do at Loop Restaurant.</p>
                    </div>
                    
                    <div class="story section card">
                        <h3 class="title">Our Philosophy</h3>
                        <p>We believe that great food begins with great ingredients. That's why we've developed relationships with local farmers and producers who share our commitment to quality and sustainability.</p>
                        <p>Our menu changes with the seasons, allowing us to showcase the best of what our region has to offer. From spring's first asparagus to autumn's hearty squash, we celebrate the natural rhythms of the land.</p>
                    </div>
                </div>
            
                <div class="about-images section">
                    <img loading="lazy" class="about-img" src=${_images_baking_jpg__WEBPACK_IMPORTED_MODULE_1__} alt="Chef preparing food">
                    <img loading="lazy" class="about-img" src=${_images_family_eating_jpg__WEBPACK_IMPORTED_MODULE_2__} alt="Family eating together">
                </div>
            </div>

            <div class="values section">
                <h3>Our Values</h3>
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">
                            <img loading="lazy" src="https://img.icons8.com/3d-fluency/94/ingredients.png" alt="Quality Ingredients Icon">
                        </div>
                        <div class="title">Quality Ingredients</div>
                        <p>We source the freshest, highest-quality ingredients from local farms and producers.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <img loading="lazy" src="https://img.icons8.com/emoji/48/folded-hands-emoji.png" alt="Quality Ingredients Icon">
                        </div>
                        <div class="title">Craftsmanship</div>
                        <p>Our chefs bring years of experience and passion to every dish they create.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <img loading="lazy" src="https://img.icons8.com/color/48/conference-call--v1.png" alt="Quality Ingredients Icon">
                        </div>
                        <div class="title">Community</div>                        
                        <p>We're proud to be part of the neighborhood and support local initiatives.</p>
                    </div>
                    <div class="value-card">  
                        <div class="value-icon">
                            <img loading="lazy" src="https://img.icons8.com/fluency/48/sustainability.png" alt="Quality Ingredients Icon">
                        </div>                  
                        <div class="title">Sustainability</div>
                        <p>We're committed to environmentally responsible practices in our kitchen and operations.</p>
                    </div>
                </div>
            </div>
            
            <div class="quotes section">
                <div class="quote">"Good food is all the sweeter when shared with good company."</div>
                <div class="quote-author">- Maria Rodriguez, Founder</div>
            </div>

            <div class="timeline section">
                <div class="timeline-items">
                    <div class="timeline-item card">
                        <div class="timeline-content">
                            <div class="timeline-year">2010</div>
                            <p>Loop Restaurant opens its doors with just 8 tables and a simple menu of comfort classics.</p>
                        </div>
                    </div>
                    <div class="timeline-item card">
                        <div class="timeline-content">
                            <div class="timeline-year">2013</div>
                            <p>We expand our space and add a full bar, allowing us to serve craft cocktails alongside our food.</p>
                        </div>
                    </div>
                    <div class="timeline-item card">
                        <div class="timeline-content">
                            <div class="timeline-year">2015</div>
                            <p>Loop Restaurant receives the "Best Neighborhood Restaurant" award from City Magazine.</p>
                        </div>
                    </div>
                    <div class="timeline-item card">
                        <div class="timeline-content">
                            <div class="timeline-year">2018</div>
                            <p>We launch our farm partnership program, sourcing over 70% of our ingredients locally.</p>
                        </div>
                    </div>
                    <div class="timeline-item card">
                        <div class="timeline-content">
                            <div class="timeline-year">2022</div>
                            <p>We complete our most recent renovation, adding a private dining room and expanding our kitchen.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    `;
    content.innerHTML = aboutHTML;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");


function validateForm() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    
    // Use a class to manage error border styling
    const errorClass = 'error-input-border';
    let isValid = true;
    let errorMessages = []; // Array to collect all errors

    // 1. Reset all error indications
    nameInput.classList.remove(errorClass);
    emailInput.classList.remove(errorClass);
    messageInput.classList.remove(errorClass);

    // A. Check for Empty Fields
    if (nameInput.value.trim() === '') {
        nameInput.classList.add(errorClass);
        errorMessages.push("Name is required.");
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add(errorClass);
        errorMessages.push("Email is required.");
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add(errorClass);
        errorMessages.push("Message is required.");
        isValid = false;
    }

    // B. Name format validation (Only run if not empty)
    if (isValid || nameInput.value.trim() !=='') {
        // Regex requires: letters/hyphens/apostrophes, AND at least one space
        // This regex allows for names like "Mary-Anne O'Brien"
        const namePattern = /^[a-zA-Z\-']+\s[a-zA-Z\s\-']+$/;
        if (!namePattern.test(nameInput.value.trim())) {
            nameInput.classList.add(errorClass);
            errorMessages.push("Please enter a valid full name (e.g., John Smith).");
            isValid = false;
        }
    }
    
    // C. Email format validation (Only run if not empty)
    if (isValid || emailInput.value.trim() !== '') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add(errorClass);
            errorMessages.push("Please enter a valid email address.");
            isValid = false;
        }
    }

    // --- Final Outcome ---
    if (!isValid) {
        // Display all errors at once
        alert("Please correct the following issues:\n\n" + errorMessages.join("\n"));
        // Focus on the first error field
        if (nameInput.classList.contains(errorClass)) nameInput.focus();
        else if (emailInput.classList.contains(errorClass)) emailInput.focus();
        else if (messageInput.classList.contains(errorClass)) messageInput.focus();
        
        return false;
    }
    
    // If all checks pass: clear fields and return true    nameInput.value ="";
    nameInput.value = "";
    emailInput.value ="";
    messageInput.value ="";
    alert("Thank you for your message!")
    return true;
}

function loadContact() {
    // Clear existing content
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();

    const content = document.getElementById('content');
    const contactHTML = `
        <div id = "contact-page" class="page">
            <div class="contact-content">  
                <div class = "contact-info">
                    <div class="contact intro">
                        <h2>Get in touch</h2>
                        <p>We'd love to hear from you! Reach out with any questions, comments, or to make a reservation.</p>  
                    </div>
                    <div class = "contact-card">
                        <h3><i class="fa-solid fa-house"></i></h3>
                        <p>123 Main Street<br>Anytown, UK 12345</p>
                    </div>
                    <div class = "contact-card">
                        <h3><i class="fa-solid fa-phone"></i></h3>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                    <div class = "contact-card">
                        <h3><i class="fa-solid fa-envelope"></i></h3>
                        <p>Email: info@looprestaurant.com</p>
                    </div>
                    <div class = "contact-card">
                        <h3><i class="fa-solid fa-calendar-days"></i></h3>
                        <table class="hours-table">
                            <tr>
                                <td class="day">Monday - Thursday</td>
                                <td>12:00 PM - 10:00 PM</td>
                            </tr>
                            <tr>
                                <td class="day">Friday - Sunday</td>
                                <td>12:00 AM - 11:00 PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="form-container">
                    <h3>Send Us a Message</h3>
                    <form id="contact-form" class="form">
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name-input">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Your Email *</label>
                            <input type="email" id="email-input">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Your Message *</label>
                            <textarea id="message-input" rows="5"></textarea>
                        </div>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <a href="#" class="reservation-link">Make a reservation now!</a>
        </div>
    `;
    content.innerHTML = contactHTML;

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            validateForm();
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");


function loadHome() {
    // Clear existing content before loading the new page
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/images/appetizers.jpg":
/*!***********************************!*\
  !*** ./src/images/appetizers.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5d063d4419adf6eff77.jpg";

/***/ }),

/***/ "./src/images/baking.jpg":
/*!*******************************!*\
  !*** ./src/images/baking.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef6a6534f8af5a134f52.jpg";

/***/ }),

/***/ "./src/images/desserts.jpg":
/*!*********************************!*\
  !*** ./src/images/desserts.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "740611d0780876f2e9ad.jpg";

/***/ }),

/***/ "./src/images/family-eating.jpg":
/*!**************************************!*\
  !*** ./src/images/family-eating.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ea8bb467a2414b0f12b.jpg";

/***/ }),

/***/ "./src/images/mains.jpg":
/*!******************************!*\
  !*** ./src/images/mains.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b6d8ac8199aa2fd6f7a.jpg";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _images_appetizers_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/appetizers.jpg */ "./src/images/appetizers.jpg");
/* harmony import */ var _images_mains_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mains.jpg */ "./src/images/mains.jpg");
/* harmony import */ var _images_desserts_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/desserts.jpg */ "./src/images/desserts.jpg");





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
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();

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
                        <img loading="lazy" class="menu-img mobile-img" src="${_images_appetizers_jpg__WEBPACK_IMPORTED_MODULE_1__}" alt="bruschetta">
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
                    <img loading="lazy" class="menu-img desktop-img" src="${_images_appetizers_jpg__WEBPACK_IMPORTED_MODULE_1__}" alt="bruschetta">
                    <figcaption>Bruschetta</figcaption>
                </figure>
                <figure class="desktop-figure">           
                    <img loading="lazy" class="menu-img desktop-img" src="${_images_mains_jpg__WEBPACK_IMPORTED_MODULE_2__}" alt="carbonara" height="500" width="500">
                    <figcaption class="caption-overlay">Carbonara</figcaption>
                </figure>
                <div class="menu-category card border" id="mains">
                    <h3 class="title">Secondi Piatti (Main Courses)</h3>
                    <figure class="mobile-figure">
                        <img loading="lazy" class="menu-img mobile-img" src="${_images_mains_jpg__WEBPACK_IMPORTED_MODULE_2__}" alt="carbonara">
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
                        <img loading="lazy" class="menu-img mobile-img" src="${_images_desserts_jpg__WEBPACK_IMPORTED_MODULE_3__}" alt="lava cake">
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
                    <img loading="lazy" class="menu-img desktop-img" id="desserts-img" src="${_images_desserts_jpg__WEBPACK_IMPORTED_MODULE_3__}" alt="lava cake" height="500" width="500">
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   navigate: () => (/* binding */ navigate)
/* harmony export */ });
// Clears the content section in HTML to prepare the load of the pages
function clearContent() {
    document.getElementById('content').innerHTML = '';
}

/*
 * Removes the 'active' class from all navigation buttons 
 * and adds it to the button corresponding to the given ID.
 * @param {string} activeID The ID of the button to mark as active.
 */ 
function setActiveButton (activeID) {
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeButton = document.getElementById(activeID);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/*
 * Loads a new page and updates the navigation bar state.
 * @param {Function} loadfunction The function (e.g., loadHome) to execute to inject page content.
 * @param {string} buttonID The ID of the button being clicked/activated.
 */
function navigate(loadfunction, buttonID) {
    loadfunction();
    setActiveButton(buttonID);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");

// Import utility functions (like navigate and clearContent)

// Import all page loading functions





// --- Application Setup ---
// Initial page load: Load the home page and set the logo button as active.
// The navigate function handles clearing content, loading the page, and updating the active button state.
(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(_home_js__WEBPACK_IMPORTED_MODULE_2__["default"], 'logo-btn');

// Attach Event Listeners for Navigation Buttons
document.getElementById('logo-btn').addEventListener('click', () => (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(_home_js__WEBPACK_IMPORTED_MODULE_2__["default"], 'logo-btn'));
document.getElementById('menu-btn').addEventListener('click', () => (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], 'menu-btn'));
document.getElementById('about-btn').addEventListener('click', () => (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(_about_js__WEBPACK_IMPORTED_MODULE_4__["default"], 'about-btn'));
document.getElementById('contact-btn').addEventListener('click', () => (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"], 'contact-btn'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ0U7QUFDYTtBQUNOOztBQUVuRDtBQUNBO0FBQ0EsSUFBSSx5REFBWTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSwrQ0FBUyxFQUFFO0FBQzNFLGdFQUFnRSxzREFBZSxFQUFFO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNwSGtCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5REFBWTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzSmdCOztBQUUxQztBQUNBO0FBQ0EsSUFBSSx5REFBWTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmtCO0FBQ1U7QUFDVjtBQUNNOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLG1EQUFhLENBQUM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsbURBQWEsQ0FBQztBQUMxRjtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsOENBQVEsQ0FBQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLDhDQUFRLENBQUM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBVyxDQUFDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGlEQUFXLENBQUM7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7OztBQzdMdkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCO0FBQ3dDO0FBQ3hDO0FBQ2lDO0FBQ0E7QUFDRTtBQUNJOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxxREFBUSxDQUFDLGdEQUFROztBQUVqQjtBQUNBLG9FQUFvRSxxREFBUSxDQUFDLGdEQUFRO0FBQ3JGLG9FQUFvRSxxREFBUSxDQUFDLGdEQUFRO0FBQ3JGLHFFQUFxRSxxREFBUSxDQUFDLGlEQUFTO0FBQ3ZGLHVFQUF1RSxxREFBUSxDQUFDLG1EQUFXLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3M/YjMxYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7Y2xlYXJDb250ZW50fSBmcm9tICcuL3V0aWxpdHkuanMnO1xuaW1wb3J0IGJha2luZ0ltZyBmcm9tICcuL2ltYWdlcy9iYWtpbmcuanBnJztcbmltcG9ydCBmYW1pbHlFYXRpbmdJbWcgZnJvbSAnLi9pbWFnZXMvZmFtaWx5LWVhdGluZy5qcGcnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgY2xlYXJDb250ZW50KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBhYm91dEhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJhYm91dC1wYWdlXCIgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJhYm91dC1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm9kdWN0aW9uXCI+RnJvbSBhIHNtYWxsIGZhbWlseSBraXRjaGVuIHRvIGEgYmVsb3ZlZCBuZWlnaGJvcmhvb2QgaW5zdGl0dXRpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5IHNlY3Rpb24gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5PdXIgQmVnaW5uaW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvb3AgUmVzdGF1cmFudCB3YXMgZm91bmRlZCBpbiAyMDEwIGJ5IGNoZWYgTWFyaWEgUm9kcmlndWV6LCB3aG8gZHJlYW1lZCBvZiBjcmVhdGluZyBhIHBsYWNlIHdoZXJlIHBlb3BsZSBjb3VsZCBlbmpveSBkZWxpY2lvdXMgY29tZm9ydCBmb29kIGluIGEgd2FybSwgaW52aXRpbmcgYXRtb3NwaGVyZS4gV2hhdCBzdGFydGVkIGFzIGEgc21hbGwgMzAtc2VhdCBlYXRlcnkgaGFzIGdyb3duIGludG8gYSBuZWlnaGJvcmhvb2QgZmF2b3JpdGUsIGJ1dCB3ZSd2ZSBuZXZlciBsb3N0IHNpZ2h0IG9mIG91ciByb290cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXJpYSdzIHBoaWxvc29waHkgd2FzIHNpbXBsZTogXCJGb29kIHNob3VsZCBtYWtlIHlvdSBmZWVsIGdvb2QsIGFuZCB0aGUgZGluaW5nIGV4cGVyaWVuY2Ugc2hvdWxkIG1ha2UgeW91IGZlZWwgYXQgaG9tZS5cIiBUaGlzIGd1aWRpbmcgcHJpbmNpcGxlIGhhcyBzaGFwZWQgZXZlcnl0aGluZyB3ZSBkbyBhdCBMb29wIFJlc3RhdXJhbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeSBzZWN0aW9uIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+T3VyIFBoaWxvc29waHk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgYmVsaWV2ZSB0aGF0IGdyZWF0IGZvb2QgYmVnaW5zIHdpdGggZ3JlYXQgaW5ncmVkaWVudHMuIFRoYXQncyB3aHkgd2UndmUgZGV2ZWxvcGVkIHJlbGF0aW9uc2hpcHMgd2l0aCBsb2NhbCBmYXJtZXJzIGFuZCBwcm9kdWNlcnMgd2hvIHNoYXJlIG91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIHN1c3RhaW5hYmlsaXR5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk91ciBtZW51IGNoYW5nZXMgd2l0aCB0aGUgc2Vhc29ucywgYWxsb3dpbmcgdXMgdG8gc2hvd2Nhc2UgdGhlIGJlc3Qgb2Ygd2hhdCBvdXIgcmVnaW9uIGhhcyB0byBvZmZlci4gRnJvbSBzcHJpbmcncyBmaXJzdCBhc3BhcmFndXMgdG8gYXV0dW1uJ3MgaGVhcnR5IHNxdWFzaCwgd2UgY2VsZWJyYXRlIHRoZSBuYXR1cmFsIHJoeXRobXMgb2YgdGhlIGxhbmQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbWFnZXMgc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgY2xhc3M9XCJhYm91dC1pbWdcIiBzcmM9JHtiYWtpbmdJbWd9IGFsdD1cIkNoZWYgcHJlcGFyaW5nIGZvb2RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIGNsYXNzPVwiYWJvdXQtaW1nXCIgc3JjPSR7ZmFtaWx5RWF0aW5nSW1nfSBhbHQ9XCJGYW1pbHkgZWF0aW5nIHRvZ2V0aGVyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlcyBzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzPk91ciBWYWx1ZXM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZXMtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS8zZC1mbHVlbmN5Lzk0L2luZ3JlZGllbnRzLnBuZ1wiIGFsdD1cIlF1YWxpdHkgSW5ncmVkaWVudHMgSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5RdWFsaXR5IEluZ3JlZGllbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBzb3VyY2UgdGhlIGZyZXNoZXN0LCBoaWdoZXN0LXF1YWxpdHkgaW5ncmVkaWVudHMgZnJvbSBsb2NhbCBmYXJtcyBhbmQgcHJvZHVjZXJzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2Vtb2ppLzQ4L2ZvbGRlZC1oYW5kcy1lbW9qaS5wbmdcIiBhbHQ9XCJRdWFsaXR5IEluZ3JlZGllbnRzIEljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+Q3JhZnRzbWFuc2hpcDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3VyIGNoZWZzIGJyaW5nIHllYXJzIG9mIGV4cGVyaWVuY2UgYW5kIHBhc3Npb24gdG8gZXZlcnkgZGlzaCB0aGV5IGNyZWF0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC9jb25mZXJlbmNlLWNhbGwtLXYxLnBuZ1wiIGFsdD1cIlF1YWxpdHkgSW5ncmVkaWVudHMgSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5Db21tdW5pdHk8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlJ3JlIHByb3VkIHRvIGJlIHBhcnQgb2YgdGhlIG5laWdoYm9yaG9vZCBhbmQgc3VwcG9ydCBsb2NhbCBpbml0aWF0aXZlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtY2FyZFwiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVuY3kvNDgvc3VzdGFpbmFiaWxpdHkucG5nXCIgYWx0PVwiUXVhbGl0eSBJbmdyZWRpZW50cyBJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlN1c3RhaW5hYmlsaXR5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSdyZSBjb21taXR0ZWQgdG8gZW52aXJvbm1lbnRhbGx5IHJlc3BvbnNpYmxlIHByYWN0aWNlcyBpbiBvdXIga2l0Y2hlbiBhbmQgb3BlcmF0aW9ucy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZXMgc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZVwiPlwiR29vZCBmb29kIGlzIGFsbCB0aGUgc3dlZXRlciB3aGVuIHNoYXJlZCB3aXRoIGdvb2QgY29tcGFueS5cIjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZS1hdXRob3JcIj4tIE1hcmlhIFJvZHJpZ3VleiwgRm91bmRlcjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZSBzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pdGVtIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXllYXJcIj4yMDEwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9vcCBSZXN0YXVyYW50IG9wZW5zIGl0cyBkb29ycyB3aXRoIGp1c3QgOCB0YWJsZXMgYW5kIGEgc2ltcGxlIG1lbnUgb2YgY29tZm9ydCBjbGFzc2ljcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pdGVtIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXllYXJcIj4yMDEzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgZXhwYW5kIG91ciBzcGFjZSBhbmQgYWRkIGEgZnVsbCBiYXIsIGFsbG93aW5nIHVzIHRvIHNlcnZlIGNyYWZ0IGNvY2t0YWlscyBhbG9uZ3NpZGUgb3VyIGZvb2QuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaXRlbSBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS15ZWFyXCI+MjAxNTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvb3AgUmVzdGF1cmFudCByZWNlaXZlcyB0aGUgXCJCZXN0IE5laWdoYm9yaG9vZCBSZXN0YXVyYW50XCIgYXdhcmQgZnJvbSBDaXR5IE1hZ2F6aW5lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWl0ZW0gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUteWVhclwiPjIwMTg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBsYXVuY2ggb3VyIGZhcm0gcGFydG5lcnNoaXAgcHJvZ3JhbSwgc291cmNpbmcgb3ZlciA3MCUgb2Ygb3VyIGluZ3JlZGllbnRzIGxvY2FsbHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaXRlbSBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS15ZWFyXCI+MjAyMjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGNvbXBsZXRlIG91ciBtb3N0IHJlY2VudCByZW5vdmF0aW9uLCBhZGRpbmcgYSBwcml2YXRlIGRpbmluZyByb29tIGFuZCBleHBhbmRpbmcgb3VyIGtpdGNoZW4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGFib3V0SFRNTDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0OyIsImltcG9ydCB7Y2xlYXJDb250ZW50fSBmcm9tICcuL3V0aWxpdHkuanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWlucHV0Jyk7XG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtaW5wdXQnKTtcbiAgICBcbiAgICAvLyBVc2UgYSBjbGFzcyB0byBtYW5hZ2UgZXJyb3IgYm9yZGVyIHN0eWxpbmdcbiAgICBjb25zdCBlcnJvckNsYXNzID0gJ2Vycm9yLWlucHV0LWJvcmRlcic7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107IC8vIEFycmF5IHRvIGNvbGxlY3QgYWxsIGVycm9yc1xuXG4gICAgLy8gMS4gUmVzZXQgYWxsIGVycm9yIGluZGljYXRpb25zXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoZXJyb3JDbGFzcyk7XG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKGVycm9yQ2xhc3MpO1xuICAgIG1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKGVycm9yQ2xhc3MpO1xuXG4gICAgLy8gQS4gQ2hlY2sgZm9yIEVtcHR5IEZpZWxkc1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiTmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZW1haWxJbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiRW1haWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2VJbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIG1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKGVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJNZXNzYWdlIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEIuIE5hbWUgZm9ybWF0IHZhbGlkYXRpb24gKE9ubHkgcnVuIGlmIG5vdCBlbXB0eSlcbiAgICBpZiAoaXNWYWxpZCB8fCBuYW1lSW5wdXQudmFsdWUudHJpbSgpICE9PScnKSB7XG4gICAgICAgIC8vIFJlZ2V4IHJlcXVpcmVzOiBsZXR0ZXJzL2h5cGhlbnMvYXBvc3Ryb3BoZXMsIEFORCBhdCBsZWFzdCBvbmUgc3BhY2VcbiAgICAgICAgLy8gVGhpcyByZWdleCBhbGxvd3MgZm9yIG5hbWVzIGxpa2UgXCJNYXJ5LUFubmUgTydCcmllblwiXG4gICAgICAgIGNvbnN0IG5hbWVQYXR0ZXJuID0gL15bYS16QS1aXFwtJ10rXFxzW2EtekEtWlxcc1xcLSddKyQvO1xuICAgICAgICBpZiAoIW5hbWVQYXR0ZXJuLnRlc3QobmFtZUlucHV0LnZhbHVlLnRyaW0oKSkpIHtcbiAgICAgICAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKGVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZnVsbCBuYW1lIChlLmcuLCBKb2huIFNtaXRoKS5cIik7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQy4gRW1haWwgZm9ybWF0IHZhbGlkYXRpb24gKE9ubHkgcnVuIGlmIG5vdCBlbXB0eSlcbiAgICBpZiAoaXNWYWxpZCB8fCBlbWFpbElucHV0LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteL3NAXSskLztcbiAgICAgICAgaWYgKCFlbWFpbFBhdHRlcm4udGVzdChlbWFpbElucHV0LnZhbHVlLnRyaW0oKSkpIHtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tIEZpbmFsIE91dGNvbWUgLS0tXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIC8vIERpc3BsYXkgYWxsIGVycm9ycyBhdCBvbmNlXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvcnJlY3QgdGhlIGZvbGxvd2luZyBpc3N1ZXM6XFxuXFxuXCIgKyBlcnJvck1lc3NhZ2VzLmpvaW4oXCJcXG5cIikpO1xuICAgICAgICAvLyBGb2N1cyBvbiB0aGUgZmlyc3QgZXJyb3IgZmllbGRcbiAgICAgICAgaWYgKG5hbWVJbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoZXJyb3JDbGFzcykpIG5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICBlbHNlIGlmIChlbWFpbElucHV0LmNsYXNzTGlzdC5jb250YWlucyhlcnJvckNsYXNzKSkgZW1haWxJbnB1dC5mb2N1cygpO1xuICAgICAgICBlbHNlIGlmIChtZXNzYWdlSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKGVycm9yQ2xhc3MpKSBtZXNzYWdlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgLy8gSWYgYWxsIGNoZWNrcyBwYXNzOiBjbGVhciBmaWVsZHMgYW5kIHJldHVybiB0cnVlICAgIG5hbWVJbnB1dC52YWx1ZSA9XCJcIjtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGVtYWlsSW5wdXQudmFsdWUgPVwiXCI7XG4gICAgbWVzc2FnZUlucHV0LnZhbHVlID1cIlwiO1xuICAgIGFsZXJ0KFwiVGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UhXCIpXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICBjbGVhckNvbnRlbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3RIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkID0gXCJjb250YWN0LXBhZ2VcIiBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRlbnRcIj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdCBpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkdldCBpbiB0b3VjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdSEgUmVhY2ggb3V0IHdpdGggYW55IHF1ZXN0aW9ucywgY29tbWVudHMsIG9yIHRvIG1ha2UgYSByZXNlcnZhdGlvbi48L3A+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtaG91c2VcIj48L2k+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjEyMyBNYWluIFN0cmVldDxicj5Bbnl0b3duLCBVSyAxMjM0NTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGhvbmVcIj48L2k+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBob25lOiAoNTU1KSAxMjMtNDU2NzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtZW52ZWxvcGVcIj48L2k+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiBpbmZvQGxvb3ByZXN0YXVyYW50LmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItZGF5c1wiPjwvaT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiaG91cnMtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImRheVwiPk1vbmRheSAtIFRodXJzZGF5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEyOjAwIFBNIC0gMTA6MDAgUE08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJkYXlcIj5GcmlkYXkgLSBTdW5kYXk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTI6MDAgQU0gLSAxMTowMCBQTTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VuZCBVcyBhIE1lc3NhZ2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3QtZm9ybVwiIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWUtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPllvdXIgRW1haWwgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+WW91ciBNZXNzYWdlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2UtaW5wdXRcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicmVzZXJ2YXRpb24tbGlua1wiPk1ha2UgYSByZXNlcnZhdGlvbiBub3chPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gY29udGFjdEhUTUw7XG5cbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcblxuICAgIGlmIChjb250YWN0Rm9ybSkge1xuICAgICAgICBjb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQge2NsZWFyQ29udGVudH0gZnJvbSAnLi91dGlsaXR5LmpzJztcblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBiZWZvcmUgbG9hZGluZyB0aGUgbmV3IHBhZ2VcbiAgICBjbGVhckNvbnRlbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhvbWVIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwiaG9tZS1wYWdlXCIgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8aDI+V2VsY29tZSB0byB0aGUgTG9vcCBSZXN0YXVyYW50PC9oMj5cbiAgICAgICAgICAgIDxwPkNvbWZvcnQgZm9vZCB0aGF0IGJyaW5ncyB5b3UgYmFjayBhZ2FpbiBhbmQgYWdhaW48L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicmVzZXJ2YXRpb24tbGlua1wiPk1ha2UgYSByZXNlcnZhdGlvbiBub3c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBob21lSFRNTDtcbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQge2NsZWFyQ29udGVudH0gZnJvbSAnLi91dGlsaXR5LmpzJztcbmltcG9ydCBhcHBldGl6ZXJzSW1nIGZyb20gJy4vaW1hZ2VzL2FwcGV0aXplcnMuanBnJztcbmltcG9ydCBtYWluc0ltZyBmcm9tICcuL2ltYWdlcy9tYWlucy5qcGcnO1xuaW1wb3J0IGRlc3NlcnRzSW1nIGZyb20gJy4vaW1hZ2VzL2Rlc3NlcnRzLmpwZyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlIGNvbnRhaW5lciAoZmlndXJlIGVsZW1lbnQpKVxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlGaWd1cmUoY2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgcmV0dXJuIGNhdGVnb3J5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWZpZ3VyZScpO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmVzZXQgdGhlIHN0YXRlOiBoaWRlIGFsbCBpbWFnZXMgYW5kIHNob3cgYWxsIG1lbnUgaXRlbSBsaXN0c1xuZnVuY3Rpb24gcmVzZXRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBmaWd1cmUgPSBnZXRDYXRlZ29yeUZpZ3VyZShjYXRlZ29yeSk7XG4gICAgICAgIGNvbnN0IGltZyA9IGZpZ3VyZSA/IGZpZ3VyZS5xdWVyeVNlbGVjdG9yKCcubWVudS1pbWcnKSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY2F0ZWdvcnkucXVlcnlTZWxlY3RvcignLm1lbnUtaXRlbXMnKTtcblxuICAgICAgICAvLyBIaWRlIHRoZSBtb2JpbGUgaW1hZ2UgZmlndXJlXG4gICAgICAgIGlmIChmaWd1cmUpIHtcbiAgICAgICAgICAgIGZpZ3VyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHRoZSBtZW51IGl0ZW1zIGxpc3RcbiAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9iaWxlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbiAqIEFkZHMgY2xpY2sgbGlzdGVuZXJzIHRvIHRvZ2dsZSBiZXR3ZWVuIHRoZSBjYXRlZ29yeSBsaXN0IGFuZCB0aGUgY29ycmVzcG9uZGluZyBpbWFnZSBcbiAqIG9uIG1vYmlsZSBzY3JlZW5zIG9ubHksIGVuc3VyaW5nIG9ubHkgb25lIHZpZXcgaXMgYWN0aXZlIGF0IGEgdGltZS5cbiAqL1xuZnVuY3Rpb24gYWRkTW9iaWxlSW1hZ2VUb2dnbGVzKCkge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VycmVudCB2aWV3IHNpemUgcmVxdWlyZXMgdGhlIG1vYmlsZSB0b2dnbGUgYmVoYXZpb3JcbiAgICBjb25zdCBtb2JpbGVRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKTtcblxuICAgIC8vIElmIGl0J3MgYSBkZXNrdG9wIHNjcmVlbiwgd2UgcmVseSBvbiBDU1MgZm9yIGxheW91dCwgc28gd2UgZXhpdC5cbiAgICBpZiAoIW1vYmlsZVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gXG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0ZWdvcnknKTtcbiAgICAvLyBFbnN1cmUgdGhlIGluaXRpYWwgc3RhdGUgaXMgY2xlYW5cbiAgICByZXNldENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7IFxuICAgIFxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZ3VyZSA9IGdldENhdGVnb3J5RmlndXJlKGNhdGVnb3J5KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjYXRlZ29yeS5xdWVyeVNlbGVjdG9yKCcubWVudS1pdGVtcycpO1xuXG4gICAgICAgIC8vIC0tLSBDYXRlZ29yeSBDbGljayBMaXN0ZW5lciAoU2hvd3MgSW1hZ2UpIC0tLVxuICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBjbGljayBoYXBwZW5lZCBvbiB0aGUgaW1hZ2UvZmlndXJlIGl0c2VsZiwgbGV0IHRoZSBpbWFnZSBoYW5kbGVyIGhhbmRsZSBpdFxuICAgICAgICAgICAgaWYgKGZpZ3VyZSAmJiBmaWd1cmUuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47IFxuICAgICAgICAgICAgaWYgKCFmaWd1cmUgfHwgIWl0ZW1zKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIFRvZ2dsZXMgc3RhdGU6IElmIHRoZSBmaWd1cmUgaXMgYWxyZWFkeSBzaG93aW5nLCBjbGlja2luZyB0aGUgY2F0ZWdvcnkgaGlkZXMgaXRcbiAgICAgICAgICAgIGlmIChmaWd1cmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICAgICAgICBmaWd1cmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9iaWxlJyk7XG4gICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGFsbCBvdGhlciBjYXRlZ29yaWVzIHRvIGVuc3VyZSBvbmx5IG9uZSBpcyBvcGVuXG4gICAgICAgICAgICByZXNldENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG5cbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIGxpc3Qgb2YgaXRlbXMgZm9yIHRoZSBjdXJyZW50IGNhdGVnb3J5XG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9iaWxlJyk7XG5cbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGZpZ3VyZSBpbWFnZSBhZnRlciBhIHNsaWdodCBkZWxheVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlndXJlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tIEltYWdlIENsaWNrIExpc3RlbmVyIChTaG93cyBNZW51IENhdGVnb3J5KSAtLS1cbiAgICAgICAgaWYgKGZpZ3VyZSkge1xuICAgICAgICAgICAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlndXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLW1vYmlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICBjbGVhckNvbnRlbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwibWVudS1wYWdlXCIgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cbiAgICAgICAgICAgICAgICA8aDI+T3VyIE1lbnU8L2gyPlxuICAgICAgICAgICAgICAgIDxwPkFsbCBkaXNoZXMgYXJlIHByZXBhcmVkIHdpdGggbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzIGFuZCBzZXJ2ZWQgd2l0aCBwYXNzaW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXRlZ29yeSBjYXJkIGJvcmRlclwiIGlkPVwiYXBwZXRpemVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPkFudGlwYXN0aSAoQXBwZXRpemVycyk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwibW9iaWxlLWZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIGNsYXNzPVwibWVudS1pbWcgbW9iaWxlLWltZ1wiIHNyYz1cIiR7YXBwZXRpemVyc0ltZ31cIiBhbHQ9XCJicnVzY2hldHRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb24tb3ZlcmxheVwiPkJydXNjaGV0dGE8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+UGFuZSBhbGzigJlBZ2xpbyA8c3BhbiBjbGFzcz1cIml0ZW0tcHJpY2VcIj7igqw3Ljk5PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+RnJlc2hseSBiYWtlZCBicmVhZCBicnVzaGVkIHdpdGggZ2FybGljIGJ1dHRlciBhbmQgYXJvbWF0aWMgaGVyYnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW5hbWVcIj5CcnVzY2hldHRhIGFsIFBvbW9kb3JvIDxzcGFuIGNsYXNzPVwiaXRlbS1wcmljZVwiPuKCrDkuOTk8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj5SdXN0aWMgdG9hc3RlZCBicmVhZCB0b3BwZWQgd2l0aCB2aW5lLXJpcGVuZWQgdG9tYXRvZXMsIGdhcmxpYywgYmFzaWwsIGFuZCBhIGRyaXp6bGUgb2YgZXh0cmEgdmlyZ2luIG9saXZlIG9pbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbmFtZVwiPkJhc3RvbmNpbmkgZGkgTW96emFyZWxsYSA8c3BhbiBjbGFzcz1cIml0ZW0tcHJpY2VcIj7igqw4Ljk5PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+Q3Jpc3B5IGdvbGRlbiBicmVhZGVkIG1venphcmVsbGEgc2VydmVkIHdpdGggYSByaWNoIG1hcmluYXJhIHNhdWNlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRhcC1oaW50XCI+VGFwIHRvIHZpZXc8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiZGVza3RvcC1maWd1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIGNsYXNzPVwibWVudS1pbWcgZGVza3RvcC1pbWdcIiBzcmM9XCIke2FwcGV0aXplcnNJbWd9XCIgYWx0PVwiYnJ1c2NoZXR0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5CcnVzY2hldHRhPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJkZXNrdG9wLWZpZ3VyZVwiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBjbGFzcz1cIm1lbnUtaW1nIGRlc2t0b3AtaW1nXCIgc3JjPVwiJHttYWluc0ltZ31cIiBhbHQ9XCJjYXJib25hcmFcIiBoZWlnaHQ9XCI1MDBcIiB3aWR0aD1cIjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb24tb3ZlcmxheVwiPkNhcmJvbmFyYTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXRlZ29yeSBjYXJkIGJvcmRlclwiIGlkPVwibWFpbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5TZWNvbmRpIFBpYXR0aSAoTWFpbiBDb3Vyc2VzKTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJtb2JpbGUtZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgY2xhc3M9XCJtZW51LWltZyBtb2JpbGUtaW1nXCIgc3JjPVwiJHttYWluc0ltZ31cIiBhbHQ9XCJjYXJib25hcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvbi1vdmVybGF5XCI+Q2FyYm9uYXJhPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+U3BhZ2hldHRpIGFsbGEgQ2FyYm9uYXJhIDxzcGFuIGNsYXNzPVwiaXRlbS1wcmljZVwiPuKCrDE2Ljk5PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+Q2xhc3NpYyBSb21hbiBwYXN0YSB3aXRoIGd1YW5jaWFsZSwgZWdncywgYW5kIHBlY29yaW5vIHJvbWFubzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbmFtZVwiPlJpc290dG8gYWkgRnVuZ2hpIFBvcmNpbiA8c3BhbiBjbGFzcz1cIml0ZW0tcHJpY2VcIj7igqwxOC45OTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvblwiPkNyZWFteSBBcmJvcmlvIHJpY2Ugd2l0aCBwb3JjaW5pIG11c2hyb29tcyBhbmQgcGFybWVzYW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW5hbWVcIj5MYXNhZ25hIGFsbGEgQ2xhc3NpY2EgPHNwYW4gY2xhc3M9XCJpdGVtLXByaWNlXCI+4oKsMTQuOTk8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj5MYXllcnMgb2YgZnJlc2ggcGFzdGEsIHJhZ8O5LCBiw6ljaGFtZWwsIGFuZCBwYXJtZXNhbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0YXAtaGludFwiPlRhcCB0byB2aWV3PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXRlZ29yeSBjYXJkIGJvcmRlclwiIGlkPVwiZGVzc2VydHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5Eb2xjaSAoRGVzc2VydHMpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cIm1vYmlsZS1maWd1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBjbGFzcz1cIm1lbnUtaW1nIG1vYmlsZS1pbWdcIiBzcmM9XCIke2Rlc3NlcnRzSW1nfVwiIGFsdD1cImxhdmEgY2FrZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uLW92ZXJsYXlcIj5MYXZhIENha2U8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW5hbWVcIj5UaXJhbWlzw7kgQ2xhc3NpY28gPHNwYW4gY2xhc3M9XCJpdGVtLXByaWNlXCI+4oKsOC45OTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvblwiPlRyYWRpdGlvbmFsIEl0YWxpYW4gZGVzc2VydCB3aXRoIGVzcHJlc3NvLXNvYWtlZCBsYWR5ZmluZ2VycywgbWFzY2FycG9uZSBjcmVhbSwgYW5kIGNvY29hPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+VG9ydGEgYWwgQ2lvY2NvbGF0byBGb25kZW50ZSA8c3BhbiBjbGFzcz1cIml0ZW0tcHJpY2VcIj7igqw5Ljk5PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+V2FybSBkYXJrIGNob2NvbGF0ZSBjYWtlIHdpdGggYSBtb2x0ZW4gY2VudGVyLCBzZXJ2ZWQgd2l0aCB2YW5pbGxhIGdlbGF0bzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbmFtZVwiPlBhbm5hIENvdHRhIGFsbGEgVmFuaWdsaWEgPHNwYW4gY2xhc3M9XCJpdGVtLXByaWNlXCI+4oKsNy45OTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvblwiPlNpbGt5IHZhbmlsbGEgY3JlYW0gcHVkZGluZyB3aXRoIGEgcmFzcGJlcnJ5IGNvdWxpczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0YXAtaGludFwiPlRhcCB0byB2aWV3PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImRlc2t0b3AtZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBjbGFzcz1cIm1lbnUtaW1nIGRlc2t0b3AtaW1nXCIgaWQ9XCJkZXNzZXJ0cy1pbWdcIiBzcmM9XCIke2Rlc3NlcnRzSW1nfVwiIGFsdD1cImxhdmEgY2FrZVwiIGhlaWdodD1cIjUwMFwiIHdpZHRoPVwiNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvbi1vdmVybGF5XCI+TGF2YSBDYWtlPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgLy8gSW5qZWN0IHRoZSBIVE1MIGludG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IG1lbnVIVE1MO1xuXG4gICAgLy8gQXR0YWNoIG1vYmlsZSBpbWFnZSB0b2dnbGVzICh3aWxsIG9ubHkgYXBwbHkgbGlzdGVuZXJzIGlmIHRoZSBzY3JlZW4gaXMgc21hbGwgZW5vdWdoKVxuICAgIGFkZE1vYmlsZUltYWdlVG9nZ2xlcygpOyBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRkTW9iaWxlSW1hZ2VUb2dnbGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gQ2xlYXJzIHRoZSBjb250ZW50IHNlY3Rpb24gaW4gSFRNTCB0byBwcmVwYXJlIHRoZSBsb2FkIG9mIHRoZSBwYWdlc1xuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8qXG4gKiBSZW1vdmVzIHRoZSAnYWN0aXZlJyBjbGFzcyBmcm9tIGFsbCBuYXZpZ2F0aW9uIGJ1dHRvbnMgXG4gKiBhbmQgYWRkcyBpdCB0byB0aGUgYnV0dG9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIElELlxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2ZUlEIFRoZSBJRCBvZiB0aGUgYnV0dG9uIHRvIG1hcmsgYXMgYWN0aXZlLlxuICovIFxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uIChhY3RpdmVJRCkge1xuICAgIGNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuICAgIGFsbEJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblxuICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFjdGl2ZUlEKTtcbiAgICBpZiAoYWN0aXZlQnV0dG9uKSB7XG4gICAgICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59XG5cbi8qXG4gKiBMb2FkcyBhIG5ldyBwYWdlIGFuZCB1cGRhdGVzIHRoZSBuYXZpZ2F0aW9uIGJhciBzdGF0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxvYWRmdW5jdGlvbiBUaGUgZnVuY3Rpb24gKGUuZy4sIGxvYWRIb21lKSB0byBleGVjdXRlIHRvIGluamVjdCBwYWdlIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uSUQgVGhlIElEIG9mIHRoZSBidXR0b24gYmVpbmcgY2xpY2tlZC9hY3RpdmF0ZWQuXG4gKi9cbmZ1bmN0aW9uIG5hdmlnYXRlKGxvYWRmdW5jdGlvbiwgYnV0dG9uSUQpIHtcbiAgICBsb2FkZnVuY3Rpb24oKTtcbiAgICBzZXRBY3RpdmVCdXR0b24oYnV0dG9uSUQpO1xufVxuXG5leHBvcnQge2NsZWFyQ29udGVudCwgbmF2aWdhdGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuLy8gSW1wb3J0IHV0aWxpdHkgZnVuY3Rpb25zIChsaWtlIG5hdmlnYXRlIGFuZCBjbGVhckNvbnRlbnQpXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJy4vdXRpbGl0eS5qcyc7XG4vLyBJbXBvcnQgYWxsIHBhZ2UgbG9hZGluZyBmdW5jdGlvbnNcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbi8vIC0tLSBBcHBsaWNhdGlvbiBTZXR1cCAtLS1cbi8vIEluaXRpYWwgcGFnZSBsb2FkOiBMb2FkIHRoZSBob21lIHBhZ2UgYW5kIHNldCB0aGUgbG9nbyBidXR0b24gYXMgYWN0aXZlLlxuLy8gVGhlIG5hdmlnYXRlIGZ1bmN0aW9uIGhhbmRsZXMgY2xlYXJpbmcgY29udGVudCwgbG9hZGluZyB0aGUgcGFnZSwgYW5kIHVwZGF0aW5nIHRoZSBhY3RpdmUgYnV0dG9uIHN0YXRlLlxubmF2aWdhdGUobG9hZEhvbWUsICdsb2dvLWJ0bicpO1xuXG4vLyBBdHRhY2ggRXZlbnQgTGlzdGVuZXJzIGZvciBOYXZpZ2F0aW9uIEJ1dHRvbnNcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmF2aWdhdGUobG9hZEhvbWUsICdsb2dvLWJ0bicpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmF2aWdhdGUobG9hZE1lbnUsICdtZW51LWJ0bicpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5hdmlnYXRlKGxvYWRBYm91dCwgJ2Fib3V0LWJ0bicpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmF2aWdhdGUobG9hZENvbnRhY3QsICdjb250YWN0LWJ0bicpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=