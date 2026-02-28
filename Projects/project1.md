# projects related to DOM

## project link
[click here](https://stackblitz.com/~/github.com/Ayush-Tiwari24/Javascript)

# Solution code 

## project 1(theme changer)

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

## project 4(guess the number)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.getElementById('guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //checks wheather the number is within boundaries or not
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than or equal to zero');
  } else if (guess > 100) {
    alert('PLease enter a number less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      dispalyGuess(guess);
      displayMessage(`Game over 🪦.Random number was ${randomNumber}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks the number wheather it is equal,hi or low
  if (randomNumber === guess) {
    displayMessage(`You guessed it right 😊 in ${prevGuess.length} guesses`);
    endGame();
  } else if (randomNumber > guess) {
    displayMessage('Number is TOO low 📉');
  } else if (randomNumber < guess) {
    displayMessage('Number is TOO high📈');
  }
}

function dispalyGuess(guess) {
  //updates the values like previous guess and guess remaining
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //it shares the message that no is hi or low or guessed
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame" style="cursor:pointer;border:solid red 2px ">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame() {
  newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
  });
}

```