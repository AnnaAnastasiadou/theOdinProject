export function setupSidebarToggle() {
    const button = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (!button || !sidebar) {
        if (!button) console.error('Hamburger button (#hamburger-btn) not found');
        if (!sidebar) console.error("Sidebar element (.sidebar) not found");
        return;
    }

    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-hidden');
        button.classList.toggle('sidebar-hidden');
    }   

    button.addEventListener('click', toggleSidebar);
}


