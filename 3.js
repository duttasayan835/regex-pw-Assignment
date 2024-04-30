const items = [
  {
    name: "Iphone 15",
    price: 999,
    category: "Mobile",
  },
  {
    name: "Macbook Air",
    price: 1499,
    category: "Laptop",
  },
  {
    name: "Apple Watch",
    price: 499,
    category: "Watch",
  },
];
const exchangeRate = 80;
function toINR(price) {
  return price * exchangeRate;
}

const itemsInINR = items.map((item) => ({
  ...item,
  priceINR: toINR(item.price),
}));
console.log(itemsInINR);
