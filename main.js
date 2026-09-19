/* 
   Online Car Dealership — main.js
    */

document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initStickyNavbar();
  initThemeToggle();
  initBackToTop();
  initActiveNavLink();
  initCounters();
  initRevealAnimations();
  updateFavoritesBadge();
  updateCompareBadge();
});

/* ---------- Loading Screen ---------- */
function initLoadingScreen() {
  const screen = document.getElementById("loading-screen");
  if (!screen) return;
  window.addEventListener("load", () => {
    setTimeout(() => screen.classList.add("loaded"), 300);
  });
}

/* ---------- Sticky Navbar ---------- */
function initStickyNavbar() {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;
  const toggleScrolled = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled);
}

/* ---------- Dark Mode Toggle ---------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const saved = getSavedTheme();

  applyTheme(saved);

  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
      root.removeAttribute("data-theme");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
    }
  }
}

/* ---------- Back to Top ---------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Active Navigation Link ---------- */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-ocd .nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) link.classList.add("active");
  });
}

/* ---------- Animated Counters ("Growth Path" stats) ---------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  if (counters.length === 0) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.counterTarget, 10);
    const duration = 1800;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("en-US");
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((el) => observer.observe(el));
}

/* ---------- Scroll Reveal Animations ---------- */
function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal-up:not(.in-view)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach((el) => observer.observe(el));
}
function initRevealAnimations() {
  observeRevealElements();
}

/* ---------- Toast Notifications ---------- */
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container position-fixed bottom-0 end-0 p-3";
    container.style.zIndex = "1080";
    document.body.appendChild(container);
  }

  const iconMap = {
    success: "bi-check-circle-fill text-success",
    danger: "bi-x-circle-fill text-danger",
    warning: "bi-exclamation-triangle-fill text-warning",
    info: "bi-info-circle-fill text-primary",
  };

  const toastEl = document.createElement("div");
  toastEl.className = "toast toast-custom align-items-center border-0";
  toastEl.setAttribute("role", "alert");
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="bi ${iconMap[type] || iconMap.success} me-2"></i>${message}
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>`;
  container.appendChild(toastEl);

  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
  toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}
