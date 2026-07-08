# How to change images

## Product images
Product images are controlled by `products.js`.

Example:
```js
image: "assets/products/ker-ka-achar.png",
```

The image file must be uploaded to exactly that path. GitHub is case-sensitive, so `Ker-Ka-Achar.png` is not the same as `ker-ka-achar.png`.

This version automatically adds a cache-busting version query to product images, so after you change an image and commit, the site should refresh more reliably.

## Page hero images
Page hero images are NOT controlled by `products.js`. They are stored in:

```text
assets/pages/
```

Replace these files with your own images, keeping the same names:

```text
assets/pages/shop-hero.jpg
assets/pages/savory-hero.jpg
assets/pages/sweets-hero.jpg
assets/pages/pickles-hero.jpg
assets/pages/hampers-hero.jpg
assets/pages/story-hero.png
assets/pages/promise-hero.jpg
assets/pages/payment-hero.jpg
assets/pages/contact-hero.png
```

If you change a JPG to PNG, update the matching HTML page too.

Example in `shop.html`:
```html
<img src="assets/pages/shop-hero.jpg?v=20260708b" alt="Shop All">
```

Change to:
```html
<img src="assets/pages/shop-hero.png?v=20260708c" alt="Shop All">
```

## After uploading to GitHub
1. Commit changes.
2. Wait 1-3 minutes.
3. Open the direct image URL first to confirm it exists.
4. Hard refresh the page with Ctrl+F5.
