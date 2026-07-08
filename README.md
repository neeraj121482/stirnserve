# Stir n Serve GitHub Pages Website - Version 2

This is the leaner premium version.

## What changed
- No Gallery page.
- No separate Videos/Reels page. Reels are only on the homepage.
- FSSAI page replaced with `our-promise.html`.
- Product pages are separate files in the `products/` folder.
- Product pages use sizes, was price, now price and automatic discount percentage.
- Premium hero images and product images generated from your uploaded menu image.
- Scroll animations are included using plain JavaScript. No external animation library required.

## Upload to GitHub
Upload all files and folders in this folder to the root of your GitHub repository.
Make sure these are visible at the root:
- index.html
- shop.html
- products.js
- script.js
- style.css
- assets/
- products/

If product pages show 404, the `products/` folder was not uploaded correctly.

## Edit products
Open `products.js`.
Change `wasPrice`, `nowPrice`, sizes, descriptions and payment links.

## Online payment
For a free static website, use Razorpay Payment Links. Paste each link inside the relevant size object in `products.js`.

## Custom domain
To use www.stirnserve.com, add it in GitHub: Settings > Pages > Custom domain.
Then add DNS CNAME for www pointing to neeraj121482.github.io.
