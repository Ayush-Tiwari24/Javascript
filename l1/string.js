const name="John Doe"
const repoCount=50

console.log("Hello my name is "+name+" and my repocount is "+repoCount);//old way
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interpolation

// why string interpolation?
// 1. easy to read and write
// 2. easy to use multiple variables and expressions
// 3. easy to create multi line strings
 
const gameName = new String("Jsk2jdw")

console.log(gameName[0])
console.log(gameName.__proto__)//object containing methods for string
console.log(gameName.length);
console.log(gameName.toUpperCase());//dont change original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));
const newString=gameName.substring(0,4)//4 not included 
console.log(newString);//negative index not allowed in substring if there is negative index it is considered as 0
const anotherString=gameName.slice(-6,4)//4 not included
console.log(anotherString);
const newStringOne="   sjlj  h  "
console.log(newStringOne.length);
console.log(newStringOne);

console.log(newStringOne.trim())//removes spaces from start and end
console.log(newStringOne.trim().length);

// start trim and end trim
console.log(newStringOne.trimStart());
console.log(newStringOne.trimStart().length);
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimEnd().length);


const url="https://ksdjjd.com/kjd%20kjd"
console.log(url.replace('%20','-'));//replaces first occurrence
console.log(url.includes("sjkmsmd"));//false

const names="hj-kjs-k-ksmk"
console.log(names.split('-'));//array of strings

// all string methods
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('k'));
console.log(gameName.lastIndexOf('k'));
console.log(gameName.charAt(3));
console.log(gameName.endsWith('w'));
console.log(gameName.startsWith('J'));
console.log(gameName.slice(2,5));
console.log(gameName.substring(2,5));
console.log(gameName.replace('Jsk','Game'));
console.log(gameName.replaceAll('k','X'));
console.log("  jskd  ".trim());
console.log("  jskd  ".trimStart());
console.log("  jskd  ".trimEnd());
console.log("j-s-k-d".split('-'));
console.log("jskd".concat(" Game"));
console.log("jskd".repeat(3));
console.log("jskd".length);
console.log(Array.from("jskd"));//['j','s','k','d']
console.log(gameName.valueOf());//primitive value of string object

// escape sequences
const escapeString="Hello \n World \t !"
console.log(escapeString);

console.log("Hello \\ World");//Hello \ World
console.log("Hello \' World");// what is the use of / here
console.log("Hello \" World");