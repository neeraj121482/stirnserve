# Stir n Serve GitHub Pages Website

This is a free static website for GitHub Pages.

It includes:
- Home page
- Shop page
- Separate category pages
- Separate product pages for each product
- Product sizes
- Was / now pricing
- Automatic discount percentage
- WhatsApp ordering
- Cart-style WhatsApp order
- Discount code calculation
- Online payment link support
- FSSAI section
- Food Destination address section
- Videos / reels / social follow page
- Logo and product menu image

## Files

```text
index.html
shop.html
savory.html
sweets.html
pickles.html
hampers.html
story.html
videos.html
fssai.html
payment.html
contact.html
products.js
script.js
style.css
assets/
products/
```

## Product pages

Each product has its own page:

```text
products/namak-para.html
products/sada-mathri.html
products/methi-mathri.html
products/lehsuni-bites.html
products/sakar-para.html
products/besan-kesar-ladoo.html
products/atta-dryfruit-ladoo.html
products/lehsuwa-ka-achar.html
products/ker-ka-achar.html
```

The content is still controlled from `products.js`, so price changes are made in one file.

## Edit products

Open `products.js`.

Change this:

```js
{ label: "150 gm", wasPrice: 135, nowPrice: 115, paymentLink: "" }
```

Rules:
- `wasPrice` = MRP / previous public price
- `nowPrice` = selling price
- discount percentage is calculated automatically
- set `wasPrice: null` if you do not want to show a discount

## Add online payment

For a static GitHub Pages website, do not add secret payment gateway API keys.

Best method:
1. Create a Razorpay Payment Link / Payment Button / Payment Page for each product or order type.
2. Paste the customer-facing payment URL into `paymentLink`.

Example:

```js
{ label: "150 gm", wasPrice: 135, nowPrice: 115, paymentLink: "https://rzp.io/..." }
```

Then the `Pay Online` button will open the payment page.

If `paymentLink` is empty, the website opens WhatsApp and asks for a payment link.

## Update logo

Replace:

```text
assets/sns-logo.png
```

Keep the same file name to avoid changing code.

## Update product images

Add images inside:

```text
assets/products/
```

Then update the product:

```js
image: "assets/products/namak-para.jpg"
```

## Update FSSAI

In `products.js`, change:

```js
fssaiLicense: "Add FSSAI License / Registration No."
```

Do not publish a fake or placeholder number.

## Update address

In `products.js`, change:

```js
address: "Food Destination"
```

## Update social links

In `products.js`, change:

```js
instagramUrl: "#",
pinterestUrl: "#",
facebookUrl: "#",
youtubeUrl: "#"
```

## Add videos or reels

In `products.js`, update `SNS_VIDEOS`.

```js
{
  title: "Fresh Batch Making",
  type: "Instagram Reel",
  url: "https://instagram.com/reel/...",
  thumbnail: "assets/product-menu.jpeg",
  caption: "Santosh ji preparing a fresh batch."
}
```

## GitHub Pages hosting

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Go to Settings -> Pages.
4. Select "Deploy from a branch".
5. Select branch `main` and folder `/root`.
6. Save.

Your site will be live at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

## Important business warning

Was / now pricing must be truthful. Only show a discount if the was price is a real MRP or previous public selling price.

For full ecommerce features like automatic payment capture, real checkout, inventory, tax invoices, courier integration and abandoned cart, move later to Shopify or WooCommerce.
