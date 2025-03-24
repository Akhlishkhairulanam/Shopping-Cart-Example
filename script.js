let cartTotal = 0;

function addToCart(productName, price) {

    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.textContent = `${productName} - $${price}`;

    const cartDetails = document.createElement('div');
    cartDetails.className = 'cart-details';
    cartDetails.textContent = `Details for ${productName}.`;

    cartItem.appendChild(cartDetails);

    cartTotal += price;

    document.getElementById('total').textContent = `Total: $${cartTotal.toFixed(2)}`;

    document.getElementById('cart').appendChild(cartItem);
}

function checkout() {
    alert(`Thank you for your purchase! Total amount: $${cartTotal.toFixed(2)}`);
    
    cartTotal = 0;
    document.getElementById('cart').innerHTML = '';
    document.getElementById('total').textContent = `Total: $0.00`;
}
