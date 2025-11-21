import {clearContent} from './utility.js';
import bakingImg from './images/baking.jpg';
import familyEatingImg from './images/family-eating.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function loadAbout() {
    // Clear existing content
    clearContent();

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
                    <img loading="lazy" class="about-img" src=${bakingImg} alt="Chef preparing food">
                    <img loading="lazy" class="about-img" src=${familyEatingImg} alt="Family eating together">
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

export default loadAbout;