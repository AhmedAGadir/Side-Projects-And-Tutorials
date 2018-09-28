import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
	state = {
		hide: true
	}

	shouldComponentUpdate(nextProps) {
		if (!nextProps.show && this.state.hide) {
			return false
		} else return true
	}

	componentWillUpdate() {
		if (this.state.hide) {
			this.setState({hide: false})
		}
	}

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
					display: this.state.hide ? 'none' : 'unset',
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