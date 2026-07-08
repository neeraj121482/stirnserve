// Stir n Serve editable website content
// Edit this file for website/page text, menu labels, contact info, social links, page body text and page images.
// Product details, sizes and prices are edited in products.js.
// Image paths are BASE NAMES without extension. Upload .png, .webp, .jpeg or .jpg with the same base name.
// Example: assets/page-images/shop-all-hero.png OR shop-all-hero.jpg both work.

window.SNS_CONFIG = {
  brandName: "Stir n Serve",
  tagline: "Crafted for Cravings",
  phonePrimary: "8130275252",
  phoneSecondary: "9314482717",
  whatsappNumber: "918130275252",
  address: "Food Destination",
  fssaiLicense: "Add FSSAI License / Registration No.",
  instagram: "#",
  pinterest: "#",
  facebook: "#",
  youtube: "#",
  assetVersion: "auto",
  imageExtensions: ["png", "webp", "jpeg", "jpg"],
  discounts: {
    WELCOME10: { type: "percent", value: 10, label: "Welcome 10% off" },
    SNS5: { type: "percent", value: 5, label: "SNS 5% off" },
    HAMPER10: { type: "percent", value: 10, label: "Hamper 10% off" }
  }
};

window.SNS_SITE = {
  images: {
    logo: "assets/brand/sns-logo",
    favicon: "assets/brand/favicon",

    homeHero: "assets/page-images/home-hero",
    shopAllHero: "assets/page-images/shop-all-hero",
    snacksHero: "assets/page-images/snacks-hero",
    sweetsHero: "assets/page-images/sweets-hero",
    picklesHero: "assets/page-images/pickles-hero",
    giftHampersHero: "assets/page-images/gift-hampers-hero",
    storyHero: "assets/page-images/our-story-hero",
    promiseHero: "assets/page-images/our-promise-hero",
    paymentHero: "assets/page-images/payment-orders-hero",
    contactHero: "assets/page-images/contact-hero",

    categorySnacks: "assets/category-images/savory",
    categorySweets: "assets/category-images/sweets",
    categoryPickles: "assets/category-images/pickles",
    categoryHampers: "assets/category-images/hampers"
  },

  global: {
    topbar: "Fresh homemade snacks, sweets & pickles — Call / WhatsApp: {phones}",
    cartLabel: "Cart",
    whatsappLabel: "WhatsApp",
    footerDescription: "Homemade snacks, sweets, pickles and curated hampers.",
    footerCopyright: "© Stir n Serve. Crafted for Cravings.",
    footerColumns: [
      { title: "Shop", links: [
        { label: "Shop All", url: "shop-all.html" },
        { label: "Snacks", url: "snacks.html" },
        { label: "Sweets", url: "sweets.html" },
        { label: "Pickles", url: "pickles.html" }
      ]},
      { title: "Orders", links: [
        { label: "Gift Hampers", url: "gift-hampers.html" },
        { label: "Online Payment", url: "payment-orders.html" },
        { label: "Bulk Orders", url: "contact.html" },
        { label: "Contact", url: "contact.html" }
      ]},
      { title: "Brand", links: [
        { label: "Our Story", url: "our-story.html" },
        { label: "Our Promise", url: "our-promise.html" },
        { label: "Corporate Gifting", url: "gift-hampers.html" }
      ]},
      { title: "Follow", links: [
        { label: "Instagram", urlKey: "instagram" },
        { label: "Pinterest", urlKey: "pinterest" },
        { label: "Facebook", urlKey: "facebook" },
        { label: "YouTube", urlKey: "youtube" }
      ]}
    ]
  },

  navigation: [
    { page: "shopAll", label: "Shop All" },
    { page: "snacks", label: "Snacks" },
    { page: "sweets", label: "Sweets" },
    { page: "pickles", label: "Pickles" },
    { page: "giftHampers", label: "Hampers" },
    { page: "ourStory", label: "Our Story" },
    { page: "ourPromise", label: "Our Promise" },
    { page: "contact", label: "Contact" }
  ],

  pages: {
    home: {
      file: "index.html",
      navLabel: "Home",
      title: "Traditional Indian snacks, pickles & sweets <span>made to be remembered</span>",
      subtitle: "Stir n Serve brings the warmth of home into jars, boxes and hampers — small-batch snacks, sweets and pickles built on trusted family recipes.",
      heroImage: "homeHero",
      seoTitle: "Stir n Serve | Homemade Snacks, Sweets & Pickles",
      seoDescription: "Premium homemade Indian snacks, sweets, pickles and hampers by Stir n Serve.",
      buttons: [
        { label: "Shop Products", url: "shop-all.html", style: "primary" },
        { label: "Order on WhatsApp", whatsapp: "Hi Stir n Serve, I want to place an order. Please share availability and delivery details.", style: "secondary" },
        { label: "Our Story", url: "our-story.html", style: "outline" }
      ],
      trustPills: ["Santosh ji’s recipes", "Neeraj’s brand vision", "Food Destination", "Small batches"],
      categoriesTitle: "Shop by craving",
      categoriesText: "Choose a category or browse the complete Stir n Serve range.",
      categories: [
        { title: "Snacks", text: "Namak Para, Sada Mathri, Methi Mathri and Lehsuni Bites.", imageKey: "categorySnacks", url: "snacks.html", button: "View Snacks" },
        { title: "Sweets", text: "Sakar Para, Besan Kesar Ladoo and Atta Dryfruit Ladoo.", imageKey: "categorySweets", url: "sweets.html", button: "View Sweets" },
        { title: "Pickles", text: "Lehsuwa ka Achar and Ker ka Achar.", imageKey: "categoryPickles", url: "pickles.html", button: "View Pickles" },
        { title: "Hampers", text: "Festive, corporate, return gift and custom hampers.", imageKey: "categoryHampers", url: "gift-hampers.html", button: "Explore" }
      ],
      favouritesEyebrow: "Shop Favourites",
      favouritesTitle: "Fresh from the Stir n Serve kitchen",
      favouritesText: "Each product page has sizes, was/now pricing, auto discount percentage, WhatsApp order and payment-link support.",
      storyEyebrow: "Our Story",
      storyTitle: "Santosh ji brings the recipes. Neeraj brings the vision.",
      storyParagraphs: [
        "Stir n Serve began with a simple belief — the best food is not just made, it is remembered.",
        "A rare mother-in-law and son-in-law partnership built on tradition, trust and authentic Indian taste."
      ],
      storyButton: "Read Our Story",
      hamperEyebrow: "Custom Hampers",
      hamperTitle: "Gift boxes made around your occasion",
      hamperText: "For festivals, corporates, return gifts, family functions and party orders.",
      hamperButton: "Explore Hampers",
      reelsEyebrow: "Videos & Reels",
      reelsTitle: "Use short videos to make the food feel real",
      reelsText: "Keep reels on the homepage only. Add Instagram, YouTube or local video links later.",
      reels: [
        { title: "Kitchen to Jar", text: "Add a 15-30 sec making or packing reel here.", url: "#" },
        { title: "Tea-Time Crunch", text: "Show Namak Para, Mathri and chai serving shots.", url: "#" },
        { title: "Hamper Reveal", text: "Show festive hamper packing and final box shot.", url: "#" }
      ]
    },

    shopAll: {
      file: "shop-all.html",
      navLabel: "Shop All",
      breadcrumb: "Shop All",
      title: "Shop All",
      subtitle: "Homemade snacks, sweets and pickles with was/now pricing and WhatsApp ordering.",
      heroImage: "shopAllHero",
      sectionEyebrow: "All Products",
      sectionTitle: "Shop the full range",
      sectionText: "This page is generated from products.js. Edit one file to change product names, sizes, prices, copy and images."
    },

    snacks: {
      file: "snacks.html",
      navLabel: "Snacks",
      breadcrumb: "Snacks",
      title: "Savory Snacks",
      subtitle: "Namak Para, Sada Mathri, Methi Mathri and Lehsuni Bites for chai, travel and everyday cravings.",
      heroImage: "snacksHero",
      sectionEyebrow: "Snack Range",
      sectionTitle: "Crunchy tea-time favourites",
      sectionText: "All snack products are pulled from products.js using the category Savory."
    },

    sweets: {
      file: "sweets.html",
      navLabel: "Sweets",
      breadcrumb: "Sweets",
      title: "Sweets",
      subtitle: "Sakar Para, Besan Kesar Ladoo and Atta Dryfruit Ladoo for gifting, festivals and family cravings.",
      heroImage: "sweetsHero",
      sectionEyebrow: "Sweet Range",
      sectionTitle: "Festive and homemade sweets",
      sectionText: "All sweet products are pulled from products.js using the category Sweets."
    },

    pickles: {
      file: "pickles.html",
      navLabel: "Pickles",
      breadcrumb: "Pickles",
      title: "Traditional Pickles",
      subtitle: "Lehsuwa ka Achar and Ker ka Achar with bold Indian flavour.",
      heroImage: "picklesHero",
      sectionEyebrow: "Pickle Range",
      sectionTitle: "Bold Indian achaar",
      sectionText: "All pickle products are pulled from products.js using the category Pickles."
    },

    giftHampers: {
      file: "gift-hampers.html",
      navLabel: "Gift Hampers",
      breadcrumb: "Gift Hampers",
      title: "Gift Hampers",
      subtitle: "Curated snack, sweet and pickle hampers for festivals, corporates, return gifts and family occasions.",
      heroImage: "giftHampersHero",
      sectionEyebrow: "Custom Hampers",
      sectionTitle: "For gifting, offices and events",
      sectionText: "Use this page for festive gifting, corporate hampers, return gifts and custom boxes.",
      cards: [
        { title: "Mini Hamper", text: "Choose 3 products for small gifting, tasting and return gifts.", button: "Enquire" },
        { title: "Family Hamper", text: "Choose 5 products for family celebrations and festive sharing.", button: "Enquire" },
        { title: "Premium Hamper", text: "Choose 7 products with premium presentation and custom options.", button: "Enquire" },
        { title: "Corporate Hamper", text: "Custom quantity, budget and delivery planning for offices and bulk orders.", button: "Discuss" }
      ]
    },

    ourStory: {
      file: "our-story.html",
      navLabel: "Our Story",
      breadcrumb: "Our Story",
      title: "Our Story",
      subtitle: "A mother-in-law and son-in-law partnership built on taste, tradition and trust.",
      heroImage: "storyHero",
      bodyTitle: "Stir n Serve began with a simple belief — the best food is not just made, it is remembered.",
      paragraphs: [
        "Founded by Santosh Khandelwal and Neeraj Khandelwal, Stir n Serve is a rare mother-in-law and son-in-law partnership built on tradition, trust, and a shared love for authentic Indian taste.",
        "For years, Santosh ji’s kitchen was known for recipes that brought family and friends together — handmade snacks, pickles, sweets, and festive favourites prepared with care, patience, and the kind of instinct that only comes from experience.",
        "Her food carried the warmth of home, the comfort of nostalgia, and the honesty of real ingredients.",
        "Neeraj saw something bigger in that taste. With his experience in branding, packaging, exports, and business building, he wanted to take these trusted family recipes beyond the home kitchen and present them in a way that today’s customers could enjoy, gift, and trust.",
        "That is how Stir n Serve was born.",
        "At Stir n Serve, every product is made in small batches with carefully selected ingredients, traditional recipes, and a commitment to quality.",
        "The goal is not to make snacks that feel mass-produced. The goal is to bring back the taste people miss — the taste of home, festivals, family visits, childhood memories, and honest Indian kitchens.",
        "Santosh ji brings the recipes. Neeraj brings the vision. Together, they bring you Stir n Serve — traditional Indian snacks, pickles, and sweets, thoughtfully made for modern homes.",
        "Stir n Serve is not just about food. It is about preserving the flavours we grew up with and sharing them with the world, one jar at a time.",
        "Crafted for Cravings."
      ]
    },

    ourPromise: {
      file: "our-promise.html",
      navLabel: "Our Promise",
      breadcrumb: "Our Promise",
      title: "Our Promise",
      subtitle: "Thoughtfully made food, rooted in trust, taste and tradition.",
      heroImage: "promiseHero",
      sectionEyebrow: "Quality Promise",
      sectionTitle: "What we stand for",
      sectionText: "Stir n Serve is built on a simple commitment — to create food that feels honest, familiar and worth sharing.",
      cards: [
        { title: "Small Batch Preparation", text: "We prepare in small batches to maintain freshness, consistency and attention to detail." },
        { title: "Trusted Family Recipes", text: "Our products come from recipes shaped over years of home cooking, family occasions and shared meals." },
        { title: "Carefully Chosen Ingredients", text: "We focus on ingredients that support taste, quality and a more authentic food experience." },
        { title: "No Mass-Produced Feel", text: "Our goal is not to create factory-like food. Our goal is to preserve the warmth of home-style preparation." },
        { title: "Taste with Memory", text: "Good food should bring back memories of festivals, tea-time, family visits and Indian kitchens." },
        { title: "Food Safety", text: "FSSAI License / Registration No: {fssai}" }
      ]
    },

    paymentOrders: {
      file: "payment-orders.html",
      navLabel: "Payment & Orders",
      breadcrumb: "Payment & Orders",
      title: "Payment & Orders",
      subtitle: "Use payment links for online payment on a static GitHub Pages website.",
      heroImage: "paymentHero",
      sectionEyebrow: "Ordering Setup",
      sectionTitle: "How online payment works here",
      sectionText: "GitHub Pages is static hosting, so online payments should be handled through safe external payment links.",
      cards: [
        { title: "WhatsApp Ordering", text: "Every product page and cart can send the order details directly to WhatsApp." },
        { title: "Payment Links", text: "Create Razorpay or other payment links for each size and paste them in products.js." },
        { title: "No Secret Keys", text: "Do not put payment gateway secret keys inside HTML, JavaScript or GitHub Pages." }
      ]
    },

    contact: {
      file: "contact.html",
      navLabel: "Contact",
      breadcrumb: "Contact",
      title: "Contact",
      subtitle: "Order, enquire or customise your Stir n Serve hamper.",
      heroImage: "contactHero",
      sectionEyebrow: "Contact",
      sectionTitle: "Order, enquire or customise your hamper",
      sectionText: "Use WhatsApp for faster order confirmation, availability, delivery charges and payment details.",
      detailTitle: "Contact Details",
      details: [
        "WhatsApp / Orders: {phones}",
        "Address: {address}",
        "Best for: Homemade Snacks, Traditional Pickles, Gift Hampers, Corporate & Bulk Orders, Return Gifts and Party Bookings"
      ],
      formTitle: "Enquiry Form",
      formButton: "Send Enquiry on WhatsApp"
    }
  }
};
