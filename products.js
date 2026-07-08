/*
  Stir n Serve product database

  Edit this file to change products, prices, sizes, discounts, payment links,
  descriptions, images, ingredients, shelf life and product-page content.

  Important:
  - wasPrice should be the true MRP / previous public price.
  - nowPrice is the selling price.
  - If you do not want to show discount, set wasPrice to null.
  - For real online payments on a static GitHub Pages website, add a Razorpay,
    Instamojo, Cashfree, PhonePe, PayU or other payment link in paymentLink.
*/

window.SNS_CONFIG = {
  brandName: "Stir n Serve",
  tagline: "Crafted for Cravings",
  logo: "assets/sns-logo.png",
  address: "Food Destination",
  primaryWhatsApp: "918130275252",
  secondaryWhatsApp: "919314482717",
  phoneDisplay: "8130275252 / 9314482717",
  instagramUrl: "#",
  pinterestUrl: "#",
  facebookUrl: "#",
  youtubeUrl: "#",
  fssaiLicense: "Add FSSAI License / Registration No.",
  fssaiNote: "Add the final FSSAI number only after confirming the exact license / registration details.",
  currency: "₹",
  deliveryNote: "Delivery charges and timelines vary by location. Final availability and delivery charges are confirmed on WhatsApp.",
  paymentNote: "Online payment links are added per product/variant in products.js. Until then, orders can be confirmed on WhatsApp.",
  offers: [
    { code: "WELCOME10", label: "10% off first order", type: "percent", value: 10 },
    { code: "SNS5", label: "5% off snack combos", type: "percent", value: 5 },
    { code: "HAMPER5", label: "5% off hamper enquiries", type: "percent", value: 5 }
  ]
};

window.SNS_PRODUCTS = [
  {
    id: "namak-para",
    name: "Namak Para",
    category: "Savory",
    tagline: "Crispy, savoury and perfect with chai.",
    description: "Classic homemade namak para with a crisp bite and everyday tea-time appeal.",
    story: "A familiar snack that belongs next to chai, travel bags and family conversations.",
    sizes: [
      { label: "150 gm", wasPrice: 135, nowPrice: 115, paymentLink: "" },
      { label: "300 gm", wasPrice: 245, nowPrice: 210, paymentLink: "" }
    ],
    tasteProfile: ["Crispy", "Savoury", "Tea-time"],
    bestFor: ["Evening chai", "Travel", "Office snacking", "Family munching"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains wheat/gluten. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "sada-mathri",
    name: "Sada Mathri",
    category: "Savory",
    tagline: "Simple, classic and traditional.",
    description: "A clean and classic mathri for customers who prefer mild homemade snacks.",
    story: "The no-fuss mathri that works for elders, kids and everyday tea-time.",
    sizes: [
      { label: "300 gm", wasPrice: 245, nowPrice: 210, paymentLink: "" }
    ],
    tasteProfile: ["Mild", "Crispy", "Traditional"],
    bestFor: ["Tea-time", "Family snacking", "Light munching"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains wheat/gluten. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "methi-mathri",
    name: "Methi Mathri",
    category: "Savory",
    tagline: "Earthy methi flavour with homemade crunch.",
    description: "Traditional mathri with the aroma and taste of methi, made for satisfying tea-time snacking.",
    story: "A richer, more aromatic mathri for customers who enjoy old-style Indian flavours.",
    sizes: [
      { label: "200 gm", wasPrice: 195, nowPrice: 165, paymentLink: "" },
      { label: "400 gm", wasPrice: 350, nowPrice: 300, paymentLink: "" }
    ],
    tasteProfile: ["Methi", "Crispy", "Aromatic"],
    bestFor: ["Chai", "Travel", "Festive snack boxes"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains wheat/gluten. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "lehsuni-bites",
    name: "Lehsuni Bites",
    category: "Savory",
    tagline: "Bold garlic flavour for savoury cravings.",
    description: "Crunchy garlic-flavoured bites made for customers who like stronger, bolder snacks.",
    story: "A stronger flavour profile for people who want a snack with a proper garlic punch.",
    sizes: [
      { label: "200 gm", wasPrice: 225, nowPrice: 190, paymentLink: "" },
      { label: "400 gm", wasPrice: 400, nowPrice: 340, paymentLink: "" }
    ],
    tasteProfile: ["Garlic", "Crispy", "Bold"],
    bestFor: ["Chai", "Travel", "Get-togethers"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains wheat/gluten. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "sakar-para",
    name: "Sakar Para",
    category: "Sweets",
    tagline: "Crunchy sweet bites for festive cravings.",
    description: "A sweet homemade classic suited for gifting, festive trays and everyday nostalgia.",
    story: "A simple sweet bite that feels familiar, festive and easy to share.",
    sizes: [
      { label: "200 gm", wasPrice: 165, nowPrice: 140, paymentLink: "" },
      { label: "400 gm", wasPrice: 295, nowPrice: 250, paymentLink: "" }
    ],
    tasteProfile: ["Sweet", "Crunchy", "Festive"],
    bestFor: ["Festivals", "Gifting", "Tea-time"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains wheat/gluten. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "besan-kesar-ladoo",
    name: "Besan Kesar Ladoo",
    category: "Sweets",
    tagline: "Rich festive ladoos with classic Indian comfort.",
    description: "Homemade besan kesar ladoos for celebrations, gifting and family occasions.",
    story: "A festive ladoo that works for family boxes, guests and corporate sweets.",
    sizes: [
      { label: "500 gm", wasPrice: 500, nowPrice: 425, paymentLink: "" }
    ],
    tasteProfile: ["Sweet", "Rich", "Festive"],
    bestFor: ["Festivals", "Corporate hampers", "Family gifting"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "May contain nuts/dairy. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "atta-dryfruit-ladoo",
    name: "Atta Dryfruit Ladoo",
    category: "Sweets",
    tagline: "Traditional atta ladoo with dryfruit richness.",
    description: "A rich homemade ladoo option for festive gifting, family boxes and premium hampers.",
    story: "A heavier, more premium sweet for customers who want dryfruit richness.",
    sizes: [
      { label: "500 gm", wasPrice: 525, nowPrice: 450, paymentLink: "" }
    ],
    tasteProfile: ["Sweet", "Rich", "Dryfruit"],
    bestFor: ["Festivals", "Premium hampers", "Family gifting"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Keep sealed after opening.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Contains nuts/wheat. Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "lehsuwa-ka-achar",
    name: "Lehsuwa Ka Achar",
    category: "Pickles",
    tagline: "Traditional achaar with bold homemade flavour.",
    description: "A traditional Indian pickle with deep flavour, ideal for pairing with everyday meals.",
    story: "A bold meal companion for parathas, dal chawal and Indian thalis.",
    sizes: [
      { label: "250 gm", wasPrice: 225, nowPrice: 190, paymentLink: "" },
      { label: "500 gm", wasPrice: 430, nowPrice: 365, paymentLink: "" }
    ],
    tasteProfile: ["Tangy", "Spicy", "Traditional"],
    bestFor: ["Paratha", "Dal chawal", "Indian thali"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Use a clean dry spoon.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  },
  {
    id: "ker-ka-achar",
    name: "Ker Ka Achar",
    category: "Pickles",
    tagline: "Rajasthani-style pickle with strong character.",
    description: "A bold pickle with authentic Rajasthani appeal, made for customers who enjoy intense achaar flavour.",
    story: "A premium pickle with strong Rajasthani character and a distinctive flavour.",
    sizes: [
      { label: "250 gm", wasPrice: 460, nowPrice: 390, paymentLink: "" },
      { label: "500 gm", wasPrice: 845, nowPrice: 720, paymentLink: "" }
    ],
    tasteProfile: ["Tangy", "Spicy", "Rajasthani"],
    bestFor: ["Paratha", "Poori", "Dal chawal", "Travel meals"],
    ingredients: "Update ingredients here before launch.",
    storage: "Store in a cool, dry place. Use a clean dry spoon.",
    shelfLife: "Add final tested shelf life.",
    allergens: "Update final allergen declaration before launch.",
    image: "assets/product-menu.jpeg",
    featured: true
  }
];

window.SNS_VIDEOS = [
  {
    title: "Fresh Batch Making",
    type: "Instagram Reel",
    url: "#",
    thumbnail: "assets/product-menu.jpeg",
    caption: "Add a reel showing Santosh ji preparing a fresh batch."
  },
  {
    title: "Jar Packing Reel",
    type: "Instagram Reel",
    url: "#",
    thumbnail: "assets/product-menu.jpeg",
    caption: "Add a reel showing jars being packed and sealed."
  },
  {
    title: "Tea-Time Serving",
    type: "Video",
    url: "#",
    thumbnail: "assets/product-menu.jpeg",
    caption: "Add a short serving video for namak para, mathri and achaar."
  }
];
