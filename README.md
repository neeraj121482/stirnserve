# Stir n Serve V7 - clean editable text and images

This version is meant to be easy to edit on GitHub Pages.

## Main rule

Do not edit page text inside HTML for normal changes.

Edit:

- `site-content.js` for website/page text, story text, promise text, contact text, menu labels, phone numbers, FSSAI, social links and page hero image names.
- `products.js` for product names, product descriptions, product images, sizes, prices, discount pricing and payment links.

## Page file map

- Home: `index.html`
- Shop All: `shop-all.html`
- Snacks: `snacks.html`
- Sweets: `sweets.html`
- Pickles: `pickles.html`
- Gift Hampers: `gift-hampers.html`
- Our Story: `our-story.html`
- Our Promise: `our-promise.html`
- Payment & Orders: `payment-orders.html`
- Contact: `contact.html`

## Where to change page text

Open `site-content.js` and find:

```js
pages: {
  ourStory: {
    title: "Our Story",
    subtitle: "...",
    bodyTitle: "...",
    paragraphs: [
      "Paragraph 1",
      "Paragraph 2"
    ]
  }
}
```

Change the text there, commit, and the page updates automatically.

## Where to change product text/prices

Open `products.js`.

Each product has:

```js
{
  id: "ker-ka-achar",
  name: "Ker ka Achar",
  description: "...",
  image: "assets/product-images/ker-ka-achar",
  sizes: [
    { label: "250 gm", wasPrice: 390, nowPrice: 390, paymentLink: "" }
  ]
}
```

## Image system

Images are extension-flexible. If the code says:

```js
assets/product-images/ker-ka-achar
```

the website tries:

- `ker-ka-achar.png`
- `ker-ka-achar.webp`
- `ker-ka-achar.jpeg`
- `ker-ka-achar.jpg`

So you can upload PNG or JPG using the same base name.

## Image folders

- Logo and favicon: `assets/brand/`
- Page hero images: `assets/page-images/`
- Homepage category card images: `assets/category-images/`
- Product images: `assets/product-images/`

## Full width issue fixed

The page hero design is back to the normal earlier style: text on the left and image on the right.
