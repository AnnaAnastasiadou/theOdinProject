import {clearContent} from './utility.js';

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
            validateForm();
        });
    }
}

export default loadContact;