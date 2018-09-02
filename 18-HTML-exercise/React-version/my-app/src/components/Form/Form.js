import React, { Component } from 'react';
import Tab from './Tab';
import Step from './Step';
import Button from './Button';
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

	state = {currentStep: 1}

	tabClickHandler = tabNum => {
		this.setState({currentStep: tabNum})
	}

	buttonClickHandler = (e, lastTab) => {
		if (!lastTab) {
			e.preventDefault();
			this.setState((prevState, props) => ({
				currentStep: prevState.currentStep + 1,
			}))
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

		let button = <Button 
						currentStep={this.state.currentStep} 
						numOfSteps={this.props.formSteps.length}
						clicked={this.buttonClickHandler}/>

		return (
			<div className="form-container">
				{tabs}
				<form action="#" method="POST">
					{formSteps}
					{button}
				</form>
			</div>
		)
	}
}


export default Form;