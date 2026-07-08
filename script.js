(function(){
  const base = window.SNS_BASE || "";
  const cfg = window.SNS_CONFIG || {};
  const products = window.SNS_PRODUCTS || [];

  function money(value){
    if(value === null || value === undefined || value === "") return "";
    return (cfg.currency || "₹") + Number(value).toLocaleString("en-IN");
  }

  function discountPercent(variant){
    if(!variant.wasPrice || !variant.nowPrice || variant.wasPrice <= variant.nowPrice) return 0;
    return Math.round(((variant.wasPrice - variant.nowPrice) / variant.wasPrice) * 100);
  }

  function productUrl(product){
    return base + "products/" + product.id + ".html";
  }

  function assetPath(path){
    if(!path) return base + "assets/product-menu.jpeg";
    if(path.startsWith("http")) return path;
    return base + path;
  }

  function whatsappUrl(message){
    return "https://wa.me/" + cfg.primaryWhatsApp + "?text=" + encodeURIComponent(message);
  }

  window.openWhatsApp = function(message){
    window.open(whatsappUrl(message), "_blank");
  };

  function minVariant(product){
    return product.sizes && product.sizes.length ? product.sizes[0] : {label:"", nowPrice:0, wasPrice:null};
  }

  function productCard(product){
    const v = minVariant(product);
    const d = discountPercent(v);
    return `
      <article class="product-card">
        <a class="product-image" href="${productUrl(product)}">
          ${d ? `<span class="discount-badge">${d}% OFF</span>` : ""}
          <img src="${assetPath(product.image)}" alt="${product.name}">
        </a>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p>${product.tagline || product.description || ""}</p>
          <div class="price-line">
            ${v.wasPrice ? `<span class="was">${money(v.wasPrice)}</span>` : ""}
            <span class="now">From ${money(v.nowPrice)}</span>
            ${d ? `<span class="save">Save ${d}%</span>` : ""}
          </div>
          <div class="product-actions">
            <a class="btn outline small" href="${productUrl(product)}">View Product</a>
            <button class="btn primary small" onclick="quickWhatsApp('${product.id}')">WhatsApp</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderGrid(target, list){
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if(!el) return;
    el.innerHTML = list.map(productCard).join("");
  }

  window.quickWhatsApp = function(productId){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    const v = minVariant(p);
    const msg = `Hi Stir n Serve, I want to order/enquire about:\n\nProduct: ${p.name}\nSize: ${v.label}\nPrice: ${money(v.nowPrice)}\n\nPlease confirm availability, delivery charges and payment details.`;
    window.open(whatsappUrl(msg), "_blank");
  };

  function getCart(){
    try { return JSON.parse(localStorage.getItem("sns_cart") || "[]"); }
    catch(e){ return []; }
  }
  function saveCart(cart){
    localStorage.setItem("sns_cart", JSON.stringify(cart));
    updateCart();
  }

  window.addToCart = function(productId, sizeIndex){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    const v = p.sizes[sizeIndex || 0];
    const cart = getCart();
    cart.push({
      id: p.id,
      name: p.name,
      size: v.label,
      wasPrice: v.wasPrice || null,
      nowPrice: v.nowPrice,
      paymentLink: v.paymentLink || "",
      qty: 1
    });
    saveCart(cart);
    openCart();
  };

  window.removeCartItem = function(index){
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
  };

  window.clearCart = function(){
    saveCart([]);
  };

  let appliedOffer = null;

  window.applyDiscount = function(){
    const input = document.getElementById("discountCode");
    const code = (input && input.value || "").trim().toUpperCase();
    const offer = (cfg.offers || []).find(o => o.code.toUpperCase() === code);
    if(!offer){
      appliedOffer = null;
      alert("Discount code not found.");
    } else {
      appliedOffer = offer;
    }
    updateCart();
  };

  function cartTotals(cart){
    const subtotal = cart.reduce((sum, item) => sum + Number(item.nowPrice || 0) * Number(item.qty || 1), 0);
    let discount = 0;
    if(appliedOffer){
      if(appliedOffer.type === "percent") discount = Math.round(subtotal * appliedOffer.value / 100);
      if(appliedOffer.type === "fixed") discount = appliedOffer.value;
    }
    const total = Math.max(subtotal - discount, 0);
    return { subtotal, discount, total };
  }

  function updateCart(){
    const cart = getCart();
    document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = cart.length);
    const items = document.getElementById("cartItems");
    const sub = document.getElementById("cartSubtotal");
    const dis = document.getElementById("cartDiscount");
    const tot = document.getElementById("cartTotal");
    if(!items) return;
    if(!cart.length){
      items.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
      items.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
          <strong>${item.name}</strong>
          <span>Size: ${item.size}</span>
          <span>Now: ${money(item.nowPrice)} ${item.wasPrice ? ` | Was: ${money(item.wasPrice)}` : ""}</span>
          <button class="btn outline small" onclick="removeCartItem(${i})">Remove</button>
        </div>
      `).join("");
    }
    const t = cartTotals(cart);
    if(sub) sub.textContent = money(t.subtotal);
    if(dis) dis.textContent = "-" + money(t.discount);
    if(tot) tot.textContent = money(t.total);
  }

  window.openCart = function(){
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("overlay");
    if(drawer) drawer.classList.add("open");
    if(overlay) overlay.classList.add("show");
  };

  window.closeCart = function(){
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("overlay");
    if(drawer) drawer.classList.remove("open");
    if(overlay) overlay.classList.remove("show");
  };

  window.cartWhatsApp = function(){
    const cart = getCart();
    if(!cart.length){
      alert("Your cart is empty.");
      return;
    }
    const t = cartTotals(cart);
    const lines = cart.map((item, i) => `${i+1}. ${item.name} - ${item.size} - ${money(item.nowPrice)}`).join("\n");
    const offerLine = appliedOffer ? `\nDiscount code: ${appliedOffer.code}\nDiscount: ${money(t.discount)}` : "";
    const msg = `Hi Stir n Serve, I want to place this order:\n\n${lines}\n\nSubtotal: ${money(t.subtotal)}${offerLine}\nTotal: ${money(t.total)}\n\nPlease confirm availability, delivery charges and payment details.`;
    window.open(whatsappUrl(msg), "_blank");
  };

  window.toggleMenu = function(){
    const menu = document.getElementById("menu");
    if(menu) menu.classList.toggle("open");
  };

  function renderProductDetail(){
    const id = window.PRODUCT_ID;
    if(!id) return;
    const p = products.find(x => x.id === id);
    const mount = document.getElementById("productDetail");
    if(!p || !mount) return;

    document.title = `${p.name} | Stir n Serve`;
    const maxDiscount = Math.max(...p.sizes.map(discountPercent), 0);

    mount.innerHTML = `
      <div class="product-gallery">
        ${maxDiscount ? `<span class="discount-badge">${maxDiscount}% OFF</span>` : ""}
        <img src="${assetPath(p.image)}" alt="${p.name}">
      </div>
      <div class="product-info">
        <div class="category-label">${p.category}</div>
        <h1>${p.name}</h1>
        <p><strong>${p.tagline || ""}</strong></p>
        <p>${p.description || ""}</p>
        <div class="variant-box">
          <h3>Select size</h3>
          <div class="size-options">
            ${p.sizes.map((v, i) => {
              const d = discountPercent(v);
              return `<label class="size-option ${i === 0 ? "active" : ""}" data-size-option>
                <span><input type="radio" name="size" value="${i}" ${i === 0 ? "checked" : ""}> ${v.label}</span>
                <span class="price-line">
                  ${v.wasPrice ? `<span class="was">${money(v.wasPrice)}</span>` : ""}
                  <span class="now">${money(v.nowPrice)}</span>
                  ${d ? `<span class="save">${d}% OFF</span>` : ""}
                </span>
              </label>`;
            }).join("")}
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn primary" onclick="addSelectedProductToCart('${p.id}')">Add to Cart</button>
          <button class="btn outline" onclick="selectedProductWhatsApp('${p.id}')">Order on WhatsApp</button>
          <button class="btn secondary" onclick="paySelectedProduct('${p.id}')">Pay Online</button>
        </div>
        <div class="notice">${cfg.deliveryNote || ""}</div>
        <div class="tabs">
          <details open><summary>Product Story</summary><p>${p.story || p.description || ""}</p></details>
          <details><summary>Ingredients</summary><p>${p.ingredients || "Update ingredients before launch."}</p></details>
          <details><summary>Taste Profile</summary><p>${(p.tasteProfile || []).join(" • ")}</p></details>
          <details><summary>Best For</summary><p>${(p.bestFor || []).join(" • ")}</p></details>
          <details><summary>Storage & Shelf Life</summary><p>${p.storage || ""}</p><p>${p.shelfLife || ""}</p></details>
          <details><summary>Allergen Info</summary><p>${p.allergens || ""}</p></details>
        </div>
      </div>
    `;

    document.querySelectorAll("[data-size-option]").forEach(label => {
      label.addEventListener("click", () => {
        document.querySelectorAll("[data-size-option]").forEach(x => x.classList.remove("active"));
        label.classList.add("active");
      });
    });
  }

  function selectedVariant(product){
    const checked = document.querySelector('input[name="size"]:checked');
    const idx = checked ? Number(checked.value) : 0;
    return { index: idx, variant: product.sizes[idx] };
  }

  window.addSelectedProductToCart = function(productId){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    addToCart(p.id, selectedVariant(p).index);
  };

  window.selectedProductWhatsApp = function(productId){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    const sel = selectedVariant(p);
    const v = sel.variant;
    const msg = `Hi Stir n Serve, I want to order:\n\nProduct: ${p.name}\nSize: ${v.label}\nNow Price: ${money(v.nowPrice)}${v.wasPrice ? `\nWas Price: ${money(v.wasPrice)}\nDiscount: ${discountPercent(v)}%` : ""}\n\nPlease confirm availability, delivery charges and payment details.`;
    window.open(whatsappUrl(msg), "_blank");
  };

  window.paySelectedProduct = function(productId){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    const v = selectedVariant(p).variant;
    if(v.paymentLink){
      window.open(v.paymentLink, "_blank");
    } else {
      const msg = `Hi Stir n Serve, I want to pay online for:\n\nProduct: ${p.name}\nSize: ${v.label}\nAmount: ${money(v.nowPrice)}\n\nPlease send me the payment link.`;
      window.open(whatsappUrl(msg), "_blank");
    }
  };

  function renderVideos(){
    const el = document.getElementById("videoGrid");
    if(!el) return;
    const videos = window.SNS_VIDEOS || [];
    el.innerHTML = videos.map(v => `
      <article class="video-card">
        <img src="${assetPath(v.thumbnail)}" alt="${v.title}">
        <div class="video-body">
          <span class="pill">${v.type}</span>
          <h3>${v.title}</h3>
          <p>${v.caption}</p>
          <a class="btn outline small" target="_blank" href="${v.url || "#"}">Watch / Add Link</a>
        </div>
      </article>
    `).join("");
  }

  function hydrateConfig(){
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = cfg.phoneDisplay || "");
    document.querySelectorAll("[data-address]").forEach(el => el.textContent = cfg.address || "");
    document.querySelectorAll("[data-fssai]").forEach(el => el.textContent = cfg.fssaiLicense || "");
    document.querySelectorAll("[data-logo]").forEach(img => img.src = assetPath(cfg.logo || "assets/sns-logo.png"));
    document.querySelectorAll("[data-instagram]").forEach(a => a.href = cfg.instagramUrl || "#");
    document.querySelectorAll("[data-pinterest]").forEach(a => a.href = cfg.pinterestUrl || "#");
    document.querySelectorAll("[data-facebook]").forEach(a => a.href = cfg.facebookUrl || "#");
    document.querySelectorAll("[data-youtube]").forEach(a => a.href = cfg.youtubeUrl || "#");
  }

  window.submitWhatsAppForm = function(event){
    event.preventDefault();
    const fd = new FormData(event.target);
    const msg =
      `Hi Stir n Serve, I have an enquiry.\n\n` +
      `Name: ${fd.get("name") || ""}\n` +
      `Phone: ${fd.get("phone") || ""}\n` +
      `Order Type: ${fd.get("type") || ""}\n` +
      `Message: ${fd.get("message") || ""}`;
    window.open(whatsappUrl(msg), "_blank");
  };

  document.addEventListener("DOMContentLoaded", () => {
    hydrateConfig();
    renderGrid("#featuredProducts", products.filter(p => p.featured).slice(0, 6));
    renderGrid("#allProducts", products);
    document.querySelectorAll("[data-category-grid]").forEach(el => {
      const cat = el.getAttribute("data-category-grid");
      renderGrid(el, products.filter(p => p.category === cat));
    });
    renderProductDetail();
    renderVideos();
    updateCart();
  });
})();
