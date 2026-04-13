// ============================================
// 🍔 MR. LUCKY MENU DATA (EASY TO EDIT)
// ============================================
const menuItems = [
  // BURGERS & MAINS
  { name: "Lucky Double Smash", category: "Burgers & Mains", price: 14.99, desc: "Two beef patties, American cheese, special sauce, pickles, onion", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400" },
  { name: "Crispy Chicken Sandwich", category: "Burgers & Mains", price: 12.99, desc: "Buttermilk fried chicken, spicy mayo, slaw, brioche bun", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400" },
  { name: "BBQ Bacon Burger", category: "Burgers & Mains", price: 15.99, desc: "Angus beef, smoked bacon, cheddar, BBQ sauce, onion rings", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400" },
  { name: "Veggie Power Bowl", category: "Burgers & Mains", price: 11.99, desc: "Quinoa, roasted veggies, avocado, tahini dressing", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  // SIDES
  { name: "Truffle Parmesan Fries", category: "Sides", price: 6.99, desc: "Crispy fries, truffle oil, parmesan, herbs", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400" },
  { name: "Mac & Cheese Bites", category: "Sides", price: 7.99, desc: "Crispy fried mac & cheese, sriracha ranch", image: "https://images.unsplash.com/photo-1541520964328-22d8b8ed1ac5?w=400" },
  { name: "Onion Rings", category: "Sides", price: 5.99, desc: "Beer-battered, served with chipotle mayo", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400" },
  // DESSERTS
  { name: "Chocolate Lava Cake", category: "Desserts", price: 8.99, desc: "Warm chocolate cake, molten center, vanilla ice cream", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Strawberry Cheesecake", category: "Desserts", price: 7.99, desc: "New York style, fresh strawberries", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
  // DRINKS
  { name: "Fresh Lemonade", category: "Drinks", price: 3.99, desc: "Classic or strawberry", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400" },
  { name: "Iced Tea", category: "Drinks", price: 2.99, desc: "Unsweetened or sweet", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
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
  let html = `<button class="cat-btn active" data-cat="all">All</button>`;
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
          <div class="menu-price">$${item.price.toFixed(2)}</div>
          <button class="btn-order" data-item='${JSON.stringify(item)}'>Add to order <i class="fas fa-plus-circle"></i></button>
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
    cartDiv.innerHTML = '<p class="empty-cart">Your cart is empty. Add some delicious items!</p>';
    totalSpan.textContent = '$0';
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
        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
      </div>
    `;
  });
  cartDiv.innerHTML = html;
  totalSpan.textContent = `$${total.toFixed(2)}`;

  const orderSummary = cart.map(i => `${i.name} ($${i.price.toFixed(2)})`).join(', ');
  orderDetailsInput.value = `Items: ${orderSummary} | Total: $${total.toFixed(2)}`;
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
      statusDiv.innerHTML = '<span class="error">⚠️ Please add at least one item to your order.</span>';
      return;
    }

    statusDiv.innerHTML = '<span style="color:#da291c;">Sending your order...</span>';

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      eventDate: document.getElementById('eventDate').value || 'Not specified',
      notes: document.getElementById('notes').value || 'None',
      orderDetails: document.getElementById('orderDetails').value,
      timestamp: new Date().toLocaleString()
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      statusDiv.innerHTML = '<span class="success">✨ Order sent! We’ll contact you shortly to confirm.</span>';
      form.reset();
      cart = [];
      updateCartUI();
    })
    .catch(error => {
      console.error(error);
      statusDiv.innerHTML = '<span class="error">❌ Error. Please try again or call us.</span>';
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
