let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        closeMenu();
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

function closeMenu() {
    // Assuming your nav has a class like 'open' when active
    const menu = document.querySelector(".navbar"); // Adjust selector if needed
    const toggle = document.querySelector("#menu-toggle"); // Your hamburger icon/button

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.classList.remove("active"); // Optional: remove hamburger animation
    }
}
