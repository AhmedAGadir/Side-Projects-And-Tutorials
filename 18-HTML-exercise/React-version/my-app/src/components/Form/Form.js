import React, { Component } from 'react';
import uuid from 'uuid';

class Form extends Component {
	render() {


		let tabs = [];
		let sections = [];

		this.props.formFields.forEach((section, ind) => {
 			
			tabs.push(<div className={ind === 0 ? 'active' : null} key={uuid.v4()}>{'Step ' + (ind+1)}</div>);

			sections.push((
				<div id={'step'+(ind+1)} key={uuid.v4()}>
					{section.map((field, ind) => {
					
						let id = field.title.toLowerCase().replace(/\s/, '_');
						let name = 'user_' + id;

						return (
							<div className={ind === 0 ? 'active' : null} key={uuid.v4()}>
								<label htmlFor={id}>{field.title}</label>
								<input 
									type={field.type} 
									id={id} 
									pattern={field.pattern ? field.patten : null} 
									name={name}
									required/> 
							</div>
						)
					
					})}
				</div>
			))

		})

		return (

			<div className="form-container">
				{tabs}
				<form action="#" method="POST">
					{sections}
					<button type="submit">Next</button>
					}
				</form>
			</div>

		)
	}
}


export default Form;