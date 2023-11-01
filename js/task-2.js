function getShippingMessage(country, price, deliveryFee) {
  const countryTest = country.toString().length >= 2;
  const priceTest = typeof price === 'number' && price > 0;
  const deliveryFeeTest = typeof deliveryFee === 'number' && deliveryFee > 0;
  let totalPrice;
  let result;

  if (countryTest && priceTest && deliveryFeeTest) {
      totalPrice = price * deliveryFee;

      result = `Shipping to ${country} will cost ${totalPrice} credits!`;
    
    } else {
      result = 'incorrect data';
    }

  return result;
}


console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));