function namePrint(){
    console.log("Heyy Coder !!");
}

namePrint();
  

function sumOfTwoNum(a , b){  //function defination - functionNAme(parameters)
    let total = a+b;
    console.log(total);
}
sumOfTwoNum(9,10); //function call - functionName(arguments)

//another way to define a funcion 
function subtractOfNum(j,k){
    let result = j-k;
    return result;
    console.log("codeUnreachable") //Any block of code written after return statement doesnt execute
}
// console.log(subtractOfNum( 8,5));
// we can also  call a function by storing it in a variable
 const result = subtractOfNum(8,5);
 console.log("Result:" , result);
 

 //another example
 function loginUserMsg(userName){
     if(userName===undefined){
    console.log("Please enter userName");
    return
 } 
    return `${userName} logged in`
 }
//   console.log(loginUserMsg("Coder"));
  console.log(loginUserMsg());

//Functions with object and arrays
function calculateCartPrice(...num1){
     return num1
}
console.log(calculateCartPrice(200,200,400,500,302))
//rest and spread operator - ...

const user ={
    username: "Coder",
    price:199, 
}
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObj(user);
//the above code can also be written as below , where an object is temporarily created for a function wihtout a varibale name 
function handleObj(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
  handleObj({
    username:"sam",
    price: 2457
})

//for arrays
const newArray =[ 1,23,45,67,24,1343,690,34];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));