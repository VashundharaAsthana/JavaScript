// Operators in javaScript
// ARITHMETIC Op- Unary operators
let num1=5;
let num2=2;
// increment
console.log(num1++);//postIncrement-->use then increment
console.log(++num1);//preIncreemnt-->increment then use
//decrement
console.log(num2--);//postDecrement-->use then decrement
console.log(--num2);//preDecrement-->decrement then use
//Binary Operators
let num3=4;
let num4=8;
console.log(num3+num4);//addition
console.log(num4-num3);//subtraction
console.log(num3*num4);//multiplication
console.log(num4/num3);//division
console.log(num4% 3);//modulo
console.log(num4**num3);//power
// COMPARISON operator
//>,<,>=,<=,==,!= are used to compare values,return a boolean value as output
console.log(num1>=num2);
console.log(num3<=num4);
console.log(num4==8);
console.log(num4!=8);
/* STRICT(===) AND LOOSE EQUALITY(==)-->when we use STRICT EQUALITY both datatype and value is checked to determine equality 
whereas, when we use LOOSE EQUALITY only the value is checked datatype doesn't matter*/
console.log(2 =="2");
console.log(2 ==="2");
//LOGICAL OPERATOR-->used when we need to connect two or more eexpressions to make a decision
let key1 =true;
let key2= false;
let key3= true;
console.log(key1&&key2&&key3);//AND operator - true when all conditions are true and false when alteast one condition is false
console.log(key1||key3);//OR opeerator - true when atleast one of the condition is true
console.log(!key1);//NOT operator - makes truthy value falsy and falsy value truthy
// BITWISE Op-->used to do manipulation of bits withinh the binary representation of the numbers
