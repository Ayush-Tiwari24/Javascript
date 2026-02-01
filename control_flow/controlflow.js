//logic flow

// isLoggedIn= true;
// temperature= -45;
// if (isLoggedIn) {
//     console.log("User is logged in.");
// } else {
//     console.log("User is not logged in.");
// }
// ///////////////////////////////////////////////////////////
// if (temperature < 0) {
//     console.log("It's freezing outside",temperature);
// } else if (temperature >= 0 && temperature <= 30) {
//     console.log("The weather is moderate.");
// } else {
//     console.log("It's hot outside.");
// }
///////////////////////////////////////////////////////////

// const balance=1000;

// if(balance>500) console.log("You are eligible for a credit card."),
// console.log("Thank you for being a valued customer.");//not recoomended way

//multiple conditions

const userloggedIn=true;
const debitCard=true;
const loggedinfromGoogle=false;
const loggedInFromEmail=true;
if(userloggedIn && debitCard){
    console.log("Allow to buy course");
}
if(userloggedIn && (loggedinfromGoogle || loggedInFromEmail)){
    console.log("Allow to buy course");
}
