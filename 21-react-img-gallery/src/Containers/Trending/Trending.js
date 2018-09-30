import React, { Component } from 'react';
import Loader from '../../Components/UI/Loader/Loader';
import Active from '../Active/Active';
import MasonryGrid from '../Inactive/MasonryGrid/MasonryGrid';
// GOAL: Create a React Gallery App with 1 large active image, and inactive thumb images below where you can change the active image
// INSTRUCTIONS:
// 0. Fork this repo to a new project
// 1. Make a call to the giphy API and pull in a list of random images (API url: https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt)
// 1.1 You can read up on the api over here https://developers.giphy.com/docs/
// 2. Set the active image in the state of the Gallery component
// 3. **** Create a list of inactive images using the GalleryThumb Component
// 4. **** Add an automatic timer that changes the active images after 3 seconds
// 5. On click of each GalleryThumb, update the active image
// 6. **** Add a remove button on the GalleryThumb that deletes images when clicked
// 7. Add a slick animation to transition between active images (that's more complex then just opacity)
// 8. Add any extra styling & behaviour to make it look polished


// to do:
// background image for body in css file

class Trending extends Component {
	state = {
		thumb_data: null,
		active_thumb_ind: 0,
	}

	componentDidMount() {
	fetch("https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt")
	  .then(res => res.json())
	  .then(data => {
	    console.log('response data is:', data);
	    const thumb_data = data.data.map(d => {
	      return {
	      	title: d.title,
	        id: d.id,
	        original_url: d.images.original.url,
	        active_url: d.images.downsized_large.url,
	        preview_url: d.images.downsized_medium.url,
	        embed_url: d.embed_url,
	        still_url: d.images.original_still.url,
	        favourited: false,
	      }
	    });

	    this.setState({thumb_data});
	    console.log('thumb_data is:', thumb_data)
	  })
	  .then(_ => {
	    this.timer = setInterval(() => this.changeThumb(), 3000);
	  })
	  .catch(err => console.log(err));
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	changeThumb = () => {
	    // this.setState(prevState => {
	    // 	if (prevState.active_thumb_ind === this.state.thumb_data.length - 1) {
	    //     	return {active_thumb_ind: 0}
	    //   	}
	    //   	else return {active_thumb_ind: prevState.active_thumb_ind + 1}
	    // })
	}

	resetTimer = () => {
	  clearInterval(this.timer);
	  this.timer = setInterval(() => this.changeThumb(), 3000);
	}

	selectThumbHandler = ind => {
		this.resetTimer();
		this.setState({active_thumb_ind: ind});
	}

 	prevThumbHandler = () => {
    	this.resetTimer();
    	this.setState(prevState => {
      		return {active_thumb_ind: prevState.active_thumb_ind - 1};
    	})
  	}

  	nextThumbHandler = () => {
    	this.resetTimer();
    	this.setState(prevState => {
    	  	return {active_thumb_ind: prevState.active_thumb_ind + 1};
    	})
  	}

  	favouriteActiveThumbHandler = () => {
		let thumb_data = [...this.state.thumb_data];
		thumb_data[this.state.active_thumb_ind].favourited = true;
		this.setState({thumb_data})
	}

	deleteThumbHandler = ind => {
		if (window.confirm('Are you sure you want to delete this GIF?')) {
			let thumbArr = [...this.state.thumb_data];
	  		thumbArr.splice(ind, 1)
	  		this.setState({
	  			thumb_data: thumbArr,
	  			active_thumb_ind: ind === this.state.thumb_data.length - 1 ? 0 : ind, 
	  		});
		}
	}

	render() {
		if (!this.state.thumb_data) {
			return <Loader style={{
				position: 'absolute',
				top: '50%',
		   		left: '50%',
		   		transform: 'translate(-50%,-50%) scale(1.8)',
			}}/>
		}
		// if all data has been deleted
		if (this.state.thumb_data.length === 0) {
			return <h1>You've deleted every GIF :(</h1>
		}

		const activeThumbData = this.state.thumb_data[this.state.active_thumb_ind];

		return (
			<div>
				<Active 
					thumbData={activeThumbData}
					activeInd={this.state.active_thumb_ind}
					lastInd={ this.state.thumb_data.length - 1}
					prev={this.prevThumbHandler}
					next={this.nextThumbHandler}
					deleteThumb={this.deleteThumbHandler}
					favourite={this.favouriteActiveThumbHandler}/>
				<MasonryGrid 
					thumbData={this.state.thumb_data}
					selectThumb={this.selectThumbHandler}
					deleteThumb={this.deleteThumbHandler}/>
			</div>
		)
	}
}

export default Trending;
