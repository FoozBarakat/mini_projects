// select all radio buttons from DOM
let radioButtons = document.querySelectorAll('.radioButton');
// Declare global var to save the names of type of input ex: kg, g, lbs
let units;
// Declare global var to save the name of chicked radio button
let clickedRadioButtonValue;

// loop in radioButtons and add event listener to each radioButton
radioButtons.forEach(radioButton => {
	radioButton.addEventListener('click', () => {
		// select the select elements
		let inputSelect = document.querySelector('#input');
		let outputSelect = document.querySelector('#output');

		// clearing the select elements
		removeChildren(inputSelect, '.inputOption');
		removeChildren(outputSelect, '.outputOption');

		// check the value of radioButton
		if (radioButton.value == 'length') {
			// let the global var units = to the length object that is in data.js file
			units = length;
			// let the global var clickedRadioButtonValue = to the value of radioButton
			clickedRadioButtonValue = 'length';
		} else if (radioButton.value == 'mass') {
			units = mass;
			clickedRadioButtonValue = 'mass';
		} else if (radioButton.value == 'time') {
			units = time;
			clickedRadioButtonValue = 'time';
		} else if (radioButton.value == 'temperature') {
			units = temperature;
			clickedRadioButtonValue = 'temperature';
		}

		// save the keys of the object inside an array and then loop inside that array
		Object.keys(units).forEach(unit => {
			// create a new option element
			let inputOptionElement = document.createElement('option');
			// let the text in the option element = to unit
			inputOptionElement.innerHTML = unit;
			// add class to the option element
			inputOptionElement.classList.add('inputOption');
			// append the option element inside input select element
			inputSelect.appendChild(inputOptionElement);

			// the same as the inputOptions
			let outputOptionElement = document.createElement('option');
			outputOptionElement.innerHTML = unit;
			outputOptionElement.classList.add('outputOption');
			outputSelect.appendChild(outputOptionElement);
		});
	});
});

// function to remove the children for select element
let removeChildren = (element, childClass) => {
	// to check if the select element have a child
	if (element.firstChild) {
		// select all the options with class name $[childClass]
		let options = document.querySelectorAll(childClass);
		// looping in options array and remove the elements
		options.forEach(option => {
			element.removeChild(option);
		});
	}
};

// add eventListener to the equal button
const equalButton = document.querySelector('.equal');

equalButton.addEventListener('click', () => {
	// save the values of select elements
	let inputSelectValue = document.querySelector('#input').value;
	let outputSelectVlaue = document.querySelector('#output').value;
	let number = display.value;

	// to check if the clicked radio is temperature
	if (clickedRadioButtonValue === 'temperature') {
		// if inputSelectValue is C convert to F
		if (inputSelectValue === 'Celsius (C)') {
			number = 1.8 * number + 32;
		}
		// if inputSelectValue is K convert to F
		else if (inputSelectValue === 'Kelven (K)') {
			number = 1.8 * (number - 273.15) + 32;
		}

		// if outputSelectVlaue is C convert the F value to C
		if (outputSelectVlaue === 'Celsius (C)') {
			display.value = (5 / 9) * (number - 32);
		}
		// if outputSelectVlaue is K convert the F value to K
		else if (outputSelectVlaue === 'Kelven (K)') {
			display.value = (5 / 9) * (number - 32) + 273.15;
		}
		// // if outputSelect is F just display the F value
		else {
			display.value = number;
		}
	} else {
		// convert the inputSelectValue to the default unit
		let numberInDefault = units[inputSelectValue] * number;
		// convert the default unit to the outputSelectVlaue
		display.value = numberInDefault / units[outputSelectVlaue];
	}
});
