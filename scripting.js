'use strict';

//class ( player--0 for player |  player--1 for player 2 )
//Id (score--0 for player 1 | score--1 for player 2 )
//Id (current--0 for player 1 | current--1 for player 2)
//class (btn-new for new game | btn-roll for rolling dice | btn-hold for holding score)
//class dice for image of dice as per the random number generated
//class player--active for current playing player

let playerScore0 = document.getElementById('score--0');
let playerScore1 = document.getElementById('score--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let diceRoll = document.querySelector('.dice');
let diceBtn = document.querySelector('.btn--roll');
let newBtn = document.querySelector('.btn--new');
let holdBtn = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, playing;

let startAgain = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playerScore0.textContent = 0;
  playerScore1.textContent = 0;
  diceRoll.classList.add('hidden');
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

startAgain();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
diceBtn.addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(secretNumber);
  diceRoll.src = `dice-${secretNumber}.png`;
  diceRoll.classList.remove('hidden');

  if (secretNumber != 1) {
    currentScore += secretNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    // playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    diceRoll.classList.add('hidden');
  }

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--active');
  else {
    switchPlayer();
  }
});

newBtn.addEventListener('click', startAgain);
