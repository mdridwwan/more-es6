// let and const
let hubby = 'ommoor sani';
hubby = 'ridwan';
const name = 'ridwan';

//4. arrow function
const arrow = (x, y) => x + y;
const result = arrow(12, 34, );
console.log(result);

// 3 back tit template string
const myNote = `I am moj fs ${name} jelo`;
console.log(myNote);

//2 default parameter / 5. spread or three dot
function maxNumber(array = [12, 34, 45, 56, 768, 89]) {
    const max = Math.max(...array);
    return max;
}
const maxResult = maxNumber();
console.log(maxResult);