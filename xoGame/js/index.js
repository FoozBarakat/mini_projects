//select all gridItems then
const gridItems = document.querySelectorAll('.grid-item');

// click event for start button
document.querySelector('.start-button').addEventListener('click', () => {
	// hide player1 name text & display the input and the button
	document.querySelector('#player1-input').style.display = 'inline-block';
	document.querySelector('#player1-button').style.display = 'inline-block';
	document.querySelector('#player1').style.display = 'none';

	// hide player2 name text & display the input and the button
	document.querySelector('#player2-input').style.display = 'inline-block';
	document.querySelector('#player2-button').style.display = 'inline-block';
	document.querySelector('#player2').style.display = 'none';

	// clear bord
	clearBoard();

	// prevent cliking event on the play area
	document.querySelector('.play-area').style.pointerEvents = 'none';

	playerTurn = whoPlaysFirst();
	changePlayerColor();
});

// click event for ok button player 1
document.querySelector('#player1-button').addEventListener('click', () => {
	// save the value of the input in h1 tag for the player 1
	let player1 = document.querySelector('#player1-input').value;

	if (player1) {
		document.querySelector('#player1').innerHTML = player1;
		// clear score1 value
		document.querySelector('#score1').innerHTML = '0';

		// hide the input and the button  & display player1 name text
		document.querySelector('#player1-input').style.display = 'none';
		document.querySelector('#player1-button').style.display = 'none';
		document.querySelector('#player1').style.display = 'inline-block';

		// enable clicking event on the Grid!
		enablePlayArea();
	}
});

// click event for ok button player 2
document.querySelector('#player2-button').addEventListener('click', () => {
	// save the value of the input in h1 tag for the player 1
	let player2 = document.querySelector('#player2-input').value;

	if (player2) {
		document.querySelector('#player2').innerHTML = player2;
		// clear score2
		document.querySelector('#score2').innerHTML = '0';
		// hide the input and the button  & display player1 name text
		document.querySelector('#player2-input').style.display = 'none';
		document.querySelector('#player2-button').style.display = 'none';
		document.querySelector('#player2').style.display = 'inline-block';
		// enable clicking event on the Grid!
		enablePlayArea();
	}
});

// click event for clear board
document.querySelector('.clear-button').addEventListener('click', clearBoard);

gridItems.forEach(gridItem => {
	gridItem.addEventListener('click', () => {
		if (playerTurn % 2 == 0 && gridItem.innerHTML == '') {
			gridItem.innerHTML = 'X';
			gridItem.style.color = '#03396c';
			bluePlayer += gridItem.id;
			playerTurn++;
			changePlayerColor();
			checkWinner(bluePlayer, gridItem);
		} else if (playerTurn % 2 !== 0 && gridItem.innerHTML == '') {
			gridItem.innerHTML = 'O';
			gridItem.style.color = '#b3210d';
			redPlayer += gridItem.id;
			playerTurn++;
			changePlayerColor();
			checkWinner(redPlayer, gridItem);
		}
	});
});

const checkWinner = (player, gridItem) => {
	if (
		(/[0]/.test(player) && /[1]/.test(player) && /[2]/.test(player)) ||
		(/[3]/.test(player) && /[4]/.test(player) && /[5]/.test(player)) ||
		(/[6]/.test(player) && /[7]/.test(player) && /[8]/.test(player)) ||
		(/[0]/.test(player) && /[3]/.test(player) && /[6]/.test(player)) ||
		(/[1]/.test(player) && /[4]/.test(player) && /[7]/.test(player)) ||
		(/[2]/.test(player) && /[5]/.test(player) && /[8]/.test(player)) ||
		(/[0]/.test(player) && /[4]/.test(player) && /[8]/.test(player)) ||
		(/[2]/.test(player) && /[4]/.test(player) && /[6]/.test(player))
	) {
		if (player == bluePlayer) {
			// add 1 to score
			document.querySelector('#score1').innerHTML =
				Number(document.querySelector('#score1').innerHTML) + 1;

			// prevent cliking event on the play area
			document.querySelector('.play-area').style.pointerEvents = 'none';
			// remove green color from player 2
			document.querySelector('#player2').style.color = '#b3210d';

			//
			clearBoard('winner');
		} else if (player == redPlayer) {
			// add 1 to score
			document.querySelector('#score2').innerHTML =
				Number(document.querySelector('#score2').innerHTML) + 1;

			// prevent cliking event on the play area
			document.querySelector('.play-area').style.pointerEvents = 'none';

			// remove green color from player 1
			document.querySelector('#player1').style.color = '#03396c';

			//
			clearBoard('winner');
		}
	}
};
