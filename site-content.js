// Stir n Serve website content and image map
// Edit THIS file for page text, menu labels, contact info, social links, section text and page images.
// Image paths are BASE NAMES without extension. Upload .png, .webp, .jpeg or .jpg with the same base name.
// Example: assets/page-images/shop-all-hero.png OR shop-all-hero.jpg both work.
// If more than one extension exists, the website tries them in this order: png, webp, jpeg, jpg.

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
  },
  homeReels: [
    { title: "Kitchen to Jar", note: "Add a 15-30 sec making/packing reel here.", url: "#" },
    { title: "Tea-Time Crunch", note: "Show Namak Para, Mathri and chai serving shots.", url: "#" },
    { title: "Hamper Reveal", note: "Show festive hamper packing and final box shot.", url: "#" }
  ]
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

    homeCategorySnacks: "assets/category-images/savory",
    homeCategorySweets: "assets/category-images/sweets",
    homeCategoryPickles: "assets/category-images/pickles",
    homeCategoryHampers: "assets/category-images/hampers"
  },

  pages: {
    home: {
      file: "index.html",
      navLabel: "Home",
      title: "Traditional Indian snacks, pickles & sweets <span>made to be remembered</span>",
      subtitle: "Stir n Serve brings the warmth of home into jars, boxes and hampers — small-batch snacks, sweets and pickles built on trusted family recipes.",
      heroImage: "homeHero",
      seoTitle: "Stir n Serve | Homemade Snacks, Sweets & Pickles",
      seoDescription: "Premium homemade Indian snacks, sweets, pickles and hampers by Stir n Serve.",
      storyTitle: "Santosh ji brings the recipes. Neeraj brings the vision.",
      storyPara1: "Stir n Serve began with a simple belief — the best food is not just made, it is remembered.",
      storyPara2: "A rare mother-in-law and son-in-law partnership built on tradition, trust and authentic Indian taste."
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
      breadcrumb: "Savory Snacks",
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
      sectionText: "Use this page for festive gifting, corporate hampers, return gifts and custom boxes."
    },

    ourStory: {
      file: "our-story.html",
      navLabel: "Our Story",
      breadcrumb: "Our Story",
      title: "Our Story",
      subtitle: "A mother-in-law and son-in-law partnership built on taste, tradition and trust.",
      heroImage: "storyHero"
    },

    ourPromise: {
      file: "our-promise.html",
      navLabel: "Our Promise",
      breadcrumb: "Our Promise",
      title: "Our Promise",
      subtitle: "Thoughtfully made food, rooted in trust, taste and tradition.",
      heroImage: "promiseHero"
    },

    paymentOrders: {
      file: "payment-orders.html",
      navLabel: "Payment & Orders",
      breadcrumb: "Payment & Orders",
      title: "Payment & Orders",
      subtitle: "Use payment links for online payment on a static GitHub Pages website.",
      heroImage: "paymentHero"
    },

    contact: {
      file: "contact.html",
      navLabel: "Contact",
      breadcrumb: "Contact",
      title: "Contact",
      subtitle: "Order, enquire or customise your Stir n Serve hamper.",
      heroImage: "contactHero"
    }
  }
};
