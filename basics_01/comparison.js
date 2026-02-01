console.log("2">1)
console.log("2">32)//JS converts string to number while comparing
console.log("2"<"32")//JS compares string lexicographically
console.log("ab"<"ac")//JS compares string lexicographically
console.log("ab"<"aba")//JS compares string lexicographically

console.log(null==0)//false
console.log(null>0)//false
console.log(null>=0)//true

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined>=0)//false

// strict check
console.log("2"===2)//no type conversion
console.log("2"!==2)
console.log("2"==2)
console.log("2"!=2)

/* data types
1. primitive data types
a. number
b. string
c. boolean
d. undefined
e. null
f. symbol
g. bigint

2. reference data types
a. objects
b. arrays
c. functions
*/

