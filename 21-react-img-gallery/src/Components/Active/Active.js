import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import Thumb from '../Thumb/Thumb';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import './Active.css';

class Active extends Component {
	constructor() {
		super()
		this.state = {
			favourited: false,
			copied: false,
			embedded: false,
			embedURL: '',
		}
		this.modalRef = React.createRef();
	}

	componentWillMount() {
		this.setState({
			embedURL: `<iframe src="*****" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=${this.props.thumbData.embed_url}>via GIPHY</a></p>`
		})
	}

	componentWillUpdate(nextProps) {
		if (nextProps.thumbData.active_url !== this.props.thumbData.active_url) {
			this.setState({
				favourited: false,
				copied: false,
			})
		}
	}

	favouriteHandler = () => {
		this.setState(prevState => {
			return {favourited: !prevState.favourited}
		})
		console.log('active thumb favourited [could do some database stuff with this information]')
	}

	copyLinkHandler = () => {
		if (this.state.copied) return;

		const el = document.createElement('textarea');
		el.value = this.props.thumbData.original_url;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		this.setState({copied: true})
	}

	changeEmbedURL = e => {
		this.setState({embedURL: e.target.value})
	}

	closeModalHandler = e => {
		if (e.target.nodeName === 'SPAN' || !this.modalRef.current.contains(e.target)) {
			this.setState({embedded: false})
		}
	}

	render() {

		const facebookIcon = <div><FontAwesomeIcon icon={["fab", "facebook-f"]} /></div>
		const twitterIcon = <div><FontAwesomeIcon icon={["fab", "twitter"]} /></div>
		const pinterestIcon = <div><FontAwesomeIcon icon={["fab", "pinterest"]} /></div>

		const heartAnimation = ['animatedHeart']
		if (this.state.favourited) {
			heartAnimation.push('animate')
		} 

		return (
			<Fragment>
				<div className="activeWrap">
					<div className="activeThumbCard">
						<h1>{this.props.thumbData.title}</h1>
						<div className="thumbWrap">
							<Thumb url={this.props.thumbData.active_url} title={this.props.thumbData.title} />
							<div className="thumbInteract">
								<div className="controls">
									<Button 
							            disabled={this.props.firstGif ? true : false}
							            clicked={this.props.prev}><FontAwesomeIcon icon="chevron-left" /></Button>
							      	<Button 
							            disabled={this.props.lastGif ? true : false}
							            clicked={this.props.next}><FontAwesomeIcon icon="chevron-right" /></Button>
								</div>
								<div className="options">
									<ul>
										<li onClick={this.favouriteHandler}
											className={this.state.favourited ? 'favourited' : null}>
												<span className={heartAnimation.join(' ')}><FontAwesomeIcon icon="heart" /></span>Favourite</li>
										<li onClick={this.copyLinkHandler}>
											<FontAwesomeIcon icon="link" />Copy link</li>
										<li onClick={() => this.setState({embedded: true})}>
											<FontAwesomeIcon icon="code" />Embed</li>
										<li onClick={this.props.deleteThumb}>
											<FontAwesomeIcon icon="trash-alt" />Delete</li>
									</ul>
								</div>
								<div className="socialMediaWrap">
									<div className="wrap">
										<h4>share it!</h4>
										<div className="socialMediaIcons"> 
											<FacebookShareButton 
												children={facebookIcon} 
												url={this.props.thumbData.original_url} />
											<TwitterShareButton 
												children={twitterIcon} 
												url={this.props.thumbData.original_url} />
											<PinterestShareButton 
												children={pinterestIcon} 
												url={this.props.thumbData.original_url}
												media={this.props.thumbData.original_url}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{this.state.copied ? (
					<div className="copied" onClick={() => this.setState({copied: false})}><span>&times;</span>Copied!</div>
				) : null}

				{/*{this.state.embedded ? */}
					<Modal show={this.state.embedded} className="embedded" mRef={this.modalRef} closeModal={this.closeModalHandler}>
						<h3>Embed with Giphy</h3>	
						<p>Need to embed this GIF on your website or blog? Just drop in the iFrame embed code below and you're done! The GIPHY Embed Player autoplays on all browsers and devices.</p>
						<input type="text" onChange={this.changeEmbedURL} value={this.state.embedURL} />
					</Modal>
				{/*: null} */}

			</Fragment>
		)
	}

} 

export default Active;