import React from 'react';
import './Button.css'

const button = props => (
	<button 
		onClick={props.clicked} 
		disabled={props.disabled ? true : false}
		className="button">
		{props.children}
	</button>
)


export default button