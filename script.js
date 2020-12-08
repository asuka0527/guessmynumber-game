'use strict';
let num, currentScore, highScore, newScore, score, gamePlay;
num = 0;
score = 20;
currentScore = 0;
highScore = 0;

let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.number').textContent = '?';
// score = document.querySelector('.score');
// currentScore = document.querySelector('.score').textContent = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = document.querySelector('.guess').value;

  if (!guessNum) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guessNum < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNum > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   } else if (guessNum !== secretNum && guessNum < secretNum) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     newScore = currentScore - 1;
  //     document.querySelector('.score').textContent = newScore;
  //   } else if (guessNum !== secretNum && guessNum > secretNum) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     newScore = currentScore - 1;
  //     document.querySelector('.score').textContent = newScore;
  //   } else {
  //     document.querySelector('.message').textContent = 'Correct number!';
  //     document.querySelector('body').style.backgroundColor = 'green';
  //     document.querySelector('.number').textContent = secretNum;
  //     currentScore === highScore;
  //     document.querySelector('.highscore').textContent = highScore;
  //     if (currentScore > highScore) {
  //       document.querySelector('.highscore').textContent = highScore;
  //     }

  //   guessNum = false;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNum;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
