//objects

// Objects are collections of key-value pairs
/*we can declare objects in two ways
1.Using object literal syntax
2.Using the Object constructor
*/
//object literal syntax

const mysymb = Symbol("key1")
const jsUser = {
    name: "vishal",
    "full name": "vishal kumar",
    age: 22,
    [mysymb]: "mykey1value",
    location: "india",
    email: "ghgh@gmail.com",
    isLoggedIn: true,
    skills: ["html", "css", "js"],
}
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[mysymb]);
// console.log(jsUser["full name"]);//for keys with spaces we have to use bracket notation
// jsUser.age=23//modifying existing property
// Object.freeze(jsUser)//freezes the object so that no modifications can be made to it
// jsUser.location="usa"//this will not work as the object is frozen

// jsUser.greeting = function () {
//     console.log("hello js user");
// }
// jsUser.greetingTwo = function () {
//     console.log(`hello js user,${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


// // object constructor
// // const TinderUser=new Object()
TinderUser = {}
TinderUser.name = "vishal"
TinderUser.age = 22
TinderUser.isLoggedIn = false
TinderUser.id = 12345
// // console.log(TinderUser);

// // const regularUser = {
// //     email: "hhj@gmail.com",
// //     fullname: {
// //         userfullname:{
// //             firstname: "vishal",
// //             lastname: "kumar"
// //         },
// //         fatherfullname: {
// //             firstname: "rajesh",
// //             lastname: "kumar"
// //         }
// //     }
// // }
// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = { 1:"a", 2:"b" }
// const obj2 = { 3:"c", 4:"d" }
// const obj4 = { 5:"c", 6:"d" }

// // const obj3={obj1,obj2}
// const obj3 = { ...obj1, ...obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4) 
// console.log(obj3);

// const users=[
//     {
//         email:"jhbj@gmail.com",
//         upi:"jhbj@oksbi",
//         password:"jhbhj123"
//     },
//     {
//         email:"vishal@gmail.com",
//         upi:"vishal@oksbi",
//         password:"vishal123"
//     },
//     {
//         email:"yjtdd@gmail.com",
//         upi:"yjtdd@oksbi",
//         password:"yjtdd123"
//     }
// ]
// console.log(users[1].upi);

console.log(Object.getOwnPropertyNames(TinderUser));

console.log("a",Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty("name"));
console.log(TinderUser.hasOwnProperty("location"));

//destructuring objects
const course={
    coursename:"js in hindi",
    price:299,
    courseInstructor:"Ayush",
}
// course.courseInstructor
const {courseInstructor:i,coursename}=course
console.log(coursename);

// console.log(courseInstructor); 
console.log(i);