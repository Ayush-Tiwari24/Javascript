const coding = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);//only reference is passed not the function call

// coding.forEach( (item, index,arr) => {
//     console.log(item,index,arr);}
// );

const mycoding = [
    {
    languageName: 'JavaScript',
    languageFileName: 'js',
    },
    {
    languageName: 'Python',
    languageFileName: 'py',
    },
    {
    languageName: 'Java',
    languageFileName: 'java',
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})