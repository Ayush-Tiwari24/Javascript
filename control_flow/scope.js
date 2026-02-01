// let a=10
// const b=20
// // var c=99

// if(true){
//     let a=100//block scope
//     const b=2//block scope
//     // var c=99//function scope
//     // d=88//global scope
// }
// console.log(a);
// console.log(b);
//// console.log(c);

// function one(){
//     const userName="Ayush"
//     function two(){
//         const website="codingverse"
//         console.log(userName);
        
//     }
//     // console.log(website); //error website is defined in inner function
//     two()
// }
// one();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~interesting part about scope~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log(addone(5))// works because of hoisting
// function addone(value){
//     return value+1
// }

// //expression function
// addTwo(5)//error becoz cannot access before initialization
// const addTwo=function(value){
//     return value+2
// }
// //// addTwo(5)//here it works

////this function refers to current context(values of this changes based on how function is called)
// const user={
//     username:"Ayush",
//     age:29,
//     welcome:function(){
//         console.log(`${this.username}, Welcome to website`);
//         // console.log(this);//refers to current object(user)
//     }
// }
// user.welcome();
// user.username="Bablu"//
// user.welcome();//context changes based on object property value
// console.log(this);//in global context this refers to global object(window in browser,{} in nodejs)


// function random(){
//     const username="ayush"
//     // console.log(this);//refers to outer context
//     console.log(this.username);//undefined as this refers to global object which has no username property

// }

// random();



// const user  =function(){
//     let username="Ayush"
//     console.log(this.username)//refers to outer context
// }

//arrow function
const user  =()=>{
    let username="Ayush"
    console.log(this.username)//refers to outer context
}
// user()

// const addtwo=(num1,num2)=>{
//     return num1+num2 //explicit return 
// }
// const addtwo=(num1,num2)=>num1+num2 //implicit return
// const addtwo=(num1,num2)=>(num1+num2) //implicit return with parentheses
const addtwo=(num1,num2)=>({sum:num1+num2}) //returning object implicitly
// console.log(addtwo(5,10));

//immediate invoked function expression(IIFE) 
//sometimes we want to avoid pollution by global scope variables and functions

(function bbb(){
    //named IIFE
    console.log("IIFE executed");
})();//we use ; to end previous statement 

((name)=>{
    console.log(`IIFE executed with name: ${name}`);
})("Ayush");



