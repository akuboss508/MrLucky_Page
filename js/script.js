// ============================================
// 🍍 MR. LUCKY CATERING - MENU DATA (EXTRACTED FROM IMAGES)
// ============================================
const menuItems = [
  // ------------------ COLEK BUAH (FRUIT ROJAK) ------------------
  { name: "Colek Buah - Pakej 200 pax", category: "Colek Buah", price: 360, desc: "Nenas 8kg, Jambu Batu 6kg, Mangga 6kg, Betik 3kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Colek Buah - Pakej 350 pax", category: "Colek Buah", price: 520, desc: "Nenas 12kg, Jambu Batu 9kg, Mangga 9kg, Betik 4kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Colek Buah - Pakej 500 pax", category: "Colek Buah", price: 740, desc: "Nenas 18kg, Jambu Batu 18kg, Mangga 18kg, Betik 8kg", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc5e?w=400" },
  { name: "Add-on: Crew Serve", category: "Colek Buah", price: 40, desc: "Seorang crew untuk menghidang", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Serbuk Asam Boi", category: "Colek Buah", price: 10, desc: "Perasa tambahan", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Serbuk Cili, Gula & Garam", category: "Colek Buah", price: 10, desc: "Set perasa", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ MEE SUP ------------------
  { name: "Mee Sup - 200-250 pax", category: "Mee Sup", price: 475, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 250-350 pax", category: "Mee Sup", price: 550, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 350-450 pax", category: "Mee Sup", price: 650, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 450-550 pax", category: "Mee Sup", price: 750, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 550-650 pax", category: "Mee Sup", price: 850, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Mee Sup - 650-750 pax", category: "Mee Sup", price: 950, desc: "Lauk ayam & sayur", image: "https://images.unsplash.com/photo-1555126634-323283e543fa?w=400" },
  { name: "Add-on: Crew (Mee Sup)", category: "Mee Sup", price: 40, desc: "Seorang crew", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Air Lada", category: "Mee Sup", price: 0, desc: "Percuma", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Lada Jeruk", category: "Mee Sup", price: 15, desc: "Jeruk lada", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Add-on: Cili Oil", category: "Mee Sup", price: 20, desc: "Minyak cili pedas", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ LOKCHING ------------------
  { name: "Lokching - 200 cucuk (40 pax)", category: "Lokching", price: 180, desc: "Pelbagai jenis bebola & fishball", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 1000 cucuk (200 pax)", category: "Lokching", price: 350, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 1500 cucuk (300 pax)", category: "Lokching", price: 475, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 2000 cucuk (400 pax)", category: "Lokching", price: 580, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 2500 cucuk (500 pax)", category: "Lokching", price: 720, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 3000 cucuk (600 pax)", category: "Lokching", price: 840, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 3500 cucuk (700 pax)", category: "Lokching", price: 960, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 4000 cucuk (800 pax)", category: "Lokching", price: 1080, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 4500 cucuk (900 pax)", category: "Lokching", price: 1195, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" },
  { name: "Lokching - 5000 cucuk (1000 pax)", category: "Lokching", price: 310, desc: "Pelbagai jenis", image: "https://images.unsplash.com/photo-1604908176992-8b8b8b8b8b8?w=400" }, // Note: from image "5000 cucuk RM310" (probably special)

  // ------------------ AIR BALANG - MOJITO ------------------
  { name: "Mojito Strawberi 23L", category: "Air Balang (Mojito)", price: 90, desc: "Mojito strawberi sejuk", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Strawberi 40L", category: "Air Balang (Mojito)", price: 160, desc: "Mojito strawberi sejuk", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Tembikai 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito tembikai segar", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Tembikai 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito tembikai segar", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blueberry 23L", category: "Air Balang (Mojito)", price: 90, desc: "Mojito blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blueberry 40L", category: "Air Balang (Mojito)", price: 160, desc: "Mojito blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honey Lemon 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito madu lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honey Lemon 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito madu lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Mangga 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Mangga 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Guava 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito jambu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Guava 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito jambu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Kiwi 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito kiwi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Kiwi 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito kiwi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honeydew 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Honeydew 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Nanas 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito nanas", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Nanas 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito nanas", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Sunkist 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Sunkist 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blue Lemon 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito blue lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Blue Lemon 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito blue lemon", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Epal 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Epal 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Laici 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Laici 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Anggur 23L", category: "Air Balang (Mojito)", price: 80, desc: "Mojito anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mojito Anggur 40L", category: "Air Balang (Mojito)", price: 145, desc: "Mojito anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Solero 23L", category: "Air Balang (Mojito)", price: 80, desc: "Minuman solero", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Solero 40L", category: "Air Balang (Mojito)", price: 145, desc: "Minuman solero", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Soda Herbs 23L", category: "Air Balang (Mojito)", price: 70, desc: "Soda herba", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Soda Herbs 40L", category: "Air Balang (Mojito)", price: 125, desc: "Soda herba", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },

  // ------------------ AIR BALANG - YOGURT ------------------
  { name: "Yogurt Original 23L", category: "Air Balang (Yogurt)", price: 125, desc: "Yogurt asli", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Original 40L", category: "Air Balang (Yogurt)", price: 230, desc: "Yogurt asli", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Strawberi 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt strawberi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Strawberi 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt strawberi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Mangga 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt mangga", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Mangga 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt mangga", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Oren 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt oren", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Oren 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt oren", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Blackcurrant 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt blackcurrant", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Blackcurrant 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt blackcurrant", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Honeydew 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt honeydew", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Honeydew 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt honeydew", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Kiwi 23L", category: "Air Balang (Yogurt)", price: 140, desc: "Yogurt kiwi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },
  { name: "Yogurt Kiwi 40L", category: "Air Balang (Yogurt)", price: 250, desc: "Yogurt kiwi", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400" },

  // ------------------ AIR BALANG - LAIN-LAIN (JUS/TEH) ------------------
  { name: "Jus Strawberi 23L", category: "Air Balang (Jus/Teh)", price: 70, desc: "Jus strawberi segar", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Strawberi 40L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jus strawberi segar", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Mangga 23L", category: "Air Balang (Jus/Teh)", price: 70, desc: "Jus mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Mangga 40L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jus mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Tembikai 23L", category: "Air Balang (Jus/Teh)", price: 70, desc: "Jus tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Tembikai 40L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jus tembikai", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Oren Sunkist 23L", category: "Air Balang (Jus/Teh)", price: 70, desc: "Jus oren sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jus Oren Sunkist 40L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jus oren sunkist", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jambu Batu Asamboi 23L", category: "Air Balang (Jus/Teh)", price: 70, desc: "Jambu batu + asam boi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jambu Batu Asamboi 40L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jambu batu + asam boi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Anggur 23L", category: "Air Balang (Jus/Teh)", price: 65, desc: "Jus anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Anggur 40L", category: "Air Balang (Jus/Teh)", price: 95, desc: "Jus anggur", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 23L", category: "Air Balang (Jus/Teh)", price: 65, desc: "Jus blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 40L", category: "Air Balang (Jus/Teh)", price: 95, desc: "Jus blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Laici 23L", category: "Air Balang (Jus/Teh)", price: 65, desc: "Air laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Laici 40L", category: "Air Balang (Jus/Teh)", price: 95, desc: "Air laici", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Bunga 23L", category: "Air Balang (Jus/Teh)", price: 65, desc: "Teh bunga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Bunga 40L", category: "Air Balang (Jus/Teh)", price: 95, desc: "Teh bunga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Epal 23L", category: "Air Balang (Jus/Teh)", price: 60, desc: "Jus epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Epal 40L", category: "Air Balang (Jus/Teh)", price: 90, desc: "Jus epal", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Sirap Laici Limau Selasih 23L", category: "Air Balang (Jus/Teh)", price: 60, desc: "Sirap laici limau selasih", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Sirap Laici Limau Selasih 40L", category: "Air Balang (Jus/Teh)", price: 90, desc: "Sirap laici limau selasih", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  // Additional "Air Balang" items from image 6 (Strawberi, Coklat Chipsmore, etc.)
  { name: "Strawberi 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Minuman strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Minuman strawberi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Chipsmore 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Coklat chipsmore", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Chipsmore 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Coklat chipsmore", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 23L (2)", category: "Air Balang (Jus/Teh)", price: 115, desc: "Blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Blueberry 40L (2)", category: "Air Balang (Jus/Teh)", price: 200, desc: "Blueberry", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Vanilla Cookies 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Vanilla cookies", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Vanilla Cookies 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Vanilla cookies", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mangga 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Mangga 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Mangga", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Hijau Matcha 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Teh hijau matcha", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Hijau Matcha 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Teh hijau matcha", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Honeydew 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Honeydew 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Honeydew", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Cappuccino Biscoff 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Cappuccino biscoff", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Cappuccino Biscoff 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Cappuccino biscoff", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jagung 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Jagung", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Jagung 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Jagung", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Hazelnut 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Coklat hazelnut", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Coklat Hazelnut 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Coklat hazelnut", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Durian 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Durian", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Durian 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Durian", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Keladi 23L", category: "Air Balang (Jus/Teh)", price: 95, desc: "Keladi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Keladi 40L", category: "Air Balang (Jus/Teh)", price: 175, desc: "Keladi", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Pisang 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Pisang", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Pisang 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Pisang", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Onde-Onde 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Onde-onde", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Onde-Onde 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Onde-onde", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi Coklat 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Strawberi coklat", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Strawberi Coklat 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Strawberi coklat", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Beng Madu 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Teh beng madu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh Beng Madu 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Teh beng madu", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Latte 23L", category: "Air Balang (Jus/Teh)", price: 115, desc: "Latte", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Latte 40L", category: "Air Balang (Jus/Teh)", price: 200, desc: "Latte", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Kurma 23L", category: "Air Balang (Jus/Teh)", price: 110, desc: "Kurma", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Kurma 40L", category: "Air Balang (Jus/Teh)", price: 190, desc: "Kurma", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh O Beng 23L", category: "Air Balang (Jus/Teh)", price: 60, desc: "Teh o beng", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },
  { name: "Teh O Beng 40L", category: "Air Balang (Jus/Teh)", price: 90, desc: "Teh o beng", image: "https://images.unsplash.com/photo-1546173159-7b5e1f8b8b8b?w=400" },

  // ------------------ APAM CRISPY ------------------
  { name: "Apam Crispy - 200-300 pax", category: "Apam Crispy", price: 499, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 300-500 pax", category: "Apam Crispy", price: 599, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 500-700 pax", category: "Apam Crispy", price: 699, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },
  { name: "Apam Crispy - 800-1000 pax", category: "Apam Crispy", price: 999, desc: "Apam crispy pelbagai perisa", image: "https://images.unsplash.com/photo-1587132137056-8b8b8b8b8b8?w=400" },

  // ------------------ AISKRIM ------------------
  { name: "Aiskrim Kon - 300 kon (2 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per kon. Min order 300 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 400 kon (3 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per kon. Min order 400 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 500 kon (4 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per kon. Min order 500 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 700 kon (5 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per kon. Min order 700 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Kon - 1000 kon (6 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per kon. Min order 1000 kon.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 200 cup (2 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per cup. Min order 200 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 300-500 cup (4 perisa)", category: "Aiskrim", price: 1.90, desc: "Harga per cup. Min order 300 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Cup - 600-1000 cup (8 perisa)", category: "Aiskrim", price: 1.80, desc: "Harga per cup. Min order 600 cup.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 300 potong (2 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per potong. Min order 300.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 400 potong (4 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per potong. Min order 400.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 500 potong (5 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per potong. Min order 500.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 700 potong (7 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per potong. Min order 700.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },
  { name: "Aiskrim Potong - 1000 potong (8 perisa)", category: "Aiskrim", price: 2.00, desc: "Harga per potong. Min order 1000.", image: "https://images.unsplash.com/photo-1582716401301-8b8b8b8b8b8?w=400" },

  // ------------------ DESSERT TABLE ------------------
  { name: "Dessert Table - Pakej RM299", category: "Dessert Table", price: 299, desc: "Brownies, Puding Tutty Fruity, Kuih Kaswi, Seri Ayu, Cara Gula", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM399", category: "Dessert Table", price: 399, desc: "Brownies, Puding, Kek Pisang, Kuih Kaswi, Koci, Seri Ayu, Cara Gula", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM499", category: "Dessert Table", price: 499, desc: "Brownies, Puding, Kek Pisang, Cara Berlauk, Popia Sira, Kuih Kaswi, Koci, Seri Muka", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Dessert Table - Pakej RM599", category: "Dessert Table", price: 599, desc: "Brownies, Puding, Kek Pisang, Kek Coklat, Cara Berlauk, Popia Sira, Koci, Seri Muka, Creampuff", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { name: "Sewa Dessert Table", category: "Dessert Table", price: 95, desc: "Sewa meja dessert sahaja", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" }
];

// Rest of the JavaScript code remains the same (cart logic, rendering, etc.)
// ... (Keep all functions from previous script.js: renderCategoryPills, renderMenuGrid, cart functions, form setup, UI setup)
// Make sure to include the full code below this point.

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
