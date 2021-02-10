const nav = document.querySelector(".navbar-jubeliness");
const cartBadge = nav.querySelector(".hover-cart-dropdown");
const cartDropdown = nav.querySelector(".dropdown-cart");

cartBadge.addEventListener("mouseenter", function () {
  cartDropdown.classList.add("hover");
});

cartDropdown.addEventListener("mouseleave", function () {
  cartDropdown.classList.remove("hover");
});
