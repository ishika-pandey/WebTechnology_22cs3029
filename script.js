// script.js

// Function to apply discount to the cart total
function applyDiscount(cartTotal) {
    // Assuming 20% discount
    const discountPercentage = 20;
    const discountAmount = (cartTotal * discountPercentage) / 100;
    return cartTotal - discountAmount;
}

// Function to check if gift should be added to the cart
function addGiftToCart(cartTotal) {
    const giftThreshold = 200; // Minimum amount for gift eligibility
    const giftItem = "Decorative Pillow"; // Name of the gift item
    
    if (cartTotal >= giftThreshold) {
        // Add gift to cart
        console.log(`Congratulations! You've qualified for a free ${giftItem}!`);
    } else {
        console.log("Keep shopping to qualify for the free gift!");
    }
}

// Example usage
const cartTotal = 250; // Assuming the cart total is $250
const discountedTotal = applyDiscount(cartTotal);
console.log(`Cart total after discount: $${discountedTotal}`);

addGiftToCart(cartTotal); // Check if gift should be added
