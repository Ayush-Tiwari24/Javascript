// dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2003,0,3)//month is 0 index based
// // let myCreatedDate=new Date(2003,0,3,12,30,45)//month is 0 index based
// console.log(myCreatedDate);
// // let myCreatedDate=new Date("2025-11-2")
// // let myCreatedDate=new Date("2-11-2025")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime())
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

// console.log(`${newDate.getDay()}is day  and ${newDate.getTime()} is the time`);


console.log(newDate.toLocaleString("en-IN",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
}))
console.log(newDate.toString())
