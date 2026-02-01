//for of

const arr=[1,20,30,4,5];

for (const num of arr) {
    console.log(num);
}
const greeting="Hello Ayush";

for(const greets of greeting){
    if(greets===" "){
        // continue;
    }
    // console.log(`Each char of ${greets}`);
}

//map:object that holds key value pairs and maintains insertion order   
//unique values for keys
const map=new Map();
map.set("name","Ayush");
map.set("age",29);
map.set("city","Delhi");
map.set("city","mumbai");//overwrites previous value for same key

// console.log(map);

for(const[key,value] of map){
    console.log(key,':',value)
}

const myobject={
    name:"Ayush",
    age:29,
    city:"Delhi"
}   
// for(const [key,value] of Object){//error Object is not iterable
//     console.log(key,':',value)
// }