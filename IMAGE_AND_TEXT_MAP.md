# Image and Text Map

## Page files

| Website page | HTML file | Text key in site-content.js | Hero image base |
|---|---|---|---|
| Home | `index.html` | `pages.home` | `assets/page-images/home-hero` |
| Shop All | `shop-all.html` | `pages.shopAll` | `assets/page-images/shop-all-hero` |
| Snacks | `snacks.html` | `pages.snacks` | `assets/page-images/snacks-hero` |
| Sweets | `sweets.html` | `pages.sweets` | `assets/page-images/sweets-hero` |
| Pickles | `pickles.html` | `pages.pickles` | `assets/page-images/pickles-hero` |
| Gift Hampers | `gift-hampers.html` | `pages.giftHampers` | `assets/page-images/gift-hampers-hero` |
| Our Story | `our-story.html` | `pages.ourStory` | `assets/page-images/our-story-hero` |
| Our Promise | `our-promise.html` | `pages.ourPromise` | `assets/page-images/our-promise-hero` |
| Payment & Orders | `payment-orders.html` | `pages.paymentOrders` | `assets/page-images/payment-orders-hero` |
| Contact | `contact.html` | `pages.contact` | `assets/page-images/contact-hero` |

## Homepage category images

| Section | Image base |
|---|---|
| Snacks card | `assets/category-images/savory` |
| Sweets card | `assets/category-images/sweets` |
| Pickles card | `assets/category-images/pickles` |
| Hampers card | `assets/category-images/hampers` |

## Product images

| Product | Product page | Product image base |
|---|---|---|
| Namak Para | `products/namak-para.html` | `assets/product-images/namak-para` |
| Sada Mathri | `products/sada-mathri.html` | `assets/product-images/sada-mathri` |
| Methi Mathri | `products/methi-mathri.html` | `assets/product-images/methi-mathri` |
| Lehsuni Bites | `products/lehsuni-bites.html` | `assets/product-images/lehsuni-bites` |
| Sakar Para | `products/sakar-para.html` | `assets/product-images/sakar-para` |
| Besan Kesar Ladoo | `products/besan-kesar-ladoo.html` | `assets/product-images/besan-kesar-ladoo` |
| Atta Dryfruit Ladoo | `products/atta-dryfruit-ladoo.html` | `assets/product-images/atta-dryfruit-ladoo` |
| Lehsuwa ka Achar | `products/lehsuwa-ka-achar.html` | `assets/product-images/lehsuwa-ka-achar` |
| Ker ka Achar | `products/ker-ka-achar.html` | `assets/product-images/ker-ka-achar` |

## How to change an image

Example: change Shop All hero image.

Upload a new image with one of these exact names:

- `assets/page-images/shop-all-hero.png`
- `assets/page-images/shop-all-hero.webp`
- `assets/page-images/shop-all-hero.jpeg`
- `assets/page-images/shop-all-hero.jpg`

Do not edit `shop-all.html` for this.

Example: change Ker ka Achar product image.

Upload a new image with one of these exact names:

- `assets/product-images/ker-ka-achar.png`
- `assets/product-images/ker-ka-achar.webp`
- `assets/product-images/ker-ka-achar.jpeg`
- `assets/product-images/ker-ka-achar.jpg`

Do not edit `products/ker-ka-achar.html` for this.

## How to change page text

Open `site-content.js`.

Example for Shop All:

```js
shopAll: {
  title: "Shop All",
  subtitle: "Homemade snacks, sweets and pickles...",
  sectionTitle: "Shop the full range"
}
```

Change the text there and commit.

## How to change product text/prices

Open `products.js`.

Example:

```js
{
  id: "ker-ka-achar",
  name: "Ker ka Achar",
  image: "assets/product-images/ker-ka-achar",
  sizes: [
    { label: "250 gm", wasPrice: 390, nowPrice: 390, paymentLink: "" },
    { label: "500 gm", wasPrice: 765, nowPrice: 720, paymentLink: "" }
  ]
}
```
