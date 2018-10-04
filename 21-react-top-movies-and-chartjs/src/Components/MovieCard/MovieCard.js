import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {

	convertToHoursAndMins(secs) {
		let mins = secs/60;
		let hours = Math.floor(mins/60);
		let remainderMins = mins % 60;
		if (mins < 60) return `${mins}mins`;
		if (remainderMins === 0) return `${hours}h`
		else return `${hours}h ${remainderMins}mins` 
	}

	render() {
		return (
			<div className="movieCard">
				<div className="preview">
					<img src={this.props.img} alt={this.props.name} />
				</div>
				<div className="cardInfo">
					<h3>{this.props.place}) {this.props.name}</h3>
					<p>{this.props.description}</p>
					<div className="tags">
						<span className="views">{this.props.skyGoViews} views</span>
						<span className="duration">{this.convertToHoursAndMins(this.props.duration)}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default MovieCard