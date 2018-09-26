import React from 'react';

const thumb = props => {

	return (
		<div>
			<img src={props.url} alt={props.title} />
		</div>
	)
}

export default thumb;