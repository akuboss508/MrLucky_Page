// ============================================
// 🍀 MR. LUCKY CATERING – MODULAR MENU DATA
// ============================================
// Edit the array below to add, remove, or change menu items.
// Each item needs: name, description, price, image (URL)
// ============================================

const menuItems = [
  {
    name: "Lucky Greens",
    description: "Heirloom tomatoes, burrata, basil oil, aged balsamic · gluten-free",
    price: "market price",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Heritage Lamb",
    description: "Herb crust, roasted garlic purée, rosemary jus, seasonal vegetables",
    price: "per guest",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Golden Brûlée",
    description: "Tahitian vanilla bean, caramelized sugar, seasonal berries",
    price: "dessert station",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // 👇 ADD MORE MENU ITEMS BELOW THIS LINE 👇
  {
    name: "Truffle Risotto",
    description: "Arborio rice, wild mushrooms, parmesan, white truffle oil",
    price: "per person",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Seared Scallops",
    description: "Pan-seared diver scallops, cauliflower purée, crispy prosciutto",
    price: "market price",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
  // Add as many as you like – they will automatically appear in a 3‑column grid.
];

// ============================================
// RENDER MENU CARDS (DYNAMIC)
// ============================================
function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  let html = '';
  menuItems.forEach(item => {
    html += `
      <div class="menu-card">
        <div class="menu-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-info">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <span class="price">${item.price}</span>
        </div>
      </div>
    `;
  });
  menuGrid.innerHTML = html;
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// ============================================
// GOOGLE SHEETS FORM SUBMISSION
// ============================================
// ⚠️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW ⚠️
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxU4FSnQ7K19pn4gOJdgP2l01lQ-G_QeuShFghmpXN5sFPSaFSToeolLg_Gq-ZVpIjD/exec';

function setupForm() {
  const form = document.getElementById('cateringForm');
  const statusDiv = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (GOOGLE_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbxU4FSnQ7K19pn4gOJdgP2l01lQ-G_QeuShFghmpXN5sFPSaFSToeolLg_Gq-ZVpIjD/exec') {
      statusDiv.innerHTML = '<span class="error">⚠️ Please set your Google Script URL in js/script.js.</span>';
      return;
    }

    statusDiv.innerHTML = '<span style="color:#d4a843;">Sending inquiry...</span>';

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      details: document.getElementById('details').value,
      timestamp: new Date().toLocaleString()
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      statusDiv.innerHTML = '<span class="success">✨ Thank you! Your inquiry has been sent. We’ll be in touch soon.</span>';
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      statusDiv.innerHTML = '<span class="error">❌ Oops! Something went wrong. Please try again or email us directly.</span>';
    });
  });
}

// ============================================
// STICKY HEADER BACKGROUND (COSMETIC)
// ============================================
function setupHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255,255,255,0.9)';
    } else {
      header.style.background = 'rgba(255,255,255,0.85)';
    }
  });
}

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupMobileMenu();
  setupForm();
  setupHeaderScroll();
});