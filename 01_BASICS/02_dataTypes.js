// 8 Datatypes in JavaScript
// String-->used for text
let userName="Coder";
let favColor="Orange";
console.log(userName,favColor,);
// Number-->Represents integers and floating point numbers 
let age = 19;
let height=157.9;
console.log(age,height);
// Boolean--consist only twow values yes and no
let isNotDrunk = true;
let isDrunk = false;
console.log(isNotDrunk,isDrunk);
// Bigint-->used for very large numbers beyong Number limit
let x= 1234567897456325235398n;
console.log(x);
// Undefined-->a variable is declared but is not assigned any value
let place;
console.log(place);
// Null-->represent absence of value
let y= null;
console.log(y);
//object-->stores multiple values in key–value pairs
const person ={ lastName:"Doe",firstName:"Jhon"};
console.log(person);
//to determine datatype of a variable we use typeof
console.log(typeof userName);
// symbol--> used for uniqueness
let key = Symbol("secret");
console.log(key);