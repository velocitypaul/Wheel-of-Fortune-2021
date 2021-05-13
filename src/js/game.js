export default class Game {
	constructor( round = 1, activePlayer = 1) {
		this.round = round;
		this.activePlayer = activePlayer;
		this.puzzles = [];
	}
	
	getFourRandomPuzzles(data) {
		var mergedPuzzles = [];
		Object.entries(data).forEach( function(puzzleSet) {
			var puzzleBank = puzzleSet[1].puzzle_bank;
			mergedPuzzles.push(puzzleBank);
		});
		mergedPuzzles = mergedPuzzles.flat(2);
		for (let i = 0; i < 4; i++) {
			var randIndex = Math.floor(Math.random() * mergedPuzzles.length);
			this.puzzles.push(mergedPuzzles[randIndex]);
		}
	}
	
	nextRound() {
		this.round ++;
		if( this.round === 5 ) {
			this.round = 1;
		}
	}
	
	nextPlayer() {
		//document.querySelector('body').classList.remove( 'activePlayer' + this.activePlayer );
		this.activePlayer ++;
		if( this.activePlayer === 4 ) {
			this.activePlayer = 1;
		}
		//document.querySelector('body').classList.add( 'activePlayer' + this.activePlayer );

	}
}