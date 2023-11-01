function makeTransaction(quantity, pricePerDroid) {
  const quantityTest = typeof quantity === 'number' && quantity > 0;
  const pricePerDroidTest = typeof pricePerDroid === 'number' && pricePerDroid > 0;
  let totalPrice;
  let result;

  if (quantityTest && pricePerDroidTest) {
    totalPrice = quantity * pricePerDroid;

    result = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    
  } else {
    result = 'incorrect data';
  }

  return result;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));