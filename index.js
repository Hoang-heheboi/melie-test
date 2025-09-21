const menuIcon = document.getElementById('menu');
const slideWindow = document.getElementById('slide-window');
const bgBlur = document.getElementById('bg-blur');
const infoBox = document.getElementById('Info'); infoBox.addEventListener('click', () => { infoBox.classList.toggle('shrink'); });
let menuOpen = false;



menuIcon.onclick = function(event) {
    event.stopPropagation();
    menuOpen = !menuOpen;

    // Rotate and fade out
    menuIcon.style.transform = menuOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    menuIcon.style.opacity = 0;

    setTimeout(() => {
        menuIcon.src = menuOpen ? 'menu3.png' : 'menu.png'; // Update if using different icons
        menuIcon.style.opacity = 1;
    }, 0);

    // Toggle menu and blur
    slideWindow.classList.toggle('open', menuOpen);
    bgBlur.classList.toggle('active', menuOpen);
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





