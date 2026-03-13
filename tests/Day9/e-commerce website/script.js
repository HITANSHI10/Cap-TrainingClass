let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(imgSrc) {
  cart.push(imgSrc);
  updateCart();
}

function removeFromCart() {
  cart.pop();
  updateCart();
}

function updateCart() {
  localStorage.setItem("cartItems", JSON.stringify(cart));

  let countEl = document.getElementById("cartCount");
  if (countEl) countEl.innerText = cart.length;

  let cartDiv = document.getElementById("cartItems");
  if (cartDiv) {
    cartDiv.innerHTML = "";
    cart.forEach(src => {
      let div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `<img src="${src}">`;
      cartDiv.appendChild(div);
    });
  }
}

updateCart();