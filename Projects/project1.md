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
### JS
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

### js
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
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" style="cursor:pointer;border:solid red 2px ">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

### CSS
```CSS

html {
  font-family: sans-serif;
}

body {
  /* width: 300px;
  max-width: 750px;
  min-width: 480px; */
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: rgb(173, 59, 59);
  padding: 3px;
  border-radius: 10px;
  border: solid rgba(255, 0, 0, 0.356) 2px;
}

button {
  background-color: #9c181894;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #a82f2fbb;
  color: #d0da9d;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;

  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #9c889b8b;
}

#wrapper {
  /* box-sizing: border-box; */
  width: auto;
  text-align: center;
  /* width: 450px; */
  height: 550px;
  background-color: #f3b69ad0;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}

#guess {
  font-family: 'Bitcount Grid Double Ink', system-ui;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  /* font-style: normal; */
  font-variation-settings: 'slnt' 0, 'CRSV' 0.5, 'ELSH' 0, 'ELXP' 0, 'SZP1' 0,
    'SZP2' 0, 'XPN1' 0, 'XPN2' 0, 'YPN1' 0, 'YPN2' 0;
}
```
### HTML`
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double+Ink:wght@100..900&display=swap" rel="stylesheet">

</head>
<body style="background-color:#212121; color:#fff;display:flex;flex-direction:column;justify-content:center">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper" style="display:flex;flex-direction:column;">
      <h1 style="color:pink;border:solid 2px red;width:auto">Number guessing game</h1>
    <p style="color:#1219">ƚɾყ αɳԃ ɠυҽʂʂ α ɾαɳԃσɱ ɳυɱႦҽɾ Ⴆҽƚɯҽҽɳ ౹ αɳԃ ౹੦੦.</p>
    <p style="color:#1219">ყσυ ԋαʋҽ ౹੦ αƚƚҽɱρƚʂ ƚσ ɠυҽʂʂ ƚԋҽ ɾιɠԋƚ ɳυɱႦҽɾ.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField"><br>
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```