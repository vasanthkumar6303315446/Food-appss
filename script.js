let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.item} - $${item.price.toFixed(2)}</li>`;
    });

    document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your order!");
    cart = [];
    total = 0;
    displayCart();
}



