export default class Game {
	constructor(round = 1, activePlayer = 1) {
		this.round = round;
		this.activePlayer = activePlayer;	
	}
	
	nextRound() {
		this.round ++;
		if( this.round === 5) {
			this.round = 1;
		}
	}
	
	nextPlayer() {
		this.activePlayer ++;
		if( this.activePlayer === 4 ) {
			this.activePlayer = 1;
		}
	}
}