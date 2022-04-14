// 'use strict';

// let score0 = document.getElementById('score--0'),
//   score1 = document.getElementById('score--1'),
//   diceEl = document.querySelector('.dice'),
//   btnNew = document.querySelector('.btn--new'),
//   btnRoll = document.querySelector('.btn--roll'),
//   btnHold = document.querySelector('.btn--hold'),
//   curScore1 = document.getElementById('current--1'),
//   curScore0 = document.getElementById('current--0'),
//   player01 = document.querySelector('.player--0'),
//   player02 = document.querySelector('.player--1');

// let scores, currentScore, activePlayer, playing;
// const startAgain = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0.textContent = 0;
//   score1.textContent = 0;
//   curScore0.textContent = 0;
//   curScore1.textContent = 0;
//   diceEl.classList.add('hidden');
//   player01.classList.remove('player--winner');
//   player02.classList.remove('player--winner');
//   player01.classList.add('player--active');
//   player02.classList.remove('player--active');
// };
// startAgain();

// let switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer == 0 ? 1 : 0;
//   currentScore = 0;
//   player01.classList.toggle('player--active');
//   player02.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     let dice = Math.trunc(Math.random() * 6 + 1);

//     console.log(dice);
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     if (dice != 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       // curScore0.textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 10) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       diceEl.classList.add('hidden');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', startAgain);
