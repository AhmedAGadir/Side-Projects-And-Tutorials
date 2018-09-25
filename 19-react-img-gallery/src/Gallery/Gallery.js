import React, { Component } from 'react';
import GalleryThumb from './GalleryThumb';
import Button from '../UI/Button/Button';
import './Gallery.css';

// GOAL: Create a React Gallery App with 1 large active image, and inactive thumb images below where you can change the active image
// INSTRUCTIONS:
// 0. Fork this repo to a new project
// 1. Make a call to the giphy API and pull in a list of random images (API url: https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt)
// 1.1 You can read up on the api over here https://developers.giphy.com/docs/
// 2. Set the active image in the state of the Gallery component
// 3. Create a list of inactive images using the GalleryThumb Component
// 4. Add an automatic timer that changes the active images after 3 seconds
// 5. On click of each GalleryThumb, update the active image
// 6. Add a remove button on the GalleryThumb that deletes images when clicked
// 7. Add a slick animation to transition between active images (that's more complex then just opacity)
// 8. Add any extra styling & behaviour to make it look polished


// to do:
// background image for body in css file


class Gallery extends Component {
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
            preview_url: d.images.downsized_medium.url,
            active_url: d.images.downsized_large.url
          }
        });

        this.setState({thumb_data});
        console.log('thumb_data is:', thumb_data)
      })
      .then(_ => {
        // this.timer = setInterval(() => this.changeThumb(), 3000);
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  changeThumb = () => {
    console.log(this.state.active_thumb_ind)
    this.setState(prevState => {
      if (prevState.active_thumb_ind === this.state.thumb_data.length - 1) {
        return {active_thumb_ind: 0}
      }
      else return {active_thumb_ind: prevState.active_thumb_ind + 1}
    })
  }

  resetTimer = () => {
    // clearInterval(this.timer);
    // this.timer = setInterval(() => this.changeThumb(), 3000);
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

  selectThumbnailHandler = ind => {
    this.resetTimer();
  	this.setState({active_thumb_ind: ind});
  }

  removeThumbHandler = ind => {
    let thumbArr = [...this.state.thumb_data];
    thumbArr.splice(ind, 1)
    this.setState({thumb_data: thumbArr});
  }

  render() {
  	if (!this.state.thumb_data) {
  		return <h1>Loading...</h1>
  	}

    const activeThumbData = this.state.thumb_data[this.state.active_thumb_ind];

    const thumbTitle = activeThumbData.title;
    const activeThumb = (
      <GalleryThumb 
        url={activeThumbData.active_url} 
        title={activeThumbData.title}
        // remove={() => this.removeThumbHandler(ind)}
        />
    );
  	const inactiveThumbs = this.state.thumb_data.map((data, ind) => (
  		<GalleryThumb 
  			key={data.id}
        title={activeThumb.title}
  			url={data.preview_url}
  			clicked={() => this.selectThumbnailHandler(ind)}
        remove={() => this.removeThumbHandler(ind)} />
    ));

 	return (
      <div className="gallery">
        
        <h1>{thumbTitle}</h1>
      	
        <div className="active">
      		{activeThumb}
      	</div>
      	
        <div className="button-wrap">
      		<Button 
            disabled={this.state.active_thumb_ind === 0 ? true : false}
            clicked={this.prevThumbHandler}>Prev</Button>
      		<Button 
            disabled={this.state.active_thumb_ind === this.state.thumb_data.length - 1 ? true : false}
            clicked={this.nextThumbHandler}>Next</Button>
      	</div>
      	
        <div className="card-columns">
      		{inactiveThumbs}
      	</div>

      </div>
    );
  }
}

export default Gallery;