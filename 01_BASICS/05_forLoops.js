//TYPES OF FOR LOOPS
// for of -> values , for in -> keys
// for of-for(let item of iterable)--use when you care about values only and not index
const arr =[1,2,3,4,5,6];
for (const i of arr) { 
    console.log(i);
}
const elements=["hii","this","is","forof","loop"];
for (const k of elements) {
    console.log(k);
} 

// for in-for(let key in object)--use while looping through reach  oject properties(keys) as object dont have indexes likw arrays they have keys.
let student ={
    name:"Rahul",
    age:20,
    city:"Lucknow"
};
for(let key in student){
    console.log(key);
}
//Maps-holds key value pairs, remembers insertion ordmr,no duplicate values
const map = new Map();
map.set('IN',"INDIA");
map.set('JP',"JAPAN");
map.set('AUS',"AUSTRALIA");
console.log(map)


//forEach method()--array.forEach(function(item){//code}); ,- not a look keyword but used like one, a method of array, runs a funtion for every elemnt inside the array
let numbers =[1,2,3];
numbers.forEach(function(num){
    console.log(num+1);
});
