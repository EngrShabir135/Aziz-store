let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} added to cart!`);
    updateCart();
}

function updateCart() {
    let cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    let products = [
        { name: "Smart Watch", price: 49.99, image: "images/watch.jpg" },
        { name: "Wireless Earbuds", price: 29.99, image: "images/air buds.jpg" },
        { name: "Gaming Mouse", price: 19.99, image: "images/muse.jpg" },
        { name: "Bluetooth Speaker", price: 34.99, image: "images/blu speaker.jpg" },
        { name: "Power Bank", price: 25.99, image: "images/bank.jpg" },
        { name: "Laptop Stand", price: 22.99, image: "images/laptop stand.jpg" },
        { name: "USB LED Light", price: 9.99, image: "images/usb light.jpg" },
        { name: "Wireless Keyboard", price: 39.99, image: "images/wireless keb.jpg" },
        { name: "Phone Tripod", price: 15.99, image: "images/phonr traped.jpg" },
        { name: "Portable Fan", price: 12.99, image: "images/fan.jpg" }
    ];

    let productList = document.getElementById("product-list");
    productList.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        </div>
    `).join("");
});
