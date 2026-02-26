# projects related to DOM

## project link
[click here](https://stackblitz.com/~/github.com/Ayush-Tiwari24/Javascript)

# Solution code 

## project 1()

```javascript
console.log("Ayush")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//using if else if
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });

  //using switch
  const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case 'grey':body.style.backgroundColor = e.target.id;
      case 'white':body.style.backgroundColor = e.target.id;
      case 'blue':body.style.backgroundColor = e.target.id;
      case 'yellow':body.style.backgroundColor = e.target.id;
    }
  });
});
});

```
## project 2(BMI Calculator)
```javascript

const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

 const height= parseInt(document.querySelector('#height').value);
 const weight= parseInt(document.querySelector('#weight').value);
 const results= (document.querySelector('#results'));
 const catagory= (document.querySelector('#catagory'));

 if(height==''||height<0||isNaN(height)){
   results.innerHTML=`please enter valid height ${height}`
 }
 if(weight==''||weight<0||isNaN(weight)){
  results.innerHTML=`please enter valid weight ${weight}`
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2)
  results.innerHTML=`<span>${bmi}</span>`;
   if(bmi<18.6){
    catagory.innerHTML="underweight";
  }
  else if(bmi>=18.6 && bmi<=24.9){
    catagory.innerHTML="normal range";
  }else if(bmi>24.9){
    catagory.innerHTML="overweight"
  } 
  
}
});
```

## project 3(Digital Clock)

```javascript
document.getElementById('clock')
// document.querySelector



setInterval(function(){let date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000);
```