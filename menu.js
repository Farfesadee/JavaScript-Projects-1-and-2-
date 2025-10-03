document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-section input[type="search"]');
  const tabs = document.querySelectorAll('.category-tabs .tab');
  const menuGrid = document.getElementById('menu-items-g');

  // ensure we have a "no result" element (create if missing)
  let noResult = document.getElementById('noResult');
  if (!noResult) {
    noResult = document.createElement('p');
    noResult.id = 'noResult';
    noResult.textContent = 'No items found.';
    noResult.style.display = 'none';
    noResult.style.textAlign = 'center';
    noResult.style.marginTop = '20px';
    menuGrid.insertAdjacentElement('afterend', noResult);
  }

  // small sanitizer for text inserted into innerHTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }

  // create a card element from an item object
  function createCard(item) {
    const card = document.createElement('article');
    card.className = 'menu-item-card';
    card.dataset.category = (item.category || 'food').toLowerCase();
    const imgSrc = item.image || 'images/default-food.jpg';
    const price = (typeof item.price === 'number') ? item.price.toFixed(2) : (item.price || '');
    card.innerHTML = `
      <img src="${imgSrc}" alt="${escapeHtml(item.name)}">
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.desc || '')}</p>
      <div class="price-add"><span>&#8358;${price}</span><button>+ Add</button></div>
    `;
    return card;
  }

  // Append saved items from localStorage without duplicating existing static cards
  (function appendStoredItems(){
    const stored = JSON.parse(localStorage.getItem('menuItems')) || [];
    if (!Array.isArray(stored) || stored.length === 0) return;
    const existingNames = new Set(
      Array.from(menuGrid.querySelectorAll('h3')).map(h => h.textContent.trim().toLowerCase())
    );
    stored.forEach(item => {
      if (!item || !item.name) return;
      if (existingNames.has(item.name.trim().toLowerCase())) return;
      const card = createCard(item);
      menuGrid.appendChild(card);
      existingNames.add(item.name.trim().toLowerCase());
    });
  })();

  // convert tab label to canonical filter key
  function getFilterFromTabText(btn) {
    const txt = btn.textContent.trim().toLowerCase();
    if (txt.includes('all')) return 'all';
    if (txt.includes('drink')) return 'drink';
    if (txt.includes('food')) return 'food';
    if (txt.includes('dessert')) return 'dessert';
    return 'all';
  }

  function getActiveFilter() {
    const active = document.querySelector('.category-tabs .tab.active');
    return active ? getFilterFromTabText(active) : 'all';
  }

  // show/hide cards based on category + search term
  function filterItems(filter, searchTerm) {
    searchTerm = (searchTerm || '').trim().toLowerCase();
    const cards = menuGrid.querySelectorAll('.menu-item-card');
    let visible = 0;

    cards.forEach(card => {
      const cat = (card.dataset.category || '').toLowerCase();
      const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('p')?.textContent || '').toLowerCase();
      const matchesCategory = filter === 'all' || cat === filter;
      const matchesSearch = !searchTerm || name.includes(searchTerm) || desc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = ''; // allow CSS/grid to control layout
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    noResult.style.display = visible === 0 ? 'block' : 'none';
  }

  // Tab click handling (activate tab + filter)
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = getFilterFromTabText(tab);
      const q = (searchInput?.value || '').toLowerCase();
      filterItems(filter, q);
    });
  });

  // Search input handling (works with currently active tab)
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      const activeFilter = getActiveFilter();
      filterItems(activeFilter, q);
    });
  }

  // initial run: show all cards (respect the default "active" tab if present)
  filterItems(getActiveFilter(), '');
});
// document.addEventListener("DOMContentLoaded", () => {
//   const menuGrid = document.querySelector(".menu-items-grid");

//   // Handle Add to Cart clicks
//   menuGrid.addEventListener("click", (e) => {
//     if (e.target.tagName === "BUTTON") {
//       const card = e.target.closest(".menu-item-card");
//       const itemName = card.querySelector("h3").textContent;
//       const itemPrice = parseFloat(
//         card.querySelector(".price-add span").textContent.replace("&#8358;", "")
//       );
//       const itemImage = card.querySelector("img").src;

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       // Check if already in cart
//       const existing = cart.find((item) => item.name === itemName);
//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         cart.push({ name: itemName, price: itemPrice, quantity: 1, image: itemImage });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       alert(`${itemName} added to cart `);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".price-add button");

  addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".menu-item-card");
      const name = card.querySelector("h3").textContent;
      const priceText = card.querySelector(".price-add span").textContent.replace("₦", "").trim();
      const price = parseFloat(priceText);  // ensures number
      const image = card.querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // check if item exists
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart`);
    });
  });
});

