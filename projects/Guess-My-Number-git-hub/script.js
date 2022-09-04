'use strict';
//Defineing the secret number and assign that secret number to the div where our secret number should stay

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//for hiding our secret number
document.querySelector('.number').textContent='?'
let highscore=0;

//if we assign document.querySelector('.number').textContent = secretNumber; then user can easily see our secretnumber and he can easily win for avoiding that we are putting textcontent='?


//Defineing the score variable so that when our guess is wrong we can decrease the score by 1.

let score = 20;

const display=(message)=>{
  document.querySelector('.message').textContent = message;

}

//This is the event listner to handle check button

document.querySelector('.check').addEventListener('click', function () {
  //This is our guess input and it is converted to number for comapring with secret number

  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number';
    display('⛔No Number');
  } else if (guess === secretNumber) {
    display('🥇correct number')
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    //when the guess is correct then the secret number will appear on that div
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess!==secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =guess>secretNumber?'📈Too High':'📉Too low';
      display(guess>secretNumber?'📈Too High':'📉Too low');
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    } else {
      // document.querySelector('.message').textContent = '👎You loose the game';
      display('👎You loose the game')
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📉Too low';
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     document.querySelector('.number').style.width = '15rem';
  //   } else {
  //     document.querySelector('.message').textContent = '👎You loose the game';
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     document.querySelector('.number').style.width = '15rem';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('deba');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  display('Start guessing...')
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent='?'
});
