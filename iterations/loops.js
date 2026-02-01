// //for loop

// for (let i = 0; i < 10; i++) {
//     // const element = i;
//     // console.log(i);
// }

// for (let i = 1; i <= 59; i++) {
//     // console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`outer loop ${i} inner loop ${j}`);
//         // console.log(i,'*',j,'=',i*j);
//         // console.log(`${i} * ${j} = ${i * j}`);   
//     }
// }

// const myArray=[10,20,30,40,50];
// for(let i=0;i<myArray.length;i++){
//     // console.log(myArray[i]);
// }

// // continue and break

// for(let i=1;i<=10;i++){
    
//     if(i===5){
//         break;//exits the loop}
//     }
//     // console.log(i); 
// }
// for(let i=1;i<=10;i++){
    
//     if(i===5){
//         continue;//skips the current iteration and continues with next iteration
//     }
//     console.log(i);
// }

// while loop
let i=0;
while(i<=10){
    // console.log(i);
    i=i+1;
}

let score=0;
do{
    console.log(`score is ${score}`)
    score++;
} while(score<=10)