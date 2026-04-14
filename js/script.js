// ============================================
// 🍍 MR. LUCKY CATERING - FULL MENU (WITH MIN QTY)
// ============================================
const menuItems = [
  // ------------------ COLEK BUAH ------------------
  { name: "Colek Buah - Pakej 200 pax", category: "Colek Buah", price: 360, minQty: 1, desc: "Nenas 8kg, Jambu Batu 6kg, Mangga 6kg, Betik 3kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Colek Buah - Pakej 350 pax", category: "Colek Buah", price: 520, minQty: 1, desc: "Nenas 12kg, Jambu Batu 9kg, Mangga 9kg, Betik 4kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Colek Buah - Pakej 500 pax", category: "Colek Buah", price: 740, minQty: 1, desc: "Nenas 18kg, Jambu Batu 18kg, Mangga 18kg, Betik 8kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Add-on: Crew Serve", category: "Colek Buah", price: 40, minQty: 1, desc: "Seorang crew untuk menghidang", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Serbuk Asam Boi", category: "Colek Buah", price: 10, minQty: 1, desc: "Perasa tambahan", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Serbuk Cili, Gula & Garam", category: "Colek Buah", price: 10, minQty: 1, desc: "Set perasa", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ MEE SUP ------------------
  { name: "Mee Sup - 200-250 pax", category: "Mee Sup", price: 475, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 250-350 pax", category: "Mee Sup", price: 550, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 350-450 pax", category: "Mee Sup", price: 650, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 450-550 pax", category: "Mee Sup", price: 750, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 550-650 pax", category: "Mee Sup", price: 850, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 650-750 pax", category: "Mee Sup", price: 950, minQty: 1, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Add-on: Crew (Mee Sup)", category: "Mee Sup", price: 40, minQty: 1, desc: "Seorang crew", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Lada Jeruk", category: "Mee Sup", price: 15, minQty: 1, desc: "Jeruk lada", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Cili Oil", category: "Mee Sup", price: 20, minQty: 1, desc: "Minyak cili pedas", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ LOKCHING ------------------
  { name: "Lokching - 200 cucuk (40 pax)", category: "Lokching", price: 180, minQty: 1, desc: "Pelbagai jenis bebola & fishball", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 1000 cucuk (200 pax)", category: "Lokching", price: 350, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 1500 cucuk (300 pax)", category: "Lokching", price: 475, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 2000 cucuk (400 pax)", category: "Lokching", price: 580, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 2500 cucuk (500 pax)", category: "Lokching", price: 720, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 3000 cucuk (600 pax)", category: "Lokching", price: 840, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 3500 cucuk (700 pax)", category: "Lokching", price: 960, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 4000 cucuk (800 pax)", category: "Lokching", price: 1080, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 4500 cucuk (900 pax)", category: "Lokching", price: 1195, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 5000 cucuk (1000 pax)", category: "Lokching", price: 310, minQty: 1, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },

  // ------------------ AIR BALANG (MOJITO) ------------------
  { name: "Mojito Strawberi 23L", category: "Air Balang (Mojito)", price: 90, minQty: 1, desc: "Mojito strawberi sejuk", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Strawberi 40L", category: "Air Balang (Mojito)", price: 160, minQty: 1, desc: "Mojito strawberi sejuk", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Tembikai 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Tembikai 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blueberry 23L", category: "Air Balang (Mojito)", price: 90, minQty: 1, desc: "Mojito blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blueberry 40L", category: "Air Balang (Mojito)", price: 160, minQty: 1, desc: "Mojito blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honey Lemon 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito madu lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honey Lemon 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito madu lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Mangga 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Mangga 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Guava 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito jambu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Guava 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito jambu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Kiwi 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito kiwi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Kiwi 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito kiwi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honeydew 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honeydew 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Nanas 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito nanas", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Nanas 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito nanas", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Sunkist 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Sunkist 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blue Lemon 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito blue lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blue Lemon 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito blue lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Epal 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Epal 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Laici 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Laici 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Anggur 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Mojito anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Anggur 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Mojito anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Solero 23L", category: "Air Balang (Mojito)", price: 80, minQty: 1, desc: "Minuman solero", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Solero 40L", category: "Air Balang (Mojito)", price: 145, minQty: 1, desc: "Minuman solero", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Soda Herbs 23L", category: "Air Balang (Mojito)", price: 70, minQty: 1, desc: "Soda herba", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Soda Herbs 40L", category: "Air Balang (Mojito)", price: 125, minQty: 1, desc: "Soda herba", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },

  // ------------------ AIR BALANG (YOGURT) ------------------
  { name: "Yogurt Original 23L", category: "Air Balang (Yogurt)", price: 125, minQty: 1, desc: "Yogurt asli", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Original 40L", category: "Air Balang (Yogurt)", price: 230, minQty: 1, desc: "Yogurt asli", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Strawberi 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt strawberi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Strawberi 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt strawberi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Mangga 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt mangga", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Mangga 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt mangga", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Oren 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt oren", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Oren 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt oren", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Blackcurrant 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt blackcurrant", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Blackcurrant 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt blackcurrant", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Honeydew 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt honeydew", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Honeydew 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt honeydew", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Kiwi 23L", category: "Air Balang (Yogurt)", price: 140, minQty: 1, desc: "Yogurt kiwi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Kiwi 40L", category: "Air Balang (Yogurt)", price: 250, minQty: 1, desc: "Yogurt kiwi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },

  // ------------------ AIR BALANG (JUS/TEH) ------------------
  { name: "Jus Strawberi 23L", category: "Air Balang (Jus/Teh)", price: 70, minQty: 1, desc: "Jus strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Strawberi 40L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jus strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Mangga 23L", category: "Air Balang (Jus/Teh)", price: 70, minQty: 1, desc: "Jus mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Mangga 40L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jus mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Tembikai 23L", category: "Air Balang (Jus/Teh)", price: 70, minQty: 1, desc: "Jus tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Tembikai 40L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jus tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Oren Sunkist 23L", category: "Air Balang (Jus/Teh)", price: 70, minQty: 1, desc: "Jus oren sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Oren Sunkist 40L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jus oren sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jambu Batu Asamboi 23L", category: "Air Balang (Jus/Teh)", price: 70, minQty: 1, desc: "Jambu batu + asam boi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jambu Batu Asamboi 40L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jambu batu + asam boi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Anggur 23L", category: "Air Balang (Jus/Teh)", price: 65, minQty: 1, desc: "Jus anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Anggur 40L", category: "Air Balang (Jus/Teh)", price: 95, minQty: 1, desc: "Jus anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 23L", category: "Air Balang (Jus/Teh)", price: 65, minQty: 1, desc: "Jus blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 40L", category: "Air Balang (Jus/Teh)", price: 95, minQty: 1, desc: "Jus blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Laici 23L", category: "Air Balang (Jus/Teh)", price: 65, minQty: 1, desc: "Air laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Laici 40L", category: "Air Balang (Jus/Teh)", price: 95, minQty: 1, desc: "Air laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Bunga 23L", category: "Air Balang (Jus/Teh)", price: 65, minQty: 1, desc: "Teh bunga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Bunga 40L", category: "Air Balang (Jus/Teh)", price: 95, minQty: 1, desc: "Teh bunga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Epal 23L", category: "Air Balang (Jus/Teh)", price: 60, minQty: 1, desc: "Jus epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Epal 40L", category: "Air Balang (Jus/Teh)", price: 90, minQty: 1, desc: "Jus epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Sirap Laici Limau Selasih 23L", category: "Air Balang (Jus/Teh)", price: 60, minQty: 1, desc: "Sirap laici limau selasih", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Sirap Laici Limau Selasih 40L", category: "Air Balang (Jus/Teh)", price: 90, minQty: 1, desc: "Sirap laici limau selasih", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Minuman strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Minuman strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Chipsmore 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Coklat chipsmore", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Chipsmore 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Coklat chipsmore", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 23L (2)", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 40L (2)", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Vanilla Cookies 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Vanilla cookies", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Vanilla Cookies 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Vanilla cookies", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mangga 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mangga 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Hijau Matcha 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Teh hijau matcha", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Hijau Matcha 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Teh hijau matcha", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Honeydew 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Honeydew 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Cappuccino Biscoff 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Cappuccino biscoff", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Cappuccino Biscoff 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Cappuccino biscoff", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jagung 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Jagung", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jagung 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Jagung", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Hazelnut 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Coklat hazelnut", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Hazelnut 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Coklat hazelnut", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Durian 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Durian", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Durian 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Durian", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Keladi 23L", category: "Air Balang (Jus/Teh)", price: 95, minQty: 1, desc: "Keladi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Keladi 40L", category: "Air Balang (Jus/Teh)", price: 175, minQty: 1, desc: "Keladi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Pisang 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Pisang", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Pisang 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Pisang", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Onde-Onde 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Onde-onde", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Onde-Onde 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Onde-onde", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi Coklat 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Strawberi coklat", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi Coklat 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Strawberi coklat", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Beng Madu 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Teh beng madu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Beng Madu 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Teh beng madu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Latte 23L", category: "Air Balang (Jus/Teh)", price: 115, minQty: 1, desc: "Latte", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Latte 40L", category: "Air Balang (Jus/Teh)", price: 200, minQty: 1, desc: "Latte", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Kurma 23L", category: "Air Balang (Jus/Teh)", price: 110, minQty: 1, desc: "Kurma", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Kurma 40L", category: "Air Balang (Jus/Teh)", price: 190, minQty: 1, desc: "Kurma", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh O Beng 23L", category: "Air Balang (Jus/Teh)", price: 60, minQty: 1, desc: "Teh o beng", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh O Beng 40L", category: "Air Balang (Jus/Teh)", price: 90, minQty: 1, desc: "Teh o beng", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },

  // ------------------ APAM CRISPY ------------------
  { name: "Apam Crispy - 200-300 pax", category: "Apam Crispy", price: 499, minQty: 1, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 300-500 pax", category: "Apam Crispy", price: 599, minQty: 1, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 500-700 pax", category: "Apam Crispy", price: 699, minQty: 1, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 800-1000 pax", category: "Apam Crispy", price: 999, minQty: 1, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },

  // ------------------ AISKRIM ------------------
  { name: "Aiskrim Kon - 300 kon (2 perisa)", category: "Aiskrim", price: 2.00, minQty: 300, desc: "Harga per kon. Min order 300 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 400 kon (3 perisa)", category: "Aiskrim", price: 2.00, minQty: 400, desc: "Harga per kon. Min order 400 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 500 kon (4 perisa)", category: "Aiskrim", price: 2.00, minQty: 500, desc: "Harga per kon. Min order 500 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 700 kon (5 perisa)", category: "Aiskrim", price: 2.00, minQty: 700, desc: "Harga per kon. Min order 700 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 1000 kon (6 perisa)", category: "Aiskrim", price: 2.00, minQty: 1000, desc: "Harga per kon. Min order 1000 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 200 cup (2 perisa)", category: "Aiskrim", price: 2.00, minQty: 200, desc: "Harga per cup. Min order 200 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 300-500 cup (4 perisa)", category: "Aiskrim", price: 1.90, minQty: 300, desc: "Harga per cup. Min order 300 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 600-1000 cup (8 perisa)", category: "Aiskrim", price: 1.80, minQty: 600, desc: "Harga per cup. Min order 600 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 300 potong (2 perisa)", category: "Aiskrim", price: 2.00, minQty: 300, desc: "Harga per potong. Min order 300.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 400 potong (4 perisa)", category: "Aiskrim", price: 2.00, minQty: 400, desc: "Harga per potong. Min order 400.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 500 potong (5 perisa)", category: "Aiskrim", price: 2.00, minQty: 500, desc: "Harga per potong. Min order 500.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 700 potong (7 perisa)", category: "Aiskrim", price: 2.00, minQty: 700, desc: "Harga per potong. Min order 700.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 1000 potong (8 perisa)", category: "Aiskrim", price: 2.00, minQty: 1000, desc: "Harga per potong. Min order 1000.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ DESSERT TABLE ------------------
  { name: "Dessert Table - Pakej RM299", category: "Dessert Table", price: 299, minQty: 1, desc: "Brownies, Puding Tutty Fruity, Kuih Kaswi, Seri Ayu, Cara Gula", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM399", category: "Dessert Table", price: 399, minQty: 1, desc: "Brownies, Puding, Kek Pisang, Kuih Kaswi, Koci, Seri Ayu, Cara Gula", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM499", category: "Dessert Table", price: 499, minQty: 1, desc: "Brownies, Puding, Kek Pisang, Cara Berlauk, Popia Sira, Kuih Kaswi, Koci, Seri Muka", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM599", category: "Dessert Table", price: 599, minQty: 1, desc: "Brownies, Puding, Kek Pisang, Kek Coklat, Cara Berlauk, Popia Sira, Koci, Seri Muka, Creampuff", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Sewa Dessert Table", category: "Dessert Table", price: 95, minQty: 1, desc: "Sewa meja dessert sahaja", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" }
];

// ============================================
// GLOBAL VARIABLES & DOM ELEMENTS
// ============================================
let cart = [];
const menuGrid = document.getElementById('menuGridShop');
const categoryPills = document.getElementById('categoryPills');
const cartCountSpan = document.getElementById('cartCount');
const cartCountSide = document.getElementById('cartCountSide');
const cartDrawer = document.getElementById('cartDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const cartDrawerItems = document.getElementById('cartDrawerItems');
const drawerTotal = document.getElementById('drawerTotal');
const cartItemsSide = document.getElementById('cartItemsSide');
const cartTotalSide = document.getElementById('cartTotalSide');
const orderDetailsInput = document.getElementById('orderDetails');
const searchInput = document.getElementById('searchInput');

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxU4FSnQ7K19pn4gOJdgP2l01lQ-G_QeuShFghmpXN5sFPSaFSToeolLg_Gq-ZVpIjD/exec';

// ============================================
// RENDER FUNCTIONS
// ============================================
function getCategories() {
  return [...new Set(menuItems.map(i => i.category))];
}

function renderCategoryPills() {
  const categories = getCategories();
  let html = `<button class="cat-pill active" data-cat="all">Semua</button>`;
  categories.forEach(cat => html += `<button class="cat-pill" data-cat="${cat}">${cat}</button>`);
  categoryPills.innerHTML = html;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndRender(btn.dataset.cat);
    });
  });
}

function filterAndRender(category) {
  const searchTerm = searchInput.value.toLowerCase();
  let filtered = category === 'all' ? menuItems : menuItems.filter(i => i.category === category);
  if (searchTerm) {
    filtered = filtered.filter(i => i.name.toLowerCase().includes(searchTerm) || i.desc.toLowerCase().includes(searchTerm));
  }
  renderMenuGrid(filtered);
}

function renderMenuGrid(items) {
  let html = '';
  items.forEach(item => {
    const minDisplay = item.minQty > 1 ? `Min: ${item.minQty} unit` : '';
    html += `
      <div class="menu-card-shop">
        <div class="menu-img-shop"><img src="${item.image}" alt="${item.name}"></div>
        <div class="menu-info-shop">
          <div class="menu-name">${item.name}</div>
          <div class="menu-desc-shop">${item.desc}</div>
          <div class="menu-price-shop">RM${item.price.toFixed(2)}</div>
          ${minDisplay ? `<div class="min-qty-badge">${minDisplay}</div>` : ''}
          <button class="btn-add" data-item='${JSON.stringify(item)}'><i class="fas fa-plus"></i> Tambah</button>
        </div>
      </div>
    `;
  });
  menuGrid.innerHTML = html || '<p class="empty-cart">Tiada menu ditemui.</p>';
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = JSON.parse(btn.dataset.item);
      addToCart(item);
    });
  });
}

// ============================================
// CART LOGIC (with minQty enforcement)
// ============================================
function addToCart(item) {
  let quantity = item.minQty || 1;
  if (item.minQty && quantity < item.minQty) {
    alert(`Minimum order untuk ${item.name} ialah ${item.minQty} unit.`);
    return;
  }
  const existing = cart.find(i => i.name === item.name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  updateCartUI();
  openDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateQuantity(index, delta) {
  const item = cart[index];
  const newQty = item.quantity + delta;
  if (item.minQty && newQty < item.minQty) {
    alert(`Minimum order untuk ${item.name} ialah ${item.minQty} unit.`);
    return;
  }
  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    item.quantity = newQty;
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  cartCountSpan.textContent = totalItems;
  if (cartCountSide) cartCountSide.textContent = `(${totalItems})`;
  
  let drawerHtml = '';
  cart.forEach((item, idx) => {
    drawerHtml += `
      <div class="cart-item-side">
        <div class="cart-item-info-side">
          <i class="fas fa-trash-alt" onclick="removeFromCart(${idx})"></i>
          <span>${item.name} (${item.quantity})</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <button onclick="updateQuantity(${idx}, -1)" style="background:none; border:none; font-size:1.2rem;">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${idx}, 1)" style="background:none; border:none; font-size:1.2rem;">+</button>
          <span>RM${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    `;
  });
  cartDrawerItems.innerHTML = drawerHtml || '<p class="empty-cart">Bakul kosong.</p>';
  drawerTotal.textContent = `RM${totalPrice.toFixed(2)}`;
  
  let sideHtml = '';
  cart.forEach((item, idx) => {
    sideHtml += `
      <div class="cart-item-side">
        <div class="cart-item-info-side">
          <i class="fas fa-trash-alt" onclick="removeFromCart(${idx})"></i>
          <span>${item.name} x${item.quantity}</span>
        </div>
        <span>RM${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
  });
  if (cartItemsSide) cartItemsSide.innerHTML = sideHtml || '<p class="empty-cart">Tiada item.</p>';
  if (cartTotalSide) cartTotalSide.textContent = `RM${totalPrice.toFixed(2)}`;
  
  const orderSummary = cart.map(i => `${i.name} x${i.quantity} (RM${(i.price*i.quantity).toFixed(2)})`).join(', ');
  orderDetailsInput.value = `Pesanan: ${orderSummary} | Jumlah: RM${totalPrice.toFixed(2)}`;
}

window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;

// ============================================
// DRAWER CONTROLS
// ============================================
function openDrawer() {
  cartDrawer.classList.add('active');
  drawerOverlay.classList.add('active');
}
function closeDrawer() {
  cartDrawer.classList.remove('active');
  drawerOverlay.classList.remove('active');
}

// ============================================
// FORM SUBMISSION (with location validation)
// ============================================
function setupForm() {
  const form = document.getElementById('orderForm');
  const statusDiv = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Location validation (Kelantan coverage)
    const locationInput = document.getElementById('location');
    const locationValue = locationInput.value.trim().toLowerCase();
    const excluded = ['jeli', 'gua musang', 'kuala krai', 'guamusang', 'kualakrai'];
    if (excluded.some(d => locationValue.includes(d))) {
      const msg = `Maaf, kawasan ${locationInput.value} tidak diliputi. Kami hanya beroperasi di Kelantan kecuali Jeli, Gua Musang, Kuala Krai.\n\nTekan OK jika anda pasti lokasi ini dalam liputan, atau Batal untuk ubah.`;
      if (!confirm(msg)) {
        locationInput.focus();
        return;
      }
    }
    
    if (cart.length === 0) {
      statusDiv.innerHTML = '<span class="error">⚠️ Sila tambah item ke bakul.</span>';
      return;
    }
    statusDiv.innerHTML = '<span style="color:#e63946;">Menghantar...</span>';
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      location: document.getElementById('location').value,
      eventDate: document.getElementById('eventDate').value || 'Tidak dinyatakan',
      notes: document.getElementById('notes').value || 'Tiada',
      orderDetails: orderDetailsInput.value,
      timestamp: new Date().toLocaleString('ms-MY')
    };
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      statusDiv.innerHTML = '<span class="success">✨ Tempahan dihantar! Kami akan hubungi anda.</span>';
      form.reset();
      cart = [];
      updateCartUI();
      closeDrawer();
    })
    .catch(() => statusDiv.innerHTML = '<span class="error">❌ Ralat. Sila hubungi 010-944 1083.</span>');
  });
}

// ============================================
// UI SETUP
// ============================================
function setupUI() {
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('active');
  });
  document.getElementById('cartIcon').addEventListener('click', openDrawer);
  document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  document.getElementById('checkoutDrawerBtn').addEventListener('click', () => {
    closeDrawer();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
  searchInput.addEventListener('input', () => {
    const activeCat = document.querySelector('.cat-pill.active')?.dataset.cat || 'all';
    filterAndRender(activeCat);
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  renderMenuGrid(menuItems);
  updateCartUI();
  setupForm();
  setupUI();
});