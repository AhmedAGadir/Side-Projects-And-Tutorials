import React from 'react';
import Thumb from '../Thumb/Thumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Active.css';

const active = props => {

	const addPulseAnimation = e => {
		if (e.target.nodeName === 'LI') {
			e.target.firstElementChild.style.animationName = 'pulse';
		}
	}

	const removeAnimationName = e => {
		if (e.target.nodeName === 'LI') {
			e.target.firstElementChild.style.animationName = '';
		}
	}

	const copyLink = () => {
		const el = document.createElement('textarea');
		el.value = props.activeThumbData.active_url;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		console.log('play copied animation')
	}

	return (
		<div className="activeThumbCard">
			<h1>{props.activeThumbData.title}</h1>
			<div className="thumbWrap">
				<Thumb url={props.activeThumbData.active_url} title={props.activeThumbData.title} />
				<div className="thumbInteract">
					<div className="options">
						<ul>
							<li 
								onClick={() => console.log('some database stuff done here')}
								onMouseOver={e => addPulseAnimation(e)}
								onMouseOut={e => removeAnimationName(e)}><FontAwesomeIcon icon="heart" />Favourite</li>
							<li 
								onClick={() => copyLink()}
								onMouseOver={e => addPulseAnimation(e)}
								onMouseOut={e => removeAnimationName(e)}><FontAwesomeIcon icon="link" />Copy link</li>
							<li 
								onMouseOver={e => addPulseAnimation(e)}
								onMouseOut={e => removeAnimationName(e)}><FontAwesomeIcon icon="download" />Download</li>
							<li 
								onMouseOver={e => addPulseAnimation(e)}
								onMouseOut={e => removeAnimationName(e)}><FontAwesomeIcon icon="code" />Embed</li>
						</ul>
					</div>
					<div className="socialMediaWrap">
						<h4>share it!</h4>
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