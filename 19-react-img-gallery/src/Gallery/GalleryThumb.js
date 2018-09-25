import React, { Component } from 'react';
import './GalleryThumb.css';

class GalleryThumb extends Component {
	state = {
		imgURL: null
	}

	componentDidMount() {
    	fetch(this.props.url)
    		.then(res => this.setState({imgURL: res.url}))
      		.catch(err => console.log(err))
 	}

	render() {
    	if (!this.state.imgURL) {
      		return <div><h3>Loading image....</h3></div>
    	}
    	return (
    		<div className="card">
    			<div className='close' onClick={this.props.remove}>&times;</div>
        	<img
        		className="card-img"
        		onClick={this.props.clicked} 
						src={this.props.url} 
						alt={this.props.title}
						// onError={function() {
						//	this.onError=null;
						//	this.src='https://worldbookofrecords.uk/assets/img/404.jpg';}
						//}
						/>
			</div>
    	)	
  	}
}

export default GalleryThumb;