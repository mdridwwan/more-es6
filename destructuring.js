const fish = { id: 58, name: 'king Hilsha', price: 8000, phone: '01849494993', address: 'Chandpur', dress: 'Silver' };
// const phone = fish.phone;
// const price = fish.price;
// const id = fish.id;


// const { phone, id, price, dress, address, name } = fish;
// console.log(price);
// console.log(phone);
// console.log(price, id);
// console.log(price);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ridwan', food: 'fochka' },
    web: { work: 'website development', employer: 22, fremwork: 'react' }
};
const { id, name, food } = company.ceo;
const { work, employer, fremwork } = company.web;
console.log(id, name, food);