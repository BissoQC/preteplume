const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
}

// Smooth scrolling pour les liens de navigation (optionnel)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Fermer le menu sur mobile après avoir cliqué sur un lien
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});
