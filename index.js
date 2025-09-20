const menuIcon = document.getElementById('menu');
const slideWindow = document.getElementById('slide-window');
const bgBlur = document.getElementById('bg-blur');
let menuOpen = false;

menuIcon.onclick = function(event) {
    event.stopPropagation();
    menuOpen = !menuOpen;

    // Rotate and fade out
    menuIcon.style.transform = menuOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    menuIcon.style.opacity = 0;

    setTimeout(() => {
        menuIcon.src = menuOpen ? 'close.png' : 'menu.png';
        menuIcon.style.opacity = 1;
    }, 300);

    // Open or close menu and blur
    if (menuOpen) {
        slideWindow.classList.add('open');
        bgBlur.classList.add('active');
    } else {
        slideWindow.classList.remove('open');
        bgBlur.classList.remove('active');
    }
};

bgBlur.onclick = function() {
    menuOpen = false;
    slideWindow.classList.remove('open');
    bgBlur.classList.remove('active');

    menuIcon.style.transform = 'rotate(0deg)';
    menuIcon.style.opacity = 0;
    setTimeout(() => {
        menuIcon.src = 'menu.png';
        menuIcon.style.opacity = 1;
    }, 300);
};

slideWindow.onclick = function(event) {
    event.stopPropagation();
};




