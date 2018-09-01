import React, { Component } from 'react';
import Tab from './Tab';
import Step from './Step';
import uuid from 'uuid';
import './Form.css';

// To do:
// - make sections actually dismount or fade out using lifecycle components
// - add proptypes
// - better use of lifecycle components
// - css modules for styling
// - 2 way binding for forms? is it neccessary?
// - more -- read react docs

class Form extends Component {

	state = {
		currentStep: 1,
		buttonType: 'button',
		buttonText: 'Next',
	}

	tabClickHandler = tabNumber => {
		this.setState({
			currentStep: tabNumber,
		})
	}

	buttonClickHandler = e => {
		if (this.state.currentStep !== this.props.formSteps.length) {
			e.preventDefault();
			this.setState((prevState, props) => ({
				currentStep: prevState.currentStep + 1,
			}))
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		let buttonType, buttonText;

		if (prevState.currentStep == nextProps.formSteps.length) {
			buttonType = 'submit';
			buttonText = 'Submit';
		} else {
			buttonType = 'button';
			buttonText = 'Next';
		}

		return {
			currentStep: prevState.currentStep,
			buttonType: buttonType,
			buttonText: buttonText,
		}
	}
	
	render() {
		let tabs = [];
		let formSteps = [];

		this.props.formSteps.forEach((step, ind) => {
			let uniqueId = uuid.v4();
			tabs.push(
				<Tab 
					key={uniqueId}
					num={ind+1}
					currentStep={this.state.currentStep} 
					clicked={this.tabClickHandler} />
			);
			
			formSteps.push(
				<Step 
					key={uniqueId}
					num={ind+1} 
					currentStep={this.state.currentStep}
					formData={step} />
			);
		})

		return (
			<div className="form-container">
				{tabs}
				<form action="#" method="POST">
					{formSteps}
					<button type={this.state.buttonType} onClick={this.buttonClickHandler}>
						{this.state.buttonText}
					</button>
				</form>
			</div>
		)
	}
}


export default Form;