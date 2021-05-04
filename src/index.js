// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import { data } from './js/data.js';
import Game from './js/game.js';
import Player from './js/player.js';
//import Puzzle from './js/puzzle.js';
import './css/base.scss';
import './images/wheel_of_fortune_small_logo.png';
import './images/wheel_fortune_circle.png';

// Global Variables
var spinButton = document.querySelector('.spinButton');
var wheelImage = document.querySelector('.wheel img');
var wheelAmount = document.querySelector('.wheel-value');
var mergedPuzzles = [];
var randomPuzzle;
var correctAnswer;
var game;
var puzzleGridRows = document.querySelector('.puzzle-grid').children;

window.onload = function() {
  getPuzzles();
  startGame();
  console.log(mergedPuzzles);
  console.log(randomPuzzle);
  console.log(correctAnswer);
  loadPuzzleGrid();
  document.querySelector('body').classList.remove( 'round' + game.round );
  game.nextRound();
  document.querySelector('body').classList.add( 'round' + game.round );
}


function getPuzzles() {
  Object.entries(data.puzzles).forEach( function(puzzleSet) {
    var puzzleBank = puzzleSet[1].puzzle_bank;
    mergedPuzzles.push(puzzleBank);
  });
  return mergedPuzzles = mergedPuzzles.flat(2);	 
}

function getPuzzle() {
  var randIndex = 30;
  //var randIndex = Math.floor(Math.random() * mergedPuzzles.length);
  randomPuzzle = mergedPuzzles[randIndex];
  correctAnswer = randomPuzzle.correct_answer.split(" ");
}

function loadPuzzleGrid() {
  for (let i = 0; i < correctAnswer.length; i++) {
    var answer = correctAnswer[i];
    var rowArray = puzzleGridRows[i].children;
    for (let i = 0; i < answer.length; i++) {
      rowArray[i].innerHTML = answer[i];
    }
  }
}

function loadPuzzle() {
  var line1 = correctAnswer[0];
  var line2 = correctAnswer[1];
  var line3 = correctAnswer[2];
  var line4 = correctAnswer[3];
  console.log(line1);
}

function startGame() {
  game = new Game();
  getPuzzle();
  loadPuzzle();
	
}


//listen for spin the wheel click
spinButton.addEventListener('click', spinWheel);

function spinWheel() {
  //spin the wheel
  //wheelImage.classList.toggle('spinning');
  //select random index from wheel array
  var randIndex = Math.floor(Math.random() * data.wheel.length);
  var randIndexValue = data.wheel[randIndex];
  //stop wheel at index * 15°
  var wheelStopLocation = (randIndex * 15) + 360;
  console.log(wheelStopLocation);
  //display value
  wheelAmount.innerText = randIndexValue;
  wheelImage.animate({ transform: [ 'rotate(0deg)', 'rotate(' + wheelStopLocation + 'deg)' ] },
	 { duration: 1000, iterations: 1 });
	
}
