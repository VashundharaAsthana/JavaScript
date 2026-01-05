const num=1456//value cant be changed if const is used
let accEmail="kriti2@gmail.com"
var accountPass="12345"
accountcity = "Jaipur"
console.log(num);
accEmail="hc@gmail.com"
accountPass="24424"
accountcity="raipur"
console.table([num,accEmail,accountPass,accountcity]);//can be used to print multiple things at the same time in a single line
//prefer not to use var because of issue in block scope and functional scope