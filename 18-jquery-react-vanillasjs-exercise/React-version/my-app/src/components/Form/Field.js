import React from 'react';

class Field extends React.Component {

	state = {value: ''}

	changeHandler = e => {
		this.setState({value: e.target.value})
	}

	render() {
		let id = this.props.data.title.toLowerCase().replace(/\s/, '_');
		let name = 'user_' + id;

		return (
			<div>
				<label htmlFor={id}>{this.props.data.title}</label>
				<input 
					value={this.state.value}
					onChange={this.changeHandler}
					type={this.props.data.type} 
					id={id} 
					pattern={this.props.data.pattern ? this.props.data.patten : null} 
					name={name}
					required/> 
			</div>
		)
	}
}

export default Field;