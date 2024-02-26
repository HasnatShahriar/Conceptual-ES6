const numbers = [23, 54, 66, 56, 45, 76, 52, 52];

// for of loop
// for (const num of numbers) {
//   console.log(num);
// }

numbers.forEach((num) => {
  console.log('forEach:',num);
})

// numbers.forEach(num => console.log(num));   // compact version


//forEach
const a = numbers.forEach(num => num);
console.log(a);  // forEach just array er protekta element k access korte pare..kono kichu return korte pare na...ofr this reason er output undefined.

//map
const b = numbers.map(item => item);
console.log('map:', b);  // map array er prottekta element k acces kore ekta array moddhe store kore return kore   original array er reference dhore rakhe na,tai original array modify hoy na.



//find
const c = numbers.find(item => item === 52);
console.log('find', c);  // first je element ta match khabe seita return korbe...kono kichu match na hoile undefined show korbe.
const c1 = numbers.find(item => item === 512);
console.log('find', c1);  // first je element ta match khabe seita return korbe...kono kichu match na hoile undefined show korbe.

//filter
const d = numbers.filter(item => item%2 === 1);
console.log('filter:', d); // condition er sathe match korle jesob element match korbe taderke niye ekta array create kore return korbe..match na korle [] empty array return korbe.

const d1 = numbers.filter(item => item > 100);
console.log('filter:', d1);


//reduce

//for of using
const array = [1, 2, 3, 4, 5];
let sum = 0;
for (const element of array) {
  sum += element;
}
console.log('sum of for of', sum);

// reduce method using

const total = array.reduce((previousValue,currentValue) => {
  const sum = previousValue + currentValue;
  return sum;
},0 )
console.log('reduce:', total);

const total1 = array.reduce((p,c) => p+c,0); // easiest way 
console.log('reduce:', total1);