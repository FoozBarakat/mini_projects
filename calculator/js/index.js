// click event for navigation
document.querySelector('#convert').addEventListener('click', () => {
	// remove currentClass from the simpleCalc link
	document.querySelector('#simpleCalc').classList.remove('currentLink');
	// add currntClass to convert link
	document.querySelector('#convert').classList.add('currentLink');

	// display radio buttons & select
	document.querySelector('.convertContainer').style.display = 'flex';

	// select + - / + signs, then set display value to none
	let signs = document.querySelectorAll('.sign');
	signs.forEach(sign => {
		sign.style.display = 'none';
	});
});

document.querySelector('#simpleCalc').addEventListener('click', () => {
	// remove currentClass from the convert link
	document.querySelector('#convert').classList.remove('currentLink');
	// add currntClass to  simpleCalc
	document.querySelector('#simpleCalc').classList.add('currentLink');

	// hide radio buttons buttons & select
	document.querySelector('.convertContainer').style.display = 'none';

	// select + - / + signs, then set display value to grid
	let signs = document.querySelectorAll('.sign');
	signs.forEach(sign => {
		sign.style.display = 'grid';
	});
});

// select all the buttons & the display
const buttons = document.querySelectorAll('span');
const display = document.querySelector('.display');

// add eventListener to the buttons
buttons.forEach(button => {
	button.addEventListener('click', event => {
		const clickedButtonValue = event.target.innerText;

		if (clickedButtonValue === '=') {
			// check if the display is not empty
			if (display.value !== '') {
				// calculate and show the answer to display
				display.value = eval(display.value);
			}
		} else if (clickedButtonValue === 'C') {
			// clear everything on display
			display.value = '';
		} else if (clickedButtonValue === 'AC') {
			display.value = display.value.substr(0, display.value.length - 1);
		} else {
			// otherwise concatenate it to the display
			display.value += clickedButtonValue;
		}
	});
});

// using the keyboard
document.addEventListener('keydown', event => {
	// + sign
	if (event.shiftKey && event.keyCode == 187) {
		display.value += '+';
	}
	// - sign
	else if (event.keyCode == 189) {
		display.value += event.key;
	}
	// / sign
	else if (event.keyCode == 191) {
		display.value += event.key;
	}
	// * sign
	else if (event.shiftKey && event.keyCode == 56) {
		display.value += '*';
	}
	// . sign
	else if (event.keyCode == 190) {
		display.value += event.key;
	}
	// equal sign
	else if (event.keyCode == 187) {
		// check if the display is not empty
		if (display.value !== '') {
			// calculate and show the answer to display
			display.value = eval(display.value);
		}
	}
	// del button
	else if (event.keyCode == 46) {
		display.value = '';
	}
	// backspace button
	else if (event.keyCode == 8) {
		display.value = display.value.substr(0, display.value.length - 1);
	}
	// numbers buttons
	else if (/[0-9]/.test(event.key)) {
		display.value += event.key;
	}
});
