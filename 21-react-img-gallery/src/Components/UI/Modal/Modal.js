import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {

	// componentDidMount() {
	// 	window.addEventListener('mousedown', this.props.closeModal)
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('mousedown', this.props.closeModal)
	// }

	// shouldComponentUpdate(nextProps) {
	// 	if (nextProps.show == true && this.props.show == true) return false
	// 	else return true 
	// }

	render() {

		if (this.props.show) {
			window.addEventListener('mousedown', this.props.closeModal)
		} else {
			window.removeEventListener('mousedown', this.props.closeModal)
		}

		let classes = ['modal'];
		classes.push(this.props.className);

		return (
			<div 
				ref={this.props.mRef}
				className={classes.join(' ')}
				style={{
					animationName: this.props.show ? 'blip-in' : 'blip-out',
				}}>
				<div className="wrap">
					<span onClick={this.props.closeModal}>&times;</span> 
					{this.props.children}
				</div>
			</div>
		)
	}
} 

export default Modal;