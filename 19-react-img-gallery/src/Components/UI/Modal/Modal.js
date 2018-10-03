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

	closeModalHandler = e => {
		if (e.target.nodeName === 'SPAN' || !this.props.mRef.current.contains(e.target)) {
			this.props.closeModal();
		}
	}

	render() {

		if (this.props.show) {
			window.addEventListener('mousedown', this.closeModalHandler)
		} else {
			window.removeEventListener('mousedown', this.closeModalHandler)
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
					<span onClick={this.closeModalHandler}>&times;</span> 
					{this.props.children}
				</div>
			</div>
		)
	}
} 

export default Modal;