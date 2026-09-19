# Online Car Dealership

A premium, fully responsive front-end car dealership website built with **HTML5, CSS3, Bootstrap 5, and vanilla JavaScript only** — no frameworks, no backend, no database.

## Live Preview
Open `index.html` in any modern browser, or serve the folder with any static server (e.g. VS Code "Live Server", or `python -m http.server`).

## Folder Structure
```
OnlineCarDealership/
├── index.html          Home page
├── cars.html            Browse / search / filter / sort / paginate
├── details.html         Dynamic car detail page (?id=)
├── compare.html          Compare up to 3 cars
├── favorites.html       LocalStorage-backed saved cars
├── booking.html         Test drive booking form
├── about.html           Company story, mission, values, team, FAQ
├── contact.html         Contact form, map, hours
├── css/
│   ├── style.css        Design tokens + all component styles
│   └── responsive.css   Breakpoints: 576 / 768 / 992 / 1200 / 1400
├── js/
│   ├── main.js           Navbar, dark mode, loader, counters, toasts, animations
│   ├── cars.js            Car dataset + render/search/filter/sort/pagination
│   ├── compare.js         Compare page logic
│   ├── validation.js      Booking + contact form validation
│   └── storage.js         LocalStorage helpers (favorites, compare, theme)
└── assets/
    ├── images/           (car photos are loaded from Unsplash CDN URLs)
    └── icons/            (Bootstrap Icons are loaded via CDN)
```

## Features
- Sticky navbar with active-link highlighting and dark mode toggle
- Hero search, Bootstrap carousel testimonials, animated stat counters
- Full car catalog with live search, brand/price/fuel/transmission filters, sorting, and pagination
- Dynamic car details page with image gallery, spec table, and similar cars
- Compare up to 3 cars side-by-side across 7 specs
- Favorites saved to LocalStorage, synced across pages via a navbar badge
- Booking form and contact form with real-time + submit-time JS validation
- Toast notifications, back-to-top button, FAQ accordion, loading screen, scroll-reveal animations

## Deployment (GitHub Pages)
1. Push this `OnlineCarDealership` folder to a GitHub repository.
2. In the repo settings, open **Pages**, set the source branch to `main` and the folder to `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes
- All data is stored in `js/cars.js` as a static in-memory array — swap this out for a real API later without touching the rendering functions.
- Color palette, type scale, and spacing all live in CSS custom properties at the top of `css/style.css` for easy theming.
