const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Toggle Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar-nav');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Carousel/Slider
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.carousel-next');
const prevBtn = document.querySelector('.carousel-prev');
let currentIndex = 0;
function showSlide(index) {
  slides.forEach(slide => (slide.style.display = 'none'));
  slides[index].style.display = 'block';
}
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

// Modal/Popup Windows
const modalOpenBtn = document.querySelector('.modal-open');
const modalCloseBtn = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
modalOpenBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Interactive Effects
const interactiveElement = document.querySelector('.interactive-element');
interactiveElement.addEventListener('mouseover', () => {
  interactiveElement.style.backgroundColor = 'red';
});
interactiveElement.addEventListener('mouseout', () => {
  interactiveElement.style.backgroundColor = '';
});

// Dynamic Content Loading
const dataContainer = document.querySelector('.data-container');
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    dataContainer.innerHTML = data;
  })
  .catch(error => {
    console.log('Error:', error);
  });

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
