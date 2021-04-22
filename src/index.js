// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import { data } from './js/data.js';
import Game from './js/game.js';
import Player from './js/player.js';
import Puzzle from './js/puzzle.js';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/wheel_of_fortune_small_logo.png';
import './images/wheel_fortune_circle.png';

window.onload = function() {
	getPuzzles();
	startGame();} 

function getPuzzles() {
	 var mergedPuzzles = [];
	 Object.entries(data.puzzles).forEach( function(puzzleSet) {
		 var puzzleBank = puzzleSet[1].puzzle_bank;
		 mergedPuzzles.push(puzzleBank);
	 });
	 return window.mergedPuzzles = mergedPuzzles.flat(99);
	 
}

function loadRandomPuzzle() {
	var randIndex = 30;
	//var randIndex = Math.floor(Math.random() * mergedPuzzles.length);
	var randPuzzle = mergedPuzzles[randIndex];
	return randPuzzle;
}

function startGame() {
	var game = new Game();
	var randomPuzzle = loadRandomPuzzle();
	console.log(randomPuzzle);
}



// GLobal Variables
var spinButton = document.querySelector('.spinButton');
var wheelImage = document.querySelector('.wheel img');
var wheelAmount = document.querySelector('.wheel-value');

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
