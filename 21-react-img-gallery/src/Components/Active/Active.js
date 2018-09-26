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
					<div className="thumbInteract">
						<ul>
							<li><FontAwesomeIcon icon="heart" /> :Favourite</li>
							<li><FontAwesomeIcon icon="link" /> :Favourite</li>
							<li><FontAwesomeIcon icon="download" /> :Favourite</li>
							<li><FontAwesomeIcon icon="code" /> :Favourite</li>
						</ul>
					</div>
					<div className="socialMediaWrap">
						<h3>share it</h3>
						<div className="socialMediaIcons"> 
							<div><FontAwesomeIcon icon={["fab", "facebook-f"]} /></div>
							<div><FontAwesomeIcon icon={["fab", "twitter"]} /></div>
							<div><FontAwesomeIcon icon={["fab", "instagram"]} /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default active;