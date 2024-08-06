document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap Carousel
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel) {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000,
            ride: 'carousel'
        });
    }

    // Ensure the carousel items have the necessary classes
    const carouselItems = document.querySelectorAll('#carouselExampleIndicators .carousel-item');
    if (carouselItems.length) {
        carouselItems.forEach((item, index) => {
            if (index === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});

const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    document.addEventListener('DOMContentLoaded', function() {
        const perMonthBtn = document.getElementById('perMonthBtn');
        const perYearBtn = document.getElementById('perYearBtn');
    
        const businessPrice = document.getElementById('businessPrice');
        const ultimatePrice = document.getElementById('ultimatePrice');
        const personalPrice = document.getElementById('personalPrice');
    
        perMonthBtn.addEventListener('click', function() {
            perMonthBtn.classList.add('active');
            perYearBtn.classList.remove('active');
    
            businessPrice.textContent = 'From $399';
            ultimatePrice.textContent = 'From $899';
            personalPrice.textContent = 'From $499';
        });
    
        perYearBtn.addEventListener('click', function() {
            perYearBtn.classList.add('active');
            perMonthBtn.classList.remove('active');
    
            businessPrice.textContent = 'From $499';
            ultimatePrice.textContent = 'From $799';
            personalPrice.textContent = 'From $1499';
        });
    });
    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function toggleGoUpLink() {
        const goUpLink = document.getElementById('goUpBtn');
        const firstSection = document.getElementById('About us');
        const firstSectionHeight = firstSection.offsetHeight;

        if (window.scrollY > firstSectionHeight) {
            goUpLink.classList.add('show');
        } else {
            goUpLink.classList.remove('show');
        }
    }


    window.addEventListener('scroll', toggleGoUpLink);