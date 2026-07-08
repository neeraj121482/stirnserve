# Stir n Serve Image Index

This project uses clearly numbered image folders so you know exactly which file changes which part of the website.

## Rule
To change an image, replace the file with the same name in GitHub and commit. Do not change code unless you also change the filename or extension.

Example: to change the Shop All page hero, replace:

`assets/03-page-heroes/01-shop-page-hero.jpg`

with a new image using the exact same name.

---

## 01 Brand images

| File | Changes what |
|---|---|
| `assets/01-brand/01-sns-logo.png` | Logo in header, footer and story section |
| `assets/01-brand/02-favicon.png` | Small browser tab icon |

---

## 02 Homepage and category-card images

| File | Changes what |
|---|---|
| `assets/02-home/01-home-hero-collage.jpg` | Homepage big image beside the main headline |
| `assets/02-home/02-category-savory.jpg` | Homepage Savory category card background |
| `assets/02-home/03-category-sweets.jpg` | Homepage Sweets category card background |
| `assets/02-home/04-category-pickles.jpg` | Homepage Pickles category card background |
| `assets/02-home/05-category-hampers.jpg` | Homepage Hampers category card background |

---

## 03 Page hero images

These are the large full-width images at the top of each page.

| File | Changes what page |
|---|---|
| `assets/03-page-heroes/01-shop-page-hero.jpg` | `shop.html` — Shop All page |
| `assets/03-page-heroes/02-savory-page-hero.jpg` | `savory.html` — Savory page |
| `assets/03-page-heroes/03-sweets-page-hero.jpg` | `sweets.html` — Sweets page |
| `assets/03-page-heroes/04-pickles-page-hero.jpg` | `pickles.html` — Pickles page |
| `assets/03-page-heroes/05-hampers-page-hero.jpg` | `hampers.html` — Hampers page |
| `assets/03-page-heroes/06-story-page-hero.png` | `story.html` — Our Story page |
| `assets/03-page-heroes/07-promise-page-hero.jpg` | `our-promise.html` — Our Promise page |
| `assets/03-page-heroes/08-payment-page-hero.jpg` | `payment.html` — Online Payment page |
| `assets/03-page-heroes/09-contact-page-hero.png` | `contact.html` — Contact page |

Recommended size for page hero images: `1600 x 900 px` or wider landscape format.

If you upload a tall portrait image, the website will show the full image but it will become very tall. For a premium page banner, use a wide horizontal image.

---

## 04 Product images

These images are controlled by `products.js` and appear on product cards and individual product pages.

| File | Product |
|---|---|
| `assets/04-products/01-namak-para.jpg` | Namak Para |
| `assets/04-products/02-sada-mathri.jpg` | Sada Mathri |
| `assets/04-products/03-methi-mathri.jpg` | Methi Mathri |
| `assets/04-products/04-lehsuni-bites.jpg` | Lehsuni Bites |
| `assets/04-products/05-sakar-para.jpg` | Sakar Para |
| `assets/04-products/06-besan-kesar-ladoo.jpg` | Besan Kesar Ladoo |
| `assets/04-products/07-atta-dryfruit-ladoo.jpg` | Atta Dryfruit Ladoo |
| `assets/04-products/08-lehsuwa-ka-achar.jpg` | Lehsuwa ka Achar |
| `assets/04-products/09-ker-ka-achar.png` | Ker ka Achar |

Recommended size for product images: `1000 x 1000 px`, clean product photo, no menu text, no prices printed on the image.

---

## If image does not change after upload

1. Open the image directly in browser.
2. Press `Ctrl + F5`.
3. If still old, upload with a new name and update the matching path in `products.js` or the page HTML.

For product images, paths are in `products.js`.
For page hero images, paths are in each page HTML.
