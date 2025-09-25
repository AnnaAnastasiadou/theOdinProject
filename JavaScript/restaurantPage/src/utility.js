function setActiveButton (activeID) {
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeButton = document.getElementById(activeID);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

export {setActiveButton};