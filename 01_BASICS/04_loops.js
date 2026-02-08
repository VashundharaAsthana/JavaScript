//loops are iterative statements, used to execute a block of code repeatedly

//FOR LOOP-->for(initialization;condition;increment / decrement)
for(let i=0;i<=10;i++){
    console.log(i);
}
//nested for loop
for(let i=0;i<4;i++){
    console.log("Outer Loop");
    for( let j=1;j<5;j++){
        console.log(" Inner loop")
    }
}
//break and continue
//BREAK-- terminates the exceution of loop after a given condition
for(let k=0;k<10;k++){
    if(k==5){
        console.log("FIVE FOUND")
        break;
    }
    console.log("this is"+ k+"iteration");
}
//CONTINUE--skips the code execution for a given condition and continues with the next iteration
for(let j=0;j<10;j++){
    if(j==5){
        console.log("FIVE FOUND")
        continue;
    }
    console.log("this is "+j+" iteration");
}
// while loop--while(condition){//code to execute}
let a=0;
while(a<3){
    console.log("this is an example of while loop");
    a++;
}
//do-while-do{//code to execute}while(condition)
let b=0;
do{
    console.log("This is an example of do-while loop ");
    b++;
}while(b<5);