const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const cart = document.querySelector(".cart");
const cartDisplay = document.querySelector(".empty-cart");
const thumbnailContainer = document.querySelector(".thumbnail-container");
const imageContainer = document.querySelector(".image-container");
const nextEl = document.querySelector(".next");
const previousEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const images = document.querySelectorAll(".product");
const avatar = document.getElementById("avatar");
const filledCart = document.getElementById("filled-cart");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const cartQuantityElement = document.getElementById("cart-quantity");
const cartTotalPriceElement = document.getElementById("cart-total-price");
const zeroElement = document.getElementById("zero");

// Set the initial quantity and price
let cartQuantity = 0;
let cartTotalPrice = 0;

// Function to update the cart quantity, zero, and total price
const updateCart = () => {
  cartQuantityElement.textContent = cartQuantity;
  cartTotalPriceElement.textContent = `$${cartTotalPrice.toFixed(2)}`;
};

const updateZero = () => {
  zeroElement.textContent = cartQuantity;
};

// Click event listener for the plus button
plusButton.addEventListener("click", () => {
  cartQuantity++;
  cartTotalPrice += 125.0; // Assuming each item costs $125.00
  updateCart();
  updateZero();
});

// Click event listener for the minus button
minusButton.addEventListener("click", () => {
  if (cartQuantity > 0) {
    cartQuantity--;
    cartTotalPrice -= 125.0; // Assuming each item costs $125.00
    updateCart();
    updateZero();
  }
});

//Nav Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.add("hidden");
  });
});

//empty cart display
cart.addEventListener("click", () => {
  cart.classList.toggle("active");
  cartDisplay.classList.toggle("hidden");
});

//filled cart
avatar.addEventListener("click", () => {
  filledCart.classList.toggle("hidden");
});

//image gallery
// Get all thumbnail images
const thumbnails = thumbnailContainer.querySelectorAll("img");
// Attach a click event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Get the path of the full-sized image from the data-image attribute
    const imagePath = thumbnail.getAttribute("data-image");

    // Update the main image source and alt attributes
    const mainImage = imageContainer.querySelector("img");
    mainImage.src = imagePath;
    mainImage.alt = thumbnail.alt;
  });
});

//mobile image slider

let currentImageIndex = 1;
const totalImages = 4; // Update this with the total number of images

function showNextImage() {
  const imageElements = document.querySelectorAll(".image-container img");
  imageElements[currentImageIndex - 1].style.display = "none";

  currentImageIndex++;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  }

  imageElements[currentImageIndex - 1].style.display = "block";
}

function showPreviousImage() {
  const imageElements = document.querySelectorAll(".image-container img");
  imageElements[currentImageIndex - 1].style.display = "none";

  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = totalImages;
  }

  imageElements[currentImageIndex - 1].style.display = "block";
}
