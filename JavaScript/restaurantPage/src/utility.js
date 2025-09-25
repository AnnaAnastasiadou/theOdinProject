// Clears the content section in HTML to prepare the load of the pages
function clearContent() {
    document.getElementById('content').innerHTML = '';
}

// Make a button appear selected 
function setActiveButton (activeID) {
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeButton = document.getElementById(activeID);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

export {clearContent, setActiveButton};