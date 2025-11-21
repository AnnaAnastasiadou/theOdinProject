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

export {clearContent, navigate};