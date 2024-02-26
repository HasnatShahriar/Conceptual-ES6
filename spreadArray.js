const numbers = [12, 3, 45, 67, 34];
const numbers1 = [...numbers];
numbers.push(99);
numbers1.push(88);
console.log('numbers:', numbers);
console.log('numbers1:', numbers1);



// destructuring of array
const nums = [1, 2, 3, 4, 5, 6, 7];
const [a,s,y,...g] = nums;
console.log(a,s,y,g);
