// Sample items (copied from menu1.html)
let menuItems = [
  {name: "Jollof Rice", desc: "Hot Nigerian Jollof Rice Made By real yoruba women", price: 450, category: "food", image: "images/Jollof Rice.jpeg"},
  {name: "Fried Rice", desc: "Fried rice with lot of extras", price: 1299, category: "food", image: "images/FRied Rice.jpeg"},
  {name: "White Rice", desc: "Plain white rice, soft and sweet", price: 650, category: "food", image: "images/White Rice.jpeg"},
  {name: "Turkey", desc: "Premium roasted turkey", price: 650, category: "food", image: "images/Best Air Fryer Chicken Leg.jpeg"},
  {name: "Chicken", desc: "Delicious fried chicken", price: 650, category: "food", image: "images/Chicken Drumsticks Air Fryer Recipes Made Easy in 5 Steps.jpeg"},
  {name: "Fish", desc: "Grilled or fried fish", price: 650, category: "food", image: "images/Fish.jpeg"},
  {name: "Water", desc: "Refreshing bottled water", price: 650, category: "drink", image: "images/Water.jpeg"},
  {name: "Juice", desc: "Fresh fruit juice", price: 650, category: "drink", image: "images/Chivita x Hollandia = Joy.jpeg"},
  {name: "Donuts", desc: "Glazed donuts", price: 650, category: "dessert", image: "images/Chocolate Glazed Donuts by Master Baker - My Urban Treats.jpeg"},
];

// Render items
function renderMenu() {
  const tbody = document.getElementById("menuBody");
  tbody.innerHTML = "";
  menuItems.forEach((item, index) => {
    const row = `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" width="50"></td>
        <td>${item.name}</td>
        <td>${item.desc}</td>
        <td>₦${item.price}</td>
        <td>${item.category}</td>
        <td>
          <button onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Add new item
document.getElementById("addItemForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("itemName").value;
  const desc = document.getElementById("itemDesc").value;
  const price = document.getElementById("itemPrice").value;
  const category = document.getElementById("itemCategory").value;
  const image = document.getElementById("itemImage").value || "images/default.jpeg";

  menuItems.push({name, desc, price, category, image});
  renderMenu();
  this.reset();
});

// Delete item
function deleteItem(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    menuItems.splice(index, 1);
    renderMenu();
  }
}

// Edit item
function editItem(index) {
  const item = menuItems[index];
  const newName = prompt("Edit name:", item.name);
  const newDesc = prompt("Edit description:", item.desc);
  const newPrice = prompt("Edit price:", item.price);
  const newCategory = prompt("Edit category (food/drink/dessert):", item.category);
  const newImage = prompt("Edit image path:", item.image);

  menuItems[index] = {
    name: newName || item.name,
    desc: newDesc || item.desc,
    price: newPrice || item.price,
    category: newCategory || item.category,
    image: newImage || item.image,
  };
  renderMenu();
}

// Initial render
renderMenu();
