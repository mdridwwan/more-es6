const numbers = [5, 23, 12, 45, 46, 23, 45, 12, 76, 12, 1];
const bigNumber = numbers.filter(big => big > 20);
const minNumber = numbers.filter(min => min < 20);
// console.log(bigNumber);
// console.log(minNumber);

const product = [
    { name: 'water Bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 15550, color: 'black' },
    { name: 'Smart Watch', price: 3350, color: 'black' },
    { name: 'Sticky note', price: 50, color: 'pinik' },
    { name: 'Laptop', price: 500000, color: 'red' },
    { name: 'Cylce', price: 5000, color: 'black' },
];

const minPrice = product.filter(product => product.price > 10000);
const blacks = product.filter(product => product.color == 'black');
const whiteItem = product.find(product => product.color == "blue");
/* console.log(minPrice);
console.log(blacks); */
console.log(whiteItem);