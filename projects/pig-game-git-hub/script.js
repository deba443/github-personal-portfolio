"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");



const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

let scores,currentScore,activePlayer,playing;
const reset = () => {
  // console.log("Hello=world");
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
////starting conditions
reset();

btnRoll.addEventListener("click", function () {
  //getting random roll dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //displaying the roll dice
    diceEl.classList.remove("hidden");
    diceEl.src = `assests/dice-${dice}.png`;
    //if dice is not equal to 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =currentScore;
    }
    //else dice is equal to 1
    else {
      switchPlayer();
    }
  }
});
//User holds score

btnHold.addEventListener("click", function () {
  //Add current scire to total score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] < 20) {
      switchPlayer();
    } else {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
  }
});
btnNew.addEventListener("click", reset);
