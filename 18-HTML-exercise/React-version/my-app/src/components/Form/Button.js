import React from 'react';

const button = props => {

	let lastTab = props.currentStep == props.numOfSteps;
	let buttonText = lastTab ? 'Submit' : 'Next';

	const clickHandler = e => {
		props.clicked(e, lastTab)
	}

	return (
		<button type="submit" onClick={clickHandler}>
			{buttonText}
		</button>
	)
}

export default button;