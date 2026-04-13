// ============================================
// 🍜 KHIDMAT KATERING KELANTAN - MENU DATA
// ============================================
const menuItems = [
  // Air Balang Mewah
  { name: "Air Balang Mewah (10L)", category: "Air Balang Mewah", price: 45.00, desc: "Sirap Limau, Bandung, Asam Boi, Mata Kucing", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Air Balang Premium (15L)", category: "Air Balang Mewah", price: 65.00, desc: "Pilihan rasa premium: Laici, Anggur, Lemon Tea", image: "https://images.unsplash.com/photo-1582106682436-3c9c3c8b3b8b?w=400" },
  
  // Aiskrim
  { name: "Aiskrim Malaysia (scoop)", category: "Aiskrim", price: 3.50, desc: "Perisa jagung, cendol, durian, pulut hitam", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Goreng", category: "Aiskrim", price: 5.00, desc: "Aiskrim vanila bersalut roti, digoreng rangup", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },

  // Lokching
  { name: "Lokching (10 cucuk)", category: "Lokching", price: 18.00, desc: "Fishball, crab stick, bebola ayam, sosej", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching Special Set", category: "Lokching", price: 35.00, desc: "20 cucuk + kuah kacang & sambal kicap", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },

  // Mee Celup
  { name: "Mee Celup (set)", category: "Mee Celup", price: 28.00, desc: "Mee kuning, tauhu, telur, sayur, kuah asam pedas", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Celup + Daging", category: "Mee Celup", price: 38.00, desc: "Mee celup dengan hirisan daging lembu segar", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },

  // Apam Balik
  { name: "Apam Balik Biasa", category: "Apam Balik", price: 2.50, desc: "Kacang tanah, jagung, gula", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Balik Special", category: "Apam Balik", price: 4.00, desc: "Kacang, jagung, coklat, keju", image: "https://images.unsplash.com/photo-1596560548464-8b8b8b8b8b8?w=400" },

  // Kambing Golek
  { name: "Kambing Golek (seekor)", category: "Kambing Golek", price: 1400.00, desc: "Termasuk nasi arab, kuah kari, acar, sayur", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
  { name: "Nasi Arab Kambing (pack)", category: "Kambing Golek", price: 12.00, desc: "Nasi arab + daging kambing golek + acar", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400" },

  // Dessert Table
  { name: "Dessert Table Basic", category: "Dessert Table", price: 250.00, desc: "6 jenis kuih muih + 2 jenis kek", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table Premium", category: "Dessert Table", price: 450.00, desc: "10 jenis pencuci mulut + hiasan tema", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },

  // Candy Wall
  { name: "Candy Wall Setup (asas)", category: "Candy Wall", price: 180.00, desc: "Papan candy + 5 jenis gula-gula", image: "https://images.unsplash.com/photo-1599623560574-39d4b4b4b4b4?w=400" },
  { name: "Candy Wall Deluxe", category: "Candy Wall", price: 350.00, desc: "Setup penuh + 12 jenis gula-gula + bekas comel", image: "https://images.unsplash.com/photo-1596560548464-8b8b8b8b8b8?w=400" }
];

// ============================================
// CART STATE
// ============================================
let cart = [];

// ============================================
// RENDER CATEGORY TABS & MENU
// ============================================
function getCategories() {
  return [...new Set(menuItems.map(item => item.category))];
}

function renderTabs() {
  const tabsContainer = document.getElementById('categoryTabs');
  const categories = getCategories();
  let html = `<button class="cat-btn active" data-cat="all">Semua</button>`;
  categories.forEach(cat => {
    html += `<button class="cat-btn" data-cat="${cat}">${cat}</button>`;
  });
  tabsContainer.innerHTML = html;

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.cat;
      renderMenu(category === 'all' ? null : category);
    });
  });
}

function renderMenu(category = null) {
  const grid = document.getElementById('menuGrid');
  const filtered = category ? menuItems.filter(i => i.category === category) : menuItems;
  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="menu-card">
        <div class="menu-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
        <div class="menu-info">
          <h4>${item.name}</h4>
          <p class="menu-desc">${item.desc}</p>
          <div class="menu-price">RM${item.price.toFixed(2)}</div>
          <button class="btn-order" data-item='${JSON.stringify(item)}'>Tambah <i class="fas fa-plus-circle"></i></button>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;

  document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = JSON.parse(btn.dataset.item);
      addToCart(item);
    });
  });
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(item) {
  cart.push({ ...item });
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const cartDiv = document.getElementById('cartItems');
  const totalSpan = document.getElementById('cartTotal');
  const orderDetailsInput = document.getElementById('orderDetails');

  if (cart.length === 0) {
    cartDiv.innerHTML = '<p class="empty-cart">Tiada item. Sila pilih menu di atas.</p>';
    totalSpan.textContent = 'RM0';
    orderDetailsInput.value = '';
    return;
  }

  let html = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price;
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <i class="fas fa-times-circle" onclick="removeFromCart(${idx})" style="cursor:pointer;"></i>
          <span class="cart-item-name">${item.name}</span>
        </div>
        <span class="cart-item-price">RM${item.price.toFixed(2)}</span>
      </div>
    `;
  });
  cartDiv.innerHTML = html;
  totalSpan.textContent = `RM${total.toFixed(2)}`;

  const orderSummary = cart.map(i => `${i.name} (RM${i.price.toFixed(2)})`).join(', ');
  orderDetailsInput.value = `Pesanan: ${orderSummary} | Jumlah: RM${total.toFixed(2)}`;
}

window.removeFromCart = removeFromCart;

// ============================================
// GOOGLE SHEETS INTEGRATION (URL PRE-FILLED)
// ============================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxU4FSnQ7K19pn4gOJdgP2l01lQ-G_QeuShFghmpXN5sFPSaFSToeolLg_Gq-ZVpIjD/exec';

function setupForm() {
  const form = document.getElementById('orderForm');
  const statusDiv = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      statusDiv.innerHTML = '<span class="error">⚠️ Sila pilih sekurang-kurangnya satu item.</span>';
      return;
    }

    statusDiv.innerHTML = '<span style="color:#da291c;">Menghantar tempahan...</span>';

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      eventDate: document.getElementById('eventDate').value || 'Tidak dinyatakan',
      notes: document.getElementById('notes').value || 'Tiada',
      orderDetails: document.getElementById('orderDetails').value,
      timestamp: new Date().toLocaleString('ms-MY')
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      statusDiv.innerHTML = '<span class="success">✨ Tempahan diterima! Kami akan hubungi anda segera.</span>';
      form.reset();
      cart = [];
      updateCartUI();
    })
    .catch(error => {
      console.error(error);
      statusDiv.innerHTML = '<span class="error">❌ Ralat. Sila cuba lagi atau hubungi 010-944 1083.</span>';
    });
  });
}

// ============================================
// MOBILE MENU
// ============================================
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.querySelector('i').classList.add('fa-bars');
      hamburger.querySelector('i').classList.remove('fa-times');
    });
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderMenu();
  updateCartUI();
  setupForm();
  setupMobileMenu();
});
