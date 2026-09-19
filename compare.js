/* 
   Online Car Dealership — compare.js
   
    */

const COMPARE_SPEC_ROWS = [
  { label: "Price", key: "price", format: (c) => formatPrice(c.price) },
  { label: "Horsepower", key: "horsepower", format: (c) => `${c.horsepower} hp` },
  { label: "Engine", key: "engine", format: (c) => c.engine },
  { label: "Fuel Type", key: "fuelType", format: (c) => c.fuelType },
  { label: "Transmission", key: "transmission", format: (c) => c.transmission },
  { label: "Top Speed", key: "topSpeed", format: (c) => `${c.topSpeed} km/h` },
  { label: "Mileage", key: "mileage", format: (c) => (c.fuelType === "Electric" ? "N/A (EV)" : `${c.mileage} km/l`) },
];

/** Render the three compare slots and the spec table based on the saved compare list. */
function renderComparePage() {
  const list = getCompareList();
  const cars = list.map(getCarById).filter(Boolean);
  renderCompareSlots(cars);
  renderCompareTable(cars);
}

/** Render the 3 top slots — filled with a selected car, or an "Add Car" placeholder. */
function renderCompareSlots(cars) {
  const wrap = document.getElementById("compare-slots");
  if (!wrap) return;

  let html = "";
  for (let i = 0; i < 3; i++) {
    const car = cars[i];
    if (car) {
      html += `
        <div class="col-md-4">
          <div class="car-card position-relative">
            <button class="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle" style="z-index:2;width:32px;height:32px;" data-remove-id="${car.id}" title="Remove">
              <i class="bi bi-x-lg"></i>
            </button>
            <div class="car-img-wrap" style="height:170px;">
              <img src="${car.image}" alt="${car.brand} ${car.model}">
            </div>
            <div class="p-3 text-center">
              <div class="car-brand-tag">${car.brand}</div>
              <div class="car-name">${car.model}</div>
              <div class="car-price mt-1">${formatPrice(car.price)}</div>
            </div>
          </div>
        </div>`;
    } else {
      html += `
        <div class="col-md-4">
          <a href="cars.html" class="compare-slot text-decoration-none">
            <div>
              <i class="bi bi-plus-circle" style="font-size:2rem;"></i>
              <p class="mb-0 mt-2">Add a car to compare</p>
            </div>
          </a>
        </div>`;
    }
  }
  wrap.innerHTML = html;

  wrap.querySelectorAll("[data-remove-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCompare(parseInt(btn.dataset.removeId, 10));
      renderComparePage();
      showToast("Removed from compare list", "info");
    });
  });
}

/** Render the detailed spec-by-spec comparison table. */
function renderCompareTable(cars) {
  const tableWrap = document.getElementById("compare-table-wrap");
  if (!tableWrap) return;

  if (cars.length < 2) {
    tableWrap.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="bi bi-arrow-left-right" style="font-size:2rem;"></i>
        <p class="mt-3 mb-0">Add at least 2 cars above to see a full specification comparison.</p>
      </div>`;
    return;
  }

  let head = `<tr><th>Specification</th>${cars.map((c) => `<th>${c.brand} ${c.model}</th>`).join("")}</tr>`;
  let rows = COMPARE_SPEC_ROWS.map((row) => {
    const cells = cars.map((c) => `<td>${row.format(c)}</td>`).join("");
    return `<tr><th>${row.label}</th>${cells}</tr>`;
  }).join("");

  tableWrap.innerHTML = `
    <table class="table table-bordered compare-table align-middle">
      <thead>${head}</thead>
      <tbody>${rows}</tbody>
    </table>`;
}

/** Clear the entire compare list. */
function clearCompareList() {
  saveCompareList([]);
  updateCompareBadge();
  renderComparePage();
  showToast("Compare list cleared", "info");
}
