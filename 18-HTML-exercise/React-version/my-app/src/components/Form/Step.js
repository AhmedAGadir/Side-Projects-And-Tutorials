import React from 'react';
import Field from './Field';
import uuid from 'uuid';

const step = props => {
	return (
		<div className={props.num === props.currentStep ? 'visible' : null}>
			{props.formData.map(data => <Field data={data} key={uuid.v4()}/>)}
		</div>
	)
}

export default step;