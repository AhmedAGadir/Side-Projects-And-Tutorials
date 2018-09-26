import React from 'react';
import Thumb from '../Thumb/Thumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const active = props => {


	return (
		<div className="activeThumbCard">
			<h1>{props.activeThumbData.title}</h1>
			<div className="thumbWrap">
				<Thumb url={props.activeThumbData.active_url} title={props.activeThumbData.title} />
				<div className="thumbInteract">
					<ul>
						<li><FontAwesomeIcon icon="stroopwafel" /> :Favourite</li>
					</ul>
				</div>
			</div>
		</div>
	)
};

export default active;