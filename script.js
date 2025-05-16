const products = [
  {
    name: "Macaron Box (6 pcs)",
    price: 590,
    image: "https://fleurons.in/cdn/shop/products/MacaronBox6_800x.jpg"
  },
  {
    name: "Chocolate Tart",
    price: 220,
    image: "https://fleurons.in/cdn/shop/products/ChocolateTart_800x.jpg"
  },
  {
    name: "Lemon Tart",
    price: 180,
    image: "https://fleurons.in/cdn/shop/products/LemonTart_800x.jpg"
  }
];

const grid = document.getElementById('product-grid');
let cartCount = 0;

products.forEach(prod => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}">
    <div class="card-content">
      <h3>${prod.name}</h3>
      <p>₹${prod.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
  grid.appendChild(card);
});

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}
