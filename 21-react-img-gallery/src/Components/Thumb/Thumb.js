import React, { Component } from 'react';
import Img from 'react-image'
import errorImg from '../../assets/error-square.jpg'
import './Thumb.css'

class Thumb extends Component {
	constructor() {
		super();
		this.backgroundColors = ['orange','magenta','cyan', 'springgreen', 'dimgrey'];
		this.randInd = Math.floor(Math.random() * this.backgroundColors.length);
		this.style = {
				background: this.backgroundColors[this.randInd],
    			height: (Math.floor(Math.random() * 100) + 150) + 'px',
    			borderRadius: '5px',
    		}
	}

	render() {

		const errorImage = <img src={errorImg} alt="error"/>;
		let placeholder;
		if (this.props.id) {
			// if we're outputting a list, e.g. MasonryGrid or Sidebar
			placeholder = <div style={this.style}></div>
		} else {
			placeholder = <img src={this.props.placeholder} alt="placeholder"/>
		}

		return (
			<div className="thumb" onClick={this.props.clicked}>
				<Img src={this.props.url} loader={placeholder} unloader={errorImage} alt={this.props.title}/>
			</div>
		)
	}
}


// without react-img (however no way to specify a placeholder image)

// class Thumb extends Component {
// 	state = {
// 		error: false,
// 	}

// 	handleError = e => {
// 		console.log('image broken')
// 		this.setState({error: true})
// 	}

// 	render() {
// 		let img = <img src={this.props.url} alt={this.props.title} onError={this.handleError}/>;

// 		if (this.state.error) {
// 			img = <img src={errorImg} alt="error"/>;
// 		}

// 		return (
// 			<div className="thumb">
// 				{img}
// 			</div>
// 		)
// 	}
// }

export default Thumb;