import React from 'react';

const field = props => {
	let id = props.data.title.toLowerCase().replace(/\s/, '_');
	let name = 'user_' + id;

	return (
		<div>
			<label htmlFor={id}>{props.data.title}</label>
			<input 
				type={props.data.type} 
				id={id} 
				pattern={props.data.pattern ? props.data.patten : null} 
				name={name}
				required/> 
		</div>
	)
}
export default field;