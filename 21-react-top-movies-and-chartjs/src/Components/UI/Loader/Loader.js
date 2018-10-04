import React from 'react';
import './Loader.css';

const Loader = props => (
	<div className="lds-grid" style={props.style}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
)

export default Loader;