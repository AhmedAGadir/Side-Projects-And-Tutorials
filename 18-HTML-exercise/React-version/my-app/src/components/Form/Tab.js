import React from 'react';

const tab = props => {

	const changeHandler = function() {
		props.clicked(props.num)
	}

	return (
		<div className={props.num === props.currentStep ? 'active' : null} onClick={changeHandler}>
			{'Step ' + props.num}
		</div>
	)
}

export default tab;