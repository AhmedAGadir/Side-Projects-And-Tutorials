import React from 'react';
import Field from './Field';
import uuid from 'uuid';

// trying something new
// the problem with this way is that when the button is clicked the previous part of the form is deleted
// perhaps saving form data in the Form components state and then somehow submitting those values will be a solution
const step = props => (props.num == props.currentStep) ? (
	<div>
		{props.formData.map(data => <Field data={data} key={uuid.v4()}/>)}
	</div>
) : null ;

export default step;