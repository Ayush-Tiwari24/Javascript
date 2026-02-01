const userEmail="ranjan@123"//if string is empty then it is considered falsy

if(userEmail){
    console.log("got user email");
}else{
    console.log("email not found");
}

// falsy values: 
// false,0,-0,"",null,undefined,Nan,BigInt(0n)

//truthy values:
// true,non zero numbers,non empty strings,objects,arrays,Infinity,-Infinity,BigInt(non zero) ,function(){}

if(userEmail.length>0){
    console.log("string is not empty");
}

const myobject={}
if(Object.keys(myobject).length===0){
    console.log("object is empty");
}

//false==0 true
//false===0 false
//''==false true
//0==' ' true

//nullish coalescing operator(??):null or undefined

let val1;
// val1=5 ??10
// val1= null ??10
// val1= undefined ??10
val1=null ?? 10 ??15

console.log(val1);//5

//terniary operator
// condition ? expr1 : expr2

const age=18;
const canVote= age>=18 ? "can vote" : "cannot vote"
console.log(canVote);