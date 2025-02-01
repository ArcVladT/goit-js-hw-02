function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let allOrder = quantity * pricePerDroid;
  if (allOrder > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${allOrder} credits!`;
  }
}
