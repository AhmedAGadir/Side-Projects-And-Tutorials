import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {

	componentDidMount() {
		// setTimeout(() => window.addEventListener('click', this.props.closeModal), 500)
		window.addEventListener('mousedown', this.props.closeModal)
	}

	componentWillUnmount() {
		window.removeEventListener('mousedown', this.props.closeModal)
	}

	render() {
		let classes = ['Modal'];
		classes.push(this.props.className);

		return (
			<div 
				// style={{
				// 	transform: this.props.show ? ' translate(-50%, -50%) translateY(0)' : 'translate(-50%, -50%) translateY(-100vh)',
				// 	opacity: this.props.show ? '1' : '0',
				// }}
				ref={this.props.mRef}
				className={classes.join(' ')}>
				<span onClick={this.props.closeModal}>&times;</span>
				{this.props.children}
			</div>
		)
	}
} 

export default Modal;