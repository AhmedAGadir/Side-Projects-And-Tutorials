import React from 'react';

const button = props => {

	// boolean value
	let lastTab = props.currentStep == props.numOfSteps;

	let buttonType;
	let buttonText;

	if (lastTab) {
		buttonType = 'submit';
		buttonText = 'Submit';
	} else {
		buttonType = 'button';
		buttonText = 'Next';
	}

	const clickHandler = e => {
		props.clicked(e, lastTab)
	}

	return (
		<button type={buttonType} onClick={clickHandler}>
			{buttonText}
		</button>
	)
}

export default button;