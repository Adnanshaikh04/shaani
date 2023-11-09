// (() =>{
    const openMenu = document.querySelector(".open-menu"),
    closeMenu = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".navmenu");
    // menuOverlay = document.querySelector(".menu-overlay");
    // mediaSize = 991;
    openMenu.addEventListener("click",toggleNav);
    closeMenu.addEventListener("click",toggleNav);
    // menuOverlay.addEventListener("click", toggleNav);

    function toggleNav(){
        navMenu.classList.toggle("open");
        // menuOverlay.classList.toggle("active");
    }
    
// })();