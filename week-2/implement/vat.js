// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on

function calculateVAT(price) {
  // Calculate the price with 20% VAT
  const priceWithVAT = price * 1.2;

  // Return rounded to 2 decimal places
  return Math.round(priceWithVAT * 100) / 100;
}

// Calling
console.log(`The price with VAT for £50 is £${calculateVAT(50)}`);
console.log(`The price with VAT for £75 is £${calculateVAT(75)}`);