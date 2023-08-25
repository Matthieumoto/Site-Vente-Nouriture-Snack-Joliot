// Fonction pour ajouter un article au panier
function addToCart(name, price, imageSrc) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name, price, imageSrc });
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Au clic sur le bouton "Ajouter au panier"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = button.getAttribute('data-price');
        const itemImageSrc = button.parentNode.querySelector('.image').getAttribute('src');
        addToCart(itemName, itemPrice, itemImageSrc);
    });
});

// Fonction pour afficher les articles du panier dans la page panier.html
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Au chargement de la page panier.html, afficher les articles du panier
window.addEventListener('load', () => {
    displayCartItems();
});

// Au chargement de n'importe quelle page, mettre à jour le contenu du panier dans le menu
window.addEventListener('load', () => {
    const cartItemsCount = (JSON.parse(localStorage.getItem('cart')) || []).length;
    const cartMenu = document.getElementById('cart-menu');
    cartMenu.textContent = `Panier (${cartItemsCount})`;
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.imageSrc;
        itemImage.alt = item.name;
        itemImage.classList.add('cart-item-image');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        itemName.classList.add('cart-item-name');

        cartItemElement.appendChild(itemImage);
        cartItemElement.appendChild(itemName);

        cartItemsContainer.appendChild(cartItemElement);
    });
}