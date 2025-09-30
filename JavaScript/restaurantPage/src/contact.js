import {clearContent} from './utility.js';

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    
    nameInput.style.border = "";
    emailInput.style.border = "";
    messageInput.style.border = "";

    if (nameInput.value.trim() === '') {
        nameInput.style.border = "1px solid red";
        alert("Please enter your name.");
        return false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.style.border = "1px solid red";
        alert("Please enter your email.");
        return false;
    }

    if (messageInput.value.trim() === '') {
        messageInput.style.border = "1px solid red";
        alert("Please enter a message");
        return false;
    }

    // Name validation
    // Check that there are only letters and spaces/- and there is at least one space.
    const namePattern = /^[a-zA-Z\-']+\s[a-zA-Z\s\-']+$/;
    if (!namePattern.test(nameInput.value.trim())) {
        nameInput.style.border = "1px solid red";
        alert("Please enter a valid full name");
        return false;
    }
    // Email validation
    // Checks that there is an @ and a . at the right place. 
    // The rest of the string shouldn't include a @ nor a space.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.style.border = "1px solid red";
        alert("Please enter a valid email address.")
        return false;
    }
    
    // If all checks pass the fields are cleared and submittion is allowed 
    nameInput.value ="";
    emailInput.value ="";
    messageInput.value ="";
    return true;
}

function loadContact() {
    // Clear existing content
    clearContent();

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
            if (validateForm()) {
                alert("Thank you for your message! ");
            }
        });
    }
}

export default loadContact;