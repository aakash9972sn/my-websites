const products = [
  {
    id: 1,
    name: "Macaron Box (6 pcs)",
    price: 590,
    image: "https://fleurons.in/cdn/shop/products/MacaronBox6_800x.jpg",
    category: "macaron"
  },
  {
    id: 2,
    name: "Chocolate Tart",
    price: 220,
    image: "https://fleurons.in/cdn/shop/products/ChocolateTart_800x.jpg",
    category: "tart"
  }
];

let cart = [];

function renderProducts(filter = 'all') {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products
    .filter(p => filter === 'all' || p.category === filter)
    .forEach(prod => {
      const div = document.createElement('div');
      div.className = 'card';
      div.onclick = () => openModal(prod);
      div.innerHTML = `
        <img src="${prod.image}" />
        <div class="card-content">
          <h3>${prod.name}</h3>
          <p>₹${prod.price}</p>
        </div>
      `;
      grid.appendChild(div);
    });
}
renderProducts();

function filterProducts(category) {
  renderProducts(category);
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

let currentProduct;
function openModal(product) {
  currentProduct = product;
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-title').innerText = product.name;
  document.getElementById('modal-price').innerText = "₹" + product.price;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
function addToCartFromModal() {
  addToCart(currentProduct);
  closeModal();
}
function checkout() {
  alert("Proceeding to checkout (not implemented)");
}

