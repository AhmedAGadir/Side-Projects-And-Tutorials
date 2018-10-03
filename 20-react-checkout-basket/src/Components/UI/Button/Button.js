import React from 'react';
import './Button.css';

const button = props => {
	let buttonClasses = ['button']
	if (props.classes) {
		buttonClasses = [...buttonClasses, ...props.classes]
	}
	
	return (
		<button className={buttonClasses.join(' ')} onClick={props.click}>
			{props.children}
		</button>
	)
};

export default button