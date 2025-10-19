const menuItems = [
  { name: "Hot Matcha Latte", category: "Hot", img: "img/hot-matcha.png", price: "$5.50" },
  { name: "Iced Matcha Latte", category: "Iced", img: "img/iced-matcha.png", price: "$5.50" },
  { name: "Espresso", category: "Hot", img: "img/espresso.png", price: "$4.00" },
  { name: "Cappuccino", category: "Hot", img: "img/cappuccino.png", price: "$5.25" },
  { name: "Latte", category: "Hot", img: "img/latte.png", price: "$5.75" },
  { name: "Iced Latte", category: "Iced", img: "img/iced-latte.png", price: "$5.50" },
  { name: "Americano", category: "Hot", img: "img/americano.png", price: "$5.00" },
  { name: "Iced Americano", category: "Iced", img: "img/iced-americano.png", price: "$5.00" },
  { name: "Caramel Frappe", category: "Iced", img: "img/frappe.png", price: "$6.00" },
  { name: "Hot Chocolate", category: "Hot", img: "img/hot-chocolate.png", price: "$3.25" },
  { name: "Tiramisu", category: "Dessert", img: "img/tiramisu.png", price: "$7.50" },
  { name: "Blueberry Muffin", category: "Dessert", img: "img/blueberry-muffin.png", price: "$7.50" },
  { name: "Strawberry Cheesecake", category: "Dessert", img: "img/cheesecake.png", price: "$8.00" },
  { name: "Glazed Donut", category: "Dessert", img: "img/donut.png", price: "$6.00" }
];

const menuContainer = document.getElementById("menu");

function displayMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("article");
    card.dataset.category = item.category;
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>Category: ${item.category}</p>
      <p>Price: ${item.price}</p>
    `;
    menuContainer.appendChild(card);
  });
}

displayMenu(menuItems);