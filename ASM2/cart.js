document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display items in the cart
    displayCartItems();

    function displayCartItems() {
        // Clear existing items in the cart
        cartItemsList.innerHTML = '';

        // Initialize total price and quantity
        let total = 0;
        let quantity = 0;

        // Loop through each item in the cart
        cart.forEach((item, index) => {
            // Create a new list item for the cart
            const cartItem = document.createElement('li');
            const removeButton = document.createElement('button');
            const quantityInput = document.createElement('input');

            removeButton.innerText = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.onclick = function() {
                removeItem(index);
            };

            quantityInput.type = 'number';
            quantityInput.min = 1;
            quantityInput.max = 10; // Set the maximum quantity
            quantityInput.value = item.quantity;
            quantityInput.classList.add('quantity-input');
            quantityInput.onchange = function(event) {
                updateQuantity(index, event.target.value);
            };

            quantity += parseInt(quantityInput.value || 0); // Accumulate the item quantity

            const itemPrice = item.price * quantityInput.value;

            cartItem.innerHTML = `
                <span>${item.name} - $${itemPrice.toFixed(2)}</span>
            `;

            cartItem.appendChild(removeButton);
            cartItem.appendChild(quantityInput);

            // Add the item to the cart list
            cartItemsList.appendChild(cartItem);

            // Update the total price
            total += itemPrice;
        });

        // Display the total price and quantity
        totalSpan.textContent = total.toFixed(2);
        document.getElementById('quantity').textContent = quantity;
    }

    // Function to remove an item from the cart
    function removeItem(index) {
        cart.splice(index, 1);

        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the displayed cart items
        displayCartItems();
        alert("Are you sure!")
    }

    // Function to update the quantity of an item in the cart
    function updateQuantity(index, newQuantity) {
        cart[index].quantity = parseInt(newQuantity);

        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the displayed cart items
        displayCartItems();
    }
});