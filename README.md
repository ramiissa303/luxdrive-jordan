# LuxDrive Jordan

**Amman's premier luxury and wedding car rental — a fully responsive single-page web application.**

[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b.svg)](LICENSE)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?logo=tailwind-css&logoColor=white)

---

## Description

**LuxDrive Jordan** is a luxury car rental landing page for a premium fleet based in Amman, Jordan. The site targets couples, corporate clients, and event organizers looking for high-end vehicles for weddings, photoshoots, and special occasions.

Built as a polished, production-ready single-page application using **Tailwind CSS** and **vanilla JavaScript** — zero build tools, zero dependencies, just open and run.

---

## Screenshots

> Replace the placeholders below with real screenshots after running the project.

| Section | Preview |
|---|---|
| Hero + Search | *(add screenshot)* |
| Fleet Grid (Dark Mode) | *(add screenshot)* |
| Fleet Grid (Light Mode) | *(add screenshot)* |
| Booking Modal + Calendar | *(add screenshot)* |
| Classic Cars Section | *(add screenshot)* |
| Reviews Carousel | *(add screenshot)* |

---

## Live Demo

> Deploy for free on **GitHub Pages**:
> 1. Push this repo to GitHub
> 2. Go to **Settings → Pages → Source: `main` branch / `root`**
> 3. Your site is live at `https://ramiissa303.github.io/LuxDriveJordan`

---

## Features

- **Fleet Showcase** — Filterable car grid with category filters: Wedding, Luxury, Sport, SUV, Classic
- **Classic Cars Section** — Dedicated heritage collection with sepia-toned presentation
- **Booking Modal** — Full-featured modal with an availability calendar, add-on toggles (chauffeur, decoration), and an extra hours counter with live price calculation
- **WhatsApp Integration** — One-tap booking with a pre-filled message sent directly to WhatsApp
- **Dark / Light Mode** — Auto-detects time of day on first visit; manual toggle persists via `localStorage`
- **Testimonials Carousel** — Auto-playing reviews with dot navigation, prev/next controls, and scroll-sync
- **Fully Responsive** — Mobile-first layout with hamburger menu and optimized grid breakpoints
- **Accessible** — Semantic HTML5 (`<main>`, `<nav>`, `<footer>`, `<article>`), ARIA labels, keyboard navigation (ESC closes modal)
- **Micro-animations** — Card shine hover effects, ambient orbs, fade-up entrance animations, live price flash

---

## Technologies

| Technology | Role |
|---|---|
| HTML5 | Semantic structure and markup |
| CSS3 | Custom animations, light/dark theme system, layout overrides |
| Tailwind CSS v3 (CDN) | Utility-first styling |
| Font Awesome 6.5 (CDN) | Icon library |
| Vanilla JavaScript (ES6+) | DOM manipulation, carousel, availability calendar, booking logic |

No npm. No bundler. No framework. Just files a browser can open.

---

## Folder Structure

```
LuxDriveJordan/
├── assets/
│   └── images/
│       ├── logo-icon.png
│       ├── 2025-rolls-royce-black-badge-ghost.jpg
│       ├── rolls-royce-ghost-classic-edition.jpg
│       ├── mercedes-benz-e-class-cabriolet.png
│       ├── range-rover-autobiography-lwb.png
│       ├── bmw-7-series-m760e-xdrive.jpg
│       ├── bentley-continental-gt-w12.jpg
│       ├── ford-mustang-shelby-gt500.jpg
│       ├── 1961-mercedes-benz-220-se.png
│       ├── 1967-ford-mustang-fastback.png
│       └── 1969-chevrolet-camaro-ss.jpg
├── index.html      # Single-page application
├── styles.css      # Custom styles, theme overrides, component CSS
├── script.js       # Fleet data, JavaScript logic
├── .gitignore
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

No installation required. Any modern browser (Chrome, Firefox, Edge, Safari) will work.

### Clone

```bash
git clone https://github.com/ramiissa303/LuxDriveJordan.git
cd LuxDriveJordan
```

### Run

**Option 1 — Open directly:**
```bash
# Double-click index.html, or from terminal:
start index.html      # Windows
open index.html       # macOS
```

**Option 2 — VS Code Live Server (recommended for development):**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

**Option 3 — Python local server:**
```bash
python -m http.server 5500
# Open http://localhost:5500
```

---

## Before Going Live

Before deploying with real client data, update the following placeholders in `script.js` and `index.html`:

| Placeholder | Location | Replace with |
|---|---|---|
| `96279XXXXXXX` | `script.js` line 676, `index.html` footer | Real WhatsApp number |
| `info@luxdrive.jo` | `index.html` footer | Real email address |
| `#` social links | `index.html` footer | Real Instagram / Facebook / TikTok URLs |
| `+962 79 XXX XXXX` | `index.html` footer | Real phone number |

---

## Future Improvements

- [ ] Add a favicon (`.ico`) for better browser tab branding
- [ ] Replace CDN scripts with locally bundled assets for offline use
- [ ] Connect to a backend or headless CMS for real-time availability
- [ ] Add a contact / inquiry form with email delivery
- [ ] Add multi-language support (Arabic / English toggle)
- [ ] Integrate Google Maps for office location
- [ ] Add `sitemap.xml` and `robots.txt` for SEO
- [ ] Build a lightweight admin panel to manage fleet and bookings
- [ ] Add PWA manifest for installable mobile experience

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Rami Issa**

- GitHub: [@ramiissa303](https://github.com/ramiissa303)
- Email: ramiissa303@gmail.com

---

*Built with care for LuxDrive Jordan — making every occasion unforgettable.*
