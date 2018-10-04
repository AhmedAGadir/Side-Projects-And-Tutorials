import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {


	render() {
		console.log(this.props)
		console.log(this.props.duration/60)
		return (
			<div className="movieCard">
				<div className="preview">
					<img src={this.props.img} alt={this.props.name} />
				</div>
				<div className="cardInfo">
					<h3>{this.props.name}</h3>
					<p>{this.props.description}</p>
					<div className="tags">
						<span className="views">{this.props.skyGoViews} views</span>
						<span className="duration">{Math.floor(this.props.duration/60)} mins</span>
					</div>
				</div>
			</div>
		)
	}
}

export default MovieCard