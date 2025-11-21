export function setupSidebarToggle() {
    const button = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (!button || !sidebar) {
        if (!button)
            console.error('Hamburger button (#hamburger-btn) not found');
        if (!sidebar) console.error('Sidebar element (.sidebar) not found');
        return;
    }

    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-hidden');
        button.classList.toggle('sidebar-hidden');
    }

    function init() {
        if (window.innerWidth <= 768) {
            // Adjust breakpoint as needed
            sidebar.classList.add('sidebar-hidden');
            button.classList.add('sidebar-hidden');
        }
    }

    init();

    button.addEventListener('click', toggleSidebar);
}
