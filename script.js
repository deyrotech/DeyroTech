window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Logika Sidebar tetap sama seperti sebelumnya
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebarMenu');

sidebar.addEventListener('show.bs.offcanvas', () => {
    menuToggle.style.opacity = '0';
    menuToggle.style.pointerEvents = 'none';
});

sidebar.addEventListener('hide.bs.offcanvas', () => {
    menuToggle.style.opacity = '1';
    menuToggle.style.pointerEvents = 'auto';
});