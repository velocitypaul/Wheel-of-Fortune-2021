export default class Game {
	constructor( round = 1, activePlayer = 1 ) {
		this.round = round;
		this.activePlayer = activePlayer;	
	}
	
	nextRound() {
		document.querySelector('body').classList.remove( 'round' + this.round );
		this.round ++;
		if( this.round === 5 ) {
			this.round = 1;
		}
		document.querySelector('body').classList.add( 'round' + this.round );
	}
	
	nextPlayer() {
		document.querySelector('body').classList.remove( 'activePlayer' + this.activePlayer );
		this.activePlayer ++;
		if( this.activePlayer === 4 ) {
			this.activePlayer = 1;
		}
		document.querySelector('body').classList.add( 'activePlayer' + this.activePlayer );

	}
}