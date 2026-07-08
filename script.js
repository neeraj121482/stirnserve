(function(){
  const base = window.SNS_BASE || "";
  const cfg = window.SNS_CONFIG || {};
  const site = window.SNS_SITE || { images:{}, pages:{} };
  const products = window.SNS_PRODUCTS || [];
  let cart = JSON.parse(localStorage.getItem("snsCartV5") || "[]");
  let discountCode = "";

  const rs = n => "₹" + Math.round(Number(n || 0)).toLocaleString("en-IN");
  const page = path => base + path;
  const productUrl = id => page("products/" + id + ".html");
  const firstSize = p => (p.sizes && p.sizes[0]) || { label:"", wasPrice:0, nowPrice:0 };
  const discountPercent = s => (!s || !s.wasPrice || !s.nowPrice || s.wasPrice <= s.nowPrice) ? 0 : Math.round(((s.wasPrice - s.nowPrice) / s.wasPrice) * 100);
  const getProduct = id => products.find(p => p.id === id);
  const extensions = cfg.imageExtensions || ["png", "jpg", "jpeg", "webp"];
  const cacheValue = cfg.assetVersion === "auto" ? String(Date.now()) : (cfg.assetVersion || "1");

  function withCache(url){ return url + (url.includes("?") ? "&" : "?") + "v=" + encodeURIComponent(cacheValue); }
  function hasExtension(path){ return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(path || ""); }
  function imageBase(keyOrPath){ return site.images[keyOrPath] || keyOrPath || ""; }
  function makeUrl(raw){ return base + raw; }

  function autoImage(img, keyOrPath){
    if(!img || !keyOrPath) return;
    const rawBase = imageBase(keyOrPath);
    const attempts = hasExtension(rawBase) ? [rawBase] : extensions.map(ext => rawBase + "." + ext);
    let i = 0;
    img.classList.remove("loaded");
    function tryNext(){
      if(i >= attempts.length){ img.style.display = "none"; return; }
      const next = withCache(makeUrl(attempts[i++]));
      img.onerror = tryNext;
      img.onload = function(){ img.classList.add("loaded"); img.onerror = null; };
      img.src = next;
    }
    tryNext();
  }

  function autoBackground(el, keyOrPath){
    const rawBase = imageBase(keyOrPath); if(!rawBase) return;
    const attempts = hasExtension(rawBase) ? [rawBase] : extensions.map(ext => rawBase + "." + ext);
    let i = 0;
    function tryNext(){
      if(i >= attempts.length) return;
      const test = new Image();
      const url = withCache(makeUrl(attempts[i++]));
      test.onload = () => { el.style.backgroundImage = `url('${url}')`; };
      test.onerror = tryNext;
      test.src = url;
    }
    tryNext();
  }

  function resolveImages(){
    document.querySelectorAll("img[data-image-key]").forEach(img => autoImage(img, img.dataset.imageKey));
    document.querySelectorAll("img[data-auto-src]").forEach(img => autoImage(img, img.dataset.autoSrc));
    document.querySelectorAll("[data-bg-key]").forEach(el => autoBackground(el, el.dataset.bgKey));
    const favicon = document.querySelector("link[data-favicon]");
    if(favicon){
      const raw = imageBase("favicon");
      favicon.href = withCache(makeUrl(hasExtension(raw) ? raw : raw + ".png"));
    }
  }

  function whatsappUrl(message){ return `https://wa.me/${cfg.whatsappNumber || "918130275252"}?text=${encodeURIComponent(message)}`; }
  window.openWhatsApp = message => window.open(whatsappUrl(message), "_blank");
  window.toggleMenu = () => document.getElementById("menu")?.classList.toggle("open");
  window.openCart = () => { document.getElementById("cartDrawer")?.classList.add("open"); document.getElementById("overlay")?.classList.add("show"); renderCart(); };
  window.closeCart = () => { document.getElementById("cartDrawer")?.classList.remove("open"); document.getElementById("overlay")?.classList.remove("show"); };
  window.clearCart = () => { cart = []; saveCart(); renderCart(); };
  function saveCart(){ localStorage.setItem("snsCartV5", JSON.stringify(cart)); updateCartCount(); }
  function updateCartCount(){ document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = cart.length); }

  window.addToCart = function(productId, sizeIndex=0){
    const p = getProduct(productId); if(!p) return;
    const s = p.sizes[sizeIndex] || firstSize(p);
    cart.push({ id:p.id, name:p.name, size:s.label, price:Number(s.nowPrice || 0), paymentLink:s.paymentLink || "" });
    saveCart(); window.openCart();
  };
  window.removeCartItem = index => { cart.splice(index,1); saveCart(); renderCart(); };
  window.applyDiscount = () => { discountCode = (document.getElementById("discountCode")?.value || "").trim().toUpperCase(); renderCart(); };
  window.cartWhatsApp = function(){
    if(!cart.length){ alert("Your cart is empty."); return; }
    const subtotal = cart.reduce((sum,item)=>sum+item.price,0);
    const discount = getDiscountAmount(subtotal);
    const total = subtotal - discount;
    const lines = cart.map((item,i)=>`${i+1}. ${item.name} - ${item.size} - ${rs(item.price)}`).join("\n");
    const msg = `Hi Stir n Serve, I want to place this order:\n\n${lines}\n\nSubtotal: ${rs(subtotal)}\nDiscount: ${rs(discount)}\nTotal: ${rs(total)}\n\nPlease confirm availability, delivery charges and payment details.`;
    window.open(whatsappUrl(msg), "_blank");
  };
  window.productWhatsApp = function(productId){
    const p = getProduct(productId); if(!p) return;
    const select = document.getElementById("productSize");
    const s = p.sizes[Number(select?.value || 0)] || firstSize(p);
    const msg = `Hi Stir n Serve, I want to order:\n\nProduct: ${p.name}\nSize: ${s.label}\nPrice: ${rs(s.nowPrice)}\n\nPlease confirm availability, delivery charges and payment details.`;
    window.open(whatsappUrl(msg), "_blank");
  };
  window.payOnline = function(productId){
    const p = getProduct(productId); if(!p) return;
    const select = document.getElementById("productSize");
    const s = p.sizes[Number(select?.value || 0)] || firstSize(p);
    if(s.paymentLink){ window.open(s.paymentLink, "_blank"); }
    else { alert("Payment link is not added yet. Add it in products.js for this size, or use WhatsApp order."); }
  };
  window.submitContact = function(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const msg = `Hi Stir n Serve, I have an enquiry.\n\nName: ${data.name || ""}\nPhone: ${data.phone || ""}\nEmail: ${data.email || ""}\nOrder Type: ${data.orderType || ""}\nMessage: ${data.message || ""}`;
    window.open(whatsappUrl(msg), "_blank");
  };

  function getDiscountAmount(subtotal){
    const d = cfg.discounts && cfg.discounts[discountCode]; if(!d) return 0;
    if(d.type === "percent") return Math.round(subtotal * d.value / 100);
    return Number(d.value || 0);
  }
  function renderCart(){
    const box = document.getElementById("cartItems"); if(!box) return;
    box.innerHTML = cart.length ? cart.map((item,i)=>`<div class="cart-item"><strong>${item.name}</strong><span>${item.size} • ${rs(item.price)}</span><button class="btn outline small" onclick="removeCartItem(${i})">Remove</button></div>`).join("") : `<p style="color:#7b6659">Your cart is empty.</p>`;
    const subtotal = cart.reduce((sum,item)=>sum+item.price,0);
    const discount = getDiscountAmount(subtotal);
    const total = Math.max(0, subtotal - discount);
    const subEl = document.getElementById("cartSubtotal"); if(subEl) subEl.textContent = rs(subtotal);
    const disEl = document.getElementById("cartDiscount"); if(disEl) disEl.textContent = rs(discount);
    const totalEl = document.getElementById("cartTotal"); if(totalEl) totalEl.textContent = rs(total);
  }

  function productCard(p){
    const s = firstSize(p); const pct = discountPercent(s);
    return `<article class="product-card reveal">
      <a class="product-img" href="${productUrl(p.id)}"><img data-auto-src="${p.image}" alt="${p.name}"></a>
      <div class="product-body"><span class="badge">${p.badge || p.category}</span><h3><a href="${productUrl(p.id)}">${p.name}</a></h3><p>${p.tagline}</p><div class="price-row">${pct ? `<span class="was">${rs(s.wasPrice)}</span>` : ""}<span class="now">${rs(s.nowPrice)}</span>${pct ? `<span class="save">${pct}% off</span>` : ""}</div><div class="card-actions"><button class="btn primary small" onclick="addToCart('${p.id}',0)">Add</button><a class="btn outline small" href="${productUrl(p.id)}">View</a></div></div>
    </article>`;
  }
  function renderProductGrids(){
    document.querySelectorAll("[data-products]").forEach(el => {
      const cat = el.dataset.category; const limit = Number(el.dataset.limit || 0);
      let list = products.slice(); if(cat && cat !== "All") list = list.filter(p => p.category === cat); if(limit) list = list.slice(0,limit);
      el.innerHTML = list.map(productCard).join("");
    });
  }
  function renderProductDetail(){
    if(!window.PRODUCT_ID) return;
    const p = getProduct(window.PRODUCT_ID); const box = document.getElementById("productDetail"); if(!box) return;
    if(!p){ box.innerHTML = `<div class="copy-block"><h1>Product not found</h1><p>Please return to the shop page.</p><a class="btn primary" href="${page((site.pages.shopAll && site.pages.shopAll.file) || 'shop-all.html')}">Shop Products</a></div>`; return; }
    document.title = `${p.name} | Stir n Serve`;
    const options = p.sizes.map((s,i)=>{ const pct = discountPercent(s); return `<label class="size-option"><span><input type="radio" name="sizePick" value="${i}" ${i===0?'checked':''} onchange="updateProductPrice('${p.id}')"> ${s.label}</span><strong>${rs(s.nowPrice)} ${pct ? `<small class="save">${pct}% off</small>` : ""}</strong></label>`; }).join("");
    box.innerHTML = `<div class="detail-media reveal"><img data-auto-src="${p.image}" alt="${p.name}"></div><div class="detail-panel reveal"><span class="badge">${p.badge || p.category}</span><h1>${p.name}</h1><p class="tagline">${p.tagline}</p><div class="size-list" id="sizeList">${options}</div><input type="hidden" id="productSize" value="0"><div class="price-box" id="productPriceBox"></div><div class="detail-actions"><button class="btn primary" onclick="addToCart('${p.id}',Number(document.getElementById('productSize').value || 0))">Add to Cart</button><button class="btn secondary" onclick="productWhatsApp('${p.id}')">Order on WhatsApp</button><button class="btn outline" onclick="payOnline('${p.id}')">Pay Online</button></div><div class="detail-tabs"><div class="detail-tab"><strong>Description</strong>${p.description}</div><div class="detail-tab"><strong>Taste Profile</strong>${p.taste}</div><div class="detail-tab"><strong>Ingredients</strong>${p.ingredients}</div><div class="detail-tab"><strong>Best Paired With</strong>${p.bestWith}</div><div class="detail-tab"><strong>Storage</strong>${p.storage}</div></div></div>`;
    window.updateProductPrice(p.id);
  }
  window.updateProductPrice = function(productId){
    const p = getProduct(productId); if(!p) return;
    const checked = document.querySelector('input[name="sizePick"]:checked'); const index = Number(checked?.value || 0);
    const hidden = document.getElementById("productSize"); if(hidden) hidden.value = index;
    const s = p.sizes[index] || firstSize(p); const pct = discountPercent(s); const box = document.getElementById("productPriceBox");
    if(box) box.innerHTML = `${pct ? `<span class="was">${rs(s.wasPrice)}</span>` : ""}<span class="now">${rs(s.nowPrice)}</span>${pct ? `<span class="save">${pct}% off</span>` : ""}`;
  };
  function renderReels(){
    const box = document.getElementById("homeReels"); if(!box) return;
    const reels = cfg.homeReels || [];
    box.innerHTML = reels.map((r,i)=>`<a class="reel reveal" href="${r.url || '#'}" ${r.url && r.url !== '#' ? 'target="_blank"' : ''}><span class="badge">Reel ${i+1}</span><h3>${r.title}</h3><p>${r.note}</p></a>`).join("");
  }
  function applyConfig(){
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = `${cfg.phonePrimary || "8130275252"} / ${cfg.phoneSecondary || "9314482717"}`);
    document.querySelectorAll("[data-address]").forEach(el => el.textContent = cfg.address || "Food Destination");
    document.querySelectorAll("[data-fssai]").forEach(el => el.textContent = cfg.fssaiLicense || "Add FSSAI License / Registration No.");
    const socialMap = { instagram: cfg.instagram, pinterest: cfg.pinterest, facebook: cfg.facebook, youtube: cfg.youtube };
    Object.entries(socialMap).forEach(([key,val]) => document.querySelectorAll(`[data-${key}]`).forEach(a => a.href = val || "#"));
    document.querySelectorAll(".floating-wa").forEach(a => a.href = whatsappUrl("Hi Stir n Serve, I want to place an order."));
  }
  function applyPageContent(){
    const key = document.body.dataset.page; if(!key) return;
    const p = site.pages && site.pages[key]; if(!p) return;
    if(p.seoTitle) document.title = p.seoTitle; else if(p.title) document.title = `${String(p.title).replace(/<[^>]+>/g,'')} | Stir n Serve`;
    const meta = document.querySelector('meta[name="description"]'); if(meta && (p.seoDescription || p.subtitle)) meta.setAttribute('content', p.seoDescription || p.subtitle);
    document.querySelectorAll("[data-page-title]").forEach(el => el.innerHTML = p.title || "");
    document.querySelectorAll("[data-page-subtitle]").forEach(el => el.textContent = p.subtitle || "");
    document.querySelectorAll("[data-page-breadcrumb]").forEach(el => el.textContent = p.breadcrumb || p.navLabel || "");
    document.querySelectorAll("[data-page-section-eyebrow]").forEach(el => el.textContent = p.sectionEyebrow || "");
    document.querySelectorAll("[data-page-section-title]").forEach(el => el.textContent = p.sectionTitle || "");
    document.querySelectorAll("[data-page-section-text]").forEach(el => el.textContent = p.sectionText || "");
    document.querySelectorAll("[data-page-hero-image]").forEach(img => { if(p.heroImage) img.dataset.imageKey = p.heroImage; });
    document.querySelectorAll("[data-home-story-title]").forEach(el => el.textContent = p.storyTitle || "");
    document.querySelectorAll("[data-home-story-para1]").forEach(el => el.textContent = p.storyPara1 || "");
    document.querySelectorAll("[data-home-story-para2]").forEach(el => el.textContent = p.storyPara2 || "");
  }
  function setupReveal(){
    const targets = document.querySelectorAll(".reveal, .stagger"); if(!targets.length) return;
    if(!('IntersectionObserver' in window)){ targets.forEach(el=>el.classList.add('visible')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); } }), { threshold:.12 });
    targets.forEach(el => io.observe(el));
  }
  document.addEventListener("DOMContentLoaded", () => {
    applyPageContent(); applyConfig(); renderProductGrids(); renderProductDetail(); renderReels(); resolveImages(); updateCartCount(); renderCart(); setupReveal();
  });
})();
