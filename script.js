document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = [];
  
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
  
        cartItems.push({ name: productName, price: productPrice });
        updateCartDisplay();
    });
});
  
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
  
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `${item.name} - ${item.price}€`;
        cartContainer.appendChild(cartItemDiv);
    });
    }
});
  