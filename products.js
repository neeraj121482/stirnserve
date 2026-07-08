// Stir n Serve products
// Edit product names, prices, sizes, descriptions and product image BASE names here.
// For images, do not include .jpg/.png. Example: image: "assets/product-images/namak-para".
// The website will automatically try .png, .jpg, .jpeg and .webp.

window.SNS_PRODUCTS = [
  {
    id: "namak-para",
    name: "Namak Para",
    category: "Savory",
    badge: "Bestseller",
    tagline: "Crispy, savoury and perfect with chai.",
    description: "Classic homemade Namak Para with a crisp bite and familiar Indian tea-time flavour. Made for everyday snacking, travel and family munching.",
    ingredients: "Wheat flour, selected spices, salt and oil. Final ingredient list should be updated from your approved label.",
    taste: "Crispy, savoury, light spice",
    bestWith: "Chai, coffee, travel snacks, office snacking",
    storage: "Store in a cool, dry place. Keep the jar tightly closed after opening.",
    image: "assets/product-images/namak-para",
    sizes: [
      { label: "150 gm", wasPrice: 135, nowPrice: 115, paymentLink: "" },
      { label: "300 gm", wasPrice: 265, nowPrice: 210, paymentLink: "" }
    ]
  },
  {
    id: "sada-mathri",
    name: "Sada Mathri",
    category: "Savory",
    badge: "Classic",
    tagline: "Simple, traditional and crisp.",
    description: "A clean and classic mathri for people who prefer a familiar, mild and traditional savoury snack.",
    ingredients: "Wheat flour, salt, spices and oil. Final ingredient list should be updated from your approved label.",
    taste: "Mild, crispy, traditional",
    bestWith: "Chai, pickle, family snack plates",
    storage: "Store in a cool, dry place. Keep the jar tightly closed after opening.",
    image: "assets/product-images/sada-mathri",
    sizes: [
      { label: "300 gm", wasPrice: 225, nowPrice: 210, paymentLink: "" }
    ]
  },
  {
    id: "methi-mathri",
    name: "Methi Mathri",
    category: "Savory",
    badge: "Tea-Time",
    tagline: "Earthy methi flavour with a satisfying crunch.",
    description: "Traditional mathri with the aromatic taste of methi, made for rich tea-time snacking and festive snack boxes.",
    ingredients: "Wheat flour, methi, salt, spices and oil. Final ingredient list should be updated from your approved label.",
    taste: "Crispy, methi, savoury, aromatic",
    bestWith: "Chai, travel, pickle, festive snack platters",
    storage: "Store in a cool, dry place. Keep the jar tightly closed after opening.",
    image: "assets/product-images/methi-mathri",
    sizes: [
      { label: "200 gm", wasPrice: 195, nowPrice: 165, paymentLink: "" },
      { label: "400 gm", wasPrice: 375, nowPrice: 300, paymentLink: "" }
    ]
  },
  {
    id: "lehsuni-bites",
    name: "Lehsuni Bites",
    category: "Savory",
    badge: "Bold",
    tagline: "Garlic-forward savoury bites.",
    description: "Crunchy savoury bites with a bold lehsuni flavour, made for people who enjoy stronger Indian snack profiles.",
    ingredients: "Wheat flour, garlic seasoning, spices, salt and oil. Final ingredient list should be updated from your approved label.",
    taste: "Garlic, crispy, bold, savoury",
    bestWith: "Chai, get-togethers, travel, snack platters",
    storage: "Store in a cool, dry place. Keep the jar tightly closed after opening.",
    image: "assets/product-images/lehsuni-bites",
    sizes: [
      { label: "200 gm", wasPrice: 225, nowPrice: 190, paymentLink: "" },
      { label: "400 gm", wasPrice: 435, nowPrice: 340, paymentLink: "" }
    ]
  },
  {
    id: "sakar-para",
    name: "Sakar Para",
    category: "Sweets",
    badge: "Festive",
    tagline: "Crunchy sweet bites with nostalgic flavour.",
    description: "A festive sweet snack made for gifting, family jars and the kind of childhood-style sweetness people remember.",
    ingredients: "Wheat flour, sugar and oil. Final ingredient list should be updated from your approved label.",
    taste: "Sweet, crunchy, festive",
    bestWith: "Tea, festive boxes, kids, gifting",
    storage: "Store in a cool, dry place. Keep the jar tightly closed after opening.",
    image: "assets/product-images/sakar-para",
    sizes: [
      { label: "200 gm", wasPrice: 195, nowPrice: 140, paymentLink: "" },
      { label: "400 gm", wasPrice: 375, nowPrice: 250, paymentLink: "" }
    ]
  },
  {
    id: "besan-kesar-ladoo",
    name: "Besan Kesar Ladoo",
    category: "Sweets",
    badge: "Premium Sweet",
    tagline: "Rich besan ladoo with festive warmth.",
    description: "Classic homemade besan ladoos with kesar notes and a rich, comforting festive feel.",
    ingredients: "Besan, sugar, ghee and kesar. Final ingredient list should be updated from your approved label.",
    taste: "Sweet, rich, nutty, festive",
    bestWith: "Festivals, gifting, celebrations, family desserts",
    storage: "Store in a cool, dry place. Keep box closed after opening.",
    image: "assets/product-images/besan-kesar-ladoo",
    sizes: [
      { label: "500 gm", wasPrice: 450, nowPrice: 425, paymentLink: "" }
    ]
  },
  {
    id: "atta-dryfruit-ladoo",
    name: "Atta Dryfruit Ladoo",
    category: "Sweets",
    badge: "Gifting",
    tagline: "Homemade atta ladoo with dry fruit richness.",
    description: "Traditional atta dryfruit ladoos made for gifting, family treats and festive occasions.",
    ingredients: "Wheat flour, sugar, ghee and dry fruits. Final ingredient list should be updated from your approved label.",
    taste: "Sweet, rich, traditional, dry fruit",
    bestWith: "Festivals, gifting, family desserts",
    storage: "Store in a cool, dry place. Keep box closed after opening.",
    image: "assets/product-images/atta-dryfruit-ladoo",
    sizes: [
      { label: "500 gm", wasPrice: 495, nowPrice: 450, paymentLink: "" }
    ]
  },
  {
    id: "lehsuwa-ka-achar",
    name: "Lehsuwa ka Achar",
    category: "Pickles",
    badge: "Traditional",
    tagline: "Deep, earthy and bold Indian pickle flavour.",
    description: "Traditional Lehsuwa ka Achar with a strong homemade taste, perfect with daily Indian meals.",
    ingredients: "Lehsuwa, spices, salt and oil. Final ingredient list should be updated from your approved label.",
    taste: "Tangy, spicy, traditional",
    bestWith: "Paratha, dal chawal, poori, Indian thali",
    storage: "Use a dry spoon. Keep jar tightly closed and store in a cool, dry place.",
    image: "assets/product-images/lehsuwa-ka-achar",
    sizes: [
      { label: "250 gm", wasPrice: 190, nowPrice: 190, paymentLink: "" },
      { label: "500 gm", wasPrice: 365, nowPrice: 365, paymentLink: "" }
    ]
  },
  {
    id: "ker-ka-achar",
    name: "Ker ka Achar",
    category: "Pickles",
    badge: "Rajasthani",
    tagline: "Bold Rajasthani character with real achaar flavour.",
    description: "Ker ka Achar with authentic Rajasthani character, strong Indian spices and a memorable tangy profile.",
    ingredients: "Ker, spices, salt and oil. Final ingredient list should be updated from your approved label.",
    taste: "Tangy, spicy, Rajasthani, bold",
    bestWith: "Paratha, khichdi, dal chawal, travel meals",
    storage: "Use a dry spoon. Keep jar tightly closed and store in a cool, dry place.",
    image: "assets/product-images/ker-ka-achar",
    sizes: [
      { label: "250 gm", wasPrice: 390, nowPrice: 390, paymentLink: "" },
      { label: "500 gm", wasPrice: 765, nowPrice: 720, paymentLink: "" }
    ]
  }
];
