function SayMyName(name){
    console.log(`My name is ${name}`);
}
SayMyName("Ayush");

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    // return num1+num2;
}
// const result=addTwoNumbers(5,7);
// console.log("Result:",result);//undefined because function doesnt return anything
// addTwoNumbers(5,7);
// addTwoNumbers(5,"7");
// addTwoNumbers(5,"a");
// addTwoNumbers(5,null);

function logInUserMessage(username){
    if(username===undefined){
        return "Please enter a username"
    }
    return `${username} logged in`
}
console.log(logInUserMessage("Ayush"));//function call

function calculateCartPrice(val1,val2,...num1){//... rest operator to take multiple arguments as array
    return num1;
}
console.log(calculateCartPrice(100,200,300,400));//[300,400] val1=100,val2=200,num1=[300,400]

user={
    username:"ayush",
    age:21,
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}
handleObject(user);
handleObject({username:"vishal",age:22});//passing object directly 

const array=[200,300,49,777]
function secondValueOfArray(getArray){{
    return getArrayarray[1];
}}
console.log(secondValueOfArray(array))