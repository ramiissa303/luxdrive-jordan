/* ═══════════════════════════════════════════════
   LUXDRIVE JORDAN — script.js
════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   CAR DATA
───────────────────────────────────────────── */
const CARS = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class Cabriolet",
    category: "wedding",
    catLabel: "Wedding",
    image: "assets/images/mercedes-benz-e-class-cabriolet.png",
    price: 180,
    year: 2023,
    seats: 4,
    trans: "Automatic",
    features: ["Open-Top Cabriolet", "Burmester Sound", "AMG Styling", "LED Ambient"],
    color: "Pearl White",
    badge: "Most Popular",
    reserved: ["2026-06-13","2026-06-14","2026-06-20","2026-06-21","2026-06-27","2026-06-28",
               "2026-07-04","2026-07-05","2026-07-11","2026-07-12","2026-07-18","2026-07-19","2026-07-25","2026-07-26"]
  },
  {
    id: 2,
    name: "Rolls-Royce Ghost — Classic Edition",
    category: "wedding",
    catLabel: "Wedding",
    image: "assets/images/rolls-royce-ghost-classic-edition.jpg",
    price: 350,
    year: 2022,
    seats: 5,
    trans: "Automatic",
    features: ["Starlight Headliner", "Spirit of Ecstasy", "Lambswool Carpet", "Champagne Cooler"],
    color: "Silver Satin",
    badge: "Signature",
    reserved: ["2026-06-20","2026-06-21","2026-07-11","2026-07-18","2026-07-19","2026-07-25"]
  },
  {
    id: 3,
    name: "Range Rover Autobiography LWB",
    category: "suv",
    catLabel: "SUV",
    image: "assets/images/range-rover-autobiography-lwb.png",
    price: 220,
    year: 2024,
    seats: 5,
    trans: "Automatic",
    features: ["Panoramic Sunroof", "Meridian Sound", "Air Suspension", "Massage Seats"],
    color: "Santorini Black",
    badge: "Executive SUV",
    reserved: ["2026-06-13","2026-06-14","2026-06-15","2026-06-20","2026-06-21","2026-06-27",
               "2026-07-04","2026-07-18","2026-07-19","2026-07-25"]
  },
  {
    id: 4,
    name: "Ford Mustang Shelby GT500",
    category: "sport",
    catLabel: "Sport",
    image: "assets/images/ford-mustang-shelby-gt500.jpg",
    price: 150,
    year: 2023,
    seats: 4,
    trans: "Manual / Auto",
    features: ["760-HP Engine", "Tremec 7-Speed", "MagneRide Dampers", "Brembo Brakes"],
    color: "Rapid Red",
    badge: "Track Beast",
    reserved: ["2026-06-14","2026-06-20","2026-06-21","2026-06-28",
               "2026-07-05","2026-07-11","2026-07-12","2026-07-19","2026-07-26"]
  },
  {
    id: 5,
    name: "BMW 7 Series M760e xDrive",
    category: "luxury",
    catLabel: "Luxury",
    image: "assets/images/bmw-7-series-m760e-xdrive.jpg",
    price: 190,
    year: 2024,
    seats: 5,
    trans: "Automatic",
    features: ["M-Sport Package", "Sky Lounge Roof", "Executive Lounge", "Crystal Lights"],
    color: "Frozen Black",
    badge: "Executive",
    reserved: ["2026-06-15","2026-06-16","2026-06-17","2026-06-22","2026-06-23",
               "2026-07-06","2026-07-07","2026-07-13","2026-07-14","2026-07-20","2026-07-21"]
  },
  {
    id: 6,
    name: "Bentley Continental GT W12",
    category: "luxury",
    catLabel: "Luxury",
    image: "assets/images/bentley-continental-gt-w12.jpg",
    price: 400,
    year: 2023,
    seats: 4,
    trans: "Automatic",
    features: ["W12 Twin-Turbo", "Naim Audio", "Hand-Stitched Leather", "Rotating Display"],
    color: "Beluga Black",
    badge: "Ultra Luxury",
    reserved: ["2026-06-20","2026-06-21","2026-07-04","2026-07-18","2026-07-19","2026-07-25","2026-07-26"]
  },

  /* ── Classic Cars ── */
  {
    id: 7,
    name: "1967 Ford Mustang Fastback",
    category: "classic",
    catLabel: "Classic",
    image: "assets/images/1967-ford-mustang-fastback.png",
    price: 130,
    year: 1967,
    seats: 4,
    trans: "Manual",
    features: ["V8 289 Engine", "Vintage Interior", "Chrome Details", "Photoshoot Ready"],
    color: "Highland Green",
    badge: "Vintage Icon",
    reserved: ["2026-06-21","2026-06-28","2026-07-05","2026-07-12","2026-07-19","2026-07-26"]
  },
  {
    id: 8,
    name: "1961 Mercedes-Benz 220 SE",
    category: "classic",
    catLabel: "Classic",
    image: "assets/images/1961-mercedes-benz-220-se.png",
    price: 160,
    year: 1961,
    seats: 5,
    trans: "Automatic",
    features: ["Pillarless Coupe", "Cream Leather", "Whitewall Tyres", "Wedding Ribbon"],
    color: "Ivory White",
    badge: "Heritage",
    reserved: ["2026-06-20","2026-06-21","2026-07-11","2026-07-18","2026-07-25"]
  },
  {
    id: 9,
    name: "1969 Chevrolet Camaro SS",
    category: "classic",
    catLabel: "Classic",
    image: "assets/images/1969-chevrolet-camaro-ss.jpg",
    price: 140,
    year: 1969,
    seats: 4,
    trans: "Manual",
    features: ["396 Big Block V8", "4-Speed Gearbox", "Rally Sport Pkg", "Restored Interior"],
    color: "Hugger Orange",
    badge: "American Muscle",
    reserved: ["2026-06-14","2026-06-21","2026-06-28","2026-07-04","2026-07-12","2026-07-19"]
  }
];

/* ─────────────────────────────────────────────
   REVIEWS DATA
───────────────────────────────────────────── */
const REVIEWS = [
  {
    initials: "SH",
    name: "Sarah Al-Hassan",
    event: "Wedding · Rolls-Royce Ghost",
    rating: 5,
    avatarClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    text: "The Rolls-Royce was absolutely breathtaking — every guest stopped to admire it. The driver was professional, the decoration was exactly as we imagined, and the team handled every detail flawlessly. LuxDrive made our wedding day truly perfect."
  },
  {
    initials: "AK",
    name: "Ahmad Al-Khalidi",
    event: "Corporate Event · BMW 7 Series",
    rating: 5,
    avatarClass: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    text: "Booked the BMW 7 Series for a major client meeting and it made a phenomenal impression. On-time, pristine condition, and the chauffeur was dressed impeccably. Will use LuxDrive for all executive travel going forward."
  },
  {
    initials: "NM",
    name: "Nour Mansour",
    event: "Wedding · Mercedes Cabriolet",
    rating: 5,
    avatarClass: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    text: "We chose the Mercedes Cabriolet for our grand entrance and it was pure magic. The floral decoration matched our color theme perfectly and the open top made for stunning photos. Everyone at the wedding was talking about it!"
  },
  {
    initials: "KD",
    name: "Khaled Darwish",
    event: "Anniversary · Bentley Continental",
    rating: 5,
    avatarClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    text: "Surprised my wife with the Bentley Continental for our 10th anniversary dinner. The booking process via WhatsApp was seamless and the team was incredibly helpful. A true luxury experience from the first message to the last drop-off."
  },
  {
    initials: "LF",
    name: "Lina Al-Farhat",
    event: "Prom Night · Mustang GT500",
    rating: 5,
    avatarClass: "bg-red-500/20 text-red-400 border-red-500/30",
    text: "Hired the Mustang GT500 for my son's prom and he was the absolute talk of the school! The car arrived gleaming, the sound system was insane, and the price was very fair for the quality. 100% worth every dinar."
  },
  {
    initials: "OB",
    name: "Omar Al-Barakat",
    event: "Wedding · Range Rover Autobiography",
    rating: 5,
    avatarClass: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    text: "The Range Rover was perfect for our wedding convoy — elegant, commanding, and the interior is absolutely stunning. The 24/7 WhatsApp support team answered all my questions late at night before the big day. Highly recommended!"
  },
  {
    initials: "TN",
    name: "Tariq Al-Nasser",
    event: "Engagement Shoot · 1967 Mustang Fastback",
    rating: 5,
    avatarClass: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    text: "We used the 1967 Mustang Fastback for our engagement photoshoot in Amman and it completely stole the show. Every chrome detail was polished to perfection and the Highland Green paint looked incredible on camera. Our photographer said it was the best car session she'd ever done. Pure vintage magic — thank you LuxDrive!"
  }
];

/* ─────────────────────────────────────────────
   APP STATE
───────────────────────────────────────────── */
let activeFilter = "all";
let currentCar   = null;
let addons       = { driver: false, deco: false };
let extraHours   = 0;

/* ─────────────────────────────────────────────
   CALENDAR STATE
───────────────────────────────────────────── */
let calYear         = 0;
let calMonth        = 0;
let calSelectedDate = null;

const CAL_MONTHS = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"];
const CAL_DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function renderCalendar(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;

  const todayStr = new Date().toISOString().split("T")[0];
  const reserved = car.reserved || [];

  document.getElementById("cal-month-label").textContent =
    `${CAL_MONTHS[calMonth]} ${calYear}`;

  const firstWeekday = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth  = new Date(calYear, calMonth + 1, 0).getDate();

  let html = CAL_DAYS.map(d =>
    `<div class="cal-day-header">${d}</div>`
  ).join("");

  /* blank filler cells */
  for (let i = 0; i < firstWeekday; i++) {
    html += `<div class="cal-day cal-empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const mm      = String(calMonth + 1).padStart(2, "0");
    const dd      = String(d).padStart(2, "0");
    const dateStr = `${calYear}-${mm}-${dd}`;

    const isPast     = dateStr < todayStr;
    const isToday    = dateStr === todayStr;
    const isReserved = reserved.includes(dateStr);
    const isSelected = dateStr === calSelectedDate;

    let cls   = "cal-day";
    let title = "Available";

    if (isPast)     { cls += " cal-past";     title = "Past date"; }
    if (isToday)    { cls += " cal-today";    title = "Today"; }
    if (isReserved) { cls += " cal-reserved"; title = "Reserved"; }
    if (isSelected) { cls += " cal-selected"; title = "Your selected date"; }

    const clickable = !isPast && !isReserved;
    const onclick   = clickable ? `onclick="calSelectDate('${dateStr}')"` : "";

    html += `<div class="${cls}" title="${title}" ${onclick}>${d}</div>`;
  }

  document.getElementById("cal-grid").innerHTML = html;
}

function calSelectDate(dateStr) {
  calSelectedDate = dateStr;
  const heroDate = document.getElementById("hero-date");
  if (heroDate) heroDate.value = dateStr;
  renderCalendar(currentCar?.id);

  /* show the chosen date below the calendar */
  const label = document.getElementById("cal-selected-label");
  if (label) {
    const d = new Date(dateStr + "T00:00:00");
    label.textContent = `Selected: ${d.toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}`;
    label.classList.remove("hidden");
  }
}

function calPrevMonth() {
  if (calMonth === 0) { calMonth = 11; calYear--; }
  else calMonth--;
  renderCalendar(currentCar?.id);
}

function calNextMonth() {
  if (calMonth === 11) { calMonth = 0; calYear++; }
  else calMonth++;
  renderCalendar(currentCar?.id);
}

/* ─────────────────────────────────────────────
   CATEGORY HELPERS
───────────────────────────────────────────── */
function catIcon(cat) {
  return { wedding: "fa-rings-wedding", luxury: "fa-crown", sport: "fa-bolt", suv: "fa-truck-monster" }[cat] || "fa-car";
}
function catColor(cat) {
  return {
    wedding: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    luxury:  "bg-amber-500/10 text-amber-300 border-amber-500/30",
    sport:   "bg-red-500/10 text-red-300 border-red-500/30",
    suv:     "bg-blue-500/10 text-blue-300 border-blue-500/30"
  }[cat] || "bg-slate-500/10 text-slate-300 border-slate-500/30";
}

/* ─────────────────────────────────────────────
   RENDER FLEET GRID
───────────────────────────────────────────── */
function renderCars(filter) {
  const grid      = document.getElementById("cars-grid");
  const noResults = document.getElementById("no-results");
  const list      = filter === "all" ? CARS : CARS.filter(c => c.category === filter);

  if (!list.length) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  grid.innerHTML = list.map((car, i) => `
    <article
      class="group relative bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/35
             rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-2xl
             hover:shadow-amber-500/10 hover:-translate-y-2 card-shine cursor-pointer fade-up"
      style="animation-delay:${i * 0.08}s"
      onclick="openModal(${car.id})"
      role="button"
      aria-label="View details for ${car.name}"
    >
      <div class="relative h-52 overflow-hidden bg-slate-800">
        <img
          src="${car.image}"
          alt="${car.name}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onerror="this.style.background='#1e293b';this.style.display='none'"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-75"></div>
        ${car.badge
          ? `<div class="absolute top-3 left-3 bg-amber-500 text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider shadow-lg">${car.badge}</div>`
          : ""}
        <div class="absolute top-3 right-3">
          <span class="text-[10px] font-bold px-2.5 py-1.5 rounded-full border backdrop-blur-sm ${catColor(car.category)}">
            <i class="fa-solid ${catIcon(car.category)} mr-1 text-[9px]"></i>${car.catLabel}
          </span>
        </div>
      </div>

      <div class="p-5">
        <h3 class="text-white font-bold text-[17px] leading-snug mb-2
                   group-hover:text-amber-400 transition-colors duration-300">${car.name}</h3>

        <div class="flex items-center gap-4 text-[11px] text-slate-400 mb-4">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-calendar text-amber-500/60"></i>${car.year}</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-amber-500/60"></i>${car.seats} Seats</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-gear text-amber-500/60"></i>${car.trans}</span>
        </div>

        <div class="flex flex-wrap gap-1.5 mb-5">
          ${car.features.slice(0, 2).map(f =>
            `<span class="bg-slate-700/60 text-slate-300 text-[10px] px-2.5 py-1 rounded-lg border border-slate-600/40 font-medium">${f}</span>`
          ).join("")}
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <div>
            <p class="text-[9px] text-slate-500 uppercase tracking-[0.18em] font-semibold">From</p>
            <p class="flex items-baseline gap-1">
              <span class="text-2xl font-black text-amber-400">${car.price}</span>
              <span class="text-slate-400 text-sm">JOD / day</span>
            </p>
          </div>
          <button
            class="bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500
                   text-amber-400 hover:text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs tracking-wide
                   transition-all duration-300"
            tabindex="-1"
          >
            View &amp; Customize
            <i class="fa-solid fa-arrow-right ml-1.5 text-[10px]"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ─────────────────────────────────────────────
   FLEET FILTER BUTTONS
───────────────────────────────────────────── */
function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderCars(filter);
}

/* ─────────────────────────────────────────────
   RENDER REVIEWS
───────────────────────────────────────────── */
function renderReviews() {
  const track = document.getElementById("reviews-track");
  const dotsWrap = document.getElementById("rev-dots");

  track.innerHTML = REVIEWS.map((r) => `
    <div class="review-card">
      <!-- Stars -->
      <div class="flex gap-1 mb-5">
        ${Array(r.rating).fill('<i class="fa-solid fa-star text-amber-400 text-sm"></i>').join("")}
      </div>

      <!-- Quote -->
      <p class="text-slate-300 text-sm leading-relaxed flex-1 mb-6">${r.text}</p>

      <!-- Reviewer -->
      <div class="flex items-center gap-3 pt-5 border-t border-slate-700/50">
        <div class="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
                    border-2 font-bold text-sm ${r.avatarClass}">
          ${r.initials}
        </div>
        <div class="min-w-0">
          <p class="text-white font-bold text-sm leading-tight truncate">${r.name}</p>
          <p class="text-slate-400 text-xs mt-0.5 truncate">${r.event}</p>
        </div>
        <div class="ml-auto flex-shrink-0">
          <div class="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20
                      text-amber-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            <i class="fa-solid fa-circle-check text-[10px]"></i> Verified
          </div>
        </div>
      </div>
    </div>
  `).join("");

  /* Dots */
  dotsWrap.innerHTML = REVIEWS.map((_, i) =>
    `<button class="rev-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Go to review ${i + 1}"></button>`
  ).join("");

  dotsWrap.querySelectorAll(".rev-dot").forEach(dot => {
    dot.addEventListener("click", () => scrollToReview(+dot.dataset.index));
  });
}

/* ─────────────────────────────────────────────
   REVIEWS CAROUSEL LOGIC
───────────────────────────────────────────── */
let revAutoTimer = null;
let currentRevIndex = 0;

function scrollToReview(index) {
  const track = document.getElementById("reviews-track");
  const cards = track.querySelectorAll(".review-card");
  if (!cards.length) return;

  currentRevIndex = Math.max(0, Math.min(index, cards.length - 1));
  const card = cards[currentRevIndex];
  track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  updateRevDots(currentRevIndex);
}

function updateRevDots(index) {
  document.querySelectorAll(".rev-dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

function startRevAutoplay() {
  stopRevAutoplay();
  revAutoTimer = setInterval(() => {
    const total = REVIEWS.length;
    scrollToReview((currentRevIndex + 1) % total);
  }, 4500);
}

function stopRevAutoplay() {
  if (revAutoTimer) { clearInterval(revAutoTimer); revAutoTimer = null; }
}

function initReviewsCarousel() {
  const track   = document.getElementById("reviews-track");
  const prevBtn = document.getElementById("rev-prev");
  const nextBtn = document.getElementById("rev-next");

  prevBtn.addEventListener("click", () => {
    scrollToReview(currentRevIndex > 0 ? currentRevIndex - 1 : REVIEWS.length - 1);
    startRevAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    scrollToReview((currentRevIndex + 1) % REVIEWS.length);
    startRevAutoplay();
  });

  /* Sync dots on manual scroll */
  let scrollDebounce;
  track.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      const cards = track.querySelectorAll(".review-card");
      let closest = 0, minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      currentRevIndex = closest;
      updateRevDots(closest);
    }, 80);
  }, { passive: true });

  /* Pause on hover */
  track.addEventListener("mouseenter", stopRevAutoplay);
  track.addEventListener("mouseleave", startRevAutoplay);

  startRevAutoplay();
}

/* ─────────────────────────────────────────────
   BOOKING MODAL — OPEN / CLOSE
───────────────────────────────────────────── */
function openModal(id) {
  currentCar = CARS.find(c => c.id === id);
  if (!currentCar) return;

  addons     = { driver: false, deco: false };
  extraHours = 0;

  document.getElementById("tog-driver").classList.remove("on");
  document.getElementById("tog-deco").classList.remove("on");
  document.getElementById("hours-val").textContent   = "0";
  document.getElementById("hours-price").textContent = "+0 JOD";

  document.getElementById("m-name").textContent  = currentCar.name;
  document.getElementById("m-cat").textContent   = currentCar.catLabel + " Class";
  document.getElementById("m-img").src           = currentCar.image;
  document.getElementById("m-img").alt           = currentCar.name;
  document.getElementById("m-badge").textContent = currentCar.catLabel;
  document.getElementById("m-base").textContent  = currentCar.price;

  recalc();

  /* Init calendar for this car */
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();
  /* Pre-select date from hero search bar if set */
  const heroVal = document.getElementById("hero-date").value;
  calSelectedDate = heroVal || null;
  renderCalendar(id);
  const label = document.getElementById("cal-selected-label");
  if (label) {
    if (calSelectedDate) {
      const d = new Date(calSelectedDate + "T00:00:00");
      label.textContent = `Selected: ${d.toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}`;
      label.classList.remove("hidden");
    } else {
      label.classList.add("hidden");
    }
  }

  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("locked");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("locked");
  currentCar = null;
}

/* ─────────────────────────────────────────────
   ADD-ON TOGGLES
───────────────────────────────────────────── */
function toggleAddon(key) {
  addons[key] = !addons[key];
  const togId = key === "driver" ? "tog-driver" : "tog-deco";
  document.getElementById(togId).classList.toggle("on", addons[key]);

  const rowId = key === "driver" ? "row-driver" : "row-deco";
  const row   = document.getElementById(rowId);
  if (addons[key]) {
    row.classList.add("border-amber-500/40", "bg-amber-500/5");
    row.classList.remove("border-slate-700/30");
  } else {
    row.classList.remove("border-amber-500/40", "bg-amber-500/5");
    row.classList.add("border-slate-700/30");
  }
  recalc();
}

/* ─────────────────────────────────────────────
   EXTRA HOURS COUNTER
───────────────────────────────────────────── */
function changeHours(delta) {
  extraHours = Math.max(0, Math.min(8, extraHours + delta));
  document.getElementById("hours-val").textContent   = extraHours;
  document.getElementById("hours-price").textContent = `+${extraHours * 10} JOD`;
  recalc();
}

/* ─────────────────────────────────────────────
   LIVE PRICE CALCULATOR
───────────────────────────────────────────── */
function recalc() {
  if (!currentCar) return;

  const base   = currentCar.price;
  const driver = addons.driver ? 30 : 0;
  const deco   = addons.deco   ? 25 : 0;
  const hours  = extraHours * 10;
  const total  = base + driver + deco + hours;

  const el = document.getElementById("m-total");
  el.textContent = total;
  el.classList.add("price-flash");
  el.addEventListener("animationend", () => el.classList.remove("price-flash"), { once: true });

  const parts = [`Base: ${base} JOD`];
  if (driver) parts.push(`Chauffeur: +30 JOD`);
  if (deco)   parts.push(`Decoration: +25 JOD`);
  if (hours)  parts.push(`${extraHours}h extra: +${hours} JOD`);
  document.getElementById("breakdown").textContent = parts.join("  ·  ");
}

/* ─────────────────────────────────────────────
   WHATSAPP BOOKING
───────────────────────────────────────────── */
function bookWhatsApp() {
  if (!currentCar) return;

  const base   = currentCar.price;
  const driver = addons.driver ? 30 : 0;
  const deco   = addons.deco   ? 25 : 0;
  const hours  = extraHours * 10;
  const total  = base + driver + deco + hours;
  /* Prefer the calendar selection; fallback to hero date input */
  const date = calSelectedDate || document.getElementById("hero-date").value;

  let msg = `🚗 *LuxDrive Jordan — Booking Request*\n\n`;
  msg += `*Car:* ${currentCar.name}\n`;
  msg += `*Category:* ${currentCar.catLabel}\n`;
  msg += `*Year:* ${currentCar.year}\n`;
  if (date) msg += `*Event Date:* ${date}\n`;
  msg += `\n📋 *Selected Options:*\n`;
  msg += `• Base Rate: ${base} JOD / day\n`;
  if (addons.driver) msg += `• Professional Chauffeur: +30 JOD\n`;
  if (addons.deco)   msg += `• Premium Car Decoration: +25 JOD\n`;
  if (extraHours)    msg += `• Extra Hours (${extraHours}h): +${hours} JOD\n`;
  msg += `\n💰 *Total: ${total} JOD*\n\n`;
  msg += `I would like to confirm this booking. Please get in touch. Thank you! 🙏`;

  const phone = "96279XXXXXXX"; // ← Replace with real WhatsApp number
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  showToast("Opening WhatsApp booking...");
}

/* ─────────────────────────────────────────────
   RENDER CLASSICS
───────────────────────────────────────────── */
function renderClassics() {
  const grid = document.getElementById("classics-grid");
  if (!grid) return;
  const classics = CARS.filter(c => c.category === "classic");
  grid.innerHTML = classics.map(car => {
    const displayName = car.name.replace(/^\d{4}\s+/, "");
    return `
    <div class="classic-card card-shine group relative bg-slate-900 border border-amber-500/15 rounded-2xl overflow-hidden
                hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1.5">

      <!-- Year badge -->
      <div class="absolute top-3 left-3 z-10 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">${car.year}</div>
      <!-- Name badge -->
      <div class="absolute top-3 right-3 z-10 bg-slate-900/75 backdrop-blur-sm text-amber-400 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg border border-amber-500/25">${car.badge}</div>

      <!-- Image -->
      <div class="relative overflow-hidden h-52">
        <img src="${car.image}" alt="${car.name}"
             class="w-full h-full object-cover classic-img group-hover:scale-105 transition-transform duration-700 select-none"
             draggable="false" />
        <div class="classic-overlay absolute inset-0"></div>
        <!-- bottom fade -->
        <div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="p-5">
        <div class="flex items-start justify-between mb-3">
          <div class="min-w-0 mr-3">
            <h3 class="text-white font-bold text-[15px] leading-snug">${displayName}</h3>
            <span class="inline-block mt-1.5 bg-amber-500/10 text-amber-400 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/20">Classic · ${car.seats} Seats</span>
          </div>
          <div class="text-right flex-shrink-0">
            <p class="text-amber-400 font-black text-xl leading-none">${car.price} <span class="text-slate-500 text-[10px] font-normal">JOD</span></p>
            <p class="text-slate-500 text-[10px] mt-0.5">per day</p>
          </div>
        </div>

        <!-- Features -->
        <ul class="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
          ${car.features.map(f => `<li class="flex items-center gap-1.5 text-slate-400 text-[11px]"><i class="fa-solid fa-check text-amber-500 text-[9px] flex-shrink-0"></i>${f}</li>`).join("")}
        </ul>

        <!-- Meta -->
        <div class="flex items-center gap-4 mb-4 pb-4 text-[11px] text-slate-500 border-t border-slate-800 pt-3">
          <span><i class="fa-solid fa-palette text-amber-500/50 mr-1.5"></i>${car.color}</span>
          <span><i class="fa-solid fa-gears text-amber-500/50 mr-1.5"></i>${car.trans}</span>
        </div>

        <!-- CTA -->
        <button onclick="openModal(${car.id})"
                class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500
                       text-slate-900 font-bold text-sm rounded-xl transition-all duration-300
                       hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-px active:translate-y-0">
          <i class="fa-solid fa-calendar-check mr-2"></i>View &amp; Customize
        </button>
      </div>
    </div>`;
  }).join("");
}

/* ─────────────────────────────────────────────
   HERO SEARCH
───────────────────────────────────────────── */
function heroSearch() {
  const type = document.getElementById("hero-type").value;
  scrollFleet();
  setTimeout(() => {
    setFilter(type);
    const label = type === "all" ? "All cars" : type.charAt(0).toUpperCase() + type.slice(1) + " cars";
    showToast(`Showing: ${label}`);
  }, 750);
}

function scrollFleet() {
  document.getElementById("fleet").scrollIntoView({ behavior: "smooth" });
}

/* ─────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────── */
function closeMobMenu() {
  document.getElementById("mob-menu").classList.add("hidden");
  document.getElementById("mob-icon").className = "fa-solid fa-bars text-xl";
}

/* ─────────────────────────────────────────────
   TOAST NOTIFICATION
───────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  el.classList.remove("opacity-0", "translate-y-6", "pointer-events-none");
  el.classList.add("opacity-100", "translate-y-0");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.add("opacity-0", "translate-y-6", "pointer-events-none");
    el.classList.remove("opacity-100", "translate-y-0");
  }, 3000);
}

/* ─────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────── */
/* persist = false is used by auto-detect so it never overwrites a future manual choice */
function applyTheme(theme, persist = true) {
  const root      = document.documentElement;
  const iconD     = document.getElementById("theme-icon");
  const iconM     = document.getElementById("theme-icon-mob");
  const toggleBtn = document.getElementById("theme-toggle");

  if (theme === "light") {
    root.classList.add("light");
    if (iconD) iconD.className = "fa-solid fa-moon text-slate-600 group-hover:text-slate-900 text-sm";
    if (iconM) iconM.className = "fa-solid fa-moon text-slate-600 group-hover:text-slate-900 text-sm";
    if (toggleBtn) { toggleBtn.setAttribute("aria-label", "Switch to dark mode"); toggleBtn.title = "Switch to Dark Mode"; }
  } else {
    root.classList.remove("light");
    if (iconD) iconD.className = "fa-solid fa-sun text-amber-400 group-hover:text-slate-900 text-sm";
    if (iconM) iconM.className = "fa-solid fa-sun text-amber-400 group-hover:text-slate-900 text-sm";
    if (toggleBtn) { toggleBtn.setAttribute("aria-label", "Switch to light mode"); toggleBtn.title = "Switch to Light Mode"; }
  }
  if (persist) localStorage.setItem("luxdrive-theme", theme);
}

function toggleTheme() {
  /* Manual toggle always persists the choice */
  applyTheme(document.documentElement.classList.contains("light") ? "dark" : "light");
}

/* ─────────────────────────────────────────────
   WHATSAPP FAB
───────────────────────────────────────────── */
function initWaFab() {
  const btn     = document.getElementById("wa-btn");
  const tooltip = document.getElementById("wa-tooltip");
  if (!btn || !tooltip) return;

  btn.addEventListener("mouseenter", () => {
    tooltip.classList.remove("opacity-0", "translate-x-4", "pointer-events-none");
    tooltip.classList.add("opacity-100", "translate-x-0");
  });
  btn.addEventListener("mouseleave", () => {
    tooltip.classList.add("opacity-0", "translate-x-4", "pointer-events-none");
    tooltip.classList.remove("opacity-100", "translate-x-0");
  });

  /* Hide FAB when booking modal is open */
  const observer = new MutationObserver(() => {
    const open = !document.getElementById("modal").classList.contains("hidden");
    const fab  = document.getElementById("wa-fab");
    fab.style.opacity       = open ? "0" : "1";
    fab.style.pointerEvents = open ? "none" : "auto";
  });
  observer.observe(document.getElementById("modal"), { attributeFilter: ["class"] });
}

/* ─────────────────────────────────────────────
   SCROLL — navbar solid + back-to-top visibility
───────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.getElementById("navbar").classList.toggle("nav-solid", y > 60);

  const btt = document.getElementById("back-to-top");
  if (btt) {
    if (y > 400) {
      btt.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      btt.classList.add("opacity-100", "translate-y-0");
    } else {
      btt.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      btt.classList.remove("opacity-100", "translate-y-0");
    }
  }
}, { passive: true });

/* ─────────────────────────────────────────────
   KEYBOARD: ESC closes modal
───────────────────────────────────────────── */
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  /* Theme — manual override wins; otherwise auto-detect by local hour */
  const savedTheme = localStorage.getItem("luxdrive-theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const h = new Date().getHours();
    /* 06:00–17:59 → light (daytime) | 18:00–05:59 → dark (night) */
    applyTheme(h >= 6 && h < 18 ? "light" : "dark", false);
  }

  /* Fleet */
  document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });
  renderCars("all");

  /* Date input min */
  document.getElementById("hero-date").min = new Date().toISOString().split("T")[0];

  /* Mobile menu */
  document.getElementById("mob-btn").addEventListener("click", () => {
    const menu = document.getElementById("mob-menu");
    const icon = document.getElementById("mob-icon");
    const open = menu.classList.toggle("hidden");
    icon.className = open ? "fa-solid fa-bars text-xl" : "fa-solid fa-xmark text-xl";
  });

  /* Classic Cars */
  renderClassics();

  /* Reviews */
  renderReviews();
  initReviewsCarousel();

  /* WhatsApp FAB */
  initWaFab();
});
