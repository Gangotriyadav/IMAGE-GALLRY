var navLinks = document.querySelectorAll('.navbar a');
var imageSections = document.querySelectorAll('.image-section');

function showSection(sectionId) {
    imageSections.forEach(function(section) {
        section.style.display = (section.id === sectionId) ? 'block' : 'none';
    });
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(e.target.getAttribute('href').substring(1));
        navLinks.forEach(function(link) { link.classList.remove('active'); });
        e.target.classList.add('active');
    });
});

showSection('home');


var images = document.querySelectorAll('.All-content img');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var lightboxCaption = document.getElementById('lightbox-caption');
var closeBtn = document.querySelector('.close');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImg.src = images[index].src;
    lightboxCaption.textContent = images[index].alt;
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    openLightbox((currentIndex + 1) % images.length);
}

function showPrevImage() {
    openLightbox((currentIndex - 1 + images.length) % images.length);
}

images.forEach(function(img, index) {
    img.addEventListener('click', function() {
        openLightbox(index);
    });
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
