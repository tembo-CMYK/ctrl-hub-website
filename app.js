import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// --- PRODUCT DATABASE ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Apple MacBook Pro 14"',
    price: 28500,
    category: 'Laptop',
    spec: 'M3 chip · 16GB RAM · 512GB SSD',
    image: 'assets/laptop.jpg',
    carouselImage: 'assets/Laptop 1.png',
    brand: 'Apple',
    isNew: true,
    isHot: false,
    specs: {
      Processor: 'Apple M3 (8-core CPU, 10-core GPU)',
      Memory: '16GB Unified Memory',
      Storage: '512GB NVMe SSD',
      Display: '14.2" Liquid Retina XDR (120Hz)',
      Warranty: '1 Year Apple Warranty'
    },
    features: [
      { image: 'assets/laptop_editorial.png', title: 'Liquid Retina XDR', description: 'Extreme dynamic range and incredible contrast ratio for true-to-life visuals.' },
      { image: 'assets/laptop.jpg', title: 'M3 Core Power', description: 'Next-generation chip architecture delivers massive speed and efficiency.' },
      { image: 'assets/feature-headphones-warm.jpg', title: 'Studio-Quality Audio', description: 'Six-speaker sound system with Spatial Audio fills the room.' }
    ]
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 18200,
    category: 'Mobile Phone',
    spec: '12GB RAM · 256GB · 200MP camera',
    image: 'assets/phone.jpg',
    carouselImage: 'assets/Phone 2.png',
    brand: 'Samsung',
    isNew: false,
    isHot: true,
    specs: {
      Processor: 'Snapdragon 8 Gen 3 for Galaxy',
      Memory: '12GB LPDDR5X',
      Storage: '256GB UFS 4.0',
      Display: '6.8" Dynamic AMOLED 2X (120Hz)',
      Warranty: '2 Year Official Samsung Warranty'
    },
    features: [
      { image: 'assets/phone_editorial.png', title: '200MP Camera System', description: 'Capture mind-blowing detail with the highest megapixel count in a smartphone.' },
      { image: 'assets/phone.jpg', title: 'Snapdragon 8 Gen 3', description: 'Unprecedented speed for gaming, multitasking, and AI-driven tasks.' },
      { image: 'assets/hero-earbuds.jpg', title: 'Dynamic AMOLED 2X', description: 'Stunning 6.8-inch display with 120Hz refresh and peak brightness.' }
    ]
  },
  {
    id: 3,
    name: 'Dell OptiPlex 7090',
    price: 24800,
    category: 'Desktop',
    spec: 'i7 11th Gen · 16GB · 512GB SSD',
    image: 'assets/desktop.jpg',
    carouselImage: 'assets/Desktop 1.png',
    brand: 'Dell',
    isNew: false,
    isHot: false,
    specs: {
      Processor: 'Intel Core i7-11700 (8 Cores, up to 4.9GHz)',
      Memory: '16GB DDR4 RAM',
      Storage: '512GB M.2 PCIe NVMe SSD',
      Graphics: 'Intel UHD Graphics 750',
      Warranty: '3 Years Dell ProSupport Warranty'
    },
    features: [
      { image: 'assets/desktop_editorial.png', title: 'Enterprise Performance', description: 'Intel Core i7 power coupled with high-speed memory for seamless workflows.' },
      { image: 'assets/desktop.jpg', title: 'Compact Footprint', description: 'Fits elegantly into any workstation workspace without sacrificing power.' },
      { image: 'assets/laptop_editorial.png', title: 'ProSupport Service', description: 'Dell’s reliable 3-year warranty and expert troubleshooting.' }
    ]
  },
  {
    id: 4,
    name: 'HP LaserJet Pro M404dn',
    price: 7900,
    category: 'Printer',
    spec: 'Duplex · 38ppm · WiFi · USB',
    image: 'assets/printer.jpg',
    carouselImage: 'assets/Printer 1.png',
    brand: 'HP',
    isNew: true,
    isHot: false,
    specs: {
      Type: 'Monochrome Laser Printer',
      Speed: 'Up to 38 pages per minute',
      Connectivity: 'WiFi, Ethernet, USB 2.0',
      Features: 'Automatic Duplex (2-sided printing)',
      Warranty: '1 Year Official HP Warranty'
    },
    features: [
      { image: 'assets/printer_editorial.png', title: 'High-Speed Duplexing', description: 'Print double-sided pages automatically up to 38 pages per minute.' },
      { image: 'assets/printer.jpg', title: 'Robust Connectivity', description: 'Integrated Ethernet and secure USB connections for high-reliability offices.' },
      { image: 'assets/desktop_editorial.png', title: 'Laser Sharp Text', description: 'Crisp black-and-white print output for professional documents.' }
    ]
  },
  {
    id: 5,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 22900,
    category: 'Laptop',
    spec: 'i7 13th Gen · 16GB · 1TB SSD',
    image: 'assets/thinkpad.png',
    carouselImage: 'assets/Laptop 2.png',
    brand: 'Lenovo',
    isNew: false,
    isHot: false,
    specs: {
      Processor: 'Intel Core i7-1355U (10 Cores, up to 5.0GHz)',
      Memory: '16GB LPDDR5X RAM',
      Storage: '1TB PCIe NVMe Gen4 SSD',
      Display: '14" WUXGA IPS Anti-Glare',
      Warranty: '3 Years Lenovo Premier Support'
    },
    features: [
      { image: 'assets/thinkpad.png', title: 'Carbon Fiber Build', description: 'Ultralight aerospace-grade carbon fiber chassis built for ultimate durability.' },
      { image: 'assets/laptop_editorial.png', title: 'Legendary Keyboard', description: 'The industry standard for ergonomic comfort, deep travel, and tactile feedback.' },
      { image: 'assets/feature-headphones-warm.jpg', title: 'All-Day Battery Life', description: 'Keep working on long flights or off-grid meetings with rapid charging.' }
    ]
  },
  {
    id: 6,
    name: 'iPhone 15 Pro Max',
    price: 24500,
    category: 'Mobile Phone',
    spec: 'A17 Pro · 256GB · Titanium',
    image: 'assets/iphone.png',
    carouselImage: 'assets/Phhone 1.png',
    brand: 'Apple',
    isNew: true,
    isHot: false,
    specs: {
      Processor: 'Apple A17 Pro (6-core CPU, 6-core GPU)',
      Memory: '8GB RAM',
      Storage: '256GB NVMe SSD',
      Display: '6.7" Super Retina XDR OLED (120Hz)',
      Warranty: '1 Year Apple Warranty'
    },
    features: [
      { image: 'assets/iphone.png', title: 'Titanium Design', description: 'Strong and light aerospace-grade titanium design with contoured edges.' },
      { image: 'assets/phone_editorial.png', title: 'A17 Pro Chip', description: 'A game-changing chip with pro-class GPU for immersive mobile gaming.' },
      { image: 'assets/feature-earbuds-green.jpg', title: '5x Telephoto Zoom', description: 'Shoot sharp close-ups from farther away with the longest optical zoom on iPhone.' }
    ]
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5',
    price: 4200,
    category: 'Accessory',
    spec: 'ANC · 30hr battery · LDAC',
    image: 'assets/headphones.jpg',
    carouselImage: 'assets/Accessory 1.png',
    brand: 'Sony',
    isNew: false,
    isHot: false,
    specs: {
      Type: 'Over-Ear Wireless ANC Headphones',
      Battery: 'Up to 30 hours (ANC ON)',
      AudioCodecs: 'LDAC, AAC, SBC',
      Microphones: '8 Mics for outstanding call quality',
      Warranty: '1 Year Official Sony Warranty'
    },
    features: [
      { image: 'assets/headphones.jpg', title: 'Industry-Leading ANC', description: 'Two processors control 8 microphones for unprecedented noise cancellation.' },
      { image: 'assets/feature-headphones-warm.jpg', title: 'LDAC Audio Stream', description: 'High-resolution wireless audio streaming with three times more data transmitted.' },
      { image: 'assets/feature-gpods.jpg', title: '30-Hour Battery Life', description: 'Enough power for long trips, with quick charging giving 5 hours on a 10-min charge.' }
    ]
  },
  {
    id: 8,
    name: 'Apple Mac Mini M2 Pro',
    price: 19400,
    category: 'Desktop',
    spec: 'M2 Pro · 16GB · 512GB SSD',
    image: 'assets/mac_mini.png',
    carouselImage: 'assets/Desktop 2.png',
    brand: 'Apple',
    isNew: false,
    isHot: false,
    specs: {
      Processor: 'Apple M2 Pro (10-core CPU, 16-core GPU)',
      Memory: '16GB Unified Memory',
      Storage: '512GB PCIe SSD',
      Ports: '4x Thunderbolt 4, 2x USB-A, HDMI, LAN',
      Warranty: '1 Year Apple Warranty'
    },
    features: [
      { image: 'assets/mac_mini.png', title: 'M2 Pro Architecture', description: 'Up to 12-core CPU and 19-core GPU for crushing pro workflows.' },
      { image: 'assets/desktop_editorial.png', title: 'Versatile Connectivity', description: 'Four Thunderbolt 4 ports, HDMI, and USB-A to build your dream studio.' },
      { image: 'assets/laptop_editorial.png', title: 'Silent Efficiency', description: 'Super-efficient silicon allows Mac Mini to run quietly under heavy loads.' }
    ]
  },
  {
    id: 9,
    name: 'Asus ROG Zephyrus G14',
    price: 34900,
    category: 'Laptop',
    spec: 'Ryzen 9 · 32GB RAM · 1TB SSD · RTX 4060',
    image: 'assets/laptop.jpg',
    carouselImage: 'assets/Laptop 3.png',
    brand: 'Asus',
    isNew: true,
    isHot: true,
    specs: {
      Processor: 'AMD Ryzen 9 8945HS (8 Cores, up to 5.2GHz)',
      Memory: '32GB LPDDR5X RAM',
      Storage: '1TB PCIe NVMe Gen4 SSD',
      Graphics: 'NVIDIA GeForce RTX 4060 (8GB GDDR6)',
      Warranty: '2 Years Asus Warranty'
    },
    features: [
      { image: 'assets/laptop_editorial.png', title: 'Nebula OLED Display', description: 'Stunning 14" ROG Nebula OLED display with a high refresh rate.' },
      { image: 'assets/laptop.jpg', title: 'Active Aerodynamic System', description: 'Redesigned cooling curves allow sustained gaming in near silence.' },
      { image: 'assets/feature-headphones-warm.jpg', title: 'Custom Slash Lighting', description: 'Unique LED lighting pattern on the outer chassis for personalization.' }
    ]
  },
  {
    id: 10,
    name: 'Google Pixel 8 Pro',
    price: 16500,
    category: 'Mobile Phone',
    spec: 'Tensor G3 · 12GB · 128GB · Magic Eraser',
    image: 'assets/phone.jpg',
    carouselImage: 'assets/Phone 3.png',
    brand: 'Google',
    isNew: true,
    isHot: false,
    specs: {
      Processor: 'Google Tensor G3 with Titan M2 security coprocessor',
      Memory: '12GB LPDDR5X RAM',
      Storage: '128GB UFS 3.1',
      Display: '6.7" Super Actua Display (120Hz)',
      Warranty: '1 Year Google Warranty'
    },
    features: [
      { image: 'assets/phone_editorial.png', title: 'Google AI Engine', description: 'Leverage Google’s cutting-edge AI photo editing tools like Magic Eraser.' },
      { image: 'assets/phone.jpg', title: 'Pro Triple Cameras', description: 'High megapixel wide, ultrawide, and telephoto sensors for perfect shots.' },
      { image: 'assets/hero-earbuds.jpg', title: 'Super Actua Display', description: 'Vibrant, bright screen with smooth variable refresh rates.' }
    ]
  },
  {
    id: 11,
    name: 'HP Envy Desktop Workstation',
    price: 21500,
    category: 'Desktop',
    spec: 'i7 13th Gen · 16GB · 1TB SSD · RTX 3050',
    image: 'assets/desktop.jpg',
    carouselImage: 'assets/Desktop 3.png',
    brand: 'HP',
    isNew: false,
    isHot: true,
    specs: {
      Processor: 'Intel Core i7-13700 (16 Cores, up to 5.2GHz)',
      Memory: '16GB DDR5 RAM',
      Storage: '1TB PCIe NVMe SSD',
      Graphics: 'NVIDIA GeForce RTX 3050 (8GB)',
      Warranty: '1 Year HP Warranty'
    },
    features: [
      { image: 'assets/desktop_editorial.png', title: 'Creative Workspace Port Set', description: 'Connect everything with SD card reader, USB-C ports, and Thunderbolt 4.' },
      { image: 'assets/desktop.jpg', title: 'Tool-Less Expansion', description: 'Easy chassis access to quickly swap or add RAM modules and storage drives.' },
      { image: 'assets/laptop_editorial.png', title: 'Silent Workstation Design', description: 'Optimized cooling system keeps noise levels down during complex renders.' }
    ]
  },
  {
    id: 12,
    name: 'Epson EcoTank L3250',
    price: 5400,
    category: 'Printer',
    spec: 'Ink Tank · WiFi · Print-Scan-Copy',
    image: 'assets/printer.jpg',
    carouselImage: 'assets/Printer 2.png',
    brand: 'Epson',
    isNew: false,
    isHot: false,
    specs: {
      Type: 'Multifunction Color Ink Tank Printer',
      Speed: 'Up to 33 ppm (black), 15 ppm (color)',
      Connectivity: 'WiFi, WiFi Direct, USB 2.0',
      Features: 'Ultra-low cost printing with high-capacity ink bottles',
      Warranty: '2 Years Epson Warranty'
    },
    features: [
      { image: 'assets/printer_editorial.png', title: 'Cartridge-Free Printing', description: 'Ultra-high capacity ink tanks for print runs with zero cartridges.' },
      { image: 'assets/printer.jpg', title: 'Smart App Integration', description: 'Manage printing, scanning, and diagnostics directly from your smartphone.' },
      { image: 'assets/desktop_editorial.png', title: 'Heat-Free Technology', description: 'Epson Micro Piezo print head ensures zero warming delay and low power usage.' }
    ]
  },
  {
    id: 13,
    name: 'Canon MAXIFY GX4020',
    price: 8200,
    category: 'Printer',
    spec: 'Duplex · ADF · WiFi · Low cost-per-page',
    image: 'assets/printer.jpg',
    carouselImage: 'assets/Printer 3.png',
    brand: 'Canon',
    isNew: true,
    isHot: false,
    specs: {
      Type: 'Small Office Wireless MegaTank Printer',
      Speed: 'Up to 18 ipm (black), 13 ipm (color)',
      Connectivity: 'WiFi, Ethernet, USB 2.0',
      Features: 'Automatic Document Feeder (ADF), Duplexing',
      Warranty: '1 Year Canon Warranty'
    },
    features: [
      { image: 'assets/printer_editorial.png', title: 'Pigment Ink Formula', description: 'Smudge-resistant text and colorful highlights for clean documents.' },
      { image: 'assets/printer.jpg', title: '250-Sheet Paper Tray', description: 'Spacious tray holds full paper packs for uninterrupted print operations.' },
      { image: 'assets/desktop_editorial.png', title: 'Compact ADF System', description: 'Scan or copy multi-page batches quickly with the auto document feeder.' }
    ]
  },
  {
    id: 14,
    name: 'Apple AirPods Pro 2',
    price: 3900,
    category: 'Accessory',
    spec: 'H2 chip · Active Noise Cancellation · USB-C',
    image: 'assets/earbuds.jpg',
    carouselImage: 'assets/Accessory 3.png',
    brand: 'Apple',
    isNew: true,
    isHot: true,
    specs: {
      Type: 'True Wireless In-Ear Earbuds',
      Battery: 'Up to 6 hours (ANC ON), 30 hours with case',
      AudioCodecs: 'AAC, SBC',
      Connectivity: 'Bluetooth 5.3',
      Warranty: '1 Year Apple Warranty'
    },
    features: [
      { image: 'assets/hero-earbuds.jpg', title: 'H2 Audio Silicon', description: 'Advanced computational noise reduction and Adaptive Audio filtering.' },
      { image: 'assets/feature-earbuds-green.jpg', title: 'Adaptive Sound Profiles', description: 'Intelligently blends transparency and noise cancellation based on surroundings.' },
      { image: 'assets/feature-gpods.jpg', title: 'Precision Charging Case', description: 'MagSafe case equipped with U1 chip speaker for exact app localization.' }
    ]
  },
  {
    id: 15,
    name: 'Logitech MX Master 3S',
    price: 2100,
    category: 'Accessory',
    spec: '8K DPI · MagSpeed Scroll · Ergonomic',
    image: 'assets/earbuds.jpg',
    carouselImage: 'assets/Accessory 5.png',
    brand: 'Logitech',
    isNew: false,
    isHot: false,
    specs: {
      Type: 'Professional Wireless Ergonomic Mouse',
      Battery: 'Up to 70 days on a full charge (USB-C)',
      Connectivity: 'Bluetooth Low Energy, Logi Bolt USB Receiver',
      Sensor: '8,000 DPI Darkfield tracking (works on glass)',
      Warranty: '1 Year Logitech Warranty'
    },
    features: [
      { image: 'assets/feature-headphones-warm.jpg', title: 'MagSpeed Scrolling Wheel', description: 'Electromagnetic metal scroll wheel scans 1,000 lines per second silently.' },
      { image: 'assets/hero-earbuds.jpg', title: 'Quiet Clicks Technology', description: 'Tactile mouse buttons with 90% sound dampening for focused environments.' },
      { image: 'assets/feature-gpods.jpg', title: 'Cross-Device Flow Control', description: 'Move text, files, and cursor across systems using Logitech Flow.' }
    ]
  }
];

// --- APP STATE ---
let cart = JSON.parse(localStorage.getItem('ctrl_hub_cart')) || [];
let activeCategory = 'all';
let isInitialRoute = true;
let activeFeaturedIds = {};

// --- ELEMENT SELECTORS ---
const selectors = {
  cur: document.getElementById('cur'),
  cuf: document.getElementById('cuf'),
  nav: document.getElementById('nav'),
  cartBtn: document.getElementById('cartBtn'),
  cartCount: document.getElementById('cartCount'),
  toast: document.getElementById('toast'),
  
  // Backdrops
  backdrop: document.getElementById('backdrop'),

  // Cart Drawer
  cartDrawer: document.getElementById('cartDrawer'),
  cartClose: document.getElementById('cartClose'),
  cartItems: document.getElementById('cartItems'),
  cartTotal: document.getElementById('cartTotal'),
  btnCheckout: document.getElementById('btnCheckout'),

  // Product Modal
  prodModal: document.getElementById('prodModal'),
  prodModalClose: document.getElementById('prodModalClose'),

  // Search Modal
  searchModal: document.getElementById('searchModal'),
  searchInput: document.getElementById('searchInput'),
  searchResults: document.getElementById('searchResults'),

  // Contact Modal
  contactModal: document.getElementById('contactModal'),
  contactClose: document.getElementById('contactClose'),
  contactForm: document.getElementById('contactForm'),
  contactBtn: document.getElementById('contactBtn')
};

// --- INITIALIZE SITE ---
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  setupEventListeners();
  updateCartUI();
  setupTiltEffect();
  initCursor();
  initHeroVisual();
  initObserver();
  initSpotlightScrollAnimation();
  initSpecularGlare();
  initMagneticButtons();
});

// --- CURSOR ---
function initCursor() {
  if (!selectors.cur || !selectors.cuf) return;
  let mx = 0, my = 0, fx = 0, fy = 0;
  
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    selectors.cur.style.left = mx + 'px';
    selectors.cur.style.top = my + 'px';
  });

  (function anim() {
    fx += (mx - fx) * 0.14;
    fy += (my - fy) * 0.14;
    selectors.cuf.style.left = fx + 'px';
    selectors.cuf.style.top = fy + 'px';
    requestAnimationFrame(anim);
  })();

  const hoverable = 'a, button, .cc, .pc, .wc, .btn-close, .btn-qty, .btn-del, .search-res-item';
  document.body.addEventListener('mouseenter', e => {
    if (e.target.matches && e.target.matches(hoverable)) {
      selectors.cur.classList.add('h');
      selectors.cuf.classList.add('h');
    }
  }, true);
  
  document.body.addEventListener('mouseleave', e => {
    if (e.target.matches && e.target.matches(hoverable)) {
      selectors.cur.classList.remove('h');
      selectors.cuf.classList.remove('h');
    }
  }, true);
}

// --- HERO VISUAL INTERACTION ---
function initHeroVisual() {
  const hero = document.querySelector('.hero');
  const fb1 = document.querySelector('.fb1');
  const fb2 = document.querySelector('.fb2');
  
  if (!hero) return;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Drift floating badges in counter-directions for 3D parallax depth and perspective rotations
    if (fb1) {
      fb1.style.transform = `perspective(1000px) translate(${x * -30}px, ${y * -30}px) rotateY(${-10 + x * 15}deg) rotateX(${y * 15}deg)`;
    }
    if (fb2) {
      fb2.style.transform = `perspective(1000px) translate(${x * 40}px, ${y * 40}px) rotateY(${-10 + x * 15}deg) rotateX(${y * 15}deg)`;
    }
  });
  
  hero.addEventListener('mouseleave', () => {
    if (fb1) fb1.style.transform = `perspective(1000px) translate(0px, 0px) rotateY(-10deg) rotateX(0deg)`;
    if (fb2) fb2.style.transform = `perspective(1000px) translate(0px, 0px) rotateY(-10deg) rotateX(0deg)`;
  });
}

// --- NAV SCROLL ---
window.addEventListener('scroll', () => {
  if (selectors.nav) {
    selectors.nav.classList.toggle('s', window.scrollY > 50);
  }
});

// --- INTERSECTION OBSERVER ---
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis');
    });
  }, { threshold: 0.14 });
  
  window.scrollObserver = obs;
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  const cobs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || e.target._counted) return;
      e.target._counted = true;
      const t = parseInt(e.target.dataset.t), dur = 1600, step = t / (dur / 16);
      let c = 0;
      const id = setInterval(() => {
        c = Math.min(c + step, t);
        e.target.textContent = Math.floor(c).toLocaleString();
        if (c >= t) clearInterval(id);
      }, 16);
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.counter').forEach(el => cobs.observe(el));
}

// --- PRODUCT CARD TILT ---
function setupTiltEffect() {
  document.querySelectorAll('.pc').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = 'box-shadow 0.4s';
      card.style.transform = `translateY(-8px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s';
      card.style.transform = '';
    });
  });
}

function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;
}

function initSpotlightScrollAnimation() {
  const spotWrapper = document.querySelector('.spot-wrapper');
  const spot = document.querySelector('.spot');
  const spotVisuals = document.querySelector('.spot-visuals');
  const spotCopyBase = document.querySelector('.spot-copy-base');
  const overlay14 = document.getElementById('spot-info-14');
  const overlay7 = document.getElementById('spot-info-7');

  if (!spotWrapper || !spot || !spotVisuals) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: spotWrapper,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
    }
  });

  tl.to(spotVisuals, {
    gridTemplateColumns: '1.45fr 0.55fr',
    ease: 'none',
    duration: 1
  }, 0.1);

  tl.to(spotCopyBase, {
    opacity: 0,
    y: -20,
    ease: 'none',
    duration: 0.3
  }, 0.1);

  tl.to(overlay14, {
    onStart: () => overlay14.classList.add('active'),
    onReverseComplete: () => overlay14.classList.remove('active'),
    duration: 0.01
  }, 0.3);

  tl.to(spotVisuals, {
    gridTemplateColumns: '0.55fr 1.45fr',
    ease: 'none',
    duration: 1
  }, 1.2);

  tl.to(overlay14, {
    onStart: () => overlay14.classList.remove('active'),
    onReverseComplete: () => overlay14.classList.add('active'),
    duration: 0.01
  }, 1.1);

  tl.to(overlay7, {
    onStart: () => overlay7.classList.add('active'),
    onReverseComplete: () => overlay7.classList.remove('active'),
    duration: 0.01
  }, 1.3);

  tl.to(spotVisuals, {
    gridTemplateColumns: '1fr 1fr',
    ease: 'none',
    duration: 0.4
  }, 2.2);

  tl.to(overlay7, {
    onStart: () => overlay7.classList.remove('active'),
    onReverseComplete: () => overlay7.classList.add('active'),
    duration: 0.01
  }, 2.2);

  tl.to(spotCopyBase, {
    opacity: 1,
    y: 0,
    ease: 'none',
    duration: 0.3
  }, 2.3);
}

function initSpecularGlare() {
  const trackGlare = (el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--x', `${x}%`);
      el.style.setProperty('--y', `${y}%`);
    });
  };

  document.querySelectorAll('.fbadge, .pc').forEach(trackGlare);
}

function initMagneticButtons() {
  document.querySelectorAll('.pc').forEach(card => {
    const btn = card.querySelector('.padd');
    if (!btn) return;

    // Remove existing listeners if re-initialized to avoid duplication
    if (card._magneticAttached) return;
    card._magneticAttached = true;

    card.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      
      const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
      if (dist < 75) {
        // Pull button towards cursor coordinates
        const moveX = (e.clientX - btnX) * 0.38;
        const moveY = (e.clientY - btnY) * 0.38;
        gsap.to(btn, {
          x: moveX,
          y: moveY,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        // Return to normal
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });
}

// --- STATE MANAGEMENT: CART ---
function saveCart() {
  localStorage.setItem('ctrl_hub_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  if (!selectors.cartCount) return;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  selectors.cartCount.textContent = totalItems;

  if (!selectors.cartItems) return;
  selectors.cartItems.innerHTML = '';

  if (cart.length === 0) {
    selectors.cartItems.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    selectors.cartTotal.textContent = '0';
    selectors.btnCheckout.disabled = true;
    return;
  }

  selectors.btnCheckout.disabled = false;
  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.price * item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">K${item.price.toLocaleString()}</div>
        <div class="cart-item-ctrls">
          <button class="btn-qty minus" data-id="${item.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="btn-qty plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="btn-del" data-id="${item.id}">Remove</button>
    `;
    selectors.cartItems.appendChild(div);
  });

  selectors.cartTotal.textContent = totalPrice.toLocaleString();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();

  // Show Toast
  if (selectors.toast) {
    selectors.toast.classList.add('show');
    setTimeout(() => selectors.toast.classList.remove('show'), 2200);
  }
}

function changeQuantity(productId, amount) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += amount;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

// --- STATE MANAGEMENT: FILTERING ---
function filterProducts(categoryName) {
  activeCategory = categoryName.toLowerCase();
  
  // Update nav links styling
  document.querySelectorAll('.nlinks a').forEach(link => {
    const text = link.textContent.trim().toLowerCase();
    link.classList.toggle('active', text === activeCategory);
  });

  // Filter DOM cards
  document.querySelectorAll('.pc').forEach((card, index) => {
    // Map card index to product ID (the grid matches PRODUCTS order)
    const product = PRODUCTS[index];
    if (!product) return;

    const matches = activeCategory === 'all' || product.category.toLowerCase().includes(activeCategory) || (activeCategory === 'accessories' && product.category.toLowerCase() === 'accessory');
    card.classList.toggle('hidden', !matches);
  });
}

// --- SEARCH ENGINE ---
function handleSearchInput(query) {
  if (!selectors.searchResults) return;
  selectors.searchResults.innerHTML = '';
  
  const trimmed = query.trim().toLowerCase();
  if (trimmed === '') {
    selectors.searchResults.innerHTML = '<div class="search-no-results">Type something to search...</div>';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(trimmed) || 
    p.category.toLowerCase().includes(trimmed) ||
    p.spec.toLowerCase().includes(trimmed)
  );

  if (matches.length === 0) {
    selectors.searchResults.innerHTML = '<div class="search-no-results">No products found matching your search.</div>';
    return;
  }

  matches.forEach(product => {
    const div = document.createElement('div');
    div.className = 'search-res-item';
    div.setAttribute('data-id', product.id);
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="search-res-img">
      <div>
        <div class="search-res-name">${product.name}</div>
        <div class="search-res-cat">${product.category}</div>
      </div>
      <div class="search-res-price"><span>K</span>${product.price.toLocaleString()}</div>
    `;
    selectors.searchResults.appendChild(div);
  });
}

// --- MODAL UTILS ---
function openModal(modalEl) {
  if (!modalEl) return;
  selectors.backdrop.classList.add('open');
  modalEl.classList.add('open');
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  // Check if any other modal is still open, if not, close backdrop
  const openModals = document.querySelectorAll('.modal.open, .cart-drawer.open');
  if (openModals.length === 0) {
    selectors.backdrop.classList.remove('open');
  }
}

function closeAllModals() {
  selectors.backdrop.classList.remove('open');
  document.querySelectorAll('.modal, .cart-drawer').forEach(m => m.classList.remove('open'));
}

// --- FEATURE SLIDER FUNCTIONS ---
function generateFeatureSlider(featuresArray) {
  if (!featuresArray || featuresArray.length === 0) return '';
  
  const slidesHtml = featuresArray.map((feat, idx) => `
    <div class="item" data-index="${idx}">
      <div class="item-img-wrap">
        <img src="${feat.image}" alt="${feat.title}" loading="lazy">
      </div>
      <div class="item-content">
        <h4 class="item-title">${feat.title}</h4>
        <p class="item-desc">${feat.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="slider-section">
      <h3 class="slider-section-title">Key Features</h3>
      <div class="carousel">
        <div class="list">
          ${slidesHtml}
        </div>
        <div class="arrows">
          <button id="prev" aria-label="Previous feature">&lt;</button>
          <button id="next" aria-label="Next feature">&gt;</button>
        </div>
      </div>
    </div>
  `;
}

function initFeatureSlider() {
  const section = document.querySelector('.slider-section');
  if (!section) return;

  const carousel = section.querySelector('.carousel');
  const list = section.querySelector('.list');
  const prevBtn = section.querySelector('#prev');
  const nextBtn = section.querySelector('#next');

  if (!carousel || !list || !prevBtn || !nextBtn) return;

  let isAnimating = false;

  function showSlider(type) {
    if (isAnimating) return;
    isAnimating = true;

    const items = list.querySelectorAll('.item');
    if (items.length === 0) {
      isAnimating = false;
      return;
    }

    if (type === 'next') {
      list.appendChild(items[0]);
      carousel.classList.add('next');
    } else {
      const lastItem = items[items.length - 1];
      list.insertBefore(lastItem, list.firstChild);
      carousel.classList.add('prev');
    }

    setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
      isAnimating = false;
    }, 500);
  }

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlider('next');
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlider('prev');
  });
}

// --- PRODUCT DETAIL POPUP ---
function showProductDetails(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !selectors.prodModal) return;

  const specsHtml = Object.entries(product.specs).map(([label, val]) => `
    <div class="meta-row">
      <span class="meta-label">${label}</span>
      <span class="meta-val">${val}</span>
    </div>
  `).join('');

  selectors.prodModal.innerHTML = `
    <button class="modal-close-btn" id="prodModalClose">&times;</button>
    <div class="modal-grid">
      <div class="modal-gallery">
        <img src="${product.image}" alt="${product.name}">
        ${product.isNew ? '<div class="pbadge new" style="top:24px; left:24px;">New</div>' : ''}
        ${product.isHot ? '<div class="pbadge" style="top:24px; left:24px;">Hot</div>' : ''}
      </div>
      <div class="modal-details">
        <div class="modal-details-cat">${product.category}</div>
        <h2 class="modal-details-name">${product.name}</h2>
        <p class="modal-details-spec">${product.spec}</p>
        <div class="modal-details-meta">
          ${specsHtml}
        </div>
        <div class="modal-details-foot">
          <div class="modal-details-price"><span>K</span>${product.price.toLocaleString()}</div>
          <button class="modal-details-add" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </div>
    ${generateFeatureSlider(product.features)}
  `;

  // Attach Close Event
  selectors.prodModal.querySelector('#prodModalClose').addEventListener('click', () => {
    closeModal(selectors.prodModal);
  });

  // Attach Add to Cart Event
  selectors.prodModal.querySelector('.modal-details-add').addEventListener('click', (e) => {
    addToCart(parseInt(e.target.dataset.id));
    closeModal(selectors.prodModal);
  });

  initFeatureSlider();

  openModal(selectors.prodModal);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Backdrops
  selectors.backdrop.addEventListener('click', closeAllModals);

  // Cart Drawer toggles
  selectors.cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(selectors.cartDrawer);
  });
  selectors.cartClose.addEventListener('click', () => closeModal(selectors.cartDrawer));

  // Cart quantity & remove button delegation
  selectors.cartItems.addEventListener('click', (e) => {
    const btn = e.target;
    const id = parseInt(btn.getAttribute('data-id'));
    if (!id) return;

    if (btn.classList.contains('plus')) {
      changeQuantity(id, 1);
    } else if (btn.classList.contains('minus')) {
      changeQuantity(id, -1);
    } else if (btn.classList.contains('btn-del')) {
      removeFromCart(id);
    }
  });

  // Checkout Success Simulation
  selectors.btnCheckout.addEventListener('click', () => {
    selectors.cartItems.innerHTML = `
      <div class="success-screen">
        <div class="success-ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Order Placed!</h3>
        <p>Your tech life is about to get a whole lot simpler. We'll be in touch shortly regarding delivery details in Lusaka.</p>
        <button class="npill" onclick="document.getElementById('cartClose').click()">Continue Shopping</button>
      </div>
    `;
    selectors.btnCheckout.disabled = true;
    cart = [];
    localStorage.removeItem('ctrl_hub_cart');
    selectors.cartCount.textContent = '0';
  });

  // Product card click delegation for details modal (avoiding '+' add-to-cart clicks)
  document.querySelectorAll('.pc').forEach((card, index) => {
    card.addEventListener('click', (e) => {
      // If the target is the plus button, ignore it here
      if (e.target.closest('.padd')) return;
      const product = PRODUCTS[index];
      if (product) {
        showProductDetails(product.id);
      }
    });
  });

  // Dynamic Category Filters (hash routing triggers)
  document.querySelectorAll('.cc').forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('.cn').textContent.trim().toLowerCase();
      let path = categoryName;
      if (categoryName === 'mobile phones') path = 'phones';
      window.location.hash = `#/${path}`;
    });
  });

  // Contact Modal triggers
  selectors.contactClose.addEventListener('click', () => closeModal(selectors.contactModal));
  document.querySelectorAll('.npill').forEach(pill => {
    // Only target nav/get-in-touch pills that are buttons
    if (pill.tagName === 'BUTTON' || pill.classList.contains('npill')) {
      pill.addEventListener('click', () => openModal(selectors.contactModal));
    }
  });

  // Contact Form Submission
  selectors.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    selectors.contactModal.innerHTML = `
      <div class="success-screen">
        <div class="success-ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Message Sent!</h3>
        <p>Thanks for getting in touch. One of our Ctrl Hub tech experts will contact you within 24 hours.</p>
        <button class="npill" id="contactSuccessClose">Close</button>
      </div>
    `;
    selectors.contactModal.querySelector('#contactSuccessClose').addEventListener('click', () => {
      closeModal(selectors.contactModal);
      // Restore form after short delay
      setTimeout(() => {
        selectors.contactModal.innerHTML = `
          <button class="modal-close-btn" id="contactClose">&times;</button>
          <div class="contact-header">
            <h3>Get In Touch</h3>
            <p>Have questions about compatibility, warranties, or delivery? Write to us.</p>
          </div>
          <form id="contactForm">
            <div class="form-group">
              <label for="cname">Name</label>
              <input type="text" id="cname" class="form-control" required placeholder="John Doe">
            </div>
            <div class="form-group">
              <label for="cemail">Email</label>
              <input type="email" id="cemail" class="form-control" required placeholder="john@example.com">
            </div>
            <div class="form-group">
              <label for="cmessage">Message</label>
              <textarea id="cmessage" class="form-control" required placeholder="How can we help?"></textarea>
            </div>
            <button class="btn-submit" type="submit">Send Message</button>
          </form>
        `;
        // Re-attach close and submit listeners since the DOM was reset
        selectors.contactClose = document.getElementById('contactClose');
        selectors.contactForm = document.getElementById('contactForm');
        setupEventListeners();
      }, 500);
    });
  });

  // Search Input Handler
  selectors.searchInput.addEventListener('input', (e) => {
    handleSearchInput(e.target.value);
  });

  // Search Results Item click delegation
  selectors.searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-res-item');
    if (!item) return;

    const id = parseInt(item.getAttribute('data-id'));
    closeModal(selectors.searchModal);
    showProductDetails(id);
  });

  // Audio Spotlight badges click listeners
  const spotImgOne = document.querySelector('.spot-img.one');
  const spotImgTwo = document.querySelector('.spot-img.two');
  if (spotImgOne) {
    spotImgOne.addEventListener('click', () => {
      showProductDetails(14); // AirPods Pro 2
    });
  }
  if (spotImgTwo) {
    spotImgTwo.addEventListener('click', () => {
      showProductDetails(7); // Sony WH-1000XM5
    });
  }
}

// --- CATEGORY PAGES DATABASE ---
const CATEGORY_PAGES = {
  laptops: {
    title: 'High-Performance Laptops',
    subtitle: 'Power, portability, and style. Handpicked premium laptops for work, study, and creative projects in Zambia.',
    headerBg: 'assets/laptop.jpg',
    headerVideo: 'assets/Laptops.mp4',
    edTitle: 'Built for creators, designed for life.',
    edText: 'From ultra-thin notebooks that slide into your bag to powerhouses designed for rendering and editing, our collection of Laptops represents the absolute pinnacle of current computing tech.',
    edBg: 'assets/laptop_editorial.png'
  },
  phones: {
    title: 'Next-Gen Mobile Phones',
    subtitle: 'Connect, capture, and create. Explore the latest smartphones featuring pro cameras and high-refresh screens.',
    headerBg: 'assets/phone.jpg',
    headerVideo: 'assets/Phone.mp4',
    edTitle: 'The world in the palm of your hand.',
    edText: 'Featuring industry-leading display panels, high-megapixel cameras, and batteries that last through your longest days. We only source genuine devices from official channels.',
    edBg: 'assets/phone_editorial.png'
  },
  desktops: {
    title: 'Powerhouse Desktops',
    subtitle: 'Maximum expansion, reliable cooling. Complete workstations and compact desktops engineered to power your business.',
    headerBg: 'assets/desktop.jpg',
    headerVideo: 'assets/Desktop.mp4',
    edTitle: 'Unmatched performance stability.',
    edText: 'For intensive processing, high-volume database operations, or creative pipelines. Our desktop towers are configured with premium thermal management and expansion potential.',
    edBg: 'assets/desktop_editorial.png'
  },
  printers: {
    title: 'Business Printers',
    subtitle: 'Crisp text, high output, low cost. Reliable office printers and scanners that work as hard as you do.',
    headerBg: 'assets/printer.jpg',
    headerVideo: 'assets/Printers.mp4',
    edTitle: 'Flawless prints, day in and day out.',
    edText: 'Equipped with duplexing, robust network connectivity, and low cost-per-page toner replacement. Keep your workflow moving forward without interruptions.',
    edBg: 'assets/printer_editorial.png'
  },
  accessories: {
    title: 'Essential Accessories',
    subtitle: 'Upgrade your desk. Ergonomic keyboards, high-fidelity wireless audio, and chargers designed for your devices.',
    headerBg: 'assets/earbuds.jpg',
    headerVideo: 'assets/Accessories.mp4',
    edTitle: 'Complete your setup.',
    edText: 'Great peripherals transform how you work. Elevate your everyday listening with active noise cancellation, and streamline your desk with wireless accessories.',
    edBg: 'assets/feature-headphones-warm.jpg'
  }
};

// --- DYNAMIC RENDERER: CATEGORY FEATURED SHOWCASE ---
function renderCategoryFeatured(categoryName) {
  const container = document.getElementById('catFeaturedSection');
  if (!container) return;

  // Filter products for this category
  const filtered = PRODUCTS.filter(p => {
    const pCat = p.category.toLowerCase();
    if (categoryName === 'laptops' && pCat === 'laptop') return true;
    if (categoryName === 'phones' && pCat.includes('phone')) return true;
    if (categoryName === 'desktops' && pCat === 'desktop') return true;
    if (categoryName === 'printers' && pCat === 'printer') return true;
    if (categoryName === 'accessories' && pCat === 'accessory') return true;
    return false;
  });

  if (filtered.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  const itemsHtml = filtered.map(product => {
    const specsSummary = Object.entries(product.specs)
      .slice(0, 3)
      .map(([label, val]) => `• ${val.split(' (')[0]}`)
      .join(' <br> ');

    return `
      <div class="item" data-id="${product.id}">
        <div class="content">
          <div class="spotlight-cat-badge">${product.category} Spotlight</div>
          <h2 class="spotlight-name">${product.name}</h2>
          <p class="spotlight-spec">${specsSummary}</p>
          <div class="spotlight-price"><span>K</span>${product.price.toLocaleString()}</div>
          <button class="spotlight-add-btn" data-id="${product.id}">Add to Cart</button>
        </div>
        <div class="image-wrap">
          <div class="spotlight-image-glow"></div>
          <img src="${product.carouselImage || product.image}" alt="${product.name}">
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="showcase-carousel">
      <div class="list">
        ${itemsHtml}
      </div>
      <div class="arrows">
        <button id="showcase-prev" class="showcase-arrow" aria-label="Previous product">&lt;</button>
        <button id="showcase-next" class="showcase-arrow" aria-label="Next product">&gt;</button>
      </div>
    </div>
  `;

  const carousel = container.querySelector('.showcase-carousel');
  const list = container.querySelector('.list');
  const prevBtn = container.querySelector('#showcase-prev');
  const nextBtn = container.querySelector('#showcase-next');

  if (!carousel || !list || !prevBtn || !nextBtn) return;

  let isAnimating = false;

  function showSlider(type) {
    if (isAnimating) return;
    isAnimating = true;

    const items = list.querySelectorAll('.item');
    if (items.length === 0) {
      isAnimating = false;
      return;
    }

    if (type === 'next') {
      list.appendChild(items[0]);
      carousel.classList.add('next');
    } else {
      const lastItem = items[items.length - 1];
      list.insertBefore(lastItem, list.firstChild);
      carousel.classList.add('prev');
    }

    setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
      isAnimating = false;
    }, 500);
  }

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlider('next');
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlider('prev');
  });

  // Inactive previews and active details trigger logic
  list.addEventListener('click', (e) => {
    const item = e.target.closest('.item');
    if (!item) return;

    const id = parseInt(item.dataset.id);
    const isFirstChild = item === list.firstElementChild;

    if (isFirstChild) {
      const addBtn = e.target.closest('.spotlight-add-btn');
      const imgWrap = e.target.closest('.image-wrap');
      if (addBtn) {
        e.stopPropagation();
        addToCart(id);
      } else if (imgWrap) {
        e.stopPropagation();
      } else {
        showProductDetails(id);
      }
    } else {
      e.stopPropagation();
      showSlider('next');
    }
  });
}

// --- DYNAMIC RENDERER: CATEGORY PRODUCTS ---
function renderCategoryProducts(categoryName) {
  const container = document.getElementById('catProductsGrid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = PRODUCTS.filter(p => {
    const pCat = p.category.toLowerCase();
    if (categoryName === 'laptops' && pCat === 'laptop') return true;
    if (categoryName === 'phones' && pCat.includes('phone')) return true;
    if (categoryName === 'desktops' && pCat === 'desktop') return true;
    if (categoryName === 'printers' && pCat === 'printer') return true;
    if (categoryName === 'accessories' && pCat === 'accessory') return true;
    return false;
  });

  filtered.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'pc';
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.animation = `fu 0.7s var(--ease) ${0.18 + idx * 0.08}s forwards`;
    
    const specsDrawerHtml = Object.entries(product.specs)
      .slice(0, 3)
      .map(([label, val]) => `<li><span>${label}:</span> ${val.split(' (')[0]}</li>`)
      .join('');

    card.innerHTML = `
      <div class="glass-glare"></div>
      <div class="pimg">
        <img src="${product.carouselImage || product.image}" alt="${product.name}" loading="lazy">
        <div class="pimg-glow"></div>
        ${product.isNew ? '<div class="pbadge new">New</div>' : ''}
        ${product.isHot ? '<div class="pbadge">Hot</div>' : ''}
        <div class="pimg-specs">
          <ul class="pimg-specs-list">
            ${specsDrawerHtml}
          </ul>
        </div>
      </div>
      <div class="pinfo">
        <div class="pcat">${product.category}</div>
        <div class="pname">${product.name}</div>
        <div class="pspec">${product.spec}</div>
        <div class="pfoot">
          <div class="pprice"><span>K</span>${product.price.toLocaleString()}</div>
          <button class="padd">+</button>
        </div>
      </div>
    `;

    // Attach card details open listener
    card.addEventListener('click', (e) => {
      if (e.target.closest('.padd')) return;
      showProductDetails(product.id);
    });

    // Attach padd add-to-cart listener
    card.querySelector('.padd').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id);
    });

    container.appendChild(card);
  });

  setupTiltEffect();
  initSpecularGlare();
  initMagneticButtons();
}

// --- ROUTER ENGINE ---
function handleRoute() {
  const hash = window.location.hash || '';
  const path = hash.replace(/^#\/?/, '').trim().toLowerCase();

  const homeView = document.getElementById('home-view');
  const catView = document.getElementById('category-view');

  if (!homeView || !catView) return;

  const performSwitch = () => {
    if (CATEGORY_PAGES[path]) {
      const data = CATEGORY_PAGES[path];

      homeView.style.display = 'none';
      homeView.classList.remove('view-animate');

      catView.style.display = 'block';
      catView.offsetHeight; // force reflow
      catView.classList.add('view-animate');

      // Populate Category Header
      document.getElementById('catHeader').style.backgroundImage = `linear-gradient(180deg, rgba(6,14,13,0.3) 0%, rgba(6,14,13,0.7) 100%), url('${data.headerBg}')`;
      document.getElementById('catTitle').textContent = data.title;
      document.getElementById('catSubtitle').textContent = data.subtitle;

      // Handle Video Source Update
      const headerVideo = document.getElementById('catHeaderVideo');
      if (headerVideo && data.headerVideo) {
        const source = headerVideo.querySelector('source');
        if (source) {
          const currentSrc = source.getAttribute('src');
          if (currentSrc !== data.headerVideo) {
            source.setAttribute('src', data.headerVideo);
            headerVideo.load();
            headerVideo.play().catch(err => console.log("Video play failed:", err));
          }
        }
      }

      // Populate Category Editorial
      document.getElementById('catEditorial').style.backgroundImage = `linear-gradient(90deg, rgba(6,14,13,0.94) 0%, rgba(6,14,13,0.75) 45%, rgba(6,14,13,0.18) 100%), url('${data.edBg}')`;
      
      // Reset and observe dynamic editorial elements for scroll reveal
      const edTitle = document.getElementById('catEdTitle');
      const edText = document.getElementById('catEdText');
      const catEd = document.getElementById('catEditorial');
      
      if (catEd) {
        catEd.classList.remove('vis');
        catEd.classList.add('rv');
        if (window.scrollObserver) window.scrollObserver.observe(catEd);
      }
      if (edTitle) {
        edTitle.textContent = data.edTitle;
        edTitle.classList.remove('vis');
        edTitle.classList.add('rv', 'd1');
        if (window.scrollObserver) window.scrollObserver.observe(edTitle);
      }
      if (edText) {
        edText.textContent = data.edText;
        edText.classList.remove('vis');
        edText.classList.add('rv', 'd2');
        if (window.scrollObserver) window.scrollObserver.observe(edText);
      }

      // Render featured spotlight showcase
      renderCategoryFeatured(path);

      // Render cards
      renderCategoryProducts(path);

      // Sync navbar links styling
      document.querySelectorAll('.nlinks a').forEach(link => {
        const href = link.getAttribute('href') || '';
        link.classList.toggle('active', href.endsWith(path));
      });

    } else {
      catView.style.display = 'none';
      catView.classList.remove('view-animate');

      homeView.style.display = 'block';
      homeView.offsetHeight; // force reflow
      homeView.classList.add('view-animate');

      // De-activate all nav links
      document.querySelectorAll('.nlinks a').forEach(link => {
        link.classList.remove('active');
      });
    }

    // Instantly scroll back to top of page on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  performSwitch();
}

// Attach Route Listeners
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// --- GLOBAL FUNCTIONS FOR DOM ---
window.addCart = function(btn) {
  // Finds product by index matching its position in DOM product list
  const productCards = Array.from(document.querySelectorAll('.pc'));
  const card = btn.closest('.pc');
  const index = productCards.indexOf(card);
  if (index !== -1) {
    const product = PRODUCTS[index];
    if (product) {
      addToCart(product.id);
    }
  }
};

window.sendSearch = function() {
  // Opens the search overlay modal instead of standard prompt
  openModal(selectors.searchModal);
  selectors.searchInput.value = '';
  selectors.searchResults.innerHTML = '<div class="search-no-results">Type something to search...</div>';
  setTimeout(() => selectors.searchInput.focus(), 150);
};
