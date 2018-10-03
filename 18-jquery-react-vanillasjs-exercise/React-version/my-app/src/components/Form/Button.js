import React from 'react';

// make this a purecomponent so that it doesnt rerender when nothings changed
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