const myObject={
    js:'JavaScript',
    py:'Python',
    rb:'Ruby',
    java:'Java',
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//arrays
const programmingLanguages=['JavaScript','Python','Ruby','Java'];
for(const index in programmingLanguages){
    // console.log(index,':',programmingLanguages[index]);
}
const map=new Map();
map.set("name","Ayush");
map.set("age",29);
map.set("city","Delhi");
map.set("city","mumbai");

for(const key in map){
    // console.log(`${key} : ${map[key]}`);//undefined as map is not an object
}