import React, { Component } from 'react';
import errorImg from '../../assets/error.jpeg'

class Thumb extends Component {
	state = {
		error: false,
	}

	handleError = e => {
		console.log('image broken')
		this.setState({error: true})
	}

	render() {
		let img = <img src={this.props.url} alt={this.props.title} onError={this.handleError}/>;

		if (this.state.error) {
			img = <img src={errorImg} alt="error"/>;
		}

		return (
			<div>
				{img}
			</div>
		)
	}
}

export default Thumb;