const person ={
  name: 'Mufti Arif Bin Habib',
  age: 36,
  phone: '345345445',
  address: {
    village: 'Jana nai',
    district: 'Cumilla'
  }
}

const person1 = {...person};
person1.email = 'abc@gmail.com'
console.log(person1);
console.log(person);


// destructuring of object
// const {age,phone,name,address} = person;
// console.log(phone);
// console.log(age);
// console.log(address);
// const {district: zilla} = address; // rename
// console.log(zilla);

// destructuring (with spread)
// const {phone,name,...rest} = person;
// console.log(rest);



// deeply destructuring 
const {address:{district: zilla}} = person;
console.log(zilla);