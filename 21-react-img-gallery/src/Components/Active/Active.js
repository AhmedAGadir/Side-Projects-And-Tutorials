import React, { Component, Fragment } from 'react';
import Thumb from '../Thumb/Thumb';
import Modal from '../UI/Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Active.css';

class Active extends Component {
	state = {
		copied: false,
		embedded: false,
		modalText: '<iframe src="lorem ipsum dolor" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="lorem ipsum dolor">via GIPHY</a></p>',
	}

	modalRef = React.createRef()

	addPulseAnimationHandler = e => {
		if (e.target.nodeName === 'LI') {
			e.target.firstElementChild.style.animationName = 'pulse';
		}
	}

	removePulseAnimationHandler = e => {
		if (e.target.nodeName === 'LI') {
			e.target.firstElementChild.style.animationName = '';
		}
	}

	copyLinkHandler = () => {
		if (this.state.copied) return;

		const el = document.createElement('textarea');
		el.value = this.props.activeThumbData.active_url;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		this.setState({copied: true})
	}

	downloadGifHandler = () => {
		// need to fix this - not working as expected
		const a = document.createElement('a');
		a.setAttribute('href', this.props.activeThumbData.active_url);
		a.setAttribute('download', 'true');
		a.setAttribute('target', '_blank')
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		console.log('[NOT WORKING] downloaded')
	}

	changeModalTextHandler = e => {
		this.setState({modalText: e.target.value})
	}

	closeModalHandler = e => {
		if (e.target.nodeName === 'SPAN' || !this.modalRef.current.contains(e.target)) {
			this.setState({embedded: false})
		}
	}

	render() {

		return (
			<Fragment>
				<div className="activeThumbCard">
					<h1>{this.props.activeThumbData.title}</h1>
					<div className="thumbWrap">
						<Thumb url={this.props.activeThumbData.active_url} title={this.props.activeThumbData.title} />
						<div className="thumbInteract">
							<div className="options">
								<ul>
									<li 
										onClick={() => console.log('some database stuff done here')}
										onMouseOver={this.addPulseAnimationHandler}
										onMouseOut={this.removePulseAnimationHandler}><FontAwesomeIcon icon="heart" />Favourite</li>
									<li 
										onClick={this.copyLinkHandler}
										onMouseOver={this.addPulseAnimationHandler}
										onMouseOut={this.removePulseAnimationHandler}><FontAwesomeIcon icon="link" />Copy link</li>
									<li 
										onClick={this.downloadGifHandler}
										onMouseOver={this.addPulseAnimationHandler}
										onMouseOut={this.removePulseAnimationHandler}><FontAwesomeIcon icon="download" />Download</li>
									<li 
										onClick={() => this.setState({embedded: true})}
										onMouseOver={this.addPulseAnimationHandler}
										onMouseOut={this.removePulseAnimationHandler}><FontAwesomeIcon icon="code" />Embed</li>
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
				
				{this.state.copied ? (
					<div className="copied" onClick={() => this.setState({copied: false})}><span>&times;</span>Copied!</div>
				) : null}

				{this.state.embedded ? 
					<Modal className="embedded" mRef={this.modalRef} closeModal={this.closeModalHandler}>
						<h3>Embed with Giphy</h3>	
						<p>Need to embed this GIF on your website or blog? Just drop in the iFrame embed code below and you're done! The GIPHY Embed Player autoplays on all browsers and devices.</p>
						<input type="text" onChange={this.changeModalTextHandler} value={this.state.modalText} />
					</Modal>
				: null}

			</Fragment>
		)
	}

} 

export default Active;