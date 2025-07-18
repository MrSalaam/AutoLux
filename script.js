document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // Shrink header on scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("shrink", window.scrollY > 50);
  });

  // Hero slider logic
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
});

// ScrollReveal Global Init
ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  reset: false, // better for performance
  mobile: true
});

// Hero
ScrollReveal().reveal('.hero-content h1', { origin: 'top', delay: 200 });
ScrollReveal().reveal('.hero-content p', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.hero-content .btn', { origin: 'bottom', delay: 600 });

// Logo Wall
ScrollReveal().reveal('.logo-wall h2', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.logos img', { interval: 100, origin: 'bottom' });

// Featured Cars
ScrollReveal().reveal('.car-card', { interval: 100, origin: 'bottom' });

// Filters
ScrollReveal().reveal('.filters-form', { origin: 'left', delay: 300 });

// Services
ScrollReveal().reveal('.services .service-card', { interval: 200, origin: 'bottom' });

// Testimonials
ScrollReveal().reveal('.section-header', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.testimonial-card', { interval: 150, origin: 'bottom' });

// Contact / Footer
ScrollReveal().reveal('.contact-form', { origin: 'left', delay: 300 });
ScrollReveal().reveal('footer', { origin: 'bottom', delay: 300 });


ScrollReveal().reveal('.map-overlay', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.section-header', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.form-group', { interval: 100, origin: 'bottom' });
ScrollReveal().reveal('.submit-btn', { origin: 'bottom', delay: 500 });


ScrollReveal().reveal('.our-story .section-title', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.our-story .section-subtitle', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.our-story .story-text', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.our-story .btn', { origin: 'bottom', delay: 600 });
ScrollReveal().reveal('.our-story .story-image', { origin: 'right', delay: 300 });



  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });





  const carData = [
  {
    image: './images/tesla model s.jpg',
    title: 'Tesla Model S',
    specs: ['2021', 'Electric', 'Automatic', '$95,000'],
  },
  {
    image: './images/bmw m3.jpg',
    title: 'BMW M3 Competition',
    specs: ['2025', 'Gasoline', 'Automatic', '$100,000'],
  },
  {
    image: './images/amg gt63.jpg',
    title: 'Mercedes AMG GT',
    specs: ['2023', 'V8', '4-door', '$120,000'],
  },
  {
    image: './images/lexus rx350.avif',
    title: 'Lexus RX350',
    specs: ['2022', 'V6', 'Automatic', '$56,000'],
  },
  {
    image: './images/camry 2024.avif',
    title: 'Toyota Camry',
    specs: ['2024', 'Hybrid', 'TRD', '$32,000'],
  },
  {
    image: './images/CYBERTRUCK.avif',
    title: 'Tesla Cybertruck',
    specs: ['2025', 'Electric', 'Self-driving', '$101,000'],
  },
  {
    image: './images/lamborghini t.avif',
    title: 'Lamborghini Temerario',
    specs: ['2025', 'V10', '0-60mph (2.7secs)', '$330,000'],
  },
  {
    image: './images/aventador.jpg',
    title: 'Lamborghini Aventador',
    specs: ['2022', 'V12', 'Convertible', '$520,000'],
  },
  {
    image: './images/audi q5.avif',
    title: 'Audi Q5',
    specs: ['2025', 'Premium', 'SUV', '$41,000'],
  },
  {
    image: './images/porsche 911.avif',
    title: 'Porsche 911',
    specs: ['2025', 'T-Hybrid', 'Convertible', '$187,000'],
  },
  {
    image: './images/mclaren a.avif',
    title: 'McLaren Artura',
    specs: ['2025', '690HP', 'Hybrid', '$279,000'],
  },
  {
    image: './images/G63.avif',
    title: 'Mercedes Benz G63',
    specs: ['2025', 'Premuim', 'Hybrid', '$186,100'],
  },

  {
    image: './images/lexus es350.jpg',
    title: 'Lexus ES350',
    specs: ['2019', '8 speed gears', 'Auto', '$32,000'],
  },

  {
    image: './images/ferrari 216.jpg',
    title: 'Ferrari 812 Superfast',
    specs: ['2024', 'V12', '789HP', '$365,000'],
  },

  {
    image: './images/bently.jpg',
    title: 'Bentley Continental GT',
    specs: ['2025', 'V12', 'Luxury', '$240,000'],
  },

  {
    image: './images/rolls royce.jpg',
    title: 'Rolls-Royce Cullinan',
    specs: ['2023', 'V12', 'Ultra-Luxury', '$395,000'],
  },

  {
    image: './images/maserati.jpg',
    title: 'Maserati MC20',
    specs: ['2024', 'V6', '630HP', '$215,000'],
  },
  
  {
    image: './images/aston martin db11.jpg',
    title: 'Aston Martin DB11',
    specs: ['2024', 'V8', '528HP', '$205,000'],
  }

];

const carsGrid = document.querySelector(".cars-grid");
carData.forEach((car) => {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <div class="car-image">
      <img src="${car.image}" alt="${car.title}" />
    </div>
    <div class="car-content">
      <h3 class="car-title">${car.title}</h3>
      <div class="car-specs">
        ${car.specs.map((spec) => `<span>${spec}</span>`).join("")}
      </div>
      <div class="car-actions">
        <button class="btn view">View Details</button>
        <button class="btn test">Test Drive</button>
      </div>
    </div>
  `;
  carsGrid.appendChild(card);
});

// ========== ADVANCED FILTER LOGIC ==========
const filtersForm = document.querySelector(".filters-form");
const brandFilter = document.getElementById("brand");
const fuelFilter = document.getElementById("fuel");
const transmissionFilter = document.getElementById("transmission");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", () => {
  priceValue.textContent = `$${parseInt(priceRange.value).toLocaleString()}`;
});

filtersForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const brand = brandFilter.value.toLowerCase();
  const fuel = fuelFilter.value.toLowerCase();
  const transmission = transmissionFilter.value.toLowerCase();
  const maxPrice = parseInt(priceRange.value);

  const filteredCars = carData.filter((car) => {
    const titleMatch = brand ? car.title.toLowerCase().includes(brand) : true;
    const fuelMatch = fuel ? car.specs.some((s) => s.toLowerCase().includes(fuel)) : true;
    const transmissionMatch = transmission ? car.specs.some((s) => s.toLowerCase().includes(transmission)) : true;
    const priceMatch = car.specs.some((s) => {
      const price = parseInt(s.replace(/[^0-9]/g, ""));
      return price && price <= maxPrice;
    });

    return titleMatch && fuelMatch && transmissionMatch && priceMatch;
  });

  // Clear old results
  carsGrid.innerHTML = "";

  if (filteredCars.length === 0) {
    carsGrid.innerHTML = "<p style='text-align:center;color:#999;'>No cars found matching the filters.</p>";
    return;
  }

  // Append filtered results
  filteredCars.forEach((car) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <div class="car-image">
        <img src="${car.image}" alt="${car.title}" />
      </div>
      <div class="car-content">
        <h3 class="car-title">${car.title}</h3>
        <div class="car-specs">
          ${car.specs.map((spec) => `<span>${spec}</span>`).join("")}
        </div>
        <div class="car-actions">
          <button class="btn primary view-details-btn">View Details</button>
          <button class="btn test">Test Drive</button>
        </div>
      </div>
    `;
    carsGrid.appendChild(card);
  });
});
