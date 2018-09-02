import React from 'react';
import Field from './Field';
import uuid from 'uuid';

const step = props => (props.num == props.currentStep) ? (
	<div>
		{props.formData.map(data => <Field data={data} key={uuid.v4()}/>)}
	</div>
) : null ;

export default step;