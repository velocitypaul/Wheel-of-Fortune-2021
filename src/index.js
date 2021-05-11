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
var player1;
var player2;
var player3;
var puzzleGridRows = document.querySelector('.puzzle-grid').children;
var gameLetters = document.querySelector('.letters');
var gamePuzzles = [];

window.onload = function() {
  getFourRandomPuzzles();
  console.log(gamePuzzles);
  startGame();
  loadPuzzleGrid((game.round - 1));
  //startNewRound();
}


function getAllPuzzles() {
  //could this be simpler?
  console.log(data.puzzles)
  Object.entries(data.puzzles).forEach( function(puzzleSet) {
    var puzzleBank = puzzleSet[1].puzzle_bank;
    mergedPuzzles.push(puzzleBank);
  });
  console.log(mergedPuzzles);
  return mergedPuzzles.flat(2);
}

function getFourRandomPuzzles() {
  mergedPuzzles = getAllPuzzles();
  for (let i = 0; i < 4; i++) {
    var randIndex = Math.floor(Math.random() * mergedPuzzles.length);
    gamePuzzles.push(mergedPuzzles[randIndex]);
  }
}

function loadPuzzleGrid() {
  let currentAnswer = gamePuzzles[(game.round - 1)].correct_answer.split(" ");
  console.log(currentAnswer);
  for (let i in currentAnswer) {
    var word = currentAnswer[i];
    var boxes = puzzleGridRows[i].children;
    for (let letter in word) {
      boxes[letter].classList.add("hasLetter");
      boxes[letter].innerHTML = `<span class="puzzle-grid__letter">${word[letter]}</span>`;
    } 
  } 
}

function startGame() {
  game = new Game();
  player1 = new Player("Player 1");
  player2 = new Player("Player 2");
  player3 = new Player("Player 3");
  
}

function startNewRound() {
  document.querySelector('body').classList.remove( 'round' + game.round );
  game.nextRound();
  document.querySelector('body').classList.add( 'round' + game.round );
  loadPuzzleGrid((game.round - 1));
}

gameLetters.addEventListener('click', function(event) {
  if (event.target.classList.contains('vowel')) {
    buyVowel(event);
  } else {
    selectLetter(event);
  }
});

function selectLetter(event) {
  var selectedChar = event.target.innerText.trim();
  for (let i in correctAnswer) {
    var boxes = puzzleGridRows[i].children;
    for ( let box of boxes) {
      if ( selectedChar === box.innerText.trim() ) {
        box.classList.add('revealed');
        event.target.classList.add('previouslySelected');
      } else {
        event.target.classList.add('previouslySelected');
      }
    }
  } 
}

function buyVowel() {
  console.log('buying a vowel');
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
