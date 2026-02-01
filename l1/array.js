//array
// Arrays are objects that store multiple values in a single variable of different data types resizable
// const numbers=new Array(1,2,3,4,5)
// const arr=[0,1,2,3,4,5]//shallow copy on modification on original array changes the copied array
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);

const myArr=[0,1,2,3,4,5]
// const myHeroes=['captain america','iron man','thor','black panther']
// const Arr2=new Array(1,2,3,4)
// console.log(Arr2);
// console.log(Arr2[1]);

// array methods

// myArr.push(6)//adds element at end
// myArr.pop()//removes element from end
// myArr.unshift(-1)//adds element at start
// myArr.shift()//removes element from start


// console.log(myArr.includes(3));//true
// console.log(myArr.indexOf(3));//3

// const newmyArr=myArr.join()//converts array to string with separator ','
// //slice,splice
// const slicedArr=myArr.slice(1,4)//creates a new array from start index to end index-1
// const splicedArr=myArr.splice(2,3,10,11)//modifies the original array by removing elements and adding new elements
// console.log(newmyArr);
// console.log(slicedArr);
// console.log(splicedArr);
// console.log(myArr);

const marvels=['spiderman','hulk','doctor strange','black widow']
const dc=['batman','superman','wonder woman']
const combined=marvels.concat(dc)//combines two arrays without modifying original arrays in new array
console.log(combined);
marvels.push(...dc)//spread operator to push elements of dc into marvels
console.log(marvels);
console.log(marvels[5]);
const all_heroes=[...marvels,...dc]//spread operator to combine arrays
console.log(all_heroes);

const nums=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flat_nums=nums.flat(2)//flattens the array upto specified depth(2 array inside given array)
console.log(flat_nums);

console.log(Array.isArray("vvhvhvbh"));
console.log(Array.from("vvhvhvbh"));
console.log(Array.isArray([1,2,3]));
console.log(Array.from({name:"vishal",age:22}));//does not work as expected because from works on iterable or array-like objects we have to specify the keys
console.log(Array.from({0:"vishal",1:"kumar",length:2}));//works as expected

let score1=100
let score2=200
let score3=300

const scoresArray=Array.of(score1,score2,score3)//creates an array from the given arguments
console.log(scoresArray);