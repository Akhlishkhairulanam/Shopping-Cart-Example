let cartTotal = 0;

        function addToCart(productName, price) {
            // Create a new list item for the cart
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.textContent = `${productName} - $${price}`;

            // Create a details section for the cart item
            const cartDetails = document.createElement('div');
            cartDetails.className = 'cart-details';
            cartDetails.textContent = `Details for ${productName}.`;

            // Append the details section to the cart item
            cartItem.appendChild(cartDetails);

            // Update total
            cartTotal += price;

            // Update total display
            document.getElementById('total').textContent = `Total: $${cartTotal.toFixed(2)}`;

            // Append the item to the cart
            document.getElementById('cart').appendChild(cartItem);
        }

        function checkout() {
            alert(`Thank you for your purchase! Total amount: $${cartTotal.toFixed(2)}`);
            // You can add further processing here, like sending the order to a server or updating inventory.
            
            // Reset cart and total
            cartTotal = 0;
            document.getElementById('cart').innerHTML = '';
            document.getElementById('total').textContent = `Total: $0.00`;
        }
