// OBJECTS IN JS-collection of key value pairs
let obj ={
 name :"Coder",
 age: 20,
 height:"5'1",
 weight:44,
 greet:function(){
 console.log("this is a function inside object a non primitive datatype");
 }
};
console.log(obj);
obj.greet();
console.log(typeof(obj));
let obj2 = obj;//shallow copy
console.log(obj2);
//deep copy

//Arrays-collection of items
let arr=[1,2,"hii",3,9.4];
//using array constructor
let array2= new Array("lets code",3,2,5,5.6,7);
console.log(arr);
console.log(array2);
console.log(arr[3]);
//methods for array in js
