/* 
   Online Car Dealership — cars.js
    */

const CAR_INVENTORY = [
  {
    id: 1, brand: "BMW", model: "5 Series 530i", year: 2024, price: 2830000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 248,
    engine: "2.0L Turbo I4", topSpeed: 250, mileage: 8,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000&q=80&auto=format",
    ],
    badge: "New", featured: true,
    description: "The BMW 5 Series 530i blends athletic performance with executive comfort, featuring a razor-sharp chassis, a lavish cabin, and BMW's latest iDrive infotainment suite.",
    features: ["Leather Seats", "Sunroof", "Adaptive Cruise", "Wireless CarPlay", "360° Camera", "Heated Seats"],
  },
  {
    id: 2, brand: "Mercedes", model: "C300 AMG Line", year: 2024, price: 2950000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 255,
    engine: "2.0L Turbo I4", topSpeed: 250, mileage: 9,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1000&q=80&auto=format",
    ],
    badge: "Hot Deal", featured: true,
    description: "The Mercedes C300 AMG Line delivers refined luxury with a sport-tuned suspension, MBUX intelligent interface, and a beautifully sculpted cabin.",
    features: ["Panoramic Roof", "MBUX Infotainment", "Ambient Lighting", "Parking Assist", "Leather Seats", "Heated Seats"],
  },
  {
    id: 3, brand: "Audi", model: "A6 45 TFSI", year: 2023, price: 2680000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 261,
    engine: "2.0L TFSI I4", topSpeed: 245, mileage: 8,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&q=80&auto=format",
    ],
    badge: "Certified", featured: true,
    description: "The Audi A6 combines quattro all-wheel drive confidence with a virtual cockpit and understated Bauhaus-inspired design.",
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "Matrix LED", "Leather Seats", "Lane Assist"],
  },
  {
    id: 4, brand: "Tesla", model: "Model 3 Long Range", year: 2024, price: 2280000,
    fuelType: "Electric", transmission: "Automatic", horsepower: 346,
    engine: "Dual Motor Electric", topSpeed: 233, mileage: 0,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1000&q=80&auto=format",
    ],
    badge: "Electric", featured: true,
    description: "The Tesla Model 3 offers instant torque, class-leading range, and Autopilot driver assistance wrapped in a minimalist all-glass cabin.",
    features: ["Autopilot", "15\" Touchscreen", "Glass Roof", "Supercharging", "Premium Audio", "Over-the-Air Updates"],
  },
  {
    id: 5, brand: "Toyota", model: "Camry XSE", year: 2024, price: 1675000,
    fuelType: "Hybrid", transmission: "Automatic", horsepower: 208,
    engine: "2.5L Hybrid I4", topSpeed: 210, mileage: 22,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1000&q=80&auto=format",
    ],
    badge: "Best Seller", featured: true,
    description: "The Toyota Camry XSE pairs hybrid efficiency with sport-styled looks, offering one of the most reliable sedans on the market.",
    features: ["Hybrid Efficiency", "Toyota Safety Sense", "Wireless Charging", "JBL Audio", "Sport Seats", "Apple CarPlay"],
  },
  {
    id: 6, brand: "Kia", model: "EV6 GT-Line", year: 2024, price: 2060000,
    fuelType: "Electric", transmission: "Automatic", horsepower: 320,
    engine: "Dual Motor Electric", topSpeed: 260, mileage: 0,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1617469767053-3d3c6c0f0271?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000&q=80&auto=format",
    ],
    badge: "New", featured: false,
    description: "The Kia EV6 GT-Line stands out with futuristic design, ultra-fast 800V charging, and a spacious dual-tone interior.",
    features: ["800V Fast Charging", "Dual Curved Display", "Vehicle-to-Load", "Heated Steering", "Remote Smart Park", "Premium Audio"],
  },
  {
    id: 7, brand: "Hyundai", model: "Tucson Limited", year: 2023, price: 1608000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 187,
    engine: "2.5L I4", topSpeed: 195, mileage: 15,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1000&q=80&auto=format",
    ],
    badge: "Certified", featured: false,
    description: "The Hyundai Tucson Limited offers bold styling, a tech-forward cabin, and one of the most comprehensive warranty packages in its class.",
    features: ["Panoramic Sunroof", "Digital Key", "Bose Audio", "Highway Driving Assist", "Ventilated Seats", "Wireless CarPlay"],
  },
  {
    id: 8, brand: "Ford", model: "Mustang GT", year: 2023, price: 2250000,
    fuelType: "Petrol", transmission: "Manual", horsepower: 486,
    engine: "5.0L V8", topSpeed: 250, mileage: 6,
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acd47?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1614200187524-dc4b892acd47?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1000&q=80&auto=format",
    ],
    badge: "Hot Deal", featured: false,
    description: "The Ford Mustang GT is a modern American muscle icon with a naturally aspirated V8 roar and razor-sharp handling.",
    features: ["V8 Soundtrack", "Track Apps", "Brembo Brakes", "Recaro Seats", "Launch Control", "Digital Cluster"],
  },
  {
    id: 9, brand: "BMW", model: "X5 xDrive40i", year: 2024, price: 3310000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 375,
    engine: "3.0L Turbo I6", topSpeed: 240, mileage: 9,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1000&q=80&auto=format",
    ],
    badge: "New", featured: false,
    description: "The BMW X5 xDrive40i delivers commanding presence, a silky inline-6 engine, and a driver-focused luxury SUV experience.",
    features: ["xDrive AWD", "Panoramic Sky Lounge", "Harman Kardon Audio", "Air Suspension", "Heated Seats", "Gesture Control"],
  },
  {
    id: 10, brand: "Mercedes", model: "GLE 450", year: 2024, price: 3500000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 375,
    engine: "3.0L Turbo I6", topSpeed: 240, mileage: 10,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&q=80&auto=format",
    ],
    badge: "Certified", featured: false,
    description: "The Mercedes GLE 450 offers three-row versatility wrapped in a first-class cabin with the latest MBUX Hyperscreen option.",
    features: ["MBUX Hyperscreen", "Air Body Control", "Third Row Seating", "Burmester Audio", "Massage Seats", "Night Vision"],
  },
  {
    id: 11, brand: "Audi", model: "Q7 55 TFSI", year: 2023, price: 3160000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 335,
    engine: "3.0L TFSI V6", topSpeed: 234, mileage: 11,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&q=80&auto=format",
    ],
    badge: "Hot Deal", featured: false,
    description: "The Audi Q7 55 TFSI is a spacious seven-seat SUV with quattro grip, adaptive air suspension, and Audi's virtual cockpit plus.",
    features: ["Quattro AWD", "Adaptive Air Suspension", "Virtual Cockpit Plus", "Bang & Olufsen 3D", "Third Row Seating", "Matrix LED"],
  },
  {
    id: 12, brand: "Toyota", model: "Corolla SE", year: 2024, price: 1175000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 169,
    engine: "2.0L I4", topSpeed: 190, mileage: 30,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1000&q=80&auto=format",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1000&q=80&auto=format",
    ],
    badge: "Best Seller", featured: false,
    description: "The Toyota Corolla SE is the smart, dependable choice — efficient, sporty-looking, and backed by legendary Toyota reliability.",
    features: ["Toyota Safety Sense", "Apple CarPlay", "Sport-Tuned Suspension", "LED Headlights", "8\" Touchscreen", "Lane Tracing"],
  },
];

const PAGE_SIZE = 6;
let currentPage = 1;
let activeFilters = { search: "", brand: "", price: "", fuel: "", transmission: "", sort: "default" };

/** Format a number as EGP currency, e.g. 1650000 -> "EGP 1,650,000" */
function formatPrice(value) {
  return "EGP " + value.toLocaleString("en-US");
}

/** Build the HTML markup for a single car card. */
function buildCarCardHTML(car) {
  const favActive = isFavorite(car.id) ? "active" : "";
  const heartIcon = isFavorite(car.id) ? "bi-heart-fill" : "bi-heart";
  return `
    <div class="col-lg-4 col-md-6 mb-4 reveal-up">
      <div class="car-card">
        <div class="car-img-wrap">
          <a href="details.html?id=${car.id}">
            <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">
          </a>
          <span class="car-badge">${car.badge}</span>
          <button class="fav-btn ${favActive}" data-car-id="${car.id}" aria-label="Toggle favorite" title="Add to favorites">
            <i class="bi ${heartIcon}"></i>
          </button>
        </div>
        <div class="p-3">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <div>
              <div class="car-brand-tag">${car.brand} · ${car.year}</div>
              <div class="car-name">${car.model}</div>
            </div>
            <div class="car-price">${formatPrice(car.price)}</div>
          </div>
          <div class="car-specs my-3">
            <span><i class="bi bi-fuel-pump"></i> ${car.fuelType}</span>
            <span><i class="bi bi-gear"></i> ${car.transmission}</span>
            <span><i class="bi bi-speedometer2"></i> ${car.horsepower} hp</span>
          </div>
          <div class="d-flex gap-2">
            <a href="details.html?id=${car.id}" class="btn btn-primary text-white flex-grow-1">View Details</a>
            <button class="btn btn-outline-secondary compare-add-btn" data-car-id="${car.id}" title="Add to compare">
              <i class="bi bi-arrow-left-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** Render a list of cars into a container by ID. */
function renderCarsToContainer(containerId, carsArray, emptyMessage = "No cars match your search.") {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (carsArray.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search" style="font-size:2.5rem;color:var(--color-muted);"></i>
        <p class="mt-3 mb-0">${emptyMessage}</p>
      </div>`;
    return;
  }

  container.innerHTML = carsArray.map(buildCarCardHTML).join("");
  attachFavoriteButtonListeners(container);
  attachCompareButtonListeners(container);
  if (typeof observeRevealElements === "function") observeRevealElements();
}

/** Attach click listeners to all favorite-toggle buttons within a container. */
function attachFavoriteButtonListeners(scope) {
  scope.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const carId = parseInt(btn.dataset.carId, 10);
      const nowFavorite = toggleFavorite(carId);
      btn.classList.toggle("active", nowFavorite);
      const icon = btn.querySelector("i");
      icon.className = nowFavorite ? "bi bi-heart-fill" : "bi bi-heart";
      showToast(nowFavorite ? "Added to favorites" : "Removed from favorites", "success");
      if (document.body.dataset.page === "favorites") renderFavoritesPage();
    });
  });
}

/** Attach click listeners to all "add to compare" buttons within a container. */
function attachCompareButtonListeners(scope) {
  scope.querySelectorAll(".compare-add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const carId = parseInt(btn.dataset.carId, 10);
      const result = addToCompare(carId);
      if (result === "added") showToast("Added to compare list", "success");
      else if (result === "exists") showToast("Car is already in your compare list", "info");
      else if (result === "full") showToast("You can compare up to 3 cars only", "warning");
    });
  });
}

/** Apply the current search/filter/sort state to the inventory and return the result. */
function getFilteredCars() {
  let result = [...CAR_INVENTORY];

  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    result = result.filter((c) =>
      `${c.brand} ${c.model}`.toLowerCase().includes(q)
    );
  }
  if (activeFilters.brand) {
    result = result.filter((c) => c.brand === activeFilters.brand);
  }
  if (activeFilters.fuel) {
    result = result.filter((c) => c.fuelType === activeFilters.fuel);
  }
  if (activeFilters.transmission) {
    result = result.filter((c) => c.transmission === activeFilters.transmission);
  }
  if (activeFilters.price) {
    const [min, max] = activeFilters.price.split("-").map(Number);
    result = result.filter((c) => c.price >= min && (max ? c.price <= max : true));
  }

  switch (activeFilters.sort) {
    case "price-asc": result.sort((a, b) => a.price - b.price); break;
    case "price-desc": result.sort((a, b) => b.price - a.price); break;
    case "hp-desc": result.sort((a, b) => b.horsepower - a.horsepower); break;
    case "year-desc": result.sort((a, b) => b.year - a.year); break;
    default: break;
  }

  return result;
}

/** Render the current page of filtered cars plus pagination controls (cars.html). */
function renderCarsPage() {
  const filtered = getFilteredCars();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  renderCarsToContainer("cars-grid", pageItems);
  renderPagination(totalPages);

  const resultsCount = document.getElementById("results-count");
  if (resultsCount) resultsCount.textContent = `${filtered.length} car${filtered.length !== 1 ? "s" : ""} found`;
}

/** Build and render pagination buttons. */
function renderPagination(totalPages) {
  const pag = document.getElementById("pagination-controls");
  if (!pag) return;

  let html = "";
  html += `<li class="page-item ${currentPage === 1 ? "disabled" : ""}">
              <button class="page-link" data-page="${currentPage - 1}">Prev</button></li>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<li class="page-item ${i === currentPage ? "active" : ""}">
                <button class="page-link" data-page="${i}">${i}</button></li>`;
  }
  html += `<li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
              <button class="page-link" data-page="${currentPage + 1}">Next</button></li>`;
  pag.innerHTML = html;

  pag.querySelectorAll(".page-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = parseInt(btn.dataset.page, 10);
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderCarsPage();
        document.getElementById("cars-grid").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/** Wire up all cars.html filter/search/sort controls to re-render on change. */
function initCarsPageControls() {
  const searchInput = document.getElementById("search-input");
  const brandSelect = document.getElementById("filter-brand");
  const priceSelect = document.getElementById("filter-price");
  const fuelSelect = document.getElementById("filter-fuel");
  const transmissionSelect = document.getElementById("filter-transmission");
  const sortSelect = document.getElementById("sort-select");
  const resetBtn = document.getElementById("reset-filters-btn");

  // Pre-fill from URL query params (e.g. brand links from homepage)
  const params = new URLSearchParams(window.location.search);
  if (params.get("brand")) activeFilters.brand = params.get("brand");
  if (params.get("search")) activeFilters.search = params.get("search");

  if (searchInput) {
    searchInput.value = activeFilters.search;
    searchInput.addEventListener("input", () => {
      activeFilters.search = searchInput.value.trim();
      currentPage = 1;
      renderCarsPage();
    });
  }
  if (brandSelect) {
    brandSelect.value = activeFilters.brand;
    brandSelect.addEventListener("change", () => {
      activeFilters.brand = brandSelect.value;
      currentPage = 1;
      renderCarsPage();
    });
  }
  if (priceSelect) {
    priceSelect.addEventListener("change", () => {
      activeFilters.price = priceSelect.value;
      currentPage = 1;
      renderCarsPage();
    });
  }
  if (fuelSelect) {
    fuelSelect.addEventListener("change", () => {
      activeFilters.fuel = fuelSelect.value;
      currentPage = 1;
      renderCarsPage();
    });
  }
  if (transmissionSelect) {
    transmissionSelect.addEventListener("change", () => {
      activeFilters.transmission = transmissionSelect.value;
      currentPage = 1;
      renderCarsPage();
    });
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeFilters.sort = sortSelect.value;
      renderCarsPage();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeFilters = { search: "", brand: "", price: "", fuel: "", transmission: "", sort: "default" };
      currentPage = 1;
      [searchInput, brandSelect, priceSelect, fuelSelect, transmissionSelect, sortSelect].forEach((el) => {
        if (el) el.value = "";
      });
      if (sortSelect) sortSelect.value = "default";
      renderCarsPage();
    });
  }

  renderCarsPage();
}

/** Render featured cars on the homepage. */
function renderFeaturedCars() {
  const featured = CAR_INVENTORY.filter((c) => c.featured);
  renderCarsToContainer("featured-cars-grid", featured);
}

/** Render the favorites page grid. */
function renderFavoritesPage() {
  const favIds = getFavorites();
  const favCars = CAR_INVENTORY.filter((c) => favIds.includes(c.id));
  renderCarsToContainer("favorites-grid", favCars, "You haven't added any cars to your favorites yet.");
  const emptyState = document.getElementById("favorites-empty-state");
  const grid = document.getElementById("favorites-grid");
  if (emptyState && grid) {
    emptyState.style.display = favCars.length === 0 ? "block" : "none";
  }
}

/** Get a car object by its ID. */
function getCarById(id) {
  return CAR_INVENTORY.find((c) => c.id === id);
}

/** Render similar cars (same brand, different id) on the details page. */
function renderSimilarCars(currentCar) {
  const similar = CAR_INVENTORY.filter((c) => c.brand === currentCar.brand && c.id !== currentCar.id).slice(0, 3);
  const fallback = similar.length > 0 ? similar : CAR_INVENTORY.filter((c) => c.id !== currentCar.id).slice(0, 3);
  renderCarsToContainer("similar-cars-grid", fallback);
}
