let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
showSlides(slideIndex);



function updateCurrentDate() {
    var currentDate = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString(undefined, options);

    document.getElementById("current-date").textContent = formattedDate;
}

// Update the current date immediately
updateCurrentDate();



// Function to add items to the cart
function addToCartAndNavigate(productName, price) {
    const item = { name: productName, price: price, quantity: 1 }; // Set the initial quantity to 1
    alert("Add successful!");

    // Retrieve existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    existingCart.push(item);

    // Save the updated cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Update the cart icon
    updateCartIcon();

    // Navigate to the cart page or perform any other action
    navigateToCartPage();
}

// Function to update the cart icon
function updateCartIcon() {
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        cartIcon.innerHTML = `<span class="material-symbols-outlined">shopping_cart</span> (${existingCart.length})`;
    }
}