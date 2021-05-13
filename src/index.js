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
var randomPuzzle;
var currentAnswer;
var game;
var player1;
var player2;
var player3;
var puzzleGridRows = document.querySelector('.puzzle-grid').children;
var gameLetters = document.querySelector('.letters');
var gamePuzzles = [];

window.onload = function() {
  startGame();
  game.getFourRandomPuzzles(data.puzzles);
  loadPuzzleGrid();
}


function startGame() {
  game = new Game();
  player1 = new Player("Player 1");
  player2 = new Player("Player 2");
  player3 = new Player("Player 3");
}

function loadPuzzleGrid() {
  let index = game.round - 1;
  currentAnswer = game.puzzles[index].correct_answer.split(" ");
  for (let line in currentAnswer) {
    var word = currentAnswer[line];
    var boxes = puzzleGridRows[line].children;
    for (let letter in word) {
      boxes[letter].classList.add("hasLetter");
      //boxes[letter].innerHTML = `<span class="puzzle-grid__letter">${word[letter]}</span>`;
    } 
  } 
}

gameLetters.addEventListener('click', function(event) {
  var selectedChar = event.target.innerText.trim();
  if (event.target.classList.contains('vowel')) {
    buyVowel(event);
  } else {
    selectLetter(selectedChar);
    event.target.classList.add('previouslySelected');
  }
});

function selectLetter(letter) {
  console.log(currentAnswer);
  //find indexes of letter in answer and corresponding box
  for (let line in currentAnswer) {
    var boxes = puzzleGridRows[line].children;
    for ( let box of boxes) {
      if ( letter === box.innerText.trim() ) {
        box.classList.add('revealed');
      }
    }
  } 
}

function buyVowel() {
  console.log('buying a vowel');
}


function startNewRound() {
  document.querySelector('body').classList.remove( 'round' + game.round );
  game.nextRound();
  document.querySelector('body').classList.add( 'round' + game.round );
  loadPuzzleGrid(game.round);
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
