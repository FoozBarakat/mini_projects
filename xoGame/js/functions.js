let playerTurn;
let bluePlayer = '';
let redPlayer = '';

// clear board function
const clearBoard = winner => {
	// loop inside the areray & clear the text
	gridItems.forEach(gridItem => {
		gridItem.innerHTML = '';
	});
	console.log(winner);
	if (winner == 'winner') {
		playerTurn--;
		changePlayerColor();
		document.querySelector('.play-area').style.pointerEvents = 'auto';
	}
	bluePlayer = '';
	redPlayer = '';
	console.log(playerTurn);
};

const whoPlaysFirst = () => {
	return Math.floor(Math.random() * 2);
};

const changePlayerColor = () => {
	if (playerTurn % 2 == 0) {
		document.querySelector('#player1').style.color = 'green';
		document.querySelector('#player2').style.color = '#b3210d';
	} else {
		document.querySelector('#player2').style.color = 'green';
		document.querySelector('#player1').style.color = '#03396c';
	}
};

const enablePlayArea = () => {
	if (
		document.querySelector('#player1').style.display === 'inline-block' &&
		document.querySelector('#player2').style.display === 'inline-block'
	) {
		document.querySelector('.play-area').style.pointerEvents = 'auto';
	}
};
