import React, { Component, Fragment } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import Loader from '../../Components/UI/Loader/Loader';
import './Home.css';

class Home extends Component {
	state = {
		movieData: null,
		movieDataError: false,
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')
			.then(res => res.json())
			.then(movieData => {
				console.log('movie data', movieData);
				this.setState({movieData})
			})
			.catch(err => {
				console.log(err);
				this.setState({movieDataError: true})
			})
	}

	render() {

		if (!this.state.movieData) return (
			<Loader style = {{
				position: 'absolute',
			    top: '50%',
			    left: '50%',
			    transform: 'translate(-50%,-50%) scale(1.2)'
			}}/>
		)
		if (this.state.movieDataError) return <h1>Error, could not load movie data</h1>

		let movieCards = this.state.movieData
		.sort((a,b) => b.skygoTotalViews - a.skygoTotalViews)
		.map((movie,ind) => (
			<MovieCard 
				key={movie.name}
				name={movie.name}
				place={ind+1}
				description={movie.description}
				img={movie.assetImage}
				duration={movie.duration}
				skyGoViews={movie.skygoTotalViews} />
		));

		return (
			<Fragment>
				<h1>Top 10 Sky Movies</h1>
				<div className="movieCardsWrap">
					{movieCards}
				</div>
			</Fragment>
		) 
	}
}

export default Home