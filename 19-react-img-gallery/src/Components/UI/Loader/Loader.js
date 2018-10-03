import React from 'react';
import './Loader.css';

const Loader = props => (
	<div className="lds-facebook" style={props.style}>
		<div></div>
		<div></div>
		<div></div>
	</div>
)

export default Loader;