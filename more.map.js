const friends = ['Tom hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(f => f.length);
console.log(fLengths);


const product = [
    { name: 'water Bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 15550, color: 'black' },
    { name: 'Smart Watch', price: 3350, color: 'black' },
    { name: 'Sticky note', price: 50, color: 'pinik' },
    { name: 'Laptop', price: 500000, color: 'red' },
    { name: 'c=Cylce', price: 5000, color: 'black' },
];
// map loop chailai tarpor function k return kory dey
const productDetails = product.map(p => p.price);
const productsName = product.map(p => p.name);
// product.map(product => console.log(product));

// forEach kono kicu return kory nh..
product.forEach(product => console.log(product));

console.log(productsName);
console.log(productDetails);