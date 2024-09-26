let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 6000); // Ganti slide setiap 3 detik
}

// Initialize the first slide and start auto sliding
showSlide(currentSlide);
autoSlide();
