var cartButton = document.getElementById("cart-button");
var sidebar = document.getElementById("sidebar");
var closeButton = document.getElementById("close-button");
var cartItems = document.getElementById("cart-items");
var totalPrice = document.getElementById("total-price");
cartButton.addEventListener("click", function() {
  sidebar.classList.toggle("show");
});
closeButton.addEventListener("click", function() {
  sidebar.classList.remove("show");
});
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var price = button.dataset.price;
    var name = button.dataset.name;
    var listItem = document.createElement('li');
    listItem.textContent = name + " - " + price + " FCFA";
    cartItems.appendChild(listItem);
    var currentTotal = parseInt(totalPrice.textContent.split(':')[1]);
    var newTotal = currentTotal + parseInt(price);
    totalPrice.textContent = "Total: " + newTotal.toFixed(0) + " FCFA";
  });
});

