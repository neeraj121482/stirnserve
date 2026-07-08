// Stir n Serve site configuration only.
// Do NOT edit this for normal website text.
// Edit normal text files inside /content/global.txt and /content/pages/*.txt instead.
// Product names, sizes, prices and product descriptions remain in products.js because they are structured product data.

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
    topbar: "",
    cartLabel: "",
    whatsappLabel: "",
    footerDescription: "",
    footerCopyright: "",
    footerColumns: []
  },

  navigation: [
    { page: "shopAll", label: "" },
    { page: "snacks", label: "" },
    { page: "sweets", label: "" },
    { page: "pickles", label: "" },
    { page: "giftHampers", label: "" },
    { page: "ourStory", label: "" },
    { page: "ourPromise", label: "" },
    { page: "contact", label: "" }
  ],

  pages: {
    home: { file: "index.html", heroImage: "homeHero" },
    shopAll: { file: "shop-all.html", heroImage: "shopAllHero" },
    snacks: { file: "snacks.html", heroImage: "snacksHero" },
    sweets: { file: "sweets.html", heroImage: "sweetsHero" },
    pickles: { file: "pickles.html", heroImage: "picklesHero" },
    giftHampers: { file: "gift-hampers.html", heroImage: "giftHampersHero" },
    ourStory: { file: "our-story.html", heroImage: "storyHero" },
    ourPromise: { file: "our-promise.html", heroImage: "promiseHero" },
    paymentOrders: { file: "payment-orders.html", heroImage: "paymentHero" },
    contact: { file: "contact.html", heroImage: "contactHero" }
  }
};
