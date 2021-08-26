// declare varible based on the name  of an object property
const myObject = { x: 2, y: 4, z: 3, a: 6, b: 9, };
const { x, y } = myObject;
console.log(y)

// destructuring array
const [p, q] = [12, 34];
console.log(p, q);

// //object destructuring
// const { name, id, age } = { name: 'Ridwan', id: 23, age: 20, phone: '01648035776' };
// console.log(name, id);



const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ridwan', food: 'fochka' },
    web: {
        work: 'website development',
        employer: 22,
        fremwork: 'react',
        tech: { first: 'HTML', second: 'CSS', third: 'js' }
    }
};
// const { id, name, food } = company.ceo;
// const { work, employer, fremwork } = company.web;
// console.log(id, name, food);
// console.log(work, employer, fremwork);
console.log(company.web.tech.third);
// console.log(company.backend.tech.third);