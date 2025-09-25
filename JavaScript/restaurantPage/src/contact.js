import {clearContent, setActiveButton } from './utility.js';

function loadContact() {
    // Clear existing content
    clearContent();

    const content = document.getElementById('content');
    const contactHTML = `
        <div id = "contact-page" class="page">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Reach out with any questions, comments, or to make a reservation.</p>
            <div class = "contact-info">
                <div class = "contact-card">
                    <h3>Visit Us</h3>
                    <p>123 Main Street<br>Anytown, UK 12345</p>
                </div>
                <div class = "contact-card">
                    <h3>Call Us</h3>
                    <p>Phone: (555) 123-4567<br>Email: info@looprestaurant.com</p>
                </div>
                <div class = "contact-card">
                    <h3>Hours</h3>
                    <table class="hours-table">
                        <tr>
                            <td class="day">Monday - Thursday</td>
                            <td>11:00 AM - 10:00 PM</td>
                        </tr>
                        <tr>
                            <td class="day">Friday - Saturday</td>
                            <td>11:00 AM - 11:00 PM</td>
                        </tr>
                        <tr>
                            <td class="day">Sunday</td>
                            <td>10:00 AM - 9:00 PM</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="contact-form">
                <h3>Send Us a Message</h3>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Your Message</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit">Send Message</button>
                </form>
            </div>

            <a href="#" class="reservation-link">Make a reservation now!</a>
        </div>
    `;
    content.innerHTML = contactHTML;

    // Make contact buttoon appear selected
    setActiveButton('contact-btn');
}

export default loadContact;