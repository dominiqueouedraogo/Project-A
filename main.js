// --- MENU BURGER ---
const menuToggle = document.querySelector('.menu-toggle');
const navMenuContainer = document.getElementById('nav-menu');
const overlay = document.querySelector('.overlay');

if (menuToggle && navMenuContainer && overlay) {
  const navMenu = navMenuContainer.querySelector('ul');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  document.querySelectorAll('#nav-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}

// --- SLIDER TEMOIGNAGES ---
const temoignagesSlider = document.querySelector('.temoignages-slider');
if (temoignagesSlider) {
  let currentSlide = 0;
  const slides = temoignagesSlider.querySelectorAll('.slide');
  const prevBtn = temoignagesSlider.querySelector('.prev');
  const nextBtn = temoignagesSlider.querySelector('.next');

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === n);
    });
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
  }

  showSlide(currentSlide);
}
 document.documentElement.style.scrollBehavior = "smooth";

  // Ajouter loading="lazy" et classe aux images
  document.querySelectorAll('img').forEach(img => {
    img.loading = "lazy";
    img.classList.add("lazy-image");

    img.addEventListener('load', () => {
      img.classList.add("loaded");
    });
  });
  function adjustContentPadding() {
    const header = document.querySelector('.header');
    const searchBar = document.querySelector('.search-bar');
    const mainContent = document.querySelector('.nos-categories'); // adapte le sélecteur si nécessaire

    if (header && searchBar && mainContent) {
      const totalHeight = header.offsetHeight + searchBar.offsetHeight + 5; // marge de sécurité
      mainContent.style.paddingTop = totalHeight + 'px';
       const maxPadding = 100;
  mainContent.style.paddingTop = Math.min(totalHeight, maxPadding) + 'px';
  const safePadding = Math.min(totalHeight + 10, 80);
  mainContent.style.paddingTop = safePadding + 'px';

    }
  }

  window.addEventListener('load', adjustContentPadding);
  window.addEventListener('resize', adjustContentPadding);
  window.addEventListener('orientationchange', adjustContentPadding);
 